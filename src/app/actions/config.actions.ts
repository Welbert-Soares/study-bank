'use server'

import { db } from '@/lib/db'
import { DisciplinaNome, DiaDaSemana, StatusConteudo } from '@/generated/prisma'
import { MateriaFormData, AgendamentoFormData } from '@/types/config'
import { revalidatePath } from 'next/cache'

export async function getDisciplinas() {
  try {
    const materias = await db.materia.findMany({
      orderBy: {
        ordem: 'asc',
      },
    })
    return materias
  } catch (error) {
    console.error('Erro ao buscar disciplinas:', error)
    throw new Error('Não foi possível carregar as disciplinas')
  }
}

export async function createMateria(data: MateriaFormData) {
  try {
    const materia = await db.materia.create({
      data: {
        ...data,
        status: StatusConteudo.pendente,
      },
    })
    revalidatePath('/config')
    return materia
  } catch (error) {
    console.error('Erro ao criar matéria:', error)
    throw new Error('Não foi possível criar a matéria')
  }
}

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
  try {
    const materia = await db.materia.update({
      where: { id },
      data,
    })
    revalidatePath('/config')
    return materia
  } catch (error) {
    console.error('Erro ao atualizar matéria:', error)
    throw new Error('Não foi possível atualizar a matéria')
  }
}

export async function deleteMateria(id: string) {
  try {
    await db.materia.delete({
      where: { id },
    })
    revalidatePath('/config')
  } catch (error) {
    console.error('Erro ao deletar matéria:', error)
    throw new Error('Não foi possível deletar a matéria')
  }
}

export async function getAgendamentos() {
  try {
    const agendamentos = await db.diaDisciplinaMateria.findMany({
      include: {
        materia: true,
      },
      orderBy: [
        {
          dia: 'asc',
        },
        {
          materia: {
            ordem: 'asc',
          },
        },
      ],
    })
    return agendamentos
  } catch (error) {
    console.error('Erro ao buscar agendamentos:', error)
    throw new Error('Não foi possível carregar os agendamentos')
  }
}

export async function createAgendamento(data: AgendamentoFormData) {
  try {
    const agendamento = await db.diaDisciplinaMateria.create({
      data: {
        ...data,
        status: data.status ?? StatusConteudo.pendente,
      },
      include: {
        materia: true,
      },
    })
    revalidatePath('/config')
    return agendamento
  } catch (error) {
    console.error('Erro ao criar agendamento:', error)
    throw new Error('Não foi possível criar o agendamento')
  }
}

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
  try {
    const agendamento = await db.diaDisciplinaMateria.update({
      where: { id },
      data,
      include: {
        materia: true,
      },
    })
    revalidatePath('/config')
    return agendamento
  } catch (error) {
    console.error('Erro ao atualizar agendamento:', error)
    throw new Error('Não foi possível atualizar o agendamento')
  }
}

export async function deleteAgendamento(id: string) {
  try {
    await db.diaDisciplinaMateria.delete({
      where: { id },
    })
    revalidatePath('/config')
  } catch (error) {
    console.error('Erro ao deletar agendamento:', error)
    throw new Error('Não foi possível deletar o agendamento')
  }
}
