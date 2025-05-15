'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import HistoricoSkeleton from '@/components/skeletons/historico-skeleton'
import { buscarHistoricoPorDiaAction } from '../actions/historico.actions'
import type { RegistroDiario } from '@/services/historico/types'
import { PageHeader } from './_components/PageHeader'
import { StudyDayCard } from './_components/StudyDayCard'

export default function HistoricoPage() {
  const [historico, setHistorico] = useState<RegistroDiario[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function carregarDados() {
      try {
        setIsLoading(true)
        const dados = await buscarHistoricoPorDiaAction()
        setHistorico(dados)
      } catch (error) {
        console.error('Erro ao carregar histórico:', error)
      } finally {
        setIsLoading(false)
      }
    }
    carregarDados()
  }, [])

  if (isLoading) {
    return (
      <main className="min-h-screen p-4 md:p-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <HistoricoSkeleton />
        </div>
      </main>
    )
  }

  return (
    <main className="w-full min-h-screen p-4 md:p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-8">
        <PageHeader
          title="Histórico de Estudos"
          subtitle="Calendário de atividades do mês"
          backLink="/dashboard"
          backLinkText="← Voltar ao Dashboard"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {historico.map((dia) => (
            <StudyDayCard key={dia.data} dia={dia} />
          ))}

          {historico.length === 0 && (
            <Card className="shadow-md">
              <CardContent className="p-6">
                <p className="text-center text-gray-500">
                  Nenhum registro de estudo encontrado.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </main>
  )
}
