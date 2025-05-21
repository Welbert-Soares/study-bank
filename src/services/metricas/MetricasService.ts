import { DisciplinaNome } from '@/app/generated/prisma'
import { db } from '@/lib/db'
import { getCorDisciplina } from '@/lib/cores'

export interface MetricaGeral {
  id: string
  disciplina: DisciplinaNome
  progresso: number
  cor: string
}

export class MetricasService {
  private async calcularProgressoMateria(
    materiaId: string,
    userId: string,
  ): Promise<number> {
    const materia = await db.materia.findFirst({
      where: {
        id: materiaId,
        userId: userId,
      },
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
    userId: string,
  ): Promise<number> {
    const materias = await db.materia.findMany({
      where: {
        disciplina,
        userId: userId,
      },
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

  public async obterMetricasGerais(userId: string): Promise<MetricaGeral[]> {
    try {
      const materias = await db.materia.findMany({
        where: {
          userId: userId,
        },
        include: {
          agendamentos: {
            where: {
              userId: userId,
            },
          },
        },
      })

      const metricasPorDisciplina = new Map<DisciplinaNome, number>()
      let totalAgendamentos = 0

      materias.forEach((materia) => {
        const agendamentosConcluidos = materia.agendamentos.filter(
          (a) => a.status === 'concluido',
        ).length
        const totalAgendamentosDisciplina = materia.agendamentos.length

        if (totalAgendamentosDisciplina > 0) {
          const progressoAtual =
            metricasPorDisciplina.get(materia.disciplina) || 0
          const novoProgresso =
            progressoAtual +
            (agendamentosConcluidos / totalAgendamentosDisciplina) * 100
          metricasPorDisciplina.set(materia.disciplina, novoProgresso)
          totalAgendamentos++
        }
      })

      return Array.from(metricasPorDisciplina.entries()).map(
        ([disciplina, progresso]) => ({
          id: disciplina,
          disciplina,
          progresso: Math.round(progresso / totalAgendamentos),
          cor: getCorDisciplina(disciplina),
        }),
      )
    } catch (error) {
      console.error('Erro ao calcular métricas gerais:', error)
      return []
    }
  }
}
