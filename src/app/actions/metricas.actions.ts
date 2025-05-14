'use server'

import { db } from '@/lib/db'
import { DisciplinaNome } from '@/generated/prisma'
import { getCorDisciplina } from '@/lib/cores'

export interface MetricaGeral {
  id: string
  disciplina: DisciplinaNome
  progresso: number
  cor: string
}

export async function getMetricasGerais(): Promise<MetricaGeral[]> {
  const disciplinas = Object.values(DisciplinaNome)
  const metricas: MetricaGeral[] = []

  for (const disciplina of disciplinas) {
    const materias = await db.materia.findMany({
      where: { disciplina },
      include: { agendamentos: true },
    })

    const totalMaterias = materias.length
    let materiasCompletas = 0

    materias.forEach((materia) => {
      const concluidos =
        materia.agendamentos.filter((a) => a.status === 'concluido').length || 0
      materiasCompletas += concluidos / (materia.agendamentos.length || 1)
    })

    const progresso =
      totalMaterias > 0
        ? Math.round((materiasCompletas / totalMaterias) * 100)
        : 0

    metricas.push({
      id: String(disciplina),
      disciplina,
      progresso,
      cor: getCorDisciplina(disciplina),
    })
  }

  return metricas
}
