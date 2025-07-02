import { db } from '@/lib/db'
import { DiaDaSemana, Materia } from '@prisma/client'
import { getDiaSeguinte, getDiaDaSemana } from './utils'
import type { DashboardRevisao } from './types'

export async function createRevisionItem(
  originalMateria: Materia,
  userId: string,
): Promise<Materia> {
  try {
    const titulo = `Revisar: ${originalMateria.titulo}`

    // Check if revision already exists
    const existingRevision = await db.materia.findFirst({
      where: {
        titulo: titulo,
        userId: userId,
        disciplina: 'Revisoes',
      },
    })

    if (existingRevision) {
      return existingRevision
    }

    // Create new revision
    return await db.materia.create({
      data: {
        userId: userId,
        titulo: titulo,
        descricao: originalMateria.descricao,
        ordem: originalMateria.ordem,
        disciplina: 'Revisoes',
      },
    })
  } catch (error) {
    console.error('Error creating revision item:', error)
    throw new Error('Failed to create revision item')
  }
}

export async function scheduleRevision(
  originalMateria: Materia,
  originalDay: DiaDaSemana,
  userId: string,
) {
  try {
    // Only create revision if original material exists and belongs to user
    const validMaterial = await db.materia.findFirst({
      where: {
        id: originalMateria.id,
        userId: userId,
      },
    })

    if (!validMaterial) {
      throw new Error('Original material not found or unauthorized')
    }

    const revisionItem = await createRevisionItem(validMaterial, userId)
    const revisionDay = getDiaSeguinte(originalDay)

    // Create revision schedule
    await db.diaDisciplinaMateria.create({
      data: {
        userId: userId,
        dia: revisionDay,
        materiaId: revisionItem.id,
        status: 'pendente',
      },
    })
  } catch (error) {
    console.error('Error scheduling revision:', error)
    throw new Error('Failed to schedule revision')
  }
}

export async function getRevisions(
  date: Date,
  userId: string,
): Promise<DashboardRevisao[]> {
  try {
    const currentDay = getDiaDaSemana(date)

    const revisions = await db.diaDisciplinaMateria.findMany({
      where: {
        dia: currentDay,
        userId: userId,
        materia: {
          disciplina: 'Revisoes',
          userId: userId, // Additional security check on nested relationship
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

    return revisions.map((item) => ({
      id: item.id,
      titulo: item.materia.titulo,
      disciplina: item.materia.disciplina,
      status: item.status,
      anotacoes: item.anotacoes,
    }))
  } catch (error) {
    console.error('Error getting revisions:', error)
    throw new Error('Failed to get revisions')
  }
}
