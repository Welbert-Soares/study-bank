import type { StatusConteudo } from '@prisma/client'

// ========================================
// TIPOS PARA PLANOS DE ESTUDO
// ========================================

export interface PlanoFormData {
  nome: string
  emblema?: string
  edital?: string
  cargo?: string
  observacoes?: string
  ativo?: boolean
}

export interface PlanoFromDB {
  id: string
  userId: string
  nome: string
  emblema: string | null
  edital: string | null
  cargo: string | null
  observacoes: string | null
  ativo: boolean
  criadoEm: Date
  atualizadoEm: Date
}

export interface PlanoComDisciplinas extends PlanoFromDB {
  disciplinas: DisciplinaFromDB[]
  totalDisciplinas: number
  totalTopicos: number
}

// ========================================
// TIPOS PARA DISCIPLINAS
// ========================================

export interface DisciplinaFormData {
  nome: string
  cor?: string
  descricao?: string
  ordem?: number
  edital?: string
  cargo?: string
  planoId: string
  status?: StatusConteudo
}

export interface DisciplinaFromDB {
  id: string
  userId: string
  planoId: string
  nome: string
  cor: string | null
  descricao: string | null
  ordem: number
  edital: string | null
  cargo: string | null
  status: StatusConteudo
  criadoEm: Date
  atualizadoEm: Date
}

export interface DisciplinaComTopicos extends DisciplinaFromDB {
  topicos: TopicoFromDB[]
  topicosEstudados: number
  topicosTotal: number
  questoesResolvidas: number
}

export interface DisciplinaComEstatisticas extends DisciplinaFromDB {
  _count: {
    topicos: number
    ciclosPomodoro: number
  }
  topicosEstudados: number
}

// ========================================
// TIPOS PARA TÓPICOS
// ========================================

export interface TopicoFormData {
  titulo: string
  conteudo?: string
  ordem: number
  disciplinaId: string
  status?: StatusConteudo
}

export interface TopicoFromDB {
  id: string
  disciplinaId: string
  ordem: number
  titulo: string
  conteudo: string | null
  status: StatusConteudo
  criadoEm: Date
  atualizadoEm: Date
}

// ========================================
// TIPOS PARA CICLOS POMODORO
// ========================================

export interface CicloPomodoroFormData {
  disciplinaId: string
  duracao: number
  ordem: number
  data?: Date
}

export interface CicloPomodoroFromDB {
  id: string
  userId: string
  disciplinaId: string
  duracao: number
  ordem: number
  completo: boolean
  data: Date
  criadoEm: Date
  atualizadoEm: Date
}

export interface CicloPomodoroComDisciplina extends CicloPomodoroFromDB {
  disciplina: {
    id: string
    nome: string
    cor: string | null
  }
}

// ========================================
// TIPOS PARA UI/VISUALIZAÇÃO
// ========================================

export interface PlanoCardData {
  id: string
  nome: string
  emblema: string | null
  edital: string | null
  cargo: string | null
  totalDisciplinas: number
  totalTopicos: number
  ativo: boolean
}

export interface DisciplinaCardData {
  id: string
  nome: string
  cor: string | null
  edital: string | null
  cargo: string | null
  topicosEstudados: number
  topicosTotal: number
  questoesResolvidas: number
}

export interface ProgressoGeral {
  ciclosCompletos: number
  tempoTotal: number
  tempoEstudado: number
  percentual: number
}

// ========================================
// CORES PRESET PARA DISCIPLINAS
// ========================================

export const PRESET_COLORS = [
  '#FF9B8A', // Coral
  '#A8E6CF', // Mint
  '#C4A7E7', // Lavender
  '#FFD3B5', // Peach
  '#8EC5FC', // Sky Blue
  '#FFF5BA', // Light Yellow
  '#FFB6C1', // Pink
  '#B4D7A8', // Sage
  '#D4A5A5', // Dusty Rose
  '#9FD8E5', // Aqua
  '#E0BBE4', // Mauve
  '#FFDFD3', // Apricot
  '#C7CEEA', // Periwinkle
  '#FFE5B4', // Beige
  '#B8E0D2', // Seafoam
  '#D4A5E0', // Orchid
  '#FFD8BE', // Papaya
  '#B2DFDB', // Teal Light
  '#F8BBD0', // Rose Pink
  '#C5E1A5', // Lime
  '#FFCCBC', // Salmon
  '#D1C4E9', // Lilac
  '#FFF9C4', // Lemon
  '#B39DDB', // Purple Light
  '#FFECB3', // Amber
  '#CE93D8', // Purple Medium
  '#90CAF9', // Blue Light
  '#A5D6A7', // Green Light
  '#EF9A9A', // Red Light
  '#80DEEA', // Cyan Light
] as const

export type PresetColor = (typeof PRESET_COLORS)[number]
