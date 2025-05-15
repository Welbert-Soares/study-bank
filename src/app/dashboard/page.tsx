'use client'

import { useEffect, useState } from 'react'
import {
  type DashboardData,
  getDashboardDataAction as getDashboardData,
  atualizarStatusAtividadeAction as atualizarStatusAtividade,
  atualizarStatusObjetivoAction as atualizarStatusObjetivo,
  atualizarProgressoDisciplinaAction as atualizarProgressoDisciplina,
  atualizarStatusRevisaoAction as atualizarStatusRevisao,
} from '@/app/actions/dashboard.actions'
import type { StatusConteudo, DisciplinaNome } from '@prisma/client'
import { DashboardSkeleton } from '@/components/skeletons/dashboard-skeleton'

// Import components
import { DashboardHeader } from './_components/DashboardHeader'
import { RevisaoCard } from './_components/RevisaoCard'
import { CronogramaCard } from './_components/CronogramaCard'
import { ProgressoDisciplinasCard } from './_components/ProgressoDisciplinasCard'
import { ObjetivosCard } from './_components/ObjetivosCard'
import { ProximosConteudosCard } from './_components/ProximosConteudosCard'
import { LinksUteisCard } from './_components/LinksUteisCard'

export default function DashboardPage() {
  const [dashboard, setDashboard] = useState<DashboardData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const dataAtual = new Date()
  const dataFormatada = dataAtual.toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        setIsLoading(true)
        const data = await getDashboardData(new Date())
        setDashboard(data)
      } catch (error) {
        console.error('Erro ao carregar dados:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadDashboard()
  }, [])

  const handleMetricaProgressoChange = async (id: string, valor: number) => {
    try {
      await atualizarProgressoDisciplina(id as DisciplinaNome, valor)
      const data = await getDashboardData(new Date())
      setDashboard(data)
    } catch (error) {
      console.error('Erro ao atualizar progresso:', error)
    }
  }

  const handleAtividadeStatusChange = async (
    id: string,
    status: StatusConteudo,
  ) => {
    try {
      await atualizarStatusAtividade(id, status)
      const data = await getDashboardData(new Date())
      setDashboard(data)
    } catch (error) {
      console.error('Erro ao atualizar status da atividade:', error)
    }
  }

  const handleObjetivoStatusChange = async (id: string, completo: boolean) => {
    try {
      await atualizarStatusObjetivo(id, completo)
      const data = await getDashboardData(new Date())
      setDashboard(data)
    } catch (error) {
      console.error('Erro ao atualizar status do objetivo:', error)
    }
  }

  const handleRevisaoStatusChange = async (
    id: string,
    status: StatusConteudo,
  ) => {
    try {
      await atualizarStatusRevisao(id, status)
      const data = await getDashboardData(new Date())
      setDashboard(data)
    } catch (error) {
      console.error('Erro ao atualizar status da revisão:', error)
    }
  }

  if (isLoading) {
    return (
      <main className="w-full min-h-screen p-4 md:p-8 bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-8">
          <DashboardHeader dataFormatada={dataFormatada} />
          <DashboardSkeleton />
        </div>
      </main>
    )
  }

  if (!dashboard) {
    return null
  }

  return (
    <main className="min-h-screen p-4 md:p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-8">
        <DashboardHeader dataFormatada={dataFormatada} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <RevisaoCard
              revisoes={dashboard.revisoes}
              onStatusChange={handleRevisaoStatusChange}
            />

            <CronogramaCard
              cronograma={dashboard.cronograma}
              onStatusChange={handleAtividadeStatusChange}
            />

            <ProgressoDisciplinasCard
              metricas={dashboard.metricas}
              onProgressoChange={handleMetricaProgressoChange}
            />
          </div>

          <div className="space-y-8">
            <ObjetivosCard
              objetivos={dashboard.objetivos}
              onStatusChange={handleObjetivoStatusChange}
            />

            <ProximosConteudosCard conteudos={dashboard.proximosConteudos} />

            <LinksUteisCard />
          </div>
        </div>
      </div>
    </main>
  )
}
