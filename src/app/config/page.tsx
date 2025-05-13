'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Textarea } from '@/components/ui/textarea'
import { useCallback, useEffect, useState } from 'react'
import {
  getDisciplinas,
  createDisciplina,
  createConteudo,
  updateConteudo,
  createHorarioEstudo,
} from '../actions/disciplinas'
import Link from 'next/link'

type Disciplina = {
  id: string
  nome: string
  cor: string
  conteudos: Array<{
    id: string
    titulo: string
    descricao: string | null
    ordem: number
    completo: boolean
  }>
}

export default function ConfigPage() {
  const [disciplinas, setDisciplinas] = useState<Disciplina[]>([])
  const [loading, setLoading] = useState(true)
  const [novaDisciplina, setNovaDisciplina] = useState({ nome: '', cor: '' })
  const [novoConteudo, setNovoConteudo] = useState({
    disciplinaId: '',
    titulo: '',
    descricao: '',
  })
  const [novoHorario, setNovoHorario] = useState({
    disciplinaId: '',
    diaSemana: 1,
    inicio: '08:00',
    fim: '10:00',
  })

  const loadDisciplinas = useCallback(async () => {
    setLoading(true)
    try {
      const data = await getDisciplinas()
      setDisciplinas(data)
    } catch (error) {
      console.error('Erro ao carregar disciplinas:', error)
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    loadDisciplinas()
  }, [loadDisciplinas])

  const handleAddDisciplina = async () => {
    try {
      await createDisciplina(novaDisciplina)
      setNovaDisciplina({ nome: '', cor: '' })
      await loadDisciplinas()
    } catch (error) {
      console.error('Erro ao criar disciplina:', error)
    }
  }

  const handleAddConteudo = async () => {
    try {
      const ordem =
        disciplinas.find((d) => d.id === novoConteudo.disciplinaId)?.conteudos
          .length || 0
      await createConteudo({
        ...novoConteudo,
        ordem,
      })
      setNovoConteudo({ disciplinaId: '', titulo: '', descricao: '' })
      await loadDisciplinas()
    } catch (error) {
      console.error('Erro ao criar conteúdo:', error)
    }
  }

  const handleAddHorario = async () => {
    try {
      await createHorarioEstudo(novoHorario)
      setNovoHorario({
        disciplinaId: '',
        diaSemana: 1,
        inicio: '08:00',
        fim: '10:00',
      })
      await loadDisciplinas()
    } catch (error) {
      console.error('Erro ao criar horário:', error)
    }
  }

  const diasSemana = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ]

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  return (
    <main className="min-h-screen p-4 md:p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Configuração do Plano de Estudos
            </h1>
          </div>
          <Button variant="outline" size="lg" className="gap-2" asChild>
            <Link href="/dashboard">← Voltar ao Dashboard</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>📚 Disciplinas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Input
                    placeholder="Nome da disciplina"
                    value={novaDisciplina.nome}
                    onChange={(e) =>
                      setNovaDisciplina({
                        ...novaDisciplina,
                        nome: e.target.value,
                      })
                    }
                  />
                  <Input
                    placeholder="Cor (bg-blue-500)"
                    value={novaDisciplina.cor}
                    onChange={(e) =>
                      setNovaDisciplina({
                        ...novaDisciplina,
                        cor: e.target.value,
                      })
                    }
                  />
                  <Button onClick={handleAddDisciplina}>Adicionar</Button>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Disciplina</TableHead>
                      <TableHead>Conteúdos</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {disciplinas.map((disciplina) => (
                      <TableRow key={disciplina.id}>
                        <TableCell className="font-medium">
                          {disciplina.nome}
                        </TableCell>
                        <TableCell>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="sm">
                                Ver Conteúdos ({disciplina.conteudos.length})
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-3xl">
                              <DialogHeader>
                                <DialogTitle>
                                  Conteúdos - {disciplina.nome}
                                </DialogTitle>
                              </DialogHeader>
                              <div className="space-y-4">
                                <div className="flex gap-4">
                                  <Input
                                    placeholder="Título do conteúdo"
                                    value={novoConteudo.titulo}
                                    onChange={(e) =>
                                      setNovoConteudo({
                                        ...novoConteudo,
                                        titulo: e.target.value,
                                        disciplinaId: disciplina.id,
                                      })
                                    }
                                  />
                                  <Button onClick={handleAddConteudo}>
                                    Adicionar
                                  </Button>
                                </div>
                                <Textarea
                                  placeholder="Descrição (opcional)"
                                  value={novoConteudo.descricao}
                                  onChange={(e) =>
                                    setNovoConteudo({
                                      ...novoConteudo,
                                      descricao: e.target.value,
                                    })
                                  }
                                />
                                <div className="space-y-2">
                                  {disciplina.conteudos.map((conteudo) => (
                                    <div
                                      key={conteudo.id}
                                      className="flex items-center gap-2 p-2 rounded-lg border bg-card"
                                    >
                                      <input
                                        type="checkbox"
                                        checked={conteudo.completo}
                                        onChange={(e) =>
                                          updateConteudo(conteudo.id, {
                                            completo: e.target.checked,
                                          })
                                        }
                                        className="w-4 h-4"
                                      />
                                      <span
                                        className={
                                          conteudo.completo
                                            ? 'line-through text-gray-500'
                                            : ''
                                        }
                                      >
                                        {conteudo.titulo}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>⏰ Horários de Estudo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Disciplina</label>
                    <select
                      className="w-full p-2 border rounded"
                      value={novoHorario.disciplinaId}
                      onChange={(e) =>
                        setNovoHorario({
                          ...novoHorario,
                          disciplinaId: e.target.value,
                        })
                      }
                    >
                      <option value="">Selecione...</option>
                      {disciplinas.map((d) => (
                        <option key={d.id} value={d.id}>
                          {d.nome}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Dia da Semana</label>
                    <select
                      className="w-full p-2 border rounded"
                      value={novoHorario.diaSemana}
                      onChange={(e) =>
                        setNovoHorario({
                          ...novoHorario,
                          diaSemana: parseInt(e.target.value),
                        })
                      }
                    >
                      {diasSemana.map((dia, index) => (
                        <option key={index} value={index}>
                          {dia}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Início</label>
                    <Input
                      type="time"
                      value={novoHorario.inicio}
                      onChange={(e) =>
                        setNovoHorario({
                          ...novoHorario,
                          inicio: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Fim</label>
                    <Input
                      type="time"
                      value={novoHorario.fim}
                      onChange={(e) =>
                        setNovoHorario({
                          ...novoHorario,
                          fim: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <Button onClick={handleAddHorario} className="w-full">
                  Adicionar Horário
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
