'use server'

import { db } from '@/lib/db'
import type {
  DiaDaSemana,
  DisciplinaNome,
  StatusConteudo,
  HistoricoEstudo,
} from '@/generated/prisma'
import {
  formatDateToYYYYMMDD,
  getStartOfDay,
  getEndOfDay,
  getBrazilianDate,
} from '@/lib/date'

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

// Função auxiliar para agrupar registros por data no formato brasileiro
function agruparRegistrosPorDataBrasileira(
  registros: HistoricoEstudo[],
): Record<string, DisciplinaDoDia[]> {
  return registros.reduce<Record<string, DisciplinaDoDia[]>>(
    (acc, registro) => {
      // Converte a data para horário brasileiro e formata como YYYY-MM-DD
      const dataBrasil = getBrazilianDate(registro.dataEstudo)
      const dataBrasileira = formatDateToYYYYMMDD(dataBrasil)

      if (!acc[dataBrasileira]) {
        acc[dataBrasileira] = []
      }

      // Encontrar disciplina existente ou criar nova
      const disciplinaIndex = acc[dataBrasileira].findIndex(
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
        acc[dataBrasileira].push({
          disciplina: registro.disciplina,
          materias: [materiaItem],
        })
      } else {
        // Adicionar matéria à disciplina existente
        acc[dataBrasileira][disciplinaIndex].materias.push(materiaItem)
      }

      return acc
    },
    {},
  )
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

    const historicoAgrupado = agruparRegistrosPorDataBrasileira(registros)

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
    // Converter a data passada para Date usando a hora 00:00:00 local
    const [ano, mes, dia] = data.split('-').map(Number)
    const dataBase = new Date(ano, mes - 1, dia)

    // Usar nossas funções utilitárias que já tratam o fuso horário do Brasil
    const dataInicio = getStartOfDay(dataBase)
    const dataFim = getEndOfDay(dataBase)

    // Buscar registros do histórico para o dia
    const registros = await db.historicoEstudo.findMany({
      where: {
        dataEstudo: {
          gte: dataInicio,
          lte: dataFim,
        },
      },
      orderBy: {
        dataEstudo: 'asc',
      },
    })

    // Converter a data para o dia da semana
    const dataObj = new Date(ano, mes - 1, dia)
    const diasDaSemana: DiaDaSemana[] = [
      'Domingo',
      'Segunda',
      'Terca',
      'Quarta',
      'Quinta',
      'Sexta',
      'Sabado',
    ]
    const diaDaSemana = diasDaSemana[dataObj.getDay()]

    // Buscar também as matérias agendadas para este dia
    const materiasDoDia = await db.diaDisciplinaMateria.findMany({
      where: {
        dia: diaDaSemana,
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

    // Agrupar por disciplina
    type AgrupamentoDisciplinas = {
      [K in DisciplinaNome]?: MateriaDoDia[]
    }

    // Primeiro, criar um mapa com todas as matérias agendadas para o dia
    const disciplinas = materiasDoDia.reduce(
      (acc: AgrupamentoDisciplinas, registro) => {
        const disciplina = registro.materia.disciplina
        if (!acc[disciplina]) {
          acc[disciplina] = []
        }

        // Define progresso baseado no status
        let progresso = 0
        if (registro.status === 'concluido') {
          progresso = 100
        } else if (registro.status === 'em_progresso') {
          progresso = registro.progresso || 50 // Se não tiver progresso, assume 50%
        } else if (registro.progresso) {
          progresso = registro.progresso
        }

        acc[disciplina]?.push({
          id: registro.id,
          titulo: registro.materia.titulo,
          descricao: registro.materia.descricao,
          status: registro.status,
          progresso,
          tempoEstudado: registro.tempoEstudado || 0,
          anotacoes: registro.anotacoes || '',
        })
        return acc
      },
      {},
    )

    // Depois, adicionar ou atualizar com os registros do histórico
    registros.forEach((registro) => {
      const disciplina = registro.disciplina
      if (!disciplinas[disciplina]) {
        disciplinas[disciplina] = []
      }

      // Procurar se já existe uma matéria com o mesmo título
      const materiaIndex = disciplinas[disciplina]?.findIndex(
        (m) => m.titulo === registro.tituloDaMateria,
      )

      const materiaItem = {
        id: registro.id,
        titulo: registro.tituloDaMateria,
        descricao: null,
        status: 'concluido' as StatusConteudo,
        progresso: registro.progresso || 100, // Se está no histórico, considera como 100% concluído
        tempoEstudado: registro.tempoEstudado || 0,
        anotacoes: registro.anotacoes || '',
      }

      if (materiaIndex !== -1) {
        // Atualizar a matéria existente
        disciplinas[disciplina]![materiaIndex] = materiaItem
      } else {
        // Adicionar nova matéria
        disciplinas[disciplina]?.push(materiaItem)
      }
    })

    return Object.entries(disciplinas).map(([disciplina, materias]) => ({
      disciplina: disciplina as DisciplinaNome,
      materias: materias as MateriaDoDia[],
    }))
  } catch (error) {
    console.error('Erro ao buscar histórico do dia:', error)
    return []
  }
}
