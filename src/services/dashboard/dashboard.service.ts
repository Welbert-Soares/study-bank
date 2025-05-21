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

export async function getDashboardData(
  date: Date,
  userId: string,
): Promise<DashboardData> {
  try {
    const diaSemana = getDiaDaSemana(date)

    // Fetch all activities for the day, including revisions, with owner validation
    const materiasHoje = await db.diaDisciplinaMateria.findMany({
      where: {
        dia: diaSemana,
        userId: userId,
        materia: {
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

    // Separate regular subjects and revisions
    const materiasRegulares = materiasHoje.filter(
      (item) => item.materia.disciplina !== 'Revisoes',
    )

    // Get revisions using the specialized function
    const revisoes = await getRevisions(date, userId)

    // Create schedule with regular subjects only
    const cronograma: DashboardCronograma[] = materiasRegulares.map((item) => ({
      id: item.id,
      titulo: item.materia.titulo,
      disciplina: item.materia.disciplina,
      status: item.status,
    }))

    // Calculate metrics including all activities
    const metricas = await calculateDailyMetrics(
      materiasHoje.map((item) => ({
        materia: {
          disciplina: item.materia.disciplina,
          titulo: item.materia.titulo,
        },
        status: item.status,
      })),
    )

    // Create objectives list
    const objetivos: DashboardObjetivo[] = materiasHoje.map((item) => ({
      id: item.id,
      descricao:
        item.materia.disciplina === 'Revisoes'
          ? `Revisar: ${item.materia.titulo.replace('Revisar: ', '')}`
          : `Estudar ${item.materia.titulo}`,
      completo: item.status === 'concluido',
      prioridade: item.materia.ordem,
    }))

    // Get upcoming content for next days
    const proximosConteudos = await getUpcomingContent(diaSemana, userId)

    return {
      cronograma,
      metricas,
      objetivos,
      proximosConteudos,
      revisoes,
    }
  } catch (error) {
    console.error('Error fetching dashboard data:', error)
    throw new Error('Failed to fetch dashboard data')
  }
}
