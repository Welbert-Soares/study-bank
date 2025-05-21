import { db } from '@/lib/db'
import { DiaDaSemana } from '@prisma/client'
import { getProximosDias } from './utils'
import { scheduleRevision } from './revision.service'

export async function getUpcomingContent(
  currentDay: DiaDaSemana,
  userId: string,
): Promise<string[]> {
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
      },
    },
    include: {
      materia: true,
    },
    take: 5,
  })

  return materias.map((m) => `${m.materia.titulo} (${m.dia})`)
}

export async function scheduleSubject(
  materiaId: string,
  dia: DiaDaSemana,
  criarRevisao: boolean = false,
  userId: string,
): Promise<void> {
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
    const materiaOriginal = await db.materia.findUnique({
      where: {
        id: materiaId,
        userId: userId,
      },
    })

    if (materiaOriginal) {
      await scheduleRevision(materiaOriginal, dia, userId)
    }
  }
}
