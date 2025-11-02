import { listarPlanosAction } from '@/app/actions/planos.actions'
import { WeeklyGoals } from './_components/WeeklyGoals'
import { WeeklyStudyChart } from './_components/WeeklyStudyChart'
import { MotivationalQuote } from './_components/MotivationalQuote'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Plus, BookOpen, Calendar, Target } from 'lucide-react'

export const revalidate = 0 // Disable cache

export default async function Home() {
  const planos = await listarPlanosAction()
  const planoAtivo = planos.find((p) => p.ativo)

  if (!planoAtivo) {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <BookOpen className="w-16 h-16 text-gray-400" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Bem-vindo ao Study Bank
            </h2>
            <p className="text-gray-600 max-w-md mx-auto">
              Comece criando seu primeiro plano de estudos para organizar suas
              disciplinas e tópicos.
            </p>
            <Link href="/planos/novo">
              <Button size="lg" className="gap-2">
                <Plus className="w-5 h-5" />
                Criar Primeiro Plano
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto space-y-6 p-6">
      {/* Header com ações rápidas */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {planoAtivo.nome}
          </h1>
          <p className="text-gray-600 mt-1">
            {planoAtivo.edital && planoAtivo.cargo
              ? `${planoAtivo.edital} - ${planoAtivo.cargo}`
              : 'Dashboard de estudos'}
          </p>
        </div>
        <div className="flex gap-3">
          <Link href={`/planos/${planoAtivo.id}`}>
            <Button variant="outline" className="gap-2">
              <Target className="w-4 h-4" />
              Gerenciar Plano
            </Button>
          </Link>
          <Link href={`/planos/${planoAtivo.id}/planejamento`}>
            <Button variant="outline" className="gap-2">
              <Calendar className="w-4 h-4" />
              Planejamento Semanal
            </Button>
          </Link>
        </div>
      </div>

      {/* Citação Motivacional */}
      <MotivationalQuote />

      {/* Metas e Gráfico Semanal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <WeeklyGoals planoId={planoAtivo.id} />
        <WeeklyStudyChart planoId={planoAtivo.id} />
      </div>

      {/* Card informativo temporário */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">
          🚀 Sistema em Desenvolvimento
        </h3>
        <p className="text-blue-800">
          As funcionalidades de registro de estudos, métricas e consistência
          estão sendo reconstruídas na nova arquitetura. Em breve você poderá
          acompanhar seu progresso diretamente aqui!
        </p>
      </div>
    </div>
  )
}
