import { prisma } from '@/lib/prisma'
import type {
  ConfiguracaoDisciplina,
  DistribuicaoSemanal,
  PlanejamentoComPlano,
} from '@/types/planejamento'

export interface CriarPlanejamentoData {
  planoId: string
  nome: string
  dataInicio: Date
  dataFim: Date
  horasPorDia: number
  tempoMinimo: number
  tempoMaximo: number
  diasDisponiveis: string[]
  horariosDisponiveis: Record<string, { inicio: string; fim: string }>
  configuracoes: ConfiguracaoDisciplina[]
  distribuicao: DistribuicaoSemanal
}

/**
 * Cria um novo planejamento semanal
 */
export async function criarPlanejamento(
  data: CriarPlanejamentoData,
  userId: string,
) {
  // Verificar se o plano pertence ao usuário
  const plano = await prisma.plano.findFirst({
    where: {
      id: data.planoId,
      userId,
    },
  })

  if (!plano) {
    throw new Error('Plano de estudos não encontrado')
  }

  // Criar planejamento
  const planejamento = await prisma.planejamentoSemanal.create({
    data: {
      planoId: data.planoId,
      nome: data.nome,
      dataInicio: data.dataInicio,
      dataFim: data.dataFim,
      horasPorDia: data.horasPorDia,
      tempoMinimo: data.tempoMinimo,
      tempoMaximo: data.tempoMaximo,
      diasDisponiveis: JSON.stringify(data.diasDisponiveis),
      horariosDisponiveis: JSON.stringify(data.horariosDisponiveis),
      configuracoes: JSON.stringify(data.configuracoes),
      distribuicao: JSON.stringify(data.distribuicao),
      ativo: true,
      userId,
    },
    include: {
      plano: {
        select: {
          id: true,
          nome: true,
          emblema: true,
        },
      },
    },
  })

  return planejamento
}

/**
 * Lista todos os planejamentos de um plano
 */
export async function listarPlanejamentos(planoId: string, userId: string) {
  // Verificar se o plano pertence ao usuário
  const plano = await prisma.plano.findFirst({
    where: {
      id: planoId,
      userId,
    },
  })

  if (!plano) {
    throw new Error('Plano de estudos não encontrado')
  }

  const planejamentos = await prisma.planejamentoSemanal.findMany({
    where: {
      planoId,
    },
    include: {
      plano: {
        select: {
          id: true,
          nome: true,
          emblema: true,
        },
      },
    },
    orderBy: {
      criadoEm: 'desc',
    },
  })

  return planejamentos
}

/**
 * Busca o planejamento ativo de um plano
 */
export async function buscarPlanejamentoAtivo(planoId: string, userId: string) {
  // Verificar se o plano pertence ao usuário
  const plano = await prisma.plano.findFirst({
    where: {
      id: planoId,
      userId,
    },
  })

  if (!plano) {
    throw new Error('Plano de estudos não encontrado')
  }

  const planejamento = await prisma.planejamentoSemanal.findFirst({
    where: {
      planoId,
      ativo: true,
    },
    include: {
      plano: {
        select: {
          id: true,
          nome: true,
          emblema: true,
        },
      },
    },
  })

  // Transformar para incluir titulo (compatibilidade com PlanoDeEstudos)
  if (planejamento) {
    return {
      ...planejamento,
      plano: {
        ...planejamento.plano,
        titulo: planejamento.plano.nome,
      },
    }
  }

  return null
}

/**
 * Busca um planejamento específico por ID
 */
export async function buscarPlanejamentoPorId(
  id: string,
  userId: string,
): Promise<PlanejamentoComPlano | null> {
  const planejamento = await prisma.planejamentoSemanal.findFirst({
    where: {
      id,
      plano: {
        userId,
      },
    },
    include: {
      plano: {
        select: {
          id: true,
          nome: true,
          emblema: true,
        },
      },
    },
  })

  if (!planejamento) {
    return null
  }

  // Parse dos campos JSON
  return {
    ...planejamento,
    configuracoesParsed: JSON.parse(
      planejamento.configuracoes,
    ) as ConfiguracaoDisciplina[],
    distribuicaoParsed: JSON.parse(
      planejamento.distribuicao,
    ) as DistribuicaoSemanal,
    diasDisponiveisParsed: JSON.parse(planejamento.diasDisponiveis) as string[],
    horariosDisponiveisParsed: JSON.parse(
      planejamento.horariosDisponiveis,
    ) as Record<string, { inicio: string; fim: string }>,
  }
}

/**
 * Atualiza um planejamento existente
 */
export async function atualizarPlanejamento(
  id: string,
  data: Partial<CriarPlanejamentoData>,
  userId: string,
) {
  // Verificar se o planejamento pertence ao usuário
  const planejamentoExistente = await prisma.planejamentoSemanal.findFirst({
    where: {
      id,
      plano: {
        userId,
      },
    },
  })

  if (!planejamentoExistente) {
    throw new Error('Planejamento não encontrado')
  }

  const planejamento = await prisma.planejamentoSemanal.update({
    where: { id },
    data: {
      ...(data.nome && { nome: data.nome }),
      ...(data.dataInicio && { dataInicio: data.dataInicio }),
      ...(data.dataFim && { dataFim: data.dataFim }),
      ...(data.horasPorDia && { horasPorDia: data.horasPorDia }),
      ...(data.tempoMinimo && { tempoMinimo: data.tempoMinimo }),
      ...(data.tempoMaximo && { tempoMaximo: data.tempoMaximo }),
      ...(data.diasDisponiveis && {
        diasDisponiveis: JSON.stringify(data.diasDisponiveis),
      }),
      ...(data.horariosDisponiveis && {
        horariosDisponiveis: JSON.stringify(data.horariosDisponiveis),
      }),
      ...(data.configuracoes && {
        configuracoes: JSON.stringify(data.configuracoes),
      }),
      ...(data.distribuicao && {
        distribuicao: JSON.stringify(data.distribuicao),
      }),
    },
    include: {
      plano: {
        select: {
          id: true,
          nome: true,
          emblema: true,
        },
      },
    },
  })

  return planejamento
}

/**
 * Ativa um planejamento e desativa todos os outros do mesmo plano
 */
export async function ativarPlanejamento(id: string, userId: string) {
  // Verificar se o planejamento pertence ao usuário
  const planejamento = await prisma.planejamentoSemanal.findFirst({
    where: {
      id,
      plano: {
        userId,
      },
    },
  })

  if (!planejamento) {
    throw new Error('Planejamento não encontrado')
  }

  // Desativar todos os planejamentos do plano
  await prisma.planejamentoSemanal.updateMany({
    where: {
      planoId: planejamento.planoId,
    },
    data: {
      ativo: false,
    },
  })

  // Ativar o planejamento específico
  const planejamentoAtualizado = await prisma.planejamentoSemanal.update({
    where: { id },
    data: {
      ativo: true,
    },
    include: {
      plano: {
        select: {
          id: true,
          nome: true,
          emblema: true,
        },
      },
    },
  })

  return planejamentoAtualizado
}

/**
 * Deleta um planejamento
 */
export async function deletarPlanejamento(id: string, userId: string) {
  // Verificar se o planejamento pertence ao usuário
  const planejamento = await prisma.planejamentoSemanal.findFirst({
    where: {
      id,
      plano: {
        userId,
      },
    },
  })

  if (!planejamento) {
    throw new Error('Planejamento não encontrado')
  }

  await prisma.planejamentoSemanal.delete({
    where: { id },
  })

  return { sucesso: true }
}

/**
 * Adiciona uma nova sessão de estudo a um dia específico
 */
export async function adicionarSessao(
  planejamentoId: string,
  diaSemana: string,
  sessao: {
    disciplinaId: string
    nome: string
    cor: string
    inicio: string
    fim: string
    duracao: number
    topico?: string
  },
  userId: string,
) {
  // Verificar se o planejamento pertence ao usuário
  const planejamento = await prisma.planejamentoSemanal.findFirst({
    where: {
      id: planejamentoId,
      plano: {
        userId,
      },
    },
  })

  if (!planejamento) {
    throw new Error('Planejamento não encontrado')
  }

  // Parse da distribuição atual
  const distribuicao = JSON.parse(
    planejamento.distribuicao,
  ) as DistribuicaoSemanal

  // Adicionar sessão ao dia
  if (!distribuicao[diaSemana]) {
    distribuicao[diaSemana] = {
      dia: diaSemana,
      sessoes: [],
      totalMinutos: 0,
    }
  }

  distribuicao[diaSemana].sessoes.push(sessao)

  // Atualizar totalMinutos
  distribuicao[diaSemana].totalMinutos = distribuicao[diaSemana].sessoes.reduce(
    (total, s) => total + s.duracao,
    0,
  )

  // Atualizar planejamento
  await prisma.planejamentoSemanal.update({
    where: { id: planejamentoId },
    data: {
      distribuicao: JSON.stringify(distribuicao),
    },
  })

  return { sucesso: true }
}

/**
 * Edita uma sessão existente
 */
export async function editarSessao(
  planejamentoId: string,
  diaSemana: string,
  sessaoIndex: number,
  updates: {
    disciplinaId?: string
    nome?: string
    cor?: string
    inicio?: string
    fim?: string
    duracao?: number
    topico?: string
  },
  userId: string,
) {
  // Verificar se o planejamento pertence ao usuário
  const planejamento = await prisma.planejamentoSemanal.findFirst({
    where: {
      id: planejamentoId,
      plano: {
        userId,
      },
    },
  })

  if (!planejamento) {
    throw new Error('Planejamento não encontrado')
  }

  // Parse da distribuição atual
  const distribuicao = JSON.parse(
    planejamento.distribuicao,
  ) as DistribuicaoSemanal

  if (
    !distribuicao[diaSemana] ||
    !distribuicao[diaSemana].sessoes[sessaoIndex]
  ) {
    throw new Error('Sessão não encontrada')
  }

  // Atualizar sessão
  distribuicao[diaSemana].sessoes[sessaoIndex] = {
    ...distribuicao[diaSemana].sessoes[sessaoIndex],
    ...updates,
  }

  // Atualizar planejamento
  await prisma.planejamentoSemanal.update({
    where: { id: planejamentoId },
    data: {
      distribuicao: JSON.stringify(distribuicao),
    },
  })

  return { sucesso: true }
}

/**
 * Deleta uma sessão de estudo
 */
export async function deletarSessao(
  planejamentoId: string,
  diaSemana: string,
  sessaoIndex: number,
  userId: string,
) {
  // Verificar se o planejamento pertence ao usuário
  const planejamento = await prisma.planejamentoSemanal.findFirst({
    where: {
      id: planejamentoId,
      plano: {
        userId,
      },
    },
  })

  if (!planejamento) {
    throw new Error('Planejamento não encontrado')
  }

  // Parse da distribuição atual
  const distribuicao = JSON.parse(
    planejamento.distribuicao,
  ) as DistribuicaoSemanal

  if (
    !distribuicao[diaSemana] ||
    !distribuicao[diaSemana].sessoes[sessaoIndex]
  ) {
    throw new Error('Sessão não encontrada')
  }

  // Remover sessão
  distribuicao[diaSemana].sessoes.splice(sessaoIndex, 1)

  // Recalcular totalMinutos
  distribuicao[diaSemana].totalMinutos = distribuicao[diaSemana].sessoes.reduce(
    (total, s) => total + s.duracao,
    0,
  )

  // Atualizar planejamento
  await prisma.planejamentoSemanal.update({
    where: { id: planejamentoId },
    data: {
      distribuicao: JSON.stringify(distribuicao),
    },
  })

  return { sucesso: true }
}

/**
 * Marca uma sessão como concluída vinculando-a ao EstudoRealizado
 */
export async function marcarSessaoConcluida(
  planejamentoId: string,
  diaSemana: string,
  sessaoIndex: number,
  estudoRealizadoId: string,
  userId: string,
) {
  // Verificar se o planejamento pertence ao usuário
  const planejamento = await prisma.planejamentoSemanal.findFirst({
    where: {
      id: planejamentoId,
      plano: {
        userId,
      },
    },
  })

  if (!planejamento) {
    throw new Error('Planejamento não encontrado')
  }

  // Parse da distribuição atual
  const distribuicao = JSON.parse(
    planejamento.distribuicao,
  ) as DistribuicaoSemanal

  if (
    !distribuicao[diaSemana] ||
    !distribuicao[diaSemana].sessoes[sessaoIndex]
  ) {
    throw new Error('Sessão não encontrada')
  }

  // Adicionar estudoRealizadoId à sessão
  distribuicao[diaSemana].sessoes[sessaoIndex].estudoRealizadoId =
    estudoRealizadoId

  // Atualizar planejamento
  await prisma.planejamentoSemanal.update({
    where: { id: planejamentoId },
    data: {
      distribuicao: JSON.stringify(distribuicao),
    },
  })

  return { sucesso: true }
}

// Exportar como objeto para importação consistente
export const planejamentoService = {
  criarPlanejamento,
  listarPlanejamentos,
  buscarPlanejamentoAtivo,
  buscarPlanejamentoPorId,
  atualizarPlanejamento,
  ativarPlanejamento,
  deletarPlanejamento,
  adicionarSessao,
  editarSessao,
  deletarSessao,
  marcarSessaoConcluida,
}
