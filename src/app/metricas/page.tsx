'use client'

import { useState, useEffect } from 'react'
import { getMetricasGerais, MetricaGeral } from '../actions/metricas.actions'
import { MetricasPageSkeleton } from '@/components/skeletons/metricas-skeleton'

// Import components
import { MetricasHeader } from './_components/MetricasHeader'
import { ProgressSummaryCard } from './_components/ProgressSummaryCard'
import { SubjectCategorySection } from './_components/SubjectCategorySection'

export default function MetricasPage() {
  const [metricas, setMetricas] = useState<MetricaGeral[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      try {
        setIsLoading(true)
        const data = await getMetricasGerais()
        setMetricas(data)
      } catch (error) {
        console.error('Erro ao carregar métricas:', error)
      } finally {
        setIsLoading(false)
      }
    }
    loadData()
  }, [])

  return (
    <main className="w-full flex flex-col min-h-screen p-4 md:p-8 bg-gray-50">
      <div className="space-y-8 mx-auto lg:w-3/4">
        <MetricasHeader />

        {isLoading ? (
          <MetricasPageSkeleton />
        ) : (
          <>
            <ProgressSummaryCard metricas={metricas} />

            <div className="grid grid-cols-1 gap-8">
              <SubjectCategorySection
                title="Disciplinas Principais"
                metricas={metricas}
                filter={(m) =>
                  ['Matematica', 'TI', 'Portugues'].includes(m.disciplina)
                }
              />

              <SubjectCategorySection
                title="Disciplinas Complementares"
                metricas={metricas}
                filter={(m) =>
                  !['Matematica', 'TI', 'Portugues', 'Revisoes'].includes(
                    m.disciplina,
                  )
                }
              />

              <SubjectCategorySection
                title="Revisões"
                metricas={metricas}
                filter={(m) => m.disciplina === 'Revisoes'}
              />
            </div>
          </>
        )}
      </div>
    </main>
  )
}
