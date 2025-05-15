'use server'

import { revalidatePath } from 'next/cache'
import type { MateriaFormData, AgendamentoFormData } from '@/types/config'
import type {
  DisciplinaNome,
  DiaDaSemana,
  StatusConteudo,
} from '@/generated/prisma'
import { disciplinasService } from '@/services/config/disciplinas.service'
import { agendamentosService } from '@/services/config/agendamentos.service'

/**
 * Action para listar todas as disciplinas
 */
export async function getDisciplinas() {
  const materias = await disciplinasService.listarDisciplinas()
  return materias
}

/**
 * Action para criar uma nova matéria
 */
export async function createMateria(data: MateriaFormData) {
  const materia = await disciplinasService.criarMateria(data)
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
  const materia = await disciplinasService.atualizarMateria(id, data)
  revalidatePath('/config')
  return materia
}

/**
 * Action para deletar uma matéria
 */
export async function deleteMateria(id: string) {
  await disciplinasService.deletarMateria(id)
  revalidatePath('/config')
}

/**
 * Action para listar todos os agendamentos
 */
export async function getAgendamentos() {
  const agendamentos = await agendamentosService.listarAgendamentos()
  return agendamentos
}

/**
 * Action para criar um novo agendamento
 */
export async function createAgendamento(data: AgendamentoFormData) {
  const agendamento = await agendamentosService.criarAgendamento(data)
  revalidatePath('/config')
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
  const agendamento = await agendamentosService.atualizarAgendamento(id, data)
  revalidatePath('/config')
  return agendamento
}

/**
 * Action para deletar um agendamento
 */
export async function deleteAgendamento(id: string) {
  await agendamentosService.deletarAgendamento(id)
  revalidatePath('/config')
}
