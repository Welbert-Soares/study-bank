import { db } from '@/lib/db'
import { DiaDaSemana, Materia } from '@/generated/prisma'
import { getDiaSeguinte, getDiaDaSemana } from './utils'
import type { DashboardRevisao } from './types'

export async function createRevisionItem(
  originalMateria: Materia,
): Promise<Materia> {
  return await db.materia.create({
    data: {
      titulo: `Revisão: ${originalMateria.titulo}`,
      disciplina: 'Revisoes',
      ordem: originalMateria.ordem,
      status: 'pendente',
    },
  })
}

export async function scheduleRevision(
  originalMateria: Materia,
  originalDay: DiaDaSemana,
) {
  const revisionMateria = await createRevisionItem(originalMateria)
  const revisionDay = getDiaSeguinte(originalDay)

  await db.diaDisciplinaMateria.create({
    data: {
      dia: revisionDay,
      materiaId: revisionMateria.id,
      status: 'pendente',
    },
  })
}

export async function getRevisions(date: Date): Promise<DashboardRevisao[]> {
  const currentDay = getDiaDaSemana(date)

  const revisions = await db.diaDisciplinaMateria.findMany({
    where: {
      dia: currentDay,
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
