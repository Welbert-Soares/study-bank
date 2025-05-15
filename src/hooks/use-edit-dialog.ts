import { useState } from 'react'
import {
  MateriaFromDB,
  AgendamentoFromDB,
  MateriaFormData,
  AgendamentoFormData,
} from '@/types/config'

type EditItemHandlers = {
  updateMateriaItem: (
    id: string,
    updates: Partial<MateriaFormData>,
  ) => Promise<void>
  updateAgendamentoItem: (
    id: string,
    updates: Partial<AgendamentoFormData>,
  ) => Promise<void>
  deleteMateriaItem: (id: string) => Promise<void>
  deleteAgendamentoItem: (id: string) => Promise<void>
}

export function useEditDialog(handlers: EditItemHandlers) {
  const [editingItem, setEditingItem] = useState<
    MateriaFromDB | AgendamentoFromDB | null
  >(null)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)

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

  const handleEditItem = (item: MateriaFromDB | AgendamentoFromDB) => {
    setEditingItem(item)
    setIsEditDialogOpen(true)
  }

  const handleUpdateItem = async () => {
    if (!editingItem) return

    try {
      if (isAgendamento(editingItem)) {
        const { id, materiaId, dia, status, tempoEstudado, anotacoes } =
          editingItem
        if (!materiaId || !dia) {
          throw new Error('Matéria e dia são campos obrigatórios')
        }
        const updates: Partial<AgendamentoFormData> = {
          materiaId,
          dia,
          status,
          tempoEstudado: tempoEstudado ?? undefined,
          anotacoes: anotacoes ?? undefined,
        }
        await handlers.updateAgendamentoItem(id, updates)
      } else {
        const { id, titulo, disciplina } = editingItem
        const updates: Partial<MateriaFormData> = { titulo, disciplina }
        await handlers.updateMateriaItem(id, updates)
      }
      setIsEditDialogOpen(false)
      setEditingItem(null)
    } catch (error) {
      console.error('Erro ao atualizar item:', error)
    }
  }

  const handleDeleteItem = async () => {
    if (!editingItem?.id) return

    try {
      if (isAgendamento(editingItem)) {
        await handlers.deleteAgendamentoItem(editingItem.id)
      } else {
        await handlers.deleteMateriaItem(editingItem.id)
      }
      setIsEditDialogOpen(false)
      setEditingItem(null)
    } catch (error) {
      console.error('Erro ao deletar item:', error)
    }
  }

  return {
    editingItem,
    isEditDialogOpen,
    updateEditingItem,
    handleEditItem,
    handleUpdateItem,
    handleDeleteItem,
    setIsEditDialogOpen,
  }
}
