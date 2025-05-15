import { useState, useEffect } from 'react'
import { AgendamentoFromDB, AgendamentoFormData } from '@/types/config'
import {
  getAgendamentos,
  createAgendamento,
  updateAgendamento,
  deleteAgendamento,
} from '@/app/actions/config.actions'

export function useAgendamentosManager() {
  const [agendamentos, setAgendamentos] = useState<AgendamentoFromDB[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const loadAgendamentos = async () => {
    setIsLoading(true)
    try {
      const agendamentosData = await getAgendamentos()
      setAgendamentos(agendamentosData)
      return agendamentosData
    } catch (error) {
      console.error('Erro ao carregar agendamentos:', error)
      return []
    } finally {
      setIsLoading(false)
    }
  }

  const addAgendamento = async (novoAgendamento: AgendamentoFormData) => {
    try {
      await createAgendamento(novoAgendamento)
      await loadAgendamentos()
    } catch (error) {
      console.error('Erro ao adicionar agendamento:', error)
    }
  }

  const updateAgendamentoItem = async (
    id: string,
    updates: Partial<AgendamentoFormData>,
  ) => {
    try {
      await updateAgendamento(id, updates)
      await loadAgendamentos()
    } catch (error) {
      console.error('Erro ao atualizar agendamento:', error)
    }
  }

  const deleteAgendamentoItem = async (id: string) => {
    try {
      await deleteAgendamento(id)
      await loadAgendamentos()
    } catch (error) {
      console.error('Erro ao deletar agendamento:', error)
    }
  }

  useEffect(() => {
    loadAgendamentos()
  }, [])

  return {
    agendamentos,
    isLoading,
    loadAgendamentos,
    addAgendamento,
    updateAgendamentoItem,
    deleteAgendamentoItem,
  }
}
