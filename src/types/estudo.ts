export interface RegistroEstudoInput {
  planoId: string
  disciplinaId: string
  topicoId?: string
  planejamentoSemanalId?: string // ID do planejamento se vier de agendamento
  agendamentoKey?: string // Chave do agendamento (ex: "Segunda_0")
  dataEstudo: string // ISO date string
  tempoEstudo: string // HH:MM format
  categoria: 'teoria' | 'exercicios' | 'revisao'
  material?: string
  teoriaFinalizada: boolean
  programarRevisoes: boolean
  intervalosRevisao: number[] // dias (ex: [1, 7, 30])
  questoes: QuestaoItem[]
  paginas: PaginaItem[]
  videoAulas: VideoAulaItem[]
  comentarios?: string
}

export interface QuestaoItem {
  numero: number
  acertou: boolean
}

export interface PaginaItem {
  inicio: number
  fim: number
}

export interface VideoAulaItem {
  titulo: string
  duracao: string // MM:SS format
}

export interface RegistroEstudoAnotacoes {
  categoria: string
  topicoId?: string
  material?: string
  teoriaFinalizada: boolean
  programarRevisoes: boolean
  intervalosRevisao: number[]
  questoes: QuestaoItem[]
  paginas: PaginaItem[]
  videoAulas: VideoAulaItem[]
  comentarios?: string
}
