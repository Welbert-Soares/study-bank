'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { MetricaGeral } from '@/app/actions/metricas.actions'

function getStatusText(progresso: number): string {
  if (progresso >= 100) return 'Concluído'
  if (progresso >= 75) return 'Avançado'
  if (progresso >= 50) return 'Em andamento'
  if (progresso >= 25) return 'Iniciado'
  return 'Pendente'
}

interface SubjectProgressCardProps {
  metrica: MetricaGeral
}

export function SubjectProgressCard({ metrica }: SubjectProgressCardProps) {
  return (
    <Card
      className={`shadow-md hover:shadow-lg transition-shadow border-l-4 ${metrica.cor.replace(
        'bg-',
        'border-',
      )}`}
    >
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex justify-between items-center">
          {metrica.disciplina}
          <span className="text-2xl font-bold">{metrica.progresso}%</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Progress value={metrica.progresso} className={metrica.cor} />
          <p className="text-sm text-gray-600">
            Status: {getStatusText(metrica.progresso)}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
