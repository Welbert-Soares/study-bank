'use client'

import { MetricaGeral } from '@/app/actions/metricas.actions'
import { SubjectProgressCard } from './SubjectProgressCard'

interface SubjectCategorySectionProps {
  title: string
  metricas: MetricaGeral[]
  filter: (metrica: MetricaGeral) => boolean
}

export function SubjectCategorySection({
  title,
  metricas,
  filter,
}: SubjectCategorySectionProps) {
  const filteredMetricas = metricas.filter(filter)

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-gray-700">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredMetricas.map((metrica) => (
          <SubjectProgressCard key={metrica.id} metrica={metrica} />
        ))}
      </div>
    </div>
  )
}
