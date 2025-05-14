'use server'

import { db } from '@/lib/db'
import { DiaDaSemana, DisciplinaNome } from '@/generated/prisma'

export interface StudyPlanDay {
  day: DiaDaSemana
  discipline1: DisciplinaNome | null
  discipline2: DisciplinaNome | null
  writing: boolean
  progress: number
}

export async function getWeeklyPlan(): Promise<StudyPlanDay[]> {
  // Buscar todas as disciplinas agendadas
  const assignments = await db.diaDisciplinaMateria.findMany({
    include: {
      materia: true,
    },
    orderBy: {
      dia: 'asc',
    },
  })

  // Criar um mapa para agrupar por dia
  const weeklyPlan = new Map<DiaDaSemana, StudyPlanDay>()

  // Inicializar os dias da semana
  Object.values(DiaDaSemana).forEach((day) => {
    weeklyPlan.set(day, {
      day,
      discipline1: null,
      discipline2: null,
      writing: false,
      progress: 0,
    })
  })

  // Preencher o plano com as disciplinas
  assignments.forEach((assignment) => {
    const day = assignment.dia
    const plan = weeklyPlan.get(day)!

    if (!plan.discipline1) {
      plan.discipline1 = assignment.materia.disciplina
    } else if (!plan.discipline2) {
      plan.discipline2 = assignment.materia.disciplina
    }

    if (assignment.materia.disciplina === 'Redacao') {
      plan.writing = true
    }

    // Calcular progresso
    if (assignment.status === 'concluido') {
      plan.progress += 50 // 50% por disciplina concluída
    } else if (assignment.status === 'em_progresso') {
      plan.progress += 25 // 25% por disciplina em progresso
    }
  })

  return Array.from(weeklyPlan.values())
}
