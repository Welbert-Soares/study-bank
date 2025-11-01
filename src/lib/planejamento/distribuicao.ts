import type {
  DisciplinaRelevancia,
  HorarioDisponivel,
  DistribuicaoSemanal,
  DiaDistribuicao,
  SessaoEstudo,
} from '@/types/planejamento'

/**
 * Calcula quantos minutos totais estão disponíveis na semana
 */
function calcularMinutosTotaisDisponiveis(
  horarios: HorarioDisponivel[],
): number {
  return horarios.reduce((total, horario) => {
    if (!horario.ativo) return total

    const [horaInicio, minInicio] = horario.inicio.split(':').map(Number)
    const [horaFim, minFim] = horario.fim.split(':').map(Number)

    const minutosInicio = horaInicio * 60 + minInicio
    const minutosFim = horaFim * 60 + minFim

    return total + (minutosFim - minutosInicio)
  }, 0)
}

/**
 * Calcula quantos minutos cada disciplina deve ter na semana
 */
function calcularMinutosPorDisciplina(
  disciplinas: DisciplinaRelevancia[],
  minutosTotais: number,
): Map<string, number> {
  const minutosMap = new Map<string, number>()

  disciplinas.forEach((disciplina) => {
    const minutosDisciplina = Math.floor(
      (disciplina.percentual / 100) * minutosTotais,
    )
    minutosMap.set(disciplina.disciplinaId, minutosDisciplina)
  })

  return minutosMap
}

/**
 * Converte string de hora "HH:MM" para minutos desde 00:00
 */
function horaParaMinutos(hora: string): number {
  const [h, m] = hora.split(':').map(Number)
  return h * 60 + m
}

/**
 * Converte minutos desde 00:00 para string "HH:MM"
 */
function minutosParaHora(minutos: number): string {
  const h = Math.floor(minutos / 60)
  const m = minutos % 60
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`
}

/**
 * Distribui as disciplinas nos dias disponíveis
 */
export function distribuirDisciplinasSemanal(
  disciplinas: DisciplinaRelevancia[],
  horarios: HorarioDisponivel[],
  tempoMinimo: number,
  tempoMaximo: number,
): DistribuicaoSemanal {
  // Filtrar apenas dias ativos
  const horariosAtivos = horarios.filter((h) => h.ativo)

  if (horariosAtivos.length === 0) {
    throw new Error('Nenhum dia disponível para distribuição')
  }

  // Calcular minutos totais e por disciplina
  const minutosTotais = calcularMinutosTotaisDisponiveis(horariosAtivos)
  const minutosPorDisciplina = calcularMinutosPorDisciplina(
    disciplinas,
    minutosTotais,
  )

  // Criar estrutura de distribuição inicial
  const distribuicao: DistribuicaoSemanal = {}
  horariosAtivos.forEach((horario) => {
    distribuicao[horario.dia] = {
      dia: horario.dia,
      sessoes: [],
      totalMinutos: 0,
    }
  })

  // Criar lista de disciplinas com minutos restantes
  const disciplinasRestantes = disciplinas.map((d) => ({
    ...d,
    minutosRestantes: minutosPorDisciplina.get(d.disciplinaId) || 0,
  }))

  // Ordenar por percentual (maior primeiro) para garantir prioridade
  disciplinasRestantes.sort((a, b) => b.percentual - a.percentual)

  // Distribuir sessões nos dias
  let diaIndex = 0
  const diasDisponiveis = Object.keys(distribuicao)
  let tentativasSemProgresso = 0
  const maxTentativas = diasDisponiveis.length * disciplinasRestantes.length

  while (disciplinasRestantes.some((d) => d.minutosRestantes > 0)) {
    // Proteção contra loop infinito
    if (tentativasSemProgresso > maxTentativas) {
      console.warn(
        'Distribuição interrompida: não foi possível alocar todas as disciplinas',
      )
      break
    }

    const dia = diasDisponiveis[diaIndex % diasDisponiveis.length]
    const horarioDia = horariosAtivos.find((h) => h.dia === dia)!
    const diaDistribuicao = distribuicao[dia]

    // Calcular minutos disponíveis no dia
    const minutosDisponiveisDia =
      horaParaMinutos(horarioDia.fim) - horaParaMinutos(horarioDia.inicio)
    const minutosUsadosDia = diaDistribuicao.totalMinutos

    if (minutosUsadosDia >= minutosDisponiveisDia) {
      // Dia cheio, próximo dia
      diaIndex++
      tentativasSemProgresso++
      continue
    }

    // Encontrar disciplina com mais minutos restantes
    // Preferir disciplinas que ainda não estudaram hoje, mas permitir repetição se necessário
    const disciplinasNodia = diaDistribuicao.sessoes.map((s) => s.disciplinaId)

    // Primeiro: tentar disciplina que NÃO estudou hoje
    let disciplina = disciplinasRestantes.find(
      (d) =>
        d.minutosRestantes > 0 && !disciplinasNodia.includes(d.disciplinaId),
    )

    // Se não houver, permitir disciplina que já estudou hoje
    if (!disciplina) {
      disciplina = disciplinasRestantes.find((d) => d.minutosRestantes > 0)
    }

    if (!disciplina) {
      // Nenhuma disciplina disponível, próximo dia
      diaIndex++
      tentativasSemProgresso++
      continue
    }

    // Calcular duração da sessão
    const minutosRestantesDia = minutosDisponiveisDia - minutosUsadosDia
    const duracaoSessao = Math.min(
      disciplina.minutosRestantes,
      tempoMaximo,
      minutosRestantesDia,
    )

    // Verificar se atende o mínimo
    if (duracaoSessao < tempoMinimo) {
      // Não dá para criar sessão neste dia
      diaIndex++
      tentativasSemProgresso++
      continue
    }

    // Calcular horário de início e fim da sessão
    const inicioSessao = horaParaMinutos(horarioDia.inicio) + minutosUsadosDia
    const fimSessao = inicioSessao + duracaoSessao

    // Criar sessão
    const sessao: SessaoEstudo = {
      disciplinaId: disciplina.disciplinaId,
      nome: disciplina.nome,
      cor: disciplina.cor,
      inicio: minutosParaHora(inicioSessao),
      fim: minutosParaHora(fimSessao),
      duracao: duracaoSessao,
    }

    // Adicionar sessão ao dia
    diaDistribuicao.sessoes.push(sessao)
    diaDistribuicao.totalMinutos += duracaoSessao

    // Atualizar minutos restantes da disciplina
    disciplina.minutosRestantes -= duracaoSessao

    // Se a disciplina foi completada, tentar próxima
    if (disciplina.minutosRestantes <= 0) {
      disciplina.minutosRestantes = 0
    }

    // Progresso feito, resetar contador
    tentativasSemProgresso = 0

    // Próximo dia para distribuir melhor
    diaIndex++
  }

  return distribuicao
}

/**
 * Valida se a distribuição está correta
 */
export function validarDistribuicao(
  distribuicao: DistribuicaoSemanal,
  disciplinas: DisciplinaRelevancia[],
  horarios: HorarioDisponivel[],
): { valido: boolean; erros: string[] } {
  const erros: string[] = []

  // Verificar se todos os dias ativos estão presentes
  const diasAtivos = horarios.filter((h) => h.ativo).map((h) => h.dia)
  const diasDistribuidos = Object.keys(distribuicao)

  diasAtivos.forEach((dia) => {
    if (!diasDistribuidos.includes(dia)) {
      erros.push(`Dia ${dia} não foi distribuído`)
    }
  })

  // Verificar se as sessões estão dentro dos horários
  Object.entries(distribuicao).forEach(([dia, diaData]) => {
    const horarioDia = horarios.find((h) => h.dia === dia)
    if (!horarioDia) return

    const inicioPermitido = horaParaMinutos(horarioDia.inicio)
    const fimPermitido = horaParaMinutos(horarioDia.fim)

    diaData.sessoes.forEach((sessao) => {
      const inicioSessao = horaParaMinutos(sessao.inicio)
      const fimSessao = horaParaMinutos(sessao.fim)

      if (inicioSessao < inicioPermitido || fimSessao > fimPermitido) {
        erros.push(
          `Sessão de ${sessao.nome} em ${dia} está fora do horário permitido`,
        )
      }
    })
  })

  return {
    valido: erros.length === 0,
    erros,
  }
}

/**
 * Calcula estatísticas da distribuição
 */
export function calcularEstatisticasDistribuicao(
  distribuicao: DistribuicaoSemanal,
): {
  totalHoras: number
  sessoesTotal: number
  mediaHorasPorDia: number
  disciplinas: Map<string, { nome: string; horas: number; sessoes: number }>
} {
  let totalMinutos = 0
  let sessoesTotal = 0
  const disciplinasMap = new Map<
    string,
    { nome: string; horas: number; sessoes: number }
  >()

  Object.values(distribuicao).forEach((dia) => {
    totalMinutos += dia.totalMinutos
    sessoesTotal += dia.sessoes.length

    dia.sessoes.forEach((sessao) => {
      const disciplina = disciplinasMap.get(sessao.disciplinaId) || {
        nome: sessao.nome,
        horas: 0,
        sessoes: 0,
      }

      disciplina.horas += sessao.duracao / 60
      disciplina.sessoes += 1

      disciplinasMap.set(sessao.disciplinaId, disciplina)
    })
  })

  const diasComSessoes = Object.values(distribuicao).filter(
    (d) => d.sessoes.length > 0,
  ).length

  return {
    totalHoras: totalMinutos / 60,
    sessoesTotal,
    mediaHorasPorDia: totalMinutos / 60 / (diasComSessoes || 1),
    disciplinas: disciplinasMap,
  }
}
