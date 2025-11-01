'use server'

import { revalidatePath } from 'next/cache'
import { auth } from '@clerk/nextjs/server'
import { planosService } from '@/services/planos/planos.service'
import { disciplinasService } from '@/services/planos/disciplinas.service'
import { topicosService } from '@/services/planos/topicos.service'
import type {
  PlanoFormData,
  DisciplinaFormData,
  TopicoFormData,
} from '@/types/plano'
import type { StatusConteudo } from '@prisma/client'

// ========================================
// PLANOS
// ========================================

export async function listarPlanosAction() {
  const session = await auth()
  if (!session.userId) throw new Error('Unauthorized')

  return await planosService.listarPlanos(session.userId)
}

export async function obterPlanoPorIdAction(id: string) {
  const session = await auth()
  if (!session.userId) throw new Error('Unauthorized')

  return await planosService.obterPlanoPorId(id, session.userId)
}

export async function criarPlanoAction(data: PlanoFormData) {
  const session = await auth()
  if (!session.userId) throw new Error('Unauthorized')

  const plano = await planosService.criarPlano(data, session.userId)

  revalidatePath('/planos')
  return plano
}

export async function atualizarPlanoAction(
  id: string,
  data: Partial<PlanoFormData>,
) {
  const session = await auth()
  if (!session.userId) throw new Error('Unauthorized')

  const plano = await planosService.atualizarPlano(id, data, session.userId)

  revalidatePath('/planos')
  revalidatePath(`/planos/${id}`)
  return plano
}

export async function deletarPlanoAction(id: string) {
  const session = await auth()
  if (!session.userId) throw new Error('Unauthorized')

  await planosService.deletarPlano(id, session.userId)

  revalidatePath('/planos')
  revalidatePath('/')
}

export async function ativarPlanoAction(id: string) {
  const session = await auth()
  if (!session.userId) throw new Error('Unauthorized')

  await planosService.ativarPlano(id, session.userId)

  revalidatePath('/planos')
  revalidatePath('/planejamento')
}

export async function corrigirPlanosAtivosAction() {
  const session = await auth()
  if (!session.userId) throw new Error('Unauthorized')

  await planosService.corrigirPlanosAtivos(session.userId)

  revalidatePath('/planos')
  revalidatePath('/planejamento')
}

export async function obterEstatisticasPlanoAction(id: string) {
  const session = await auth()
  if (!session.userId) throw new Error('Unauthorized')

  return await planosService.obterEstatisticas(id, session.userId)
}

// ========================================
// DISCIPLINAS
// ========================================

export async function listarDisciplinasAction(planoId: string) {
  const session = await auth()
  if (!session.userId) throw new Error('Unauthorized')

  return await disciplinasService.listarDisciplinas(planoId, session.userId)
}

export async function obterDisciplinaPorIdAction(id: string) {
  const session = await auth()
  if (!session.userId) throw new Error('Unauthorized')

  return await disciplinasService.obterDisciplinaPorId(id, session.userId)
}

export async function criarDisciplinaAction(data: DisciplinaFormData) {
  const session = await auth()
  if (!session.userId) throw new Error('Unauthorized')

  const disciplina = await disciplinasService.criarDisciplina(
    data,
    session.userId,
  )

  revalidatePath('/planos')
  revalidatePath(`/planos/${data.planoId}`)
  return disciplina
}

export async function atualizarDisciplinaAction(
  id: string,
  data: Partial<DisciplinaFormData>,
) {
  const session = await auth()
  if (!session.userId) throw new Error('Unauthorized')

  const disciplina = await disciplinasService.atualizarDisciplina(
    id,
    data,
    session.userId,
  )

  revalidatePath('/planos')
  revalidatePath(`/planos/${disciplina.planoId}`)
  revalidatePath(`/planos/${disciplina.planoId}/disciplinas/${id}`)
  return disciplina
}

export async function deletarDisciplinaAction(id: string, planoId: string) {
  const session = await auth()
  if (!session.userId) throw new Error('Unauthorized')

  await disciplinasService.deletarDisciplina(id, session.userId)

  revalidatePath('/planos')
  revalidatePath(`/planos/${planoId}`)
}

export async function obterEstatisticasDisciplinaAction(id: string) {
  const session = await auth()
  if (!session.userId) throw new Error('Unauthorized')

  return await disciplinasService.obterEstatisticas(id, session.userId)
}

export async function reordenarDisciplinasAction(
  planoId: string,
  disciplinasOrdenadas: { id: string; ordem: number }[],
) {
  const session = await auth()
  if (!session.userId) throw new Error('Unauthorized')

  await disciplinasService.reordenarDisciplinas(
    planoId,
    disciplinasOrdenadas,
    session.userId,
  )

  revalidatePath(`/planos/${planoId}`)
}

// ========================================
// TÓPICOS
// ========================================

export async function listarTopicosAction(disciplinaId: string) {
  const session = await auth()
  if (!session.userId) throw new Error('Unauthorized')

  return await topicosService.listarTopicos(disciplinaId, session.userId)
}

export async function obterTopicoPorIdAction(id: string) {
  const session = await auth()
  if (!session.userId) throw new Error('Unauthorized')

  return await topicosService.obterTopicoPorId(id, session.userId)
}

export async function criarTopicoAction(data: TopicoFormData) {
  const session = await auth()
  if (!session.userId) throw new Error('Unauthorized')

  const topico = await topicosService.criarTopico(data, session.userId)

  const disciplina = await disciplinasService.obterDisciplinaPorId(
    data.disciplinaId,
    session.userId,
  )

  revalidatePath(`/planos/${disciplina.planoId}`)
  revalidatePath(
    `/planos/${disciplina.planoId}/disciplinas/${data.disciplinaId}`,
  )
  return topico
}

export async function criarTopicosEmLoteAction(
  disciplinaId: string,
  topicos: Array<{ titulo: string; conteudo?: string }>,
) {
  const session = await auth()
  if (!session.userId) throw new Error('Unauthorized')

  const result = await topicosService.criarTopicosEmLote(
    disciplinaId,
    topicos,
    session.userId,
  )

  const disciplina = await disciplinasService.obterDisciplinaPorId(
    disciplinaId,
    session.userId,
  )

  revalidatePath(`/planos/${disciplina.planoId}`)
  revalidatePath(`/planos/${disciplina.planoId}/disciplinas/${disciplinaId}`)
  return result
}

export async function atualizarTopicoAction(
  id: string,
  data: Partial<TopicoFormData>,
) {
  const session = await auth()
  if (!session.userId) throw new Error('Unauthorized')

  const topico = await topicosService.atualizarTopico(id, data, session.userId)
  const disciplina = await disciplinasService.obterDisciplinaPorId(
    topico.disciplinaId,
    session.userId,
  )

  revalidatePath(`/planos/${disciplina.planoId}`)
  revalidatePath(
    `/planos/${disciplina.planoId}/disciplinas/${topico.disciplinaId}`,
  )
  return topico
}

export async function deletarTopicoAction(id: string) {
  const session = await auth()
  if (!session.userId) throw new Error('Unauthorized')

  const topico = await topicosService.obterTopicoPorId(id, session.userId)
  const disciplina = await disciplinasService.obterDisciplinaPorId(
    topico.disciplinaId,
    session.userId,
  )

  await topicosService.deletarTopico(id, session.userId)

  revalidatePath(`/planos/${disciplina.planoId}`)
  revalidatePath(
    `/planos/${disciplina.planoId}/disciplinas/${topico.disciplinaId}`,
  )
}

export async function reordenarTopicosAction(
  disciplinaId: string,
  topicosOrdenados: { id: string; ordem: number }[],
) {
  const session = await auth()
  if (!session.userId) throw new Error('Unauthorized')

  await topicosService.reordenarTopicos(
    disciplinaId,
    topicosOrdenados,
    session.userId,
  )

  const disciplina = await disciplinasService.obterDisciplinaPorId(
    disciplinaId,
    session.userId,
  )

  revalidatePath(`/planos/${disciplina.planoId}`)
  revalidatePath(`/planos/${disciplina.planoId}/disciplinas/${disciplinaId}`)
}

export async function atualizarStatusTopicoAction(
  id: string,
  status: StatusConteudo,
) {
  const session = await auth()
  if (!session.userId) throw new Error('Unauthorized')

  const topico = await topicosService.atualizarStatus(
    id,
    status,
    session.userId,
  )
  const disciplina = await disciplinasService.obterDisciplinaPorId(
    topico.disciplinaId,
    session.userId,
  )

  revalidatePath(`/planos/${disciplina.planoId}`)
  revalidatePath(
    `/planos/${disciplina.planoId}/disciplinas/${topico.disciplinaId}`,
  )
  revalidatePath('/dashboard')
  revalidatePath('/historico')

  return topico
}

// ========================================
// PLANEJAMENTOS SEMANAIS
// ========================================

export async function criarPlanejamentoAction(data: {
  planoId: string
  nome: string
  dataInicio: Date
  dataFim: Date
  horasPorDia: number
  tempoMinimo: number
  tempoMaximo: number
  diasDisponiveis: string[]
  horariosDisponiveis: Record<string, { inicio: string; fim: string }>
  configuracoes: any[]
  distribuicao: any
}) {
  const session = await auth()
  if (!session.userId) throw new Error('Unauthorized')

  const { planejamentoService } = await import(
    '@/services/planejamento/planejamento.service'
  )

  const planejamento = await planejamentoService.criarPlanejamento(
    data,
    session.userId,
  )

  revalidatePath('/planejamento')
  revalidatePath('/dashboard')

  return planejamento
}

export async function listarPlanejamentosAction(planoId: string) {
  const session = await auth()
  if (!session.userId) throw new Error('Unauthorized')

  const { planejamentoService } = await import(
    '@/services/planejamento/planejamento.service'
  )

  return await planejamentoService.listarPlanejamentos(planoId, session.userId)
}

export async function buscarPlanejamentoAtivoAction(planoId: string) {
  const session = await auth()
  if (!session.userId) throw new Error('Unauthorized')

  const { planejamentoService } = await import(
    '@/services/planejamento/planejamento.service'
  )

  return await planejamentoService.buscarPlanejamentoAtivo(
    planoId,
    session.userId,
  )
}

export async function buscarPlanejamentoPorIdAction(id: string) {
  const session = await auth()
  if (!session.userId) throw new Error('Unauthorized')

  const { planejamentoService } = await import(
    '@/services/planejamento/planejamento.service'
  )

  return await planejamentoService.buscarPlanejamentoPorId(id, session.userId)
}

export async function ativarPlanejamentoAction(id: string) {
  const session = await auth()
  if (!session.userId) throw new Error('Unauthorized')

  const { planejamentoService } = await import(
    '@/services/planejamento/planejamento.service'
  )

  const planejamento = await planejamentoService.ativarPlanejamento(
    id,
    session.userId,
  )

  revalidatePath('/planejamento')
  revalidatePath('/dashboard')

  return planejamento
}

export async function deletarPlanejamentoAction(id: string) {
  const session = await auth()
  if (!session.userId) throw new Error('Unauthorized')

  const { planejamentoService } = await import(
    '@/services/planejamento/planejamento.service'
  )

  await planejamentoService.deletarPlanejamento(id, session.userId)

  revalidatePath('/planejamento')
  revalidatePath('/dashboard')

  return { sucesso: true }
}
