import { getCorDisciplina } from '@/lib/cores'
import { db } from '@/lib/db'
import type { DisciplinaNome, StatusConteudo } from '@prisma/client'
import type { DashboardMetrica } from './types'
import { getBrazilianDate, getStartOfDay, getEndOfDay } from '@/lib/date'

type MateriaComAgendamento = {
  materia: { disciplina: DisciplinaNome; titulo: string }
  status: StatusConteudo
}

export async function calculateDailyMetrics(
  materias: MateriaComAgendamento[],
): Promise<DashboardMetrica[]> {
  const disciplinas = materias.reduce<Map<DisciplinaNome, number>>(
    (acc, { materia: { disciplina }, status }) => {
      if (status === 'concluido') {
        const atual = acc.get(disciplina) || 0
        acc.set(disciplina, atual + 100)
      } else if (status === 'em_progresso') {
        const atual = acc.get(disciplina) || 0
        acc.set(disciplina, atual + 50)
      }
      return acc
    },
    new Map(),
  )

  return Array.from(disciplinas.entries()).map(([disciplina, total]) => ({
    id: disciplina,
    disciplina,
    progresso: Math.round(total / materias.length),
    cor: getCorDisciplina(disciplina),
  }))
}

export async function updateDisciplineProgress(
  disciplina: DisciplinaNome,
  progresso: number,
  userId: string,
): Promise<void> {
  try {
    // Get all materials of this discipline for today
    const hoje = getStartOfDay(getBrazilianDate())
    const amanha = getEndOfDay(getBrazilianDate())

    const materias = await db.materia.findMany({
      where: {
        disciplina,
        userId: userId,
        agendamentos: {
          some: {
            status: {
              in: ['pendente', 'em_progresso'],
            },
            criadoEm: {
              gte: hoje,
              lte: amanha,
            },
          },
        },
      },
      include: {
        agendamentos: {
          where: {
            criadoEm: {
              gte: hoje,
              lte: amanha,
            },
          },
        },
      },
    })

    // Update each material
    for (const materia of materias) {
      const ultimoAgendamento = materia.agendamentos[0]
      if (ultimoAgendamento) {
        // Update schedule with new status
        const novoStatus = progresso >= 100 ? 'concluido' : 'em_progresso'
        await db.diaDisciplinaMateria.update({
          where: {
            id: ultimoAgendamento.id,
            userId: userId,
          },
          data: {
            status: novoStatus,
            progresso,
          },
        })

        // Add to history if completed
        if (
          novoStatus === 'concluido' &&
          ultimoAgendamento?.status === 'concluido'
        ) {
          const dataBrasil = getBrazilianDate()
          const dataInicio = getStartOfDay(dataBrasil)
          const dataFim = getEndOfDay(dataBrasil)

          await db.historicoEstudo.deleteMany({
            where: {
              userId: userId,
              tituloDaMateria: materia.titulo,
              disciplina: materia.disciplina,
              dataEstudo: {
                gte: dataInicio,
                lte: dataFim,
              },
            },
          })
        }
      }
    }
  } catch (error) {
    console.error('Erro ao atualizar progresso da disciplina:', error)
    throw error
  }
}
