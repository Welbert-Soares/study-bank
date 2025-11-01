import { Card, CardContent, CardHeader } from '@/components/ui/card'

interface MetricsCardsProps {
  planoId: string
}

export async function MetricsCards({ planoId }: MetricsCardsProps) {
  // TODO: Buscar dados reais do banco
  const metrics = {
    tempoEstudo: '46h53min',
    desempenho: {
      acertos: 142,
      erros: 47,
      percentual: 75,
    },
    progresso: {
      concluidos: 6,
      pendentes: 86,
      percentual: 7,
    },
  }

  return (
    <>
      {/* Tempo de Estudo */}
      <Card className="bg-white">
        <CardHeader className="pb-0 pt-3 px-4">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            Tempo de Estudo
          </p>
        </CardHeader>
        <CardContent className="pt-1 pb-3 px-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">
              {metrics.tempoEstudo}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Desempenho */}
      <Card className="bg-white">
        <CardHeader className="pb-0 pt-3 px-4">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            Desempenho
          </p>
        </CardHeader>
        <CardContent className="pt-1 pb-3 px-4 space-y-1">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">
              {metrics.desempenho.percentual}%
            </div>
          </div>
          <div className="flex flex-col text-xs">
            <div className="text-green-600 font-medium">
              {metrics.desempenho.acertos} Acertos
            </div>
            <div className="text-red-600 font-medium">
              {metrics.desempenho.erros} Erro
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Progresso no Edital */}
      <Card className="bg-white">
        <CardHeader className="pb-0 pt-3 px-4">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            Progresso no Edital
          </p>
        </CardHeader>
        <CardContent className="pt-1 pb-3 px-4 space-y-1">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">
              {metrics.progresso.percentual}%
            </div>
          </div>
          <div className="flex flex-col text-xs">
            <div className="text-green-600 font-medium">
              {metrics.progresso.concluidos} Tópicos Concluídos
            </div>
            <div className="text-red-600 font-medium">
              {metrics.progresso.pendentes} Tópicos Pendentes
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
