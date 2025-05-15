'use server'

import { historicoService } from '@/services/historico/service'
import type {
  DisciplinaDoDia,
  RegistroDiario,
} from '@/services/historico/types'

export async function buscarHistoricoPorDiaAction(): Promise<RegistroDiario[]> {
  return historicoService.buscarHistoricoPorDia()
}

export async function buscarHistoricoDoDiaAction(
  data: string,
): Promise<DisciplinaDoDia[]> {
  return historicoService.buscarHistoricoDoDia(data)
}
