'use server'

import { db } from '@/lib/db'
import { DisciplinaNome } from '@/generated/prisma'

export interface MateriaDoDia {
  id: string
  titulo: string
  descricao: string | null
  status: string
  progresso: number
  tempoEstudado: number | null
  anotacoes: string | null
}

export interface DisciplinaDoDia {
  disciplina: DisciplinaNome
  materias: MateriaDoDia[]
}

export interface RegistroDiario {
  data: string
  disciplinas: DisciplinaDoDia[]
}

export async function buscarHistoricoPorDia(): Promise<RegistroDiario[]> {
  // Buscar registros por dia da semana e suas matérias relacionadas
  const registros = await db.diaDisciplinaMateria.findMany({
    include: {
      materia: true, // Inclui os dados da matéria relacionada
    },
    orderBy: {
      dia: 'asc', // Ordena por dia da semana
    },
  })

  // Agrupar por dia da semana
  const historicoAgrupado = registros.reduce<Record<string, DisciplinaDoDia[]>>(
    (acc, registro) => {
      const data = registro.dia // DiaDaSemana é um enum que já vem como string

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
    },
    {},
  )

  // Converter objeto agrupado para array
  return Object.entries(historicoAgrupado).map(([data, disciplinas]) => ({
    data,
    disciplinas,
  }))
}
