import { useState, useEffect } from 'react'
import { MateriaFromDB, MateriaFormData } from '@/types/config'
import {
  getDisciplinas,
  createMateria,
  updateMateria,
  deleteMateria,
} from '@/app/actions/config.actions'

export function useMateriasManager() {
  const [materias, setMaterias] = useState<MateriaFromDB[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const loadMaterias = async () => {
    setIsLoading(true)
    try {
      const materiasData = await getDisciplinas()
      setMaterias(materiasData)
      return materiasData
    } catch (error) {
      console.error('Erro ao carregar matérias:', error)
      return []
    } finally {
      setIsLoading(false)
    }
  }

  const addMateria = async (novaMateria: MateriaFormData) => {
    try {
      await createMateria(novaMateria)
      await loadMaterias()
    } catch (error) {
      console.error('Erro ao adicionar matéria:', error)
    }
  }

  const updateMateriaItem = async (
    id: string,
    updates: Partial<MateriaFormData>,
  ) => {
    try {
      console.log('Enviando atualização para matéria:', id, updates)
      await updateMateria(id, updates)
      console.log('Atualização da matéria concluída')
      await loadMaterias()
    } catch (error) {
      console.error('Erro ao atualizar matéria:', error)
      throw error
    }
  }

  const deleteMateriaItem = async (id: string) => {
    try {
      await deleteMateria(id)
      await loadMaterias()
    } catch (error) {
      console.error('Erro ao deletar matéria:', error)
    }
  }

  useEffect(() => {
    loadMaterias()
  }, [])

  return {
    materias,
    isLoading,
    loadMaterias,
    addMateria,
    updateMateriaItem,
    deleteMateriaItem,
  }
}
