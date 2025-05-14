'use client'

import { useState, useEffect } from 'react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import HistoricoSkeleton from '@/components/skeletons/historico-skeleton'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import type {
  MateriaDoDia,
  DisciplinaDoDia,
} from '../actions/historico.actions'
import {
  buscarHistoricoDeEstudos,
  RegistroDiario,
} from '../actions/historico.actions'

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

export default function HistoricoPage() {
  const [historico, setHistorico] = useState<RegistroDiario[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function carregarDados() {
      try {
        setIsLoading(true)
        const dados = await buscarHistoricoDeEstudos() // Usando nova função
        if (dados) {
          setHistorico(dados)
        }
      } catch (error) {
        console.error('Erro ao carregar histórico:', error)
      } finally {
        setIsLoading(false)
      }
    }
    carregarDados()
  }, [])

  if (isLoading) {
    return (
      <main className="min-h-screen p-4 md:p-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <HistoricoSkeleton />
        </div>
      </main>
    )
  }

  return (
    <main className="w-full min-h-screen p-4 md:p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Histórico de Estudos
            </h1>
            <p className="text-gray-600">Calendário de atividades do mês</p>
          </div>
          <Button variant="outline" size="lg" className="gap-2" asChild>
            <Link href="/dashboard">← Voltar ao Dashboard</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {historico.map((dia) => (
            <Card
              key={dia.data}
              className="shadow-md hover:shadow-lg transition-shadow"
            >
              <CardHeader className="border-b bg-gray-50">
                <CardTitle className="text-lg capitalize">
                  {formatarDiaSemana(dia.data)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="space-y-4">
                  {dia.disciplinas.map(
                    (disciplina: DisciplinaDoDia, index: number) => (
                      <AccordionItem
                        key={`${dia.data}-${disciplina.disciplina}-${index}`}
                        value={`${dia.data}-${disciplina.disciplina}-${index}`}
                        className="border rounded-lg px-4"
                      >
                        <AccordionTrigger className="hover:no-underline">
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary">
                              {disciplina.disciplina}
                            </Badge>
                            <span className="text-sm text-gray-500">
                              {disciplina.materias.length} matéria(s)
                            </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4 pt-4">
                            {disciplina.materias.map(
                              (materia: MateriaDoDia) => (
                                <div
                                  key={materia.id}
                                  className="space-y-3 p-4 rounded-lg border bg-gray-50"
                                >
                                  <div className="flex justify-between items-start gap-4">
                                    <div className="space-y-1 flex-1">
                                      {' '}
                                      <div className="space-y-1">
                                        <h3 className="font-medium text-base">
                                          {materia.titulo}
                                        </h3>
                                        {materia.descricao && (
                                          <div className="text-sm text-gray-600 bg-gray-100 p-2 rounded-md">
                                            <span className="font-medium text-gray-700">
                                              Conteúdo estudado:
                                            </span>
                                            <p className="mt-1">
                                              {materia.descricao}
                                            </p>
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                    <Badge
                                      variant="secondary"
                                      className={`whitespace-nowrap ${getStatusColor(
                                        materia.status,
                                      )}`}
                                    >
                                      {materia.status.replace('_', ' ')}
                                    </Badge>
                                  </div>

                                  <div className="space-y-2">
                                    <div className="flex justify-between items-center text-sm">
                                      <span>Progresso</span>
                                      <span>{materia.progresso}%</span>
                                    </div>
                                    <Progress
                                      value={materia.progresso}
                                      className="h-2"
                                    />
                                  </div>

                                  {(materia.tempoEstudado ||
                                    materia.anotacoes) && (
                                    <>
                                      <Separator />
                                      <div className="space-y-2 pt-2">
                                        {materia.tempoEstudado && (
                                          <div className="text-sm">
                                            <span className="font-medium">
                                              Tempo estudado:
                                            </span>{' '}
                                            {Math.floor(
                                              materia.tempoEstudado / 60,
                                            )}
                                            h {materia.tempoEstudado % 60}min
                                          </div>
                                        )}
                                        {materia.anotacoes && (
                                          <div className="text-sm">
                                            <span className="font-medium">
                                              Anotações:
                                            </span>{' '}
                                            {materia.anotacoes}
                                          </div>
                                        )}
                                      </div>
                                    </>
                                  )}
                                </div>
                              ),
                            )}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ),
                  )}
                </Accordion>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Link
                  href={`/historico/${dia.data}`}
                  className="text-sm text-cyan-600 hover:underline"
                >
                  Ver detalhes
                </Link>
              </CardFooter>
            </Card>
          ))}

          {historico.length === 0 && (
            <Card className="shadow-md">
              <CardContent className="p-6">
                <p className="text-center text-gray-500">
                  Nenhum registro de estudo encontrado.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </main>
  )
}
