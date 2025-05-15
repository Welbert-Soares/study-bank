import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function ManagementSystem() {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle>📊 Sistema de Gestão</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">
              📋 Dashboards Diários
            </h3>
            <div className="space-y-2">
              <Badge
                variant="outline"
                className="w-full justify-start p-2 hover:bg-blue-50"
              >
                Objetivos e metas
              </Badge>
              <Badge
                variant="outline"
                className="w-full justify-start p-2 hover:bg-blue-50"
              >
                Cronograma detalhado
              </Badge>
              <Badge
                variant="outline"
                className="w-full justify-start p-2 hover:bg-blue-50"
              >
                Diagnóstico rápido
              </Badge>
              <Badge
                variant="outline"
                className="w-full justify-start p-2 hover:bg-blue-50"
              >
                Progresso das atividades
              </Badge>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">
              📈 Métricas de Progresso
            </h3>
            <div className="space-y-2">
              <Badge
                variant="outline"
                className="w-full justify-start p-2 hover:bg-green-50"
              >
                Desempenho por disciplina
              </Badge>
              <Badge
                variant="outline"
                className="w-full justify-start p-2 hover:bg-green-50"
              >
                Histórico de simulados
              </Badge>
              <Badge
                variant="outline"
                className="w-full justify-start p-2 hover:bg-green-50"
              >
                Tempo de estudo
              </Badge>
              <Badge
                variant="outline"
                className="w-full justify-start p-2 hover:bg-green-50"
              >
                Metas semanais
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
