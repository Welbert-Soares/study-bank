'use server'

import { revalidatePath } from 'next/cache'
import type { MateriaFormData, AgendamentoFormData } from '@/types/config'
import type {
  DisciplinaNome,
  DiaDaSemana,
  StatusConteudo,
} from '@prisma/client'
import { disciplinasService } from '@/services/config/disciplinas.service'
import { agendamentosService } from '@/services/config/agendamentos.service'
import { getOrCreateUser } from '@/lib/user'

/**
 * Action para listar todas as disciplinas
 */
export async function getDisciplinas() {
  const user = await getOrCreateUser()
  const materias = await disciplinasService.listarDisciplinas(user.id)
  return materias
}

/**
 * Action para criar uma nova matéria
 */
export async function createMateria(data: MateriaFormData) {
  const user = await getOrCreateUser()
  const materia = await disciplinasService.criarMateria(data, user.id)
  revalidatePath('/config')
  return materia
}

/**
 * Action para atualizar uma matéria existente
 */
export async function updateMateria(
  id: string,
  data: {
    titulo?: string
    descricao?: string
    status?: StatusConteudo
    ordem?: number
    disciplina?: DisciplinaNome
  },
) {
  const user = await getOrCreateUser()
  const materia = await disciplinasService.atualizarMateria(id, data, user.id)
  revalidatePath('/config')
  return materia
}

/**
 * Action para deletar uma matéria
 */
export async function deleteMateria(id: string) {
  const user = await getOrCreateUser()
  await disciplinasService.deletarMateria(id, user.id)
  revalidatePath('/config')
}

/**
 * Action para listar todos os agendamentos
 */
export async function getAgendamentos() {
  const user = await getOrCreateUser()
  const agendamentos = await agendamentosService.listarAgendamentos(user.id)
  return agendamentos
}

/**
 * Action para criar um novo agendamento
 */
export async function createAgendamento(data: AgendamentoFormData) {
  const user = await getOrCreateUser()
  const agendamento = await agendamentosService.criarAgendamento(data, user.id)
  revalidatePath('/config')
  revalidatePath('/') // Revalidate homepage
  return agendamento
}

/**
 * Action para atualizar um agendamento existente
 */
export async function updateAgendamento(
  id: string,
  data: {
    materiaId?: string
    dia?: DiaDaSemana
    status?: StatusConteudo
    tempoEstudado?: number
    anotacoes?: string
  },
) {
  const user = await getOrCreateUser()
  const agendamento = await agendamentosService.atualizarAgendamento(
    id,
    data,
    user.id,
  )
  revalidatePath('/config')
  revalidatePath('/') // Revalidate homepage
  return agendamento
}

/**
 * Action para deletar um agendamento
 */
export async function deleteAgendamento(id: string) {
  const user = await getOrCreateUser()
  await agendamentosService.deletarAgendamento(id, user.id)
  revalidatePath('/config')
  revalidatePath('/') // Revalidate homepage
}
