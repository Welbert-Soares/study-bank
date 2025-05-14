'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { getMetricasGerais, MetricaGeral } from '../actions/metricas.actions'
import { MetricasPageSkeleton } from '@/components/skeletons/metricas-skeleton'

function getStatusText(progresso: number): string {
  if (progresso >= 100) return 'Concluído'
  if (progresso >= 75) return 'Avançado'
  if (progresso >= 50) return 'Em andamento'
  if (progresso >= 25) return 'Iniciado'
  return 'Pendente'
}

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
    <main className="min-h-screen p-4 md:p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Métricas Gerais
            </h1>
            <p className="text-gray-600">Progresso geral por disciplina</p>
          </div>
          <Button variant="outline" size="lg" className="gap-2" asChild>
            <Link href="/dashboard">← Voltar ao Dashboard</Link>
          </Button>
        </div>

        {isLoading ? (
          <MetricasPageSkeleton />
        ) : (
          <>
            {/* Sumário Geral */}
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl">Resumo do Progresso</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {Math.round(
                    metricas.reduce((acc, m) => acc + m.progresso, 0) /
                      metricas.length,
                  )}
                  %
                </div>
                <p className="text-sm text-gray-600">Progresso médio geral</p>
              </CardContent>
            </Card>

            {/* Categorias */}
            <div className="grid grid-cols-1 gap-8">
              {/* Disciplinas Principais */}
              <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-700">
                  Disciplinas Principais
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {metricas
                    .filter((m) =>
                      ['Matematica', 'TI', 'Portugues'].includes(m.disciplina),
                    )
                    .map((metrica) => (
                      <Card
                        key={metrica.id}
                        className={`shadow-md hover:shadow-lg transition-shadow border-l-4 ${metrica.cor.replace(
                          'bg-',
                          'border-',
                        )}`}
                      >
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg flex justify-between items-center">
                            {metrica.disciplina}
                            <span className="text-2xl font-bold">
                              {metrica.progresso}%
                            </span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <Progress
                              value={metrica.progresso}
                              className={metrica.cor}
                            />
                            <p className="text-sm text-gray-600">
                              Status: {getStatusText(metrica.progresso)}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>

              {/* Disciplinas Complementares */}
              <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-700">
                  Disciplinas Complementares
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {metricas
                    .filter(
                      (m) =>
                        !['Matematica', 'TI', 'Portugues', 'Revisoes'].includes(
                          m.disciplina,
                        ),
                    )
                    .map((metrica) => (
                      <Card
                        key={metrica.id}
                        className={`shadow-md hover:shadow-lg transition-shadow border-l-4 ${metrica.cor.replace(
                          'bg-',
                          'border-',
                        )}`}
                      >
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg flex justify-between items-center">
                            {metrica.disciplina}
                            <span className="text-2xl font-bold">
                              {metrica.progresso}%
                            </span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <Progress
                              value={metrica.progresso}
                              className={metrica.cor}
                            />
                            <p className="text-sm text-gray-600">
                              Status: {getStatusText(metrica.progresso)}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>

              {/* Revisões */}
              <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-700">
                  Revisões
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {metricas
                    .filter((m) => m.disciplina === 'Revisoes')
                    .map((metrica) => (
                      <Card
                        key={metrica.id}
                        className={`shadow-md hover:shadow-lg transition-shadow border-l-4 ${metrica.cor.replace(
                          'bg-',
                          'border-',
                        )}`}
                      >
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg flex justify-between items-center">
                            {metrica.disciplina}
                            <span className="text-2xl font-bold">
                              {metrica.progresso}%
                            </span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <Progress
                              value={metrica.progresso}
                              className={metrica.cor}
                            />
                            <p className="text-sm text-gray-600">
                              Status: {getStatusText(metrica.progresso)}
                            </p>
                          </div>{' '}
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  )
}
