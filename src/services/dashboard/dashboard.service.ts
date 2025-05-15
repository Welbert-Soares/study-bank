import { db } from '@/lib/db'
import { getDiaDaSemana } from './utils'
import { getRevisions } from './revision.service'
import { calculateDailyMetrics } from './metrics.service'
import { getUpcomingContent } from './schedule.service'
import type {
  DashboardData,
  DashboardCronograma,
  DashboardObjetivo,
} from './types'

export async function getDashboardData(date: Date): Promise<DashboardData> {
  const diaSemana = getDiaDaSemana(date)

  // Fetch all activities for the day, including revisions
  const materiasHoje = await db.diaDisciplinaMateria.findMany({
    where: {
      dia: diaSemana,
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

  // Separate regular subjects and revisions
  const materiasRegulares = materiasHoje.filter(
    (item) => item.materia.disciplina !== 'Revisoes',
  )

  // Get revisions using the specialized function
  const revisoes = await getRevisions(date)

  // Create schedule with regular subjects only
  const cronograma: DashboardCronograma[] = materiasRegulares.map((item) => ({
    id: item.id,
    titulo: item.materia.titulo,
    disciplina: item.materia.disciplina,
    status: item.status,
  }))

  // Calculate metrics including all activities
  const metricas = await calculateDailyMetrics(materiasHoje)

  // Create objectives
  const objetivos: DashboardObjetivo[] = materiasHoje.map((item) => ({
    id: item.id,
    descricao:
      item.materia.disciplina === 'Revisoes'
        ? `Revisar: ${item.materia.titulo.replace('Revisar: ', '')}`
        : `Estudar ${item.materia.titulo}`,
    completo: item.status === 'concluido',
    prioridade: item.materia.ordem,
  }))

  // Get upcoming content
  const proximosConteudos = await getUpcomingContent(diaSemana)

  return {
    cronograma,
    metricas,
    objetivos,
    proximosConteudos,
    revisoes,
  }
}
