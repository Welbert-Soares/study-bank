'use client'

import { useState, useEffect } from 'react'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import Link from 'next/link'
import type { DisciplinaDoDia } from '../../actions/historico.actions'
import { buscarHistoricoDoDia } from '../../actions/historico.actions'

function formatarDiaSemana(dia: string): string {
  const diasDaSemana: Record<string, string> = {
    Segunda: 'Segunda-feira',
    Terca: 'Terça-feira',
    Quarta: 'Quarta-feira',
    Quinta: 'Quinta-feira',
    Sexta: 'Sexta-feira',
    Sabado: 'Sábado',
    Domingo: 'Domingo',
  }

  return diasDaSemana[dia] || dia
}

function getStatusColor(status: string): string {
  switch (status) {
    case 'concluido':
      return 'bg-green-100 text-green-800 border-green-300'
    case 'em_progresso':
      return 'bg-yellow-100 text-yellow-800 border-yellow-300'
    default:
      return 'bg-gray-100 text-gray-800 border-gray-300'
  }
}

export type PageParams = {
  dia: string
}

export default function DetalhesHistoricoPage({
  params,
}: {
  params: PageParams
}) {
  const { dia } = params
  const [disciplinas, setDisciplinas] = useState<DisciplinaDoDia[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function carregarDados() {
      try {
        setIsLoading(true)
        const dados = await buscarHistoricoDoDia(dia)
        setDisciplinas(dados)
      } catch (error) {
        setError('Erro ao carregar o histórico')
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }
    carregarDados()
  }, [dia])

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center p-8">
        <p className="text-destructive">{error}</p>
        <Link href="/historico">
          <Button variant="outline" className="mt-4">
            Voltar
          </Button>
        </Link>
      </div>
    )
  }

  if (isLoading) {
    return (
      <main className="min-h-screen p-4 md:p-8 bg-gray-50">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="animate-pulse">
            <div className="flex justify-between items-center mb-8">
              <div className="space-y-2">
                <div className="h-8 w-64 bg-gray-200 rounded-md" />
                <div className="h-4 w-48 bg-gray-200 rounded-md" />
              </div>
              <div className="h-10 w-32 bg-gray-200 rounded-md" />
            </div>

            <div className="rounded-md border bg-white">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[300px]">Matéria</TableHead>
                    <TableHead>Conteúdo</TableHead>
                    <TableHead className="w-[150px]">Status</TableHead>
                    <TableHead className="w-[150px]">Progresso</TableHead>
                    <TableHead className="w-[150px]">Tempo</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Array.from({ length: 2 })
                    .map((_, i) => [
                      <TableRow
                        key={`group-${i}`}
                        className="hover:bg-transparent"
                      >
                        <TableCell colSpan={5} className="bg-gray-50 p-2">
                          <div className="flex items-center justify-between px-2">
                            <div className="h-6 w-24 bg-gray-200 rounded-full" />
                            <div className="h-4 w-16 bg-gray-200 rounded-md" />
                          </div>
                        </TableCell>
                      </TableRow>,
                      ...Array.from({ length: 2 }).map((_, j) => (
                        <TableRow key={`item-${i}-${j}`}>
                          <TableCell className="max-w-[300px]">
                            <div className="h-4 w-3/4 bg-gray-200 rounded-md" />
                          </TableCell>
                          <TableCell>
                            <div className="space-y-2">
                              <div className="h-8 w-full bg-gray-200 rounded-md" />
                              <div className="h-4 w-3/4 bg-gray-200 rounded-md" />
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="h-6 w-24 bg-gray-200 rounded-full" />
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <div className="flex justify-between">
                                <div className="h-3 w-12 bg-gray-200 rounded-md" />
                                <div className="h-3 w-8 bg-gray-200 rounded-md" />
                              </div>
                              <div className="h-2 w-full bg-gray-200 rounded-full" />
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="h-4 w-16 bg-gray-200 rounded-md" />
                          </TableCell>
                        </TableRow>
                      )),
                    ])
                    .flat()}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </main>
    )
  }

  if (disciplinas.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8">
        <p>Nenhum estudo registrado para este dia.</p>
        <Link href="/historico">
          <Button variant="outline" className="mt-4">
            Voltar
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <main className="min-h-screen p-4 md:p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              {formatarDiaSemana(dia)}
            </h1>
            <p className="text-gray-600">Detalhes das atividades do dia</p>
          </div>
          <Button variant="outline" size="lg" className="gap-2" asChild>
            <Link href="/historico">← Voltar ao Histórico</Link>
          </Button>
        </div>

        <div className="rounded-md border bg-white">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">Matéria</TableHead>
                <TableHead>Conteúdo</TableHead>
                <TableHead className="w-[150px]">Status</TableHead>
                <TableHead className="w-[150px]">Progresso</TableHead>
                <TableHead className="w-[150px]">Tempo</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {disciplinas
                .map((disciplina) => [
                  <TableRow
                    key={disciplina.disciplina}
                    className="hover:bg-transparent"
                  >
                    <TableCell colSpan={5} className="bg-gray-50 p-2">
                      <div className="flex items-center justify-between px-2">
                        <Badge variant="secondary" className="text-base">
                          {disciplina.disciplina}
                        </Badge>
                        <span className="text-sm text-gray-500">
                          {disciplina.materias.length} matéria(s)
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>,
                  ...disciplina.materias.map((materia) => (
                    <TableRow key={materia.id}>
                      <TableCell className="font-medium">
                        {materia.titulo}
                      </TableCell>
                      <TableCell>
                        {materia.descricao && (
                          <div className="text-sm text-gray-600">
                            <p className="line-clamp-2">{materia.descricao}</p>
                            {materia.anotacoes && (
                              <div className="mt-2 text-xs bg-gray-50 p-2 rounded border">
                                <span className="font-medium text-gray-700">
                                  Anotações:
                                </span>{' '}
                                <span className="text-gray-600">
                                  {materia.anotacoes}
                                </span>
                              </div>
                            )}
                          </div>
                        )}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="secondary"
                          className={`whitespace-nowrap ${getStatusColor(
                            materia.status,
                          )}`}
                        >
                          {materia.status.replace('_', ' ')}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="w-full space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-600">Progresso</span>
                            <span className="font-medium">
                              {materia.progresso}%
                            </span>
                          </div>
                          <Progress value={materia.progresso} className="h-2" />
                        </div>
                      </TableCell>
                      <TableCell>
                        {materia.tempoEstudado ? (
                          <span className="text-sm text-gray-600">
                            {Math.floor(materia.tempoEstudado / 60)}h{' '}
                            {materia.tempoEstudado % 60}min
                          </span>
                        ) : (
                          <span className="text-sm text-gray-400">-</span>
                        )}
                      </TableCell>
                    </TableRow>
                  )),
                ])
                .flat()}

              {disciplinas.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="h-24 text-center">
                    <p className="text-gray-500">
                      Nenhum registro encontrado para este dia.
                    </p>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  )
}
