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
    setEditingItem((prev) => {
      if (!prev) return null
      const updated = { ...prev, ...updates }
      return updated
    })
  }

  const handleEditItem = (item: MateriaFromDB | AgendamentoFromDB) => {
    setEditingItem(item)
    setIsEditDialogOpen(true)
  }

  const handleUpdateItem = async () => {
    if (!editingItem) return

    try {
      if (isAgendamento(editingItem)) {
        // For agendamentos, all fields are required
        const { id, materiaId, dia, status, tempoEstudado, anotacoes } =
          editingItem
        if (!materiaId || !dia) {
          throw new Error('Matéria e dia são campos obrigatórios')
        }
        await handlers.updateAgendamentoItem(id, {
          materiaId,
          dia,
          status,
          tempoEstudado: tempoEstudado ?? undefined,
          anotacoes: anotacoes ?? undefined,
        })
      } else {
        // For materias, titulo and disciplina are required
        const { id, titulo, descricao, disciplina, ordem, status } = editingItem
        if (!titulo || !disciplina) {
          throw new Error('Título e disciplina são campos obrigatórios')
        }

        await handlers.updateMateriaItem(id, {
          titulo,
          descricao: descricao ?? undefined,
          disciplina,
          ordem,
          status,
        })
      }

      // Don't clear dialog state here - let the EditDialog component handle it after onUpdateItem completes
    } catch (error) {
      console.error('Erro ao atualizar item:', error)
      throw error // Re-throw to let EditDialog handle the error UI
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
