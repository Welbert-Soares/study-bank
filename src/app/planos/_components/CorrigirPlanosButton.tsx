'use client'

import { Button } from '@/components/ui/button'
import { corrigirPlanosAtivosAction } from '@/app/actions/planos.actions'
import { toast } from 'sonner'
import { useState } from 'react'
import { RefreshCw } from 'lucide-react'

export function CorrigirPlanosButton() {
  const [isLoading, setIsLoading] = useState(false)

  const handleCorrigir = async () => {
    setIsLoading(true)
    try {
      await corrigirPlanosAtivosAction()
      toast.success('Planos corrigidos! Apenas um está ativo agora.')
    } catch (error) {
      console.error('Erro ao corrigir planos:', error)
      toast.error('Erro ao corrigir planos.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleCorrigir}
      disabled={isLoading}
      className="mb-4"
    >
      <RefreshCw
        className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`}
      />
      {isLoading ? 'Corrigindo...' : 'Corrigir Planos Ativos'}
    </Button>
  )
}
