'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MetricaGeral } from '@/app/actions/metricas.actions'

interface ProgressSummaryCardProps {
  metricas: MetricaGeral[]
}

export function ProgressSummaryCard({ metricas }: ProgressSummaryCardProps) {
  const mediaProgresso = Math.round(
    metricas.reduce((acc, m) => acc + m.progresso, 0) / metricas.length,
  )

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="text-xl">Resumo do Progresso</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{mediaProgresso}%</div>
        <p className="text-sm text-gray-600">Progresso médio geral</p>
      </CardContent>
    </Card>
  )
}
