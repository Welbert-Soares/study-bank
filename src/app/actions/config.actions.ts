'use server'

import { revalidatePath } from 'next/cache'
import type { MateriaFormData, AgendamentoFormData } from '@/types/config'
import type {
  DisciplinaNome,
  DiaDaSemana,
  StatusConteudo,
} from '@prisma/client'
import { auth } from '@clerk/nextjs/server'
import { disciplinasService } from '@/services/config/disciplinas.service'
import { agendamentosService } from '@/services/config/agendamentos.service'
import { materiaSchema, agendamentoSchema } from '@/lib/validations/schemas'

/**
 * Action para listar todas as disciplinas
 */
export async function getDisciplinas() {
  const { userId } = await auth()
  if (!userId) throw new Error('Unauthorized')

  const materias = await disciplinasService.listarDisciplinas(userId)
  return materias
}

/**
 * Action para criar uma nova matéria
 */
export async function createMateria(data: MateriaFormData) {
  const { userId } = await auth()
  if (!userId) throw new Error('Unauthorized')

  // Validar dados de entrada
  const validatedData = materiaSchema.parse(data)

  const materia = await disciplinasService.criarMateria(validatedData, userId)
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
  const { userId } = await auth()
  if (!userId) throw new Error('Unauthorized')

  try {
    // Validar dados de entrada
    const validatedData = materiaSchema.partial().parse(data)

    // Atualizar a matéria
    const materia = await disciplinasService.atualizarMateria(
      id,
      validatedData,
      userId,
    )

    // Revalidar os caminhos
    revalidatePath('/config')
    revalidatePath('/dashboard')
    revalidatePath('/historico')

    // Retornar a matéria atualizada
    return materia
  } catch (error) {
    console.error('Falha ao atualizar matéria:', error)
    throw error
  }
}

/**
 * Action para deletar uma matéria
 */
export async function deleteMateria(id: string) {
  const { userId } = await auth()
  if (!userId) throw new Error('Unauthorized')

  await disciplinasService.deletarMateria(id, userId)
  revalidatePath('/config')
}

/**
 * Action para listar todos os agendamentos
 */
export async function getAgendamentos() {
  const { userId } = await auth()
  if (!userId) throw new Error('Unauthorized')

  const agendamentos = await agendamentosService.listarAgendamentos(userId)
  return agendamentos
}

/**
 * Action para criar um novo agendamento
 */
export async function createAgendamento(data: AgendamentoFormData) {
  const { userId } = await auth()
  if (!userId) throw new Error('Unauthorized')

  // Validar dados de entrada
  const validatedData = agendamentoSchema.parse(data)

  const agendamento = await agendamentosService.criarAgendamento(
    validatedData,
    userId,
  )
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
  const { userId } = await auth()
  if (!userId) throw new Error('Unauthorized')

  // Validar dados de entrada
  const validatedData = agendamentoSchema.partial().parse(data)

  const agendamento = await agendamentosService.atualizarAgendamento(
    id,
    validatedData,
    userId,
  )
  revalidatePath('/config')
  revalidatePath('/') // Revalidate homepage
  return agendamento
}

/**
 * Action para deletar um agendamento
 */
export async function deleteAgendamento(id: string) {
  const { userId } = await auth()
  if (!userId) throw new Error('Unauthorized')

  await agendamentosService.deletarAgendamento(id, userId)
  revalidatePath('/config')
  revalidatePath('/') // Revalidate homepage
}
