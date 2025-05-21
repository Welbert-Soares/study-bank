'use server'

import { auth } from '@clerk/nextjs/server'
import {
  MetricasService,
  type MetricaGeral,
} from '@/services/metricas/MetricasService'

export type { MetricaGeral }

export async function getMetricasGeraisAction(): Promise<MetricaGeral[]> {
  const session = await auth()
  if (!session.userId) throw new Error('Unauthorized')
  const metricasService = new MetricasService()
  return await metricasService.obterMetricasGerais(session.userId)
}
