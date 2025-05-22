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
  private async calcularProgressoMateria(
    materiaId: string,
    userId: string,
  ): Promise<number> {
    const materia = await db.materia.findFirst({
      where: {
        id: materiaId,
        userId: userId,
      },
      include: {
        agendamentos: true,
        _count: {
          select: {
            agendamentos: true,
          },
        },
      },
    })

    if (!materia || materia._count.agendamentos === 0) return 0

    const concluidos = materia.agendamentos.filter(
      (a) => a.status === 'concluido',
    ).length

    return Math.round((concluidos / materia._count.agendamentos) * 100)
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
      include: {
        agendamentos: true,
        _count: {
          select: {
            agendamentos: true,
          },
        },
      },
    })

    if (!materias.length) return 0

    // Calcula o progresso baseado em agendamentos concluídos
    const totalAgendamentos = materias.reduce(
      (sum, m) => sum + m._count.agendamentos,
      0,
    )
    if (totalAgendamentos === 0) return 0

    const concluidos = materias.reduce(
      (sum, m) =>
        sum + m.agendamentos.filter((a) => a.status === 'concluido').length,
      0,
    )

    return Math.round((concluidos / totalAgendamentos) * 100)
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
      // Busca todas as disciplinas únicas do usuário
      const disciplinasUnicas = await db.materia.findMany({
        where: { userId },
        select: { disciplina: true },
        distinct: ['disciplina'],
      })

      // Calcula o progresso para cada disciplina
      const metricas = await Promise.all(
        disciplinasUnicas.map(async ({ disciplina }) => {
          const progresso = await this.calcularProgressoDisciplina(
            disciplina,
            userId,
          )
          return {
            id: disciplina,
            disciplina,
            progresso,
            cor: getCorDisciplina(disciplina),
          }
        }),
      )

      return metricas
    } catch (error) {
      console.error('Erro ao calcular métricas gerais:', error)
      return []
    }
  }
}
