'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ConfigPageSkeleton } from '@/components/skeletons/config-skeleton'
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
  DialogFooter,
} from '@/components/ui/dialog'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { DisciplinaNome, DiaDaSemana, StatusConteudo } from '@/generated/prisma'
import {
  getDisciplinas,
  createMateria,
  updateMateria,
  deleteMateria,
  getAgendamentos,
  createAgendamento,
  updateAgendamento,
  deleteAgendamento,
} from '../actions/config.actions'
import {
  MateriaFromDB,
  AgendamentoFromDB,
  MateriaFormData,
  AgendamentoFormData,
} from '@/types/config'

export default function ConfigPage() {
  const [materias, setMaterias] = useState<MateriaFromDB[]>([])
  const [agendamentos, setAgendamentos] = useState<AgendamentoFromDB[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [novaMateria, setNovaMateria] = useState<MateriaFormData>({
    titulo: '',
    descricao: undefined,
    disciplina: DisciplinaNome.Matematica,
    ordem: 0,
  })
  const [novoAgendamento, setNovoAgendamento] = useState<AgendamentoFormData>({
    dia: DiaDaSemana.Segunda,
    materiaId: '',
    status: StatusConteudo.pendente,
    tempoEstudado: undefined,
    anotacoes: undefined,
    criarRevisao: false,
  })
  const [editingItem, setEditingItem] = useState<
    MateriaFromDB | AgendamentoFromDB | null
  >(null)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)

  // Helpers
  const isAgendamento = (
    item: MateriaFromDB | AgendamentoFromDB,
  ): item is AgendamentoFromDB => {
    return 'materiaId' in item
  }

  const updateEditingItem = (
    updates: Partial<MateriaFromDB | AgendamentoFromDB>,
  ) => {
    setEditingItem((prev) => (prev ? { ...prev, ...updates } : null))
  }

  useEffect(() => {
    loadData()
  }, [])

  async function loadData() {
    try {
      setIsLoading(true)
      const [materiasData, agendamentosData] = await Promise.all([
        getDisciplinas(),
        getAgendamentos(),
      ])
      setMaterias(materiasData)
      setAgendamentos(agendamentosData)
    } catch (error) {
      console.error('Erro ao carregar dados:', error)
    } finally {
      setIsLoading(false)
    }
  }

  async function handleAddMateria() {
    try {
      await createMateria(novaMateria)
      setNovaMateria({
        titulo: '',
        descricao: undefined,
        disciplina: DisciplinaNome.Matematica,
        ordem: 0,
      })
      await loadData()
    } catch (error) {
      console.error('Erro ao adicionar matéria:', error)
    }
  }
  async function handleAddAgendamento() {
    try {
      const agendamentoData = {
        ...novoAgendamento,
        criarRevisao: novoAgendamento.criarRevisao || false,
      }
      await createAgendamento(agendamentoData)
      setNovoAgendamento({
        dia: DiaDaSemana.Segunda,
        materiaId: '',
        status: StatusConteudo.pendente,
        tempoEstudado: undefined,
        anotacoes: undefined,
        criarRevisao: false,
      })
      await loadData()
    } catch (error) {
      console.error('Erro ao adicionar agendamento:', error)
    }
  }
  async function handleUpdateItem() {
    if (!editingItem) return

    try {
      if (isAgendamento(editingItem)) {
        const {
          id,
          materiaId,
          dia,
          status,
          tempoEstudado,
          anotacoes,
          criarRevisao,
        } = editingItem
        await updateAgendamento(id, {
          materiaId,
          dia,
          status,
          criarRevisao,
          tempoEstudado: tempoEstudado ?? undefined,
          anotacoes: anotacoes ?? undefined,
        })
      } else {
        const { id, titulo, disciplina, status, ordem } = editingItem
        await updateMateria(id, { titulo, disciplina, status, ordem })
      }
      setIsEditDialogOpen(false)
      setEditingItem(null)
      await loadData()
    } catch (error) {
      console.error('Erro ao atualizar item:', error)
    }
  }

  async function handleDeleteItem() {
    if (!editingItem?.id) return

    try {
      if (isAgendamento(editingItem)) {
        await deleteAgendamento(editingItem.id)
      } else {
        await deleteMateria(editingItem.id)
      }
      setIsEditDialogOpen(false)
      setEditingItem(null)
      await loadData()
    } catch (error) {
      console.error('Erro ao deletar item:', error)
    }
  }

  const handleAgendamentoSubmit = async (e: React.MouseEvent) => {
    e.preventDefault()
    try {
      // Get data from the form
      const agendamentoData = {
        ...novoAgendamento,
        criarRevisao: novoAgendamento.criarRevisao || false,
      }

      if (editingItem && isAgendamento(editingItem)) {
        await updateAgendamento(editingItem.id, agendamentoData)
      } else {
        await createAgendamento(agendamentoData)
      }

      // Update list
      await loadData()

      // Clear form
      setIsEditDialogOpen(false)
      setEditingItem(null)
    } catch (error) {
      console.error('Erro ao salvar agendamento:', error)
    }
  }

  return (
    <main className="w-full min-h-screen p-4 md:p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Configuração do Plano de Estudos
            </h1>
          </div>
          <Button
            variant="outline"
            size="lg"
            className="gap-2 bg-white"
            asChild
          >
            <Link href="/dashboard">← Voltar ao Dashboard</Link>
          </Button>
        </div>

        {isLoading ? (
          <ConfigPageSkeleton />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>📚 Matérias</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <Input
                      placeholder="Título da matéria"
                      value={novaMateria.titulo}
                      onChange={(e) =>
                        setNovaMateria({
                          ...novaMateria,
                          titulo: e.target.value,
                        })
                      }
                    />
                    <Select
                      value={novaMateria.disciplina}
                      onValueChange={(value) =>
                        setNovaMateria({
                          ...novaMateria,
                          disciplina: value as DisciplinaNome,
                        })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a disciplina" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.values(DisciplinaNome).map((disciplina) => (
                          <SelectItem key={disciplina} value={disciplina}>
                            {disciplina}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Button onClick={handleAddMateria}>Adicionar</Button>
                  </div>

                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Título</TableHead>
                        <TableHead>Disciplina</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="w-[100px]">Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {materias.map((materia) => (
                        <TableRow key={materia.id}>
                          <TableCell className="font-medium">
                            {materia.titulo}
                          </TableCell>
                          <TableCell>{materia.disciplina}</TableCell>
                          <TableCell>{materia.status}</TableCell>
                          <TableCell>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                setEditingItem(materia)
                                setIsEditDialogOpen(true)
                              }}
                            >
                              Editar
                            </Button>
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
                <CardTitle>⏰ Agendamentos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Select
                      value={novoAgendamento.materiaId}
                      onValueChange={(value) =>
                        setNovoAgendamento({
                          ...novoAgendamento,
                          materiaId: value,
                        })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a matéria" />
                      </SelectTrigger>
                      <SelectContent>
                        {materias.map((materia) => (
                          <SelectItem key={materia.id} value={materia.id}>
                            {materia.titulo}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <Select
                      value={novoAgendamento.dia}
                      onValueChange={(value) =>
                        setNovoAgendamento({
                          ...novoAgendamento,
                          dia: value as DiaDaSemana,
                        })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Dia da semana" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.values(DiaDaSemana).map((dia) => (
                          <SelectItem key={dia} value={dia}>
                            {dia}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <div className="col-span-2">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">
                          Criar Revisão
                        </label>
                        <div className="flex items-center space-x-4">
                          <label className="flex items-center space-x-2">
                            <input
                              type="radio"
                              name="criarRevisao"
                              checked={novoAgendamento.criarRevisao === true}
                              onChange={() =>
                                setNovoAgendamento({
                                  ...novoAgendamento,
                                  criarRevisao: true,
                                })
                              }
                              className="h-4 w-4"
                            />
                            <span>Sim</span>
                          </label>
                          <label className="flex items-center space-x-2">
                            <input
                              type="radio"
                              name="criarRevisao"
                              checked={novoAgendamento.criarRevisao === false}
                              onChange={() =>
                                setNovoAgendamento({
                                  ...novoAgendamento,
                                  criarRevisao: false,
                                })
                              }
                              className="h-4 w-4"
                            />
                            <span>Não</span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-2">
                      <Textarea
                        placeholder="Anotações (opcional)"
                        value={novoAgendamento.anotacoes ?? ''}
                        onChange={(e) =>
                          setNovoAgendamento({
                            ...novoAgendamento,
                            anotacoes: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <Button onClick={handleAddAgendamento} className="w-full">
                    Adicionar Agendamento
                  </Button>

                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Dia</TableHead>
                        <TableHead>Matéria</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="w-[100px]">Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {agendamentos.map((agendamento) => (
                        <TableRow key={agendamento.id}>
                          {' '}
                          <TableCell>{agendamento.dia}</TableCell>
                          <TableCell>{agendamento.materia.titulo}</TableCell>
                          <TableCell>{agendamento.status}</TableCell>
                          <TableCell className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                setEditingItem({
                                  ...agendamento,
                                  criarRevisao:
                                    agendamento.criarRevisao || false,
                                })
                                setIsEditDialogOpen(true)
                              }}
                            >
                              Editar
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {editingItem
                ? isAgendamento(editingItem)
                  ? 'Editar Agendamento'
                  : 'Editar Matéria'
                : ''}
            </DialogTitle>
          </DialogHeader>{' '}
          {editingItem && isAgendamento(editingItem) ? (
            <div className="space-y-4">
              <Select
                value={editingItem.materiaId}
                onValueChange={(value) =>
                  updateEditingItem({ materiaId: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a matéria" />
                </SelectTrigger>
                <SelectContent>
                  {materias.map((materia) => (
                    <SelectItem key={materia.id} value={materia.id}>
                      {materia.titulo}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={editingItem.dia}
                onValueChange={(value) =>
                  updateEditingItem({ dia: value as DiaDaSemana })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Dia da semana" />
                </SelectTrigger>
                <SelectContent>
                  {Object.values(DiaDaSemana).map((dia) => (
                    <SelectItem key={dia} value={dia}>
                      {dia}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={editingItem.status}
                onValueChange={(value) =>
                  updateEditingItem({ status: value as StatusConteudo })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  {Object.values(StatusConteudo).map((status) => (
                    <SelectItem key={status} value={status}>
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="space-y-2">
                <label className="text-sm font-medium">Criar Revisão</label>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="criarRevisao"
                      checked={editingItem.criarRevisao === true}
                      onChange={() => updateEditingItem({ criarRevisao: true })}
                      className="h-4 w-4"
                    />
                    <span>Sim</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="criarRevisao"
                      checked={editingItem.criarRevisao === false}
                      onChange={() =>
                        updateEditingItem({ criarRevisao: false })
                      }
                      className="h-4 w-4"
                    />
                    <span>Não</span>
                  </label>
                </div>
              </div>

              <Textarea
                placeholder="Anotações (opcional)"
                value={editingItem.anotacoes ?? ''}
                onChange={(e) =>
                  updateEditingItem({ anotacoes: e.target.value })
                }
              />
            </div>
          ) : editingItem ? (
            <div className="space-y-4">
              <Input
                placeholder="Título da matéria"
                value={editingItem.titulo}
                onChange={(e) => updateEditingItem({ titulo: e.target.value })}
              />

              <Select
                value={editingItem.disciplina}
                onValueChange={(value) =>
                  updateEditingItem({
                    disciplina: value as DisciplinaNome,
                  })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a disciplina" />
                </SelectTrigger>
                <SelectContent>
                  {Object.values(DisciplinaNome).map((disciplina) => (
                    <SelectItem key={disciplina} value={disciplina}>
                      {disciplina}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={editingItem.status}
                onValueChange={(value) =>
                  updateEditingItem({
                    status: value as StatusConteudo,
                  })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  {Object.values(StatusConteudo).map((status) => (
                    <SelectItem key={status} value={status}>
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ) : null}
          <DialogFooter className="gap-2">
            <Button variant="outline" onClick={handleDeleteItem}>
              Excluir
            </Button>
            <Button
              onClick={(e) => {
                e.preventDefault()
                if (editingItem && isAgendamento(editingItem)) {
                  handleAgendamentoSubmit(e)
                } else {
                  handleUpdateItem()
                }
              }}
            >
              Salvar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>{' '}
    </main>
  )
}
