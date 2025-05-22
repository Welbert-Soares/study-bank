export type FerramentaPersonalizada = {
  id: string
  userId: string
  nome: string
  descricao?: string | null
  url: string
  tipo: string
  icone?: string | null
  ordem: number
  criadoEm: Date
  atualizadoEm: Date
}

export type NovaFerramentaPersonalizada = Omit<
  FerramentaPersonalizada,
  'id' | 'userId' | 'criadoEm' | 'atualizadoEm'
>
