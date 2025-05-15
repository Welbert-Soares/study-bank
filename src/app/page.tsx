import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Progress } from '@/components/ui/progress'
import { getWeeklyPlanAction } from '@/app/actions/home.actions'

export default async function Home() {
  const studyPlan = await getWeeklyPlanAction()

  return (
    <main className="min-h-screen p-4 md:p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-8">
        <Card className="border-none shadow-none bg-transparent">
          <CardHeader>
            <CardTitle className="text-4xl font-bold text-blue-900 mb-4">
              Banco do Brasil - Concurso TI
            </CardTitle>
            <div className="flex flex-wrap gap-4">
              <Button
                variant="default"
                size="lg"
                className="bg-white hover:bg-blue-50 text-blue-600 hover:text-blue-800 border shadow-sm hover:shadow-md transition-all"
                asChild
              >
                <a
                  href="https://www.notion.so/154e31f45426811f95d3e4522fdf9298?v=154e31f45426810c9af4000c7a64e002"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📊 Kanban Board (Notion)
                </a>
              </Button>
              <Button
                variant="default"
                size="lg"
                className="bg-white hover:bg-blue-50 text-blue-600 hover:text-blue-800 border shadow-sm hover:shadow-md transition-all"
                asChild
              >
                <a
                  href="https://quizlet.com/user/Welbert_Soares/folders/banco-do-brasil?i=6jvs8z&x=1xqt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🗂️ Flashcards (Quizlet)
                </a>
              </Button>
              <Button
                variant="default"
                size="lg"
                className="bg-white hover:bg-blue-50 text-blue-600 hover:text-blue-800 border shadow-sm hover:shadow-md transition-all"
                asChild
              >
                <a href="/metricas">📈 Métricas Gerais</a>
              </Button>
            </div>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>📚 Plano de Estudos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg overflow-hidden border bg-white">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50 hover:bg-gray-50">
                        <TableHead className="py-3">Dia</TableHead>
                        <TableHead className="py-3">Disciplina 1</TableHead>
                        <TableHead className="py-3">Disciplina 2</TableHead>
                        <TableHead className="py-3">Redação</TableHead>
                        <TableHead className="py-3">Revisões</TableHead>
                        <TableHead className="py-3">Progresso</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {studyPlan.map((day) => (
                        <TableRow key={day.day} className="hover:bg-gray-50">
                          <TableCell className="font-medium py-3">
                            {day.day}
                          </TableCell>
                          <TableCell className="py-3">
                            {day.discipline1 || '-'}
                          </TableCell>
                          <TableCell className="py-3">
                            {day.discipline2 || '-'}
                          </TableCell>
                          <TableCell className="py-3">
                            {day.writing ? '✓' : '-'}
                          </TableCell>
                          <TableCell className="py-3">
                            {day.revisoes > 0 ? (
                              <div className="flex flex-col gap-1">
                                {day.revisoesTitulos?.map((titulo, index) => (
                                  <span
                                    key={index}
                                    className="text-sm text-gray-600"
                                  >
                                    • {titulo.replace('Revisão: ', '')}
                                  </span>
                                ))}
                              </div>
                            ) : (
                              '-'
                            )}
                          </TableCell>
                          <TableCell className="py-3">
                            <Progress
                              value={day.progress}
                              className="w-[60px]"
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

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
          </div>

          <div className="space-y-8">
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
                  <a href="/doc/metricas-progresso.md">
                    📈 Métricas de Progresso
                  </a>
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
          </div>
        </div>
      </div>
    </main>
  )
}
