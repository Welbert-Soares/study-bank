'use server'

import {
  MetricasService,
  type MetricaGeral,
} from '@/services/metricas/MetricasService'

export type { MetricaGeral }

export async function getMetricasGeraisAction(): Promise<MetricaGeral[]> {
  const metricasService = new MetricasService()
  return await metricasService.obterMetricasGerais()
}
