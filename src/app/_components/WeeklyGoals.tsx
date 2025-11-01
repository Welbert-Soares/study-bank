import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

interface WeeklyGoalsProps {
  planoId: string
}

export async function WeeklyGoals({ planoId }: WeeklyGoalsProps) {
  // TODO: Buscar dados reais das metas semanais
  const metas = {
    periodo: '14/01 - 20/01',
    horasEstudo: {
      atual: 3,
      meta: 13,
      percentual: 18.1,
      unidade: 'min/20h00min',
    },
    questoes: {
      atual: 88,
      meta: 150,
      percentual: 58.7,
    },
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-gray-600 uppercase">
          Metas de Estudo Semanal
        </CardTitle>
        <button className="text-gray-400 hover:text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
        </button>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-xs text-gray-600">{metas.periodo}</div>

        {/* Horas de Estudo */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Horas de Estudo</span>
            <span className="text-xs text-gray-500">
              {metas.horasEstudo.unidade}
            </span>
          </div>
          <div className="relative">
            <Progress value={metas.horasEstudo.percentual} className="h-6" />
            <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white">
              {metas.horasEstudo.percentual.toFixed(1)}%
            </div>
          </div>
        </div>

        {/* Questões */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Questões</span>
            <span className="text-xs text-gray-500">
              {metas.questoes.atual}/{metas.questoes.meta}
            </span>
          </div>
          <div className="relative">
            <Progress
              value={metas.questoes.percentual}
              className="h-6 bg-gray-200"
            />
            <div
              className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white"
              style={{
                background: `linear-gradient(to right, #8B5CF6 ${metas.questoes.percentual}%, transparent ${metas.questoes.percentual}%)`,
              }}
            >
              {metas.questoes.percentual.toFixed(1)}%
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
