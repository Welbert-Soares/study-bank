import type { PlanejamentoSemanal } from '@prisma/client'

// ========================================
// TIPOS DO WIZARD
// ========================================

export type TipoPlanejamento = 'ciclo' | 'semanal'

// Step 1: Tipo de planejamento
export interface Step1Data {
  tipo: TipoPlanejamento
}

// Step 2: Seleção de disciplinas
export interface DisciplinaSelecionada {
  id: string
  nome: string
  cor: string
}

export interface Step2Data {
  disciplinas: DisciplinaSelecionada[]
}

// Step 3: Importância e Conhecimento
export interface DisciplinaRelevancia {
  disciplinaId: string
  nome: string
  cor: string
  importancia: number // 1-10
  conhecimento: number // 1-10
  percentual: number // Calculado automaticamente
}

export interface Step3Data {
  relevancia: DisciplinaRelevancia[]
}

// Step 4: Configuração de horários
export interface HorarioDisponivel {
  dia: string // "Segunda", "Terca", etc
  ativo: boolean
  inicio: string // "08:00"
  fim: string // "18:00"
}

export interface Step4Data {
  horarios: HorarioDisponivel[]
  tempoMinimo: number // em minutos (30, 45, 60, etc)
  tempoMaximo: number // em minutos (60, 75, 90, 105, etc)
}

// Dados completos do wizard
export interface WizardData {
  step1: Step1Data
  step2: Step2Data
  step3: Step3Data
  step4: Step4Data
}

// ========================================
// TIPOS DA DISTRIBUIÇÃO SEMANAL
// ========================================

export interface SessaoEstudo {
  disciplinaId: string
  nome: string
  cor: string
  inicio: string // "08:00"
  fim: string // "10:00"
  duracao: number // em minutos
  topico?: string // Tópico opcional
  // Controle de recorrência
  dataInicio?: string // Data ISO para início da recorrência
  dataFim?: string // Data ISO para fim da recorrência (opcional)
  // Vinculação com estudo realizado
  estudoRealizadoId?: string // ID do EstudoRealizado quando completado
}

export interface DiaDistribuicao {
  dia: string // "Segunda", "Terca", etc
  sessoes: SessaoEstudo[]
  totalMinutos: number
}

export type DistribuicaoSemanal = Record<string, DiaDistribuicao>

// ========================================
// TIPOS DO PLANEJAMENTO COMPLETO
// ========================================

export interface ConfiguracaoDisciplina {
  disciplinaId: string
  nome: string
  cor: string
  importancia: number
  conhecimento: number
  percentual: number
}

export interface PlanejamentoComPlano extends PlanejamentoSemanal {
  plano: {
    id: string
    nome: string
    emblema: string | null
  }
  // Campos JSON parseados
  configuracoesParsed: ConfiguracaoDisciplina[]
  distribuicaoParsed: DistribuicaoSemanal
  diasDisponiveisParsed: string[]
  horariosDisponiveisParsed: Record<string, { inicio: string; fim: string }>
}

// ========================================
// INPUT PARA CRIAR PLANEJAMENTO
// ========================================

export interface CriarPlanejamentoInput {
  planoId: string
  nome: string
  dataInicio: Date
  dataFim: Date
  horasPorDia: number
  tempoMinimo: number
  tempoMaximo: number
  diasDisponiveis: string[]
  horariosDisponiveis: Record<string, { inicio: string; fim: string }>
  configuracoes: ConfiguracaoDisciplina[]
  distribuicao: DistribuicaoSemanal
}
