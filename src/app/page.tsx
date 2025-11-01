import { listarPlanosAction } from '@/app/actions/planos.actions'
import { MetricsCards } from './_components/MetricsCards'
import { StudyConsistency } from './_components/StudyConsistency'
import { DisciplinesPanel } from './_components/DisciplinesPanel'
import { WeeklyGoals } from './_components/WeeklyGoals'
import { WeeklyStudyChart } from './_components/WeeklyStudyChart'
import { MotivationalQuote } from './_components/MotivationalQuote'

export const revalidate = 0 // Disable cache

export default async function Home() {
  const planos = await listarPlanosAction()
  const planoAtivo = planos.find((p) => p.ativo)

  if (!planoAtivo) {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Nenhum plano ativo
            </h2>
            <p className="text-gray-600">
              Selecione um plano no menu superior para começar
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto space-y-6 p-6">
      {/* Cards de Métricas e Citação Motivacional */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricsCards planoId={planoAtivo.id} />
        <MotivationalQuote />
      </div>

      {/* Constância nos Estudos */}
      <div>
        <StudyConsistency planoId={planoAtivo.id} />
      </div>

      {/* Painel de Disciplinas e Metas */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <DisciplinesPanel planoId={planoAtivo.id} />
        </div>
        <div className="space-y-6">
          <WeeklyGoals planoId={planoAtivo.id} />
          <WeeklyStudyChart planoId={planoAtivo.id} />
        </div>
      </div>
    </div>
  )
}
