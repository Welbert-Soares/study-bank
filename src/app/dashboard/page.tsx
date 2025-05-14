'use client'

import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export default function DashboardPage() {
  return (
    <main className="min-h-screen p-4 md:p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Dashboard Diário
            </h1>
            <p className="text-gray-600 mt-1 capitalize">{dataFormatada}</p>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <Link href="/config">⚙️ Configurar</Link>
            </Button>
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <Link href="/">← Voltar ao Início</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>📋 Cronograma de Hoje</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Horário</TableHead>
                      <TableHead>Atividade</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="w-[100px]">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dashboard?.cronograma.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">
                          {item.horario}
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={item.disciplina?.cor || 'bg-blue-50'}
                          >
                            {item.atividade}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              item.status === 'completed'
                                ? 'default'
                                : item.status === 'in_progress'
                                ? 'secondary'
                                : 'outline'
                            }
                          >
                            {item.status === 'completed'
                              ? '✓ Concluído'
                              : item.status === 'in_progress'
                              ? '⌛ Em Andamento'
                              : '• Pendente'}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                item.id &&
                                handleAtividadeStatusChange(
                                  item.id,
                                  'completed',
                                )
                              }
                              className={
                                item.status === 'completed' ? 'bg-green-50' : ''
                              }
                            >
                              ✓
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                item.id &&
                                handleAtividadeStatusChange(
                                  item.id,
                                  'in_progress',
                                )
                              }
                              className={
                                item.status === 'in_progress'
                                  ? 'bg-yellow-50'
                                  : ''
                              }
                            >
                              ⌛
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>📊 Progresso por Disciplina</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {dashboard?.metricas.map((metrica) => (
                    <div key={metrica.id} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{metrica.nome}</span>
                        <span className="text-gray-500">
                          {metrica.progresso}%
                        </span>
                      </div>
                      <div className="flex gap-4 items-center">
                        <Progress
                          value={metrica.progresso}
                          className={metrica.cor}
                        />
                        <input
                          type="number"
                          min="0"
                          max="100"
                          value={metrica.progresso}
                          onChange={(e) =>
                            metrica.id &&
                            handleMetricaProgressoChange(
                              metrica.id,
                              parseInt(e.target.value),
                            )
                          }
                          className="w-16 px-2 py-1 border rounded"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>🎯 Objetivos do Dia</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {dashboard?.objetivos.map((objetivo, index) => (
                    <div
                      key={objetivo.id}
                      className="flex items-center gap-2 p-2 rounded-lg border bg-card"
                    >
                      <input
                        type="checkbox"
                        checked={objetivo.completo}
                        onChange={(e) =>
                          objetivo.id &&
                          handleObjetivoStatusChange(
                            objetivo.id,
                            e.target.checked,
                          )
                        }
                        className="w-4 h-4"
                      />
                      <Badge
                        variant="outline"
                        className="w-6 h-6 flex items-center justify-center p-1"
                      >
                        {index + 1}
                      </Badge>
                      <span
                        className={
                          objetivo.completo ? 'line-through text-gray-500' : ''
                        }
                      >
                        {objetivo.descricao}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>📚 Próximos Conteúdos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {dashboard?.proximosConteudos.map((conteudo, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="w-full justify-start p-2 hover:bg-blue-50"
                    >
                      {conteudo}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>📝 Links Úteis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start bg-blue-50 hover:bg-blue-100 text-blue-700"
                  asChild
                >
                  <Link href="/doc/anotacoes/exercicios">
                    ✍️ Exercícios do Dia
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start bg-green-50 hover:bg-green-100 text-green-700"
                  asChild
                >
                  <Link href="/doc/anotacoes/resumos">📝 Resumos</Link>
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start bg-purple-50 hover:bg-purple-100 text-purple-700"
                  asChild
                >
                  <Link href="/doc/metricas-progresso.md">
                    📈 Métricas Gerais
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
