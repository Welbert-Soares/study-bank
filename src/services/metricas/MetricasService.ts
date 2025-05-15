import { DisciplinaNome } from '@prisma/client'
import { db } from '@/lib/db'
import { getCorDisciplina } from '@/lib/cores'

export interface MetricaGeral {
  id: string
  disciplina: DisciplinaNome
  progresso: number
  cor: string
}

export class MetricasService {
  private async calcularProgressoMateria(materiaId: string): Promise<number> {
    const materia = await db.materia.findUnique({
      where: { id: materiaId },
      include: { agendamentos: true },
    })

    if (!materia || !materia.agendamentos.length) return 0

    const concluidos = materia.agendamentos.filter(
      (a) => a.status === 'concluido',
    ).length
    return concluidos / materia.agendamentos.length
  }

  private async calcularProgressoDisciplina(
    disciplina: DisciplinaNome,
  ): Promise<number> {
    const materias = await db.materia.findMany({
      where: { disciplina },
      include: { agendamentos: true },
    })

    if (!materias.length) return 0

    const progressos = materias.map((materia) => {
      const concluidos = materia.agendamentos.filter(
        (a) => a.status === 'concluido',
      ).length
      return concluidos / (materia.agendamentos.length || 1)
    })

    const totalProgresso = progressos.reduce((sum, p) => sum + p, 0)
    return Math.round((totalProgresso / materias.length) * 100)
  }

  private criarMetricaGeral(
    disciplina: DisciplinaNome,
    progresso: number,
  ): MetricaGeral {
    return {
      id: String(disciplina),
      disciplina,
      progresso,
      cor: getCorDisciplina(disciplina),
    }
  }

  public async obterMetricasGerais(): Promise<MetricaGeral[]> {
    const disciplinas = Object.values(DisciplinaNome)
    const metricas: MetricaGeral[] = []

    for (const disciplina of disciplinas) {
      const progresso = await this.calcularProgressoDisciplina(disciplina)
      metricas.push(this.criarMetricaGeral(disciplina, progresso))
    }

    return metricas
  }
}
