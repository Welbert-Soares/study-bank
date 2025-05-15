'use client'


import { ConfigPageSkeleton } from '@/components/skeletons/config-skeleton'
import { useMateriasManager } from '@/hooks/use-materias-manager'
import { useAgendamentosManager } from '@/hooks/use-agendamentos-manager'
import { useEditDialog } from '@/hooks/use-edit-dialog'

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

  const {
    editingItem,
    isEditDialogOpen,
    updateEditingItem,
    handleEditItem,
    handleUpdateItem,
    handleDeleteItem,
    setIsEditDialogOpen,
  } = useEditDialog({
    updateMateriaItem,
    updateAgendamentoItem,
    deleteMateriaItem,
    deleteAgendamentoItem,
  })

  // Helpers
  const isLoading = isLoadingMaterias || isLoadingAgendamentos

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
