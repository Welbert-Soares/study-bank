'use client'

import { useState } from 'react'
import { MateriaFromDB, AgendamentoFromDB } from '@/types/config'
import { ConfigPageSkeleton } from '@/components/skeletons/config-skeleton'
import { useMateriasManager } from '@/hooks/use-materias-manager'
import { useAgendamentosManager } from '@/hooks/use-agendamentos-manager'

// Import components
import { ConfigHeader } from './_components/ConfigHeader'
import { SubjectsCard } from './_components/SubjectsCard'
import { SchedulesCard } from './_components/SchedulesCard'
import { EditDialog } from './_components/EditDialog'

export default function ConfigPage() {
  const {
    materias,
    isLoading: isLoadingMaterias,
    addMateria,
    updateMateriaItem,
    deleteMateriaItem,
  } = useMateriasManager()

  const {
    agendamentos,
    isLoading: isLoadingAgendamentos,
    addAgendamento,
    updateAgendamentoItem,
    deleteAgendamentoItem,
  } = useAgendamentosManager()

  const [editingItem, setEditingItem] = useState<
    MateriaFromDB | AgendamentoFromDB | null
  >(null)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)

  // Helpers
  const isLoading = isLoadingMaterias || isLoadingAgendamentos

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

  async function handleUpdateItem() {
    if (!editingItem) return

    try {
      if (isAgendamento(editingItem)) {
        const { id, materiaId, dia, status, tempoEstudado, anotacoes } =
          editingItem
        if (!materiaId || !dia) {
          throw new Error('Matéria e dia são campos obrigatórios')
        }
        await updateAgendamentoItem(id, {
          materiaId,
          dia,
          status,
          tempoEstudado: tempoEstudado ?? undefined,
          anotacoes: anotacoes ?? undefined,
        })
      } else {
        const { id, titulo, disciplina } = editingItem
        await updateMateriaItem(id, { titulo, disciplina })
      }
      setIsEditDialogOpen(false)
      setEditingItem(null)
    } catch (error) {
      console.error('Erro ao atualizar item:', error)
    }
  }

  async function handleDeleteItem() {
    if (!editingItem?.id) return

    try {
      if (isAgendamento(editingItem)) {
        await deleteAgendamentoItem(editingItem.id)
      } else {
        await deleteMateriaItem(editingItem.id)
      }
      setIsEditDialogOpen(false)
      setEditingItem(null)
    } catch (error) {
      console.error('Erro ao deletar item:', error)
    }
  }

  const handleEditItem = (item: MateriaFromDB | AgendamentoFromDB) => {
    setEditingItem(item)
    setIsEditDialogOpen(true)
  }

  return (
    <main className="w-full min-h-screen p-4 md:p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-8">
        <ConfigHeader />

        {isLoading ? (
          <ConfigPageSkeleton />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <SubjectsCard
              materias={materias}
              onAddMateria={addMateria}
              onEditMateria={handleEditItem}
            />

            <SchedulesCard
              agendamentos={agendamentos}
              materias={materias}
              onAddAgendamento={addAgendamento}
              onEditAgendamento={handleEditItem}
            />
          </div>
        )}

        <EditDialog
          isOpen={isEditDialogOpen}
          onClose={() => setIsEditDialogOpen(false)}
          editingItem={editingItem}
          materias={materias}
          onUpdateItem={handleUpdateItem}
          onDeleteItem={handleDeleteItem}
          updateEditingItem={updateEditingItem}
        />
      </div>
    </main>
  )
}
