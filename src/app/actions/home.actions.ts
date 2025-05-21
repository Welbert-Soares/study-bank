'use server'

import { auth } from '@clerk/nextjs/server'
import {
  planoEstudosService,
  type PlanoEstudoDia,
} from '@/services/estudos/plano-estudos.service'

export type StudyPlanDay = PlanoEstudoDia

export async function getWeeklyPlanAction(): Promise<StudyPlanDay[]> {
  try {
    const session = await auth()
    if (!session.userId) throw new Error('Unauthorized')
    return await planoEstudosService.obterPlanoSemanal(session.userId)
  } catch (error) {
    console.error('Erro ao obter plano semanal:', error)
    throw new Error('Não foi possível carregar o plano de estudos semanal')
  }
}
