type AtividadeStatus = 'completed' | 'in_progress' | 'pending'

interface Disciplina {
  id: string
  nome: string
  cor: string
  conteudos: Array<{
    id: string
    titulo: string
    descricao: string | null
    ordem: number
    completo: boolean
  }>
}

export interface HorarioEstudo {
  id: string
  diaSemana: number
  inicio: string
  fim: string
  ativo: boolean
  disciplinaId: string
  disciplina: Disciplina
}

type DashboardData = {
  id: string
  date: Date
  createdAt: Date
  updatedAt: Date
  objetivos: {
    id: string
    descricao: string
    completo: boolean
    dashboardId: string
  }[]
  cronograma: {
    id: string
    horario: string
    atividade: string
    status: AtividadeStatus
    dashboardId: string
    disciplinaId: string | null
    disciplina: {
      id: string
      nome: string
      cor: string
    } | null
  }[]
  metricas: {
    id: string
    nome: string
    progresso: number
    cor: string
    dashboardId: string
    historico: {
      id: string
      data: Date
      progresso: number
      observacoes: string | null
    }[]
  }[]
  proximosConteudos: string[]
}

export type { DashboardData }
