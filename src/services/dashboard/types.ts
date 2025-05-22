// Use type import from zod schema or enums
import type { DisciplinaNome, StatusConteudo } from '@/app/generated/prisma'

export interface DashboardCronograma {
  id: string
  titulo: string
  disciplina: DisciplinaNome
  status: StatusConteudo
}

export interface DashboardMetrica {
  id: string
  disciplina: DisciplinaNome
  progresso: number
  cor: string
}

export interface DashboardObjetivo {
  id: string
  descricao: string
  completo: boolean
  prioridade: number
}

export interface DashboardRevisao {
  id: string
  titulo: string
  disciplina: DisciplinaNome
  status: StatusConteudo
}

export interface DashboardData {
  cronograma: DashboardCronograma[]
  metricas: DashboardMetrica[]
  objetivos: DashboardObjetivo[]
  proximosConteudos: string[]
  revisoes: DashboardRevisao[]
}
