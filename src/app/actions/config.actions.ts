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
    // Primeiro, deletar todos os agendamentos associados à matéria
    await db.diaDisciplinaMateria.deleteMany({
      where: { materiaId: id },
    })

    // Depois, deletar a matéria
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

async function criarRevisao(materiaId: string, diaOriginal: DiaDaSemana) {
  try {
    // Busca a matéria original
    const materiaOriginal = await db.materia.findUnique({
      where: { id: materiaId },
    })

    if (!materiaOriginal) return

    // Cria uma nova matéria de revisão
    const materiaRevisao = await db.materia.create({
      data: {
        titulo: `Revisar: ${materiaOriginal.titulo}`,
        disciplina: 'Revisoes',
        ordem: materiaOriginal.ordem,
        status: 'pendente',
      },
    })

    // Agenda para o dia seguinte
    const diaRevisao = getDiaSeguinte(diaOriginal)

    await db.diaDisciplinaMateria.create({
      data: {
        dia: diaRevisao,
        materiaId: materiaRevisao.id,
        status: 'pendente',
      },
    })
  } catch (error) {
    console.error('Erro ao criar revisão:', error)
    throw new Error('Não foi possível criar a revisão')
  }
}

export async function createAgendamento(data: AgendamentoFormData) {
  try {
    const agendamento = await db.diaDisciplinaMateria.create({
      data: {
        dia: data.dia,
        materiaId: data.materiaId,
        status: data.status ?? StatusConteudo.pendente,
        tempoEstudado: data.tempoEstudado,
        anotacoes: data.anotacoes,
      },
      include: {
        materia: true,
      },
    })

    // Se solicitado, criar revisão automaticamente
    if (data.criarRevisao) {
      await criarRevisao(data.materiaId, data.dia)
    }

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
    criarRevisao?: boolean
  },
) {
  try {
    // Buscar o agendamento atual para comparar mudanças
    const agendamentoAtual = await db.diaDisciplinaMateria.findUnique({
      where: { id },
      include: { materia: true },
    })

    if (!agendamentoAtual) {
      throw new Error('Agendamento não encontrado')
    }

    // Se a opção de criar revisão mudou para true, criar a revisão
    if (data.criarRevisao && data.materiaId && data.dia) {
      await criarRevisao(data.materiaId, data.dia)
    }

    // Atualizar o agendamento
    const agendamento = await db.diaDisciplinaMateria.update({
      where: { id },
      data: {
        materiaId: data.materiaId,
        dia: data.dia,
        status: data.status,
        tempoEstudado: data.tempoEstudado,
        anotacoes: data.anotacoes,
      },
      include: {
        materia: true,
      },
    })

    // Se solicitado criar revisão e houve mudança no dia ou na matéria
    if (data.criarRevisao && (data.dia || data.materiaId)) {
      await criarRevisao(
        data.materiaId || agendamentoAtual.materiaId,
        data.dia || agendamentoAtual.dia,
      )
    }
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
