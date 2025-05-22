import { DisciplinaNome, DiaDaSemana, StatusConteudo } from '@prisma/client'

export interface MateriaFormData {
  titulo: string
  descricao?: string
  disciplina: DisciplinaNome
  ordem: number
  status?: StatusConteudo
}

export interface AgendamentoFormData {
  dia: DiaDaSemana
  materiaId: string
  criarRevisao?: boolean
  status?: StatusConteudo
  tempoEstudado?: number
  anotacoes?: string
}

export interface MateriaFromDB {
  id: string
  titulo: string
  descricao: string | null
  disciplina: DisciplinaNome
  ordem: number
  status: StatusConteudo
  criadoEm: Date
  atualizadoEm: Date
}

export interface AgendamentoFromDB {
  id: string
  dia: DiaDaSemana
  materiaId: string
  materia: MateriaFromDB
  status: StatusConteudo
  criarRevisao?: boolean
  tempoEstudado: number | null
  anotacoes: string | null
  criadoEm: Date
  atualizadoEm: Date
}

export const diasDaSemana = [
  'Domingo',
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sábado',
] as const
