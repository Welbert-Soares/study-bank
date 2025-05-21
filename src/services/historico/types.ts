import type { DisciplinaNome, StatusConteudo } from '@/app/genenerated/prisma'

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

export type AgrupamentoDisciplinas = {
  [K in DisciplinaNome]?: MateriaDoDia[]
}
