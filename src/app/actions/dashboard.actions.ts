'use server'

import { db } from '@/lib/db'
import {
  DiaDaSemana,
  DisciplinaNome,
  StatusConteudo,
  Materia,
} from '@/generated/prisma'
import { getCorDisciplina } from '@/lib/cores'
import { getBrazilianDate, getStartOfDay, getEndOfDay } from '@/lib/date'
import { revalidatePath } from 'next/cache'

export interface DashboardCronograma {
  id: string
  titulo: string
  disciplina: DisciplinaNome
  status: StatusConteudo
}

export interface DashboardMetrica {
  id: string
  disciplina: DisciplinaNome
  progresso: number
  cor: string
}

export interface DashboardObjetivo {
  id: string
  descricao: string
  completo: boolean
  prioridade: number
}

interface DashboardRevisao {
  id: string
  titulo: string
  disciplina: DisciplinaNome
  status: StatusConteudo
}

export interface DashboardData {
  cronograma: DashboardCronograma[]
  metricas: DashboardMetrica[]
  objetivos: DashboardObjetivo[]
  proximosConteudos: string[]
  revisoes: DashboardRevisao[]
}

function getDiaSemana(date: Date): DiaDaSemana {
  const dias: DiaDaSemana[] = [
    'Domingo',
    'Segunda',
    'Terca',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sabado',
  ]
  return dias[date.getDay()]
}

// Função auxiliar para obter o dia seguinte
function getDiaSeguinte(dia: DiaDaSemana): DiaDaSemana {
  const dias: DiaDaSemana[] = [
    'Domingo',
    'Segunda',
    'Terca',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sabado',
  ]
  const index = dias.indexOf(dia)
  const proximoIndex = (index + 1) % 7
  return dias[proximoIndex]
}

function getProximosDias(
  atual: DiaDaSemana,
  quantidade: number,
): DiaDaSemana[] {
  const dias = [
    'Domingo',
    'Segunda',
    'Terca',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sabado',
  ]
  const indexAtual = dias.indexOf(atual)
  const proximos: DiaDaSemana[] = []

  for (let i = 1; i <= quantidade; i++) {
    const index = (indexAtual + i) % 7
    proximos.push(dias[index] as DiaDaSemana)
  }

  return proximos
}

// Moved to src/lib/cores.ts

// Função para criar matéria de revisão
async function criarMateriaRevisao(materiaOriginal: Materia): Promise<Materia> {
  return await db.materia.create({
    data: {
      titulo: `Revisão: ${materiaOriginal.titulo}`,
      disciplina: 'Revisoes',
      ordem: materiaOriginal.ordem,
      status: 'pendente',
    },
  })
}

// Função para agendar revisão
async function agendarRevisao(
  materiaOriginal: Materia,
  diaOriginal: DiaDaSemana,
) {
  // Cria uma matéria específica para revisão
  const materiaRevisao = await criarMateriaRevisao(materiaOriginal)

  // Agenda para o dia seguinte
  const diaRevisao = getDiaSeguinte(diaOriginal)

  await db.diaDisciplinaMateria.create({
    data: {
      dia: diaRevisao,
      materiaId: materiaRevisao.id,
      status: 'pendente',
    },
  })
}

async function buscarMateriasRevisao(date: Date): Promise<DashboardRevisao[]> {
  const diaAtual = getDiaSemana(date)

  const materiasRevisao = await db.diaDisciplinaMateria.findMany({
    where: {
      dia: diaAtual,
      materia: {
        disciplina: 'Revisoes',
      },
    },
    include: {
      materia: true,
    },
    orderBy: {
      materia: {
        ordem: 'asc',
      },
    },
  })

  return materiasRevisao.map((item) => ({
    id: item.id,
    titulo: item.materia.titulo,
    disciplina: item.materia.disciplina,
    status: item.status,
  }))
}

export async function getDashboardData(date: Date): Promise<DashboardData> {
  const diaSemana = getDiaSemana(date)

  // Buscar todas as atividades do dia, incluindo revisões
  const materiasHoje = await db.diaDisciplinaMateria.findMany({
    where: {
      dia: diaSemana,
    },
    include: {
      materia: true,
    },
    orderBy: {
      materia: {
        ordem: 'asc',
      },
    },
  })

  // Separar matérias regulares e revisões
  const materiasRegulares = materiasHoje.filter(
    (item) => item.materia.disciplina !== 'Revisoes',
  )

  // Buscar revisões usando a função especializada
  const revisoes = await buscarMateriasRevisao(date)

  // Montar cronograma apenas com matérias regulares
  const cronograma: DashboardCronograma[] = materiasRegulares.map((item) => ({
    id: item.id,
    titulo: item.materia.titulo,
    disciplina: item.materia.disciplina,
    status: item.status,
  }))

  // Calcular métricas incluindo todas as atividades
  const metricas = await calcularMetricasDoDia(materiasHoje)

  // Montar objetivos
  const objetivos: DashboardObjetivo[] = materiasHoje.map((item) => ({
    id: item.id,
    descricao:
      item.materia.disciplina === 'Revisoes'
        ? `Revisar: ${item.materia.titulo.replace('Revisão: ', '')}`
        : `Estudar ${item.materia.titulo}`,
    completo: item.status === 'concluido',
    prioridade: item.materia.ordem,
  }))

  // Buscar próximos conteúdos
  const proximosConteudos = await buscarProximosConteudos(diaSemana)

  return {
    cronograma,
    metricas,
    objetivos,
    proximosConteudos,
    revisoes,
  }
}

// Função movida para metricas/actions.ts

type MateriaComAgendamento = {
  materia: { disciplina: DisciplinaNome; titulo: string }
  status: StatusConteudo
}

async function calcularMetricasDoDia(
  materiasHoje: MateriaComAgendamento[],
): Promise<DashboardMetrica[]> {
  const disciplinasMap = new Map<DisciplinaNome, MateriaComAgendamento[]>()

  // Agrupar matérias por disciplina, mapeando revisões para suas disciplinas originais
  for (const item of materiasHoje) {
    let disciplina = item.materia.disciplina

    // Se for uma revisão, extrair a disciplina original do título
    if (disciplina === 'Revisoes') {
      const tituloOriginal = item.materia.titulo.replace('Revisão: ', '')
      // Encontrar a matéria regular correspondente para pegar a disciplina correta
      const materiaOriginal = materiasHoje.find(
        (m) =>
          m.materia.disciplina !== 'Revisoes' &&
          tituloOriginal.includes(m.materia.titulo),
      )
      if (materiaOriginal) {
        disciplina = materiaOriginal.materia.disciplina
      }
    }

    if (!disciplinasMap.has(disciplina)) {
      disciplinasMap.set(disciplina, [])
    }
    disciplinasMap.get(disciplina)!.push(item)
  }

  const metricas: DashboardMetrica[] = []

  // Calcular progresso para cada disciplina
  for (const [disciplina, materias] of disciplinasMap.entries()) {
    const total = materias.length
    const concluidos = materias.filter(
      (item) => item.status === 'concluido',
    ).length
    const emProgresso = materias.filter(
      (item) => item.status === 'em_progresso',
    ).length

    // Calcular progresso considerando itens em progresso como 50% concluídos
    const progresso =
      total > 0
        ? Math.round(((concluidos + emProgresso * 0.5) / total) * 100)
        : 0

    metricas.push({
      id: String(disciplina),
      disciplina,
      progresso,
      cor: getCorDisciplina(disciplina),
    })
  }

  return metricas
}

async function buscarProximosConteudos(
  diaSemana: DiaDaSemana,
): Promise<string[]> {
  const proximosDias = getProximosDias(diaSemana, 3)

  const materias = await db.diaDisciplinaMateria.findMany({
    where: {
      dia: {
        in: proximosDias,
      },
      status: 'pendente',
      materia: {
        disciplina: {
          not: 'Revisoes', // Não incluir revisões nos próximos conteúdos
        },
      },
    },
    include: {
      materia: true,
    },
    take: 5,
  })

  return materias.map((m) => `${m.materia.titulo} (${m.dia})`)
}

export async function agendarMateria(
  materiaId: string,
  dia: DiaDaSemana,
  criarRevisao: boolean = false,
): Promise<void> {
  // Agenda a matéria original
  await db.diaDisciplinaMateria.create({
    data: {
      dia,
      materiaId,
      status: 'pendente',
    },
  })

  // Se solicitado, cria e agenda a revisão
  if (criarRevisao) {
    const materiaOriginal = await db.materia.findUnique({
      where: { id: materiaId },
    })

    if (materiaOriginal) {
      await agendarRevisao(materiaOriginal, dia)
    }
  }
}

export async function atualizarStatusAtividade(
  id: string,
  status: StatusConteudo,
) {
  try {
    // Buscar o registro para ter acesso aos dados da matéria
    const registro = await db.diaDisciplinaMateria.findUnique({
      where: { id },
      include: { materia: true },
    })

    if (!registro) {
      throw new Error('Registro não encontrado')
    }

    // Atualizar o status primeiro
    await db.diaDisciplinaMateria.update({
      where: { id },
      data: { status },
    })

    const hoje = new Date()
    hoje.setHours(0, 0, 0, 0)
    const amanha = new Date(hoje)
    amanha.setDate(amanha.getDate() + 1)

    // Se marcando como concluído
    if (status === 'concluido') {
      console.log('Criando histórico para:', registro.materia.titulo)
      
      // Criar entrada no histórico
      await db.historicoEstudo.create({
        data: {
          tituloDaMateria: registro.materia.titulo,
          disciplina: registro.materia.disciplina,
          dataEstudo: new Date(),
          tempoEstudado: registro.tempoEstudado ?? 0,
          anotacoes: registro.anotacoes,
          progresso: registro.progresso,
          planoId: registro.planoId,
        },
      })
    } 
    // Se desmarcando de concluído
    else if (registro.status === 'concluido') {
      console.log('Removendo histórico para:', registro.materia.titulo)
      
      // Remover do histórico
      await db.historicoEstudo.deleteMany({
        where: {
          tituloDaMateria: registro.materia.titulo,
          disciplina: registro.materia.disciplina,
          dataEstudo: {
            gte: hoje,
            lt: amanha
          }
        }
      })
    }

    // Forçar revalidação das páginas
    revalidatePath('/dashboard')
    revalidatePath('/historico')

    return registro

  } catch (error) {
    console.error('Erro ao atualizar status da atividade:', error)
    throw new Error('Falha ao atualizar status: ' + (error as Error).message)
  }
}

export async function atualizarStatusObjetivo(id: string, completo: boolean) {
  try {
    // Buscar o registro para ter acesso aos dados da matéria
    const registro = await db.diaDisciplinaMateria.findUnique({
      where: { id },
      include: { materia: true },
    })

    if (!registro) {
      throw new Error('Registro não encontrado')
    }

    // Atualizar o status
    await db.diaDisciplinaMateria.update({
      where: { id },
      data: { status: completo ? 'concluido' : 'pendente' },
    })

    const hoje = new Date()
    hoje.setHours(0, 0, 0, 0)
    const amanha = new Date(hoje)
    amanha.setDate(amanha.getDate() + 1)

    // Se está marcando como completo
    if (completo) {
      console.log('Criando histórico para objetivo:', registro.materia.titulo)
      
      // Criar entrada no histórico
      await db.historicoEstudo.create({
        data: {
          tituloDaMateria: registro.materia.titulo,
          disciplina: registro.materia.disciplina,
          dataEstudo: new Date(),
          tempoEstudado: registro.tempoEstudado ?? 0,
          anotacoes: registro.anotacoes,
          progresso: registro.progresso,
          planoId: registro.planoId,
        },
      })
    } 
    // Se está desmarcando como completo
    else {
      console.log('Removendo histórico para objetivo:', registro.materia.titulo)
      
      // Remover do histórico
      await db.historicoEstudo.deleteMany({
        where: {
          tituloDaMateria: registro.materia.titulo,
          disciplina: registro.materia.disciplina,
          dataEstudo: {
            gte: hoje,
            lt: amanha
          }
        }
      })
    }

    // Forçar revalidação das páginas
    revalidatePath('/dashboard')
    revalidatePath('/historico')

  } catch (error) {
    console.error('Erro ao atualizar status do objetivo:', error)
    throw new Error('Falha ao atualizar objetivo: ' + (error as Error).message)
  }
}

export async function atualizarProgressoDisciplina(
  disciplina: DisciplinaNome,
  progresso: number,
) {
  try {
    const materias = await db.materia.findMany({
      where: { disciplina },
      include: { agendamentos: true },
    })

    // Atualiza o status das matérias baseado no progresso geral
    for (const materia of materias) {
      const novoStatus: StatusConteudo =
        progresso >= 100
          ? 'concluido'
          : progresso > 0
          ? 'em_progresso'
          : 'pendente'

      // Buscar o último agendamento para verificar o status atual
      const ultimoAgendamento = await db.diaDisciplinaMateria.findFirst({
        where: { materiaId: materia.id },
        orderBy: { atualizadoEm: 'desc' },
      })

      // Atualizar todos os agendamentos desta matéria
      await db.diaDisciplinaMateria.updateMany({
        where: { materiaId: materia.id },
        data: { status: novoStatus },
      })

      if (!ultimoAgendamento) continue

      // Se a matéria foi concluída (progresso = 100%), salvar no histórico
      if (novoStatus === 'concluido' && ultimoAgendamento.status !== 'concluido') {
        try {
          const dataBrasil = getBrazilianDate()
          await db.historicoEstudo.create({
            data: {
              tituloDaMateria: materia.titulo,
              disciplina: materia.disciplina,
              dataEstudo: dataBrasil,
              tempoEstudado: ultimoAgendamento.tempoEstudado ?? 0,
              anotacoes: ultimoAgendamento.anotacoes,
              progresso: ultimoAgendamento.progresso,
              planoId: ultimoAgendamento.planoId,
            }
          })
        } catch (historyError) {
          console.error('Erro ao salvar no histórico:', historyError)
        }
      }
      // Se a matéria estava concluída e agora não está mais, remover do histórico
      else if (novoStatus !== 'concluido' && ultimoAgendamento.status === 'concluido') {
        try {
          const dataBrasil = getBrazilianDate()
          const dataInicio = getStartOfDay(dataBrasil)
          const dataFim = getEndOfDay(dataBrasil)

          await db.historicoEstudo.deleteMany({
            where: {
              tituloDaMateria: materia.titulo,
              disciplina: materia.disciplina,
              dataEstudo: {
                gte: dataInicio,
                lte: dataFim
              }
            }
          })
        } catch (historyError) {
          console.error('Erro ao remover do histórico:', historyError)
        }
      }
    }

    revalidatePath('/dashboard')
    revalidatePath('/historico')
  } catch (error) {
    console.error('Erro ao atualizar progresso da disciplina:', error)
    throw error
  }
}

export async function atualizarStatusRevisao(
  id: string,
  status: StatusConteudo,
): Promise<void> {
  await db.diaDisciplinaMateria.update({
    where: { id },
    data: { status },
  })
}
