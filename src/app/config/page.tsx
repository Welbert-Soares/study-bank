'use client'

import { useState, useEffect } from 'react'
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
import { ConfigPageSkeleton } from '@/components/skeletons/config-skeleton'

// Import components
import { ConfigHeader } from './_components/ConfigHeader'
import { SubjectsCard } from './_components/SubjectsCard'
import { SchedulesCard } from './_components/SchedulesCard'
import { EditDialog } from './_components/EditDialog'

export default function ConfigPage() {
  const [materias, setMaterias] = useState<MateriaFromDB[]>([])
  const [agendamentos, setAgendamentos] = useState<AgendamentoFromDB[]>([])
  const [isLoading, setIsLoading] = useState(true)
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

  async function handleAddMateria(novaMateria: MateriaFormData) {
    try {
      await createMateria(novaMateria)
      await loadData()
    } catch (error) {
      console.error('Erro ao adicionar matéria:', error)
    }
  }

  async function handleAddAgendamento(novoAgendamento: AgendamentoFormData) {
    try {
      await createAgendamento(novoAgendamento)
      await loadData()
    } catch (error) {
      console.error('Erro ao adicionar agendamento:', error)
    }
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
        await updateAgendamento(id, {
          materiaId,
          dia,
          status,
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
              onAddMateria={handleAddMateria}
              onEditMateria={handleEditItem}
            />

            <SchedulesCard
              agendamentos={agendamentos}
              materias={materias}
              onAddAgendamento={handleAddAgendamento}
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
