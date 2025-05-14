'use client'

import { useEffect, useState } from 'react'
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
import { Progress } from '@/components/ui/progress'
import Link from 'next/link'
import {
  DashboardData,
  getDashboardData,
  atualizarStatusAtividade,
  atualizarStatusObjetivo,
  atualizarProgressoDisciplina,
  atualizarStatusRevisao,
} from '@/app/actions/dashboard.actions'
import { StatusConteudo, DisciplinaNome } from '@/generated/prisma'
import { DashboardSkeleton } from '@/components/skeletons/dashboard-skeleton'

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
            {/* Seção de Revisão */}
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>🔄 Revisão do Dia Anterior</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Matéria</TableHead>
                      <TableHead>Disciplina</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Ação</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dashboard.revisoes.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">
                          {item.titulo}
                        </TableCell>
                        <TableCell>{item.disciplina}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={
                              item.status === 'concluido'
                                ? 'bg-green-100'
                                : item.status === 'em_progresso'
                                ? 'bg-yellow-100'
                                : ''
                            }
                          >
                            {item.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() =>
                                handleRevisaoStatusChange(
                                  item.id,
                                  'em_progresso',
                                )
                              }
                              disabled={item.status === 'concluido'}
                            >
                              🔄 Revisar
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() =>
                                handleRevisaoStatusChange(item.id, 'concluido')
                              }
                              disabled={item.status === 'concluido'}
                            >
                              ✓
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
                <CardTitle>📋 Cronograma de Hoje</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Atividade</TableHead>
                      <TableHead>Disciplina</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="w-[100px]">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dashboard.cronograma.map((item) => (
                      <TableRow
                        key={item.id}
                        className={
                          item.status === 'concluido'
                            ? 'bg-green-50'
                            : item.status === 'em_progresso'
                            ? 'bg-yellow-50'
                            : ''
                        }
                      >
                        <TableCell className="font-medium">
                          {item.titulo}
                        </TableCell>
                        <TableCell>{item.disciplina}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="capitalize">
                            {item.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() =>
                                handleAtividadeStatusChange(
                                  item.id,
                                  'em_progresso',
                                )
                              }
                              disabled={item.status === 'concluido'}
                            >
                              ▶️
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() =>
                                handleAtividadeStatusChange(
                                  item.id,
                                  'concluido',
                                )
                              }
                              disabled={item.status === 'concluido'}
                            >
                              ✓
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
                  {dashboard.metricas.map((metrica) => (
                    <div key={metrica.id} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">
                          {metrica.disciplina}
                        </span>
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
                  {dashboard.objetivos.map((objetivo) => (
                    <div
                      key={objetivo.id}
                      className="flex items-center gap-2 p-2 rounded-lg border bg-card"
                    >
                      <input
                        type="checkbox"
                        checked={objetivo.completo}
                        onChange={(e) =>
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
                        {objetivo.prioridade}
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
                  {dashboard.proximosConteudos.map((conteudo, index) => (
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
