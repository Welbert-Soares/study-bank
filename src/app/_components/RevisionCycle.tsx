import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export function RevisionCycle() {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle>🎯 Ciclo de Revisão</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-semibold text-gray-700 mb-3">Diário</h3>
          <div className="space-y-2">
            <Badge
              variant="outline"
              className="w-full justify-start p-2 hover:bg-blue-50"
            >
              Flash cards dos temas
            </Badge>
            <Badge
              variant="outline"
              className="w-full justify-start p-2 hover:bg-blue-50"
            >
              Resolução de exercícios
            </Badge>
            <Badge
              variant="outline"
              className="w-full justify-start p-2 hover:bg-blue-50"
            >
              Atualização do dashboard
            </Badge>
          </div>
        </div>
        <Separator className="my-4" />
        <div>
          <h3 className="font-semibold text-gray-700 mb-3">Semanal</h3>
          <div className="space-y-2">
            <Badge
              variant="outline"
              className="w-full justify-start p-2 hover:bg-purple-50"
            >
              Simulados parciais
            </Badge>
            <Badge
              variant="outline"
              className="w-full justify-start p-2 hover:bg-purple-50"
            >
              Revisão de tópicos fracos
            </Badge>
            <Badge
              variant="outline"
              className="w-full justify-start p-2 hover:bg-purple-50"
            >
              Atualização de métricas
            </Badge>
          </div>
        </div>
        <Separator className="my-4" />
        <div>
          <h3 className="font-semibold text-gray-700 mb-3">Mensal</h3>
          <div className="space-y-2">
            <Badge
              variant="outline"
              className="w-full justify-start p-2 hover:bg-yellow-50"
            >
              Análise de progresso
            </Badge>
            <Badge
              variant="outline"
              className="w-full justify-start p-2 hover:bg-yellow-50"
            >
              Ajuste de estratégias
            </Badge>
            <Badge
              variant="outline"
              className="w-full justify-start p-2 hover:bg-yellow-50"
            >
              Revisão geral
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
