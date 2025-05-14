'use server'

import { db } from '@/lib/db'
import type {
  DiaDaSemana,
  DisciplinaNome,
  StatusConteudo,
} from '@/generated/prisma'

export interface MateriaDoDia {
  id: string
  titulo: string
  descricao: string | null
  status: StatusConteudo
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

export async function buscarHistoricoDoDia(
  dia: string,
): Promise<DisciplinaDoDia[]> {
  try {
    const materiasPorDia = await db.diaDisciplinaMateria.findMany({
      where: {
        dia: dia as DiaDaSemana,
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

    type AgrupamentoDisciplinas = {
      [K in DisciplinaNome]?: MateriaDoDia[]
    }

    const disciplinas = materiasPorDia.reduce(
      (acc: AgrupamentoDisciplinas, registro) => {
        const disciplina = registro.materia.disciplina
        if (!acc[disciplina]) {
          acc[disciplina] = []
        }
        acc[disciplina]?.push({
          id: registro.id,
          titulo: registro.materia.titulo,
          descricao: registro.materia.descricao || '',
          status: registro.status,
          progresso: registro.progresso,
          tempoEstudado: registro.tempoEstudado || 0,
          anotacoes: registro.anotacoes || '',
        })
        return acc
      },
      {},
    )

    return Object.entries(disciplinas).map(([disciplina, materias]) => ({
      disciplina: disciplina as DisciplinaNome,
      materias: materias as MateriaDoDia[],
    }))
  } catch (error) {
    console.error('Erro ao buscar histórico do dia:', error)
    return []
  }
}

// Salva um registro no histórico quando uma matéria é concluída
export async function salvarHistoricoEstudo(registro: {
  tituloDaMateria: string
  disciplina: DisciplinaNome
  dataEstudo: Date
  tempoEstudado: number
  anotacoes?: string | null
  progresso: number
  planoId?: string | null
}) {
  try {
    const historico = await db.historicoEstudo.create({
      data: registro,
    })
    return historico
  } catch (error) {
    console.error('Erro ao salvar histórico:', error)
    throw error
  }
}

// Busca o histórico de estudos agrupado por dia
export async function buscarHistoricoDeEstudos(): Promise<RegistroDiario[]> {
  try {
    const registros = await db.historicoEstudo.findMany({
      orderBy: {
        dataEstudo: 'desc',
      },
    })

    // Agrupar por dia
    const historicoAgrupado = registros.reduce<
      Record<string, DisciplinaDoDia[]>
    >((acc, registro) => {
      // Formata a data como YYYY-MM-DD para agrupar por dia
      const data = registro.dataEstudo.toISOString().split('T')[0]

      if (!acc[data]) {
        acc[data] = []
      }

      // Encontrar disciplina existente ou criar nova
      const disciplinaIndex = acc[data].findIndex(
        (d) => d.disciplina === registro.disciplina,
      )

      const materiaItem: MateriaDoDia = {
        id: registro.id,
        titulo: registro.tituloDaMateria,
        descricao: null, // O histórico não mantém a descrição
        status: 'concluido' as StatusConteudo, // Histórico só guarda concluídos
        progresso: registro.progresso,
        tempoEstudado: registro.tempoEstudado,
        anotacoes: registro.anotacoes,
      }

      if (disciplinaIndex === -1) {
        // Nova disciplina
        acc[data].push({
          disciplina: registro.disciplina,
          materias: [materiaItem],
        })
      } else {
        // Adicionar matéria à disciplina existente
        acc[data][disciplinaIndex].materias.push(materiaItem)
      }

      return acc
    }, {})

    // Converter objeto agrupado para array
    return Object.entries(historicoAgrupado).map(([data, disciplinas]) => ({
      data,
      disciplinas,
    }))
  } catch (error) {
    console.error('Erro ao buscar histórico:', error)
    return []
  }
}

// Busca o histórico de estudos de um dia específico
export async function buscarHistoricoDeEstudosPorDia(
  data: string,
): Promise<DisciplinaDoDia[]> {
  try {
    const [ano, mes, dia] = data.split('-').map(Number)
    const dataInicio = new Date(ano, mes - 1, dia)
    const dataFim = new Date(ano, mes - 1, dia + 1)

    const registros = await db.historicoEstudo.findMany({
      where: {
        dataEstudo: {
          gte: dataInicio,
          lt: dataFim,
        },
      },
      orderBy: {
        dataEstudo: 'asc',
      },
    })

    // Agrupar por disciplina
    type AgrupamentoDisciplinas = {
      [K in DisciplinaNome]?: MateriaDoDia[]
    }

    const disciplinas = registros.reduce(
      (acc: AgrupamentoDisciplinas, registro) => {
        const disciplina = registro.disciplina
        if (!acc[disciplina]) {
          acc[disciplina] = []
        }

        acc[disciplina]?.push({
          id: registro.id,
          titulo: registro.tituloDaMateria,
          descricao: null, // O histórico não mantém a descrição
          status: 'concluido' as StatusConteudo,
          progresso: registro.progresso,
          tempoEstudado: registro.tempoEstudado,
          anotacoes: registro.anotacoes || '',
        })
        return acc
      },
      {},
    )

    return Object.entries(disciplinas).map(([disciplina, materias]) => ({
      disciplina: disciplina as DisciplinaNome,
      materias: materias as MateriaDoDia[],
    }))
  } catch (error) {
    console.error('Erro ao buscar histórico do dia:', error)
    return []
  }
}
