'use client'

import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { DisciplinaNome, DiaDaSemana, StatusConteudo } from '@prisma/client'
import {
  MateriaFromDB,
  AgendamentoFromDB,
  MateriaFormData,
  AgendamentoFormData,
} from '@/types/config'
import { materiaSchema, agendamentoSchema } from '@/lib/validations/schemas'
import { toast } from 'sonner'

interface EditDialogProps {
  isOpen: boolean
  onClose: () => void
  editingItem: MateriaFromDB | AgendamentoFromDB | null
  onUpdateItem: () => Promise<void>
  onDeleteItem: () => Promise<void>
  updateEditingItem: (
    updates: Partial<MateriaFromDB | AgendamentoFromDB>,
  ) => void
  materias: MateriaFromDB[]
}

export function EditDialog({
  isOpen,
  onClose,
  editingItem,
  onUpdateItem,
  onDeleteItem,
  updateEditingItem,
  materias,
}: EditDialogProps) {
  const [showDeleteAlert, setShowDeleteAlert] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  const isAgendamento = (
    item: MateriaFromDB | AgendamentoFromDB,
  ): item is AgendamentoFromDB => {
    return 'materiaId' in item
  }
  const materiaForm = useForm<MateriaFormData>({
    resolver: zodResolver(materiaSchema),
    mode: 'onChange',
  })

  const agendamentoForm = useForm<AgendamentoFormData>({
    resolver: zodResolver(agendamentoSchema),
  })

  useEffect(() => {
    if (editingItem) {
      if (isAgendamento(editingItem)) {
        agendamentoForm.reset({
          materiaId: editingItem.materiaId,
          dia: editingItem.dia,
          status: editingItem.status,
          tempoEstudado: editingItem.tempoEstudado ?? undefined,
          anotacoes: editingItem.anotacoes ?? undefined,
          criarRevisao: false,
        })
      } else {
        materiaForm.reset({
          titulo: editingItem.titulo,
          descricao: editingItem.descricao ?? undefined,
          disciplina: editingItem.disciplina,
          ordem: editingItem.ordem,
          status: editingItem.status,
        })
      }
    }
  }, [editingItem, materiaForm, agendamentoForm])

  // Watch form changes
  useEffect(() => {
    if (!editingItem || isAgendamento(editingItem)) return

    const subscription = materiaForm.watch((value) => {
      if (value.titulo || value.disciplina || value.ordem || value.status) {
        updateEditingItem({
          ...editingItem,
          ...value,
        })
      }
    })

    return () => subscription.unsubscribe()
  }, [editingItem, materiaForm, updateEditingItem, isAgendamento])

  useEffect(() => {
    if (!editingItem || !isAgendamento(editingItem)) return

    const subscription = agendamentoForm.watch((value) => {
      if (value.materiaId || value.dia || value.status) {
        updateEditingItem({
          ...editingItem,
          ...value,
        })
      }
    })

    return () => subscription.unsubscribe()
  }, [editingItem, agendamentoForm, updateEditingItem, isAgendamento])

  const handleSubmit = async (data: MateriaFormData | AgendamentoFormData) => {
    const originalItem = editingItem!
    try {
      // Get current form values
      const currentValues = isAgendamento(originalItem)
        ? agendamentoForm.getValues()
        : materiaForm.getValues()

      // Update with current form values
      updateEditingItem({
        ...originalItem,
        ...currentValues,
      })

      await onUpdateItem() // Then persist to database

      // Only close dialog and show success after both the state update and database persist are done
      const itemType = isAgendamento(originalItem) ? 'Agendamento' : 'Matéria'
      const itemName = isAgendamento(originalItem)
        ? `da matéria "${
            materias.find(
              (m) => m.id === (data as AgendamentoFormData).materiaId,
            )?.titulo
          }"`
        : `"${(data as MateriaFormData).titulo}"`
      toast.success(`${itemType} ${itemName} atualizado(a) com sucesso!`)
      onClose()
    } catch (error) {
      const itemType = isAgendamento(originalItem) ? 'agendamento' : 'matéria'
      toast.error(`Erro ao atualizar ${itemType}. Por favor, tente novamente.`)
      console.error('Erro ao atualizar item:', error)
      // Restore original state on error
      updateEditingItem(originalItem)
    }
  }

  const handleDelete = async () => {
    setIsDeleting(true)
    try {
      await onDeleteItem()
      const itemType = isAgendamento(editingItem!) ? 'Agendamento' : 'Matéria'
      const itemName = isAgendamento(editingItem!)
        ? `da matéria "${
            materias.find((m) => m.id === editingItem!.materiaId)?.titulo
          }"`
        : `"${editingItem!.titulo}"`
      toast.success(`${itemType} ${itemName} excluído(a) com sucesso!`)
      onClose()
    } catch (error) {
      const itemType = isAgendamento(editingItem!) ? 'agendamento' : 'matéria'
      toast.error(`Erro ao excluir ${itemType}. Por favor, tente novamente.`)
      console.error('Erro ao excluir item:', error)
    } finally {
      setIsDeleting(false)
      setShowDeleteAlert(false)
    }
  }

  if (!editingItem) return null

  return (
    <>
      <AlertDialog open={showDeleteAlert} onOpenChange={setShowDeleteAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Tem certeza?</AlertDialogTitle>{' '}
            <AlertDialogDescription>
              {isAgendamento(editingItem)
                ? `Esta ação não pode ser desfeita e irá remover permanentemente o agendamento da matéria "${
                    materias.find((m) => m.id === editingItem.materiaId)?.titulo
                  }".`
                : `Esta ação não pode ser desfeita e irá remover permanentemente a matéria "${editingItem.titulo}" e todos os seus agendamentos associados.`}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>{' '}
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-red-600 text-white hover:bg-red-700 disabled:opacity-50"
              disabled={isDeleting}
            >
              {isDeleting ? 'Excluindo...' : 'Excluir'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {isAgendamento(editingItem)
                ? 'Editar Agendamento'
                : 'Editar Matéria'}
            </DialogTitle>
          </DialogHeader>

          {isAgendamento(editingItem) ? (
            <Form {...agendamentoForm}>
              <form
                onSubmit={agendamentoForm.handleSubmit(handleSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={agendamentoForm.control}
                  name="materiaId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Matéria</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione a matéria" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {materias.map((materia) => (
                            <SelectItem key={materia.id} value={materia.id}>
                              {materia.titulo}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={agendamentoForm.control}
                  name="dia"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Dia da Semana</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o dia" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {Object.values(DiaDaSemana).map((dia) => (
                            <SelectItem key={dia} value={dia}>
                              {dia}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={agendamentoForm.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {Object.values(StatusConteudo).map((status) => (
                            <SelectItem key={status} value={status}>
                              {status}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={agendamentoForm.control}
                  name="anotacoes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Anotações</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Anotações (opcional)"
                          className="resize-none"
                          {...field}
                          value={field.value ?? ''}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <DialogFooter>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowDeleteAlert(true)}
                    className="bg-red-50 hover:bg-red-100 text-red-600"
                  >
                    Excluir
                  </Button>
                  <Button type="button" variant="secondary" onClick={onClose}>
                    Cancelar
                  </Button>
                  <Button type="submit">Salvar</Button>
                </DialogFooter>
              </form>
            </Form>
          ) : (
            <Form {...materiaForm}>
              <form
                onSubmit={materiaForm.handleSubmit(handleSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={materiaForm.control}
                  name="titulo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Título</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={materiaForm.control}
                  name="disciplina"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Disciplina</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione a disciplina" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {Object.values(DisciplinaNome).map((disciplina) => (
                            <SelectItem key={disciplina} value={disciplina}>
                              {disciplina}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={materiaForm.control}
                  name="ordem"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ordem</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          onChange={(e) =>
                            field.onChange(
                              e.target.value ? Number(e.target.value) : '',
                            )
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={materiaForm.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {Object.values(StatusConteudo).map((status) => (
                            <SelectItem key={status} value={status}>
                              {status}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <DialogFooter>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowDeleteAlert(true)}
                    className="bg-red-50 hover:bg-red-100 text-red-600"
                  >
                    Excluir
                  </Button>
                  <Button type="button" variant="secondary" onClick={onClose}>
                    Cancelar
                  </Button>
                  <Button type="submit">Salvar</Button>
                </DialogFooter>
              </form>
            </Form>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
