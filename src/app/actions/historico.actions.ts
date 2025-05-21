'use server'

import { auth } from '@clerk/nextjs/server'
import { historicoService } from '@/services/historico/service'
import type {
  DisciplinaDoDia,
  RegistroDiario,
} from '@/services/historico/types'

export async function buscarHistoricoPorDiaAction(): Promise<RegistroDiario[]> {
  const session = await auth()
  if (!session.userId) throw new Error('Unauthorized')
  return historicoService.buscarHistoricoPorDia(session.userId)
}

export async function buscarHistoricoDoDiaAction(
  data: string,
): Promise<DisciplinaDoDia[]> {
  const session = await auth()
  if (!session.userId) throw new Error('Unauthorized')
  return historicoService.buscarHistoricoDoDia(data, session.userId)
}
