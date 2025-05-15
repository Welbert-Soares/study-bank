import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function QuickLinks() {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle>📁 Links Rápidos</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Button
          variant="outline"
          className="w-full justify-start bg-blue-50 hover:bg-blue-100 text-blue-700"
          asChild
        >
          <a href="/dashboard">📊 Dashboard de Hoje</a>
        </Button>
        <Button
          variant="outline"
          className="w-full justify-start bg-green-50 hover:bg-green-100 text-green-700"
          asChild
        >
          <a href="/doc/metricas-progresso.md">📈 Métricas de Progresso</a>
        </Button>
        <Button
          variant="outline"
          className="w-full justify-start bg-yellow-50 hover:bg-yellow-100 text-yellow-700"
          asChild
        >
          <a href="/doc/anotacoes/exercicios">✍️ Exercícios</a>
        </Button>
        <Button
          variant="outline"
          className="w-full justify-start bg-purple-50 hover:bg-purple-100 text-purple-700"
          asChild
        >
          <a href="/doc/anotacoes/resumos">📝 Resumos</a>
        </Button>
      </CardContent>
    </Card>
  )
}
