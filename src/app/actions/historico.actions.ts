import { db } from '@/lib/db'
import { DisciplinaNome } from '@/generated/prisma'

export interface HistoricoEstudo {
  data: string
  disciplinas: {
    disciplina: DisciplinaNome
    materias: {
      id: string
      titulo: string
      descricao: string | null
      status: string
      progresso: number
      tempoEstudado: number | null
      anotacoes: string | null
    }[]
  }[]
}

export async function getHistoricoEstudos(): Promise<HistoricoEstudo[]> {
  // Buscar registros agrupados por data
  const registros = await db.diaDisciplinaMateria.findMany({
    orderBy: {
      criadoEm: 'desc',
    },
    include: {
      materia: true,
    },
  })

  // Agrupar por data
  const historicoAgrupado = registros.reduce<
    Record<string, HistoricoEstudo['disciplinas']>
  >((acc, registro) => {
    const data = registro.criadoEm.toISOString().split('T')[0]

    if (!acc[data]) {
      acc[data] = []
    }

    // Encontrar disciplina existente ou criar nova
    const disciplinaIndex = acc[data].findIndex(
      (d) => d.disciplina === registro.materia.disciplina,
    )

    if (disciplinaIndex === -1) {
      // Nova disciplina
      acc[data].push({
        disciplina: registro.materia.disciplina,
        materias: [
          {
            id: registro.id,
            titulo: registro.materia.titulo,
            descricao: registro.materia.descricao,
            status: registro.status,
            progresso: registro.progresso,
            tempoEstudado: registro.tempoEstudado,
            anotacoes: registro.anotacoes,
          },
        ],
      })
    } else {
      // Adicionar matéria à disciplina existente
      acc[data][disciplinaIndex].materias.push({
        id: registro.id,
        titulo: registro.materia.titulo,
        descricao: registro.materia.descricao,
        status: registro.status,
        progresso: registro.progresso,
        tempoEstudado: registro.tempoEstudado,
        anotacoes: registro.anotacoes,
      })
    }

    return acc
  }, {})

  // Converter objeto agrupado para array
  return Object.entries(historicoAgrupado).map(([data, disciplinas]) => ({
    data,
    disciplinas,
  }))
}
