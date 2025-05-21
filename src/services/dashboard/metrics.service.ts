import { getCorDisciplina } from '@/lib/cores'
import { db } from '@/lib/db'
import type { DisciplinaNome, StatusConteudo, DiaDaSemana } from '@/app/generated/prisma'
import type { DashboardMetrica } from './types'
import { getBrazilianDate, getStartOfDay, getEndOfDay } from '@/lib/date'

type MateriaComAgendamento = {
  materia: { disciplina: DisciplinaNome; titulo: string }
  status: StatusConteudo
}

function getDiaDaSemana(date: Date): DiaDaSemana {
  const dias: DiaDaSemana[] = [
    'Domingo',
    'Segunda',
    'Terca',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sabado',
  ]
  return dias[date.getDay()]
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
    const date = getBrazilianDate()
    const dataInicio = getStartOfDay(date)
    const dataFim = getEndOfDay(date)
    const diaDaSemana = getDiaDaSemana(date)

    // Buscar todas as matérias da disciplina do usuário
    const materias = await db.materia.findMany({
      where: {
        disciplina,
        userId: userId,
      },
    })

    // Para cada matéria, atualizar os agendamentos do dia
    for (const materia of materias) {
      const agendamentos = await db.diaDisciplinaMateria.findMany({
        where: {
          materiaId: materia.id,
          userId: userId,
        },
      })

      if (agendamentos.length > 0) {
        // Criar registro histórico
        await db.historicoEstudo.create({
          data: {
            userId: userId,
            tituloDaMateria: materia.titulo,
            disciplina: materia.disciplina,
            dataEstudo: date,
            progresso: progresso,
            // Busca anotações e tempo estudado do último agendamento do dia
            tempoEstudado: agendamentos[0].tempoEstudado || 0,
            anotacoes: agendamentos[0].anotacoes,
            planoId: 'metricas',
          },
        })

        // Atualizar contadores gerais
        await db.diaDisciplinaMateria.updateMany({
          where: {
            materiaId: materia.id,
            userId: userId,
            dia: diaDaSemana,
          },
          data: {
            progresso,
          },
        })
      }
    }
  } catch (error) {
    console.error('Erro ao atualizar progresso da disciplina:', error)
    throw error
  }
}
