import { DisciplinaNome } from '@prisma/client'
import { formatDateToYYYYMMDD } from '@/lib/date'
import { historicoRepository } from './repository'
import type {
  AgrupamentoDisciplinas,
  DisciplinaDoDia,
  MateriaDoDia,
} from './types'

export const historicoService = {
  async buscarHistoricoPorDia() {
    try {
      const registros = await historicoRepository.buscarTodosRegistros()

      // Agrupar por data
      const historicoAgrupado = registros.reduce<
        Record<string, DisciplinaDoDia[]>
      >((acc, registro) => {
        const data = formatDateToYYYYMMDD(registro.dataEstudo)

        if (!acc[data]) {
          acc[data] = []
        }

        // Encontrar disciplina existente ou criar nova
        const disciplinaIndex = acc[data].findIndex(
          (d) => d.disciplina === registro.disciplina,
        )

        if (disciplinaIndex === -1) {
          // Nova disciplina
          acc[data].push({
            disciplina: registro.disciplina,
            materias: [
              {
                id: registro.id,
                titulo: registro.tituloDaMateria,
                descricao: null, // Histórico não mantém descrição
                status: 'concluido', // Histórico só guarda concluídos
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
            titulo: registro.tituloDaMateria,
            descricao: null,
            status: 'concluido',
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
    } catch (error) {
      console.error('Erro ao buscar histórico:', error)
      return []
    }
  },

  async buscarHistoricoDoDia(data: string) {
    try {
      const [ano, mes, dia] = data.split('-').map(Number)
      const dataFiltro = new Date(ano, mes - 1, dia)

      const materiasPorDia = await historicoRepository.buscarRegistrosPorDia(
        dataFiltro,
      )

      const disciplinas = materiasPorDia.reduce(
        (acc: AgrupamentoDisciplinas, registro) => {
          const disciplina = registro.disciplina
          if (!acc[disciplina]) {
            acc[disciplina] = []
          }
          acc[disciplina]?.push({
            id: registro.id,
            titulo: registro.tituloDaMateria,
            descricao: null,
            status: 'concluido',
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
  },
}
