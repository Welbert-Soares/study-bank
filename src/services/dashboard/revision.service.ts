import { db } from '@/lib/db'
import { DiaDaSemana, Materia } from '@/app/genenerated/prisma'
import { getDiaSeguinte, getDiaDaSemana } from './utils'
import type { DashboardRevisao } from './types'

export async function createRevisionItem(
  originalMateria: Materia,
  userId: string,
): Promise<Materia> {
  return await db.materia.create({
    data: {
      titulo: `Revisão: ${originalMateria.titulo}`,
      disciplina: 'Revisoes',
      ordem: originalMateria.ordem,
      status: 'pendente',
      userId: userId,
    },
  })
}

export async function scheduleRevision(
  originalMateria: Materia,
  originalDay: DiaDaSemana,
  userId: string,
) {
  const revisionMateria = await createRevisionItem(originalMateria, userId)
  const revisionDay = getDiaSeguinte(originalDay)

  await db.diaDisciplinaMateria.create({
    data: {
      dia: revisionDay,
      materiaId: revisionMateria.id,
      status: 'pendente',
      userId: userId,
    },
  })
}

export async function getRevisions(
  date: Date,
  userId: string,
): Promise<DashboardRevisao[]> {
  const currentDay = getDiaDaSemana(date)

  const revisions = await db.diaDisciplinaMateria.findMany({
    where: {
      dia: currentDay,
      userId: userId,
      materia: {
        disciplina: 'Revisoes',
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
  }))
}
