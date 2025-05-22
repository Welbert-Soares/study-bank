import { db } from '@/lib/db'
import { DiaDaSemana } from '@prisma/client'
import { getProximosDias } from './utils'
import { scheduleRevision } from './revision.service'

export async function getUpcomingContent(
  currentDay: DiaDaSemana,
  userId: string,
): Promise<string[]> {
  try {
    const nextDays = getProximosDias(currentDay, 3)

    const materias = await db.diaDisciplinaMateria.findMany({
      where: {
        dia: {
          in: nextDays,
        },
        userId: userId,
        status: 'pendente',
        materia: {
          disciplina: {
            not: 'Revisoes',
          },
          userId: userId, // Additional security check on nested relationship
        },
      },
      include: {
        materia: true,
      },
      take: 5,
    })

    return materias.map((m) => `${m.materia.titulo} (${m.dia})`)
  } catch (error) {
    console.error('Error getting upcoming content:', error)
    throw new Error('Failed to get upcoming content')
  }
}

export async function scheduleSubject(
  materiaId: string,
  dia: DiaDaSemana,
  criarRevisao: boolean = false,
  userId: string,
): Promise<void> {
  try {
    // Verify the subject belongs to user before scheduling
    const existingSubject = await db.materia.findFirst({
      where: {
        id: materiaId,
        userId: userId,
      },
    })

    if (!existingSubject) {
      throw new Error('Subject not found or unauthorized')
    }

    // Schedule the original subject
    await db.diaDisciplinaMateria.create({
      data: {
        dia,
        materiaId,
        status: 'pendente',
        userId: userId,
      },
    })

    // If requested, create and schedule the revision
    if (criarRevisao) {
      await scheduleRevision(existingSubject, dia, userId)
    }
  } catch (error) {
    console.error('Error scheduling subject:', error)
    throw new Error('Failed to schedule subject')
  }
}
