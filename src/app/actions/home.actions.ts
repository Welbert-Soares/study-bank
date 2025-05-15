'use server'

import {
  planoEstudosService,
  type PlanoEstudoDia,
} from '@/services/estudos/plano-estudos.service'

export type StudyPlanDay = PlanoEstudoDia

export async function getWeeklyPlanAction(): Promise<StudyPlanDay[]> {
  try {
    return await planoEstudosService.obterPlanoSemanal()
  } catch (error) {
    console.error('Erro ao obter plano semanal:', error)
    throw new Error('Não foi possível carregar o plano de estudos semanal')
  }
}
