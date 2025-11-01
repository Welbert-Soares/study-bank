'use client'

import { useState } from 'react'
import { Check, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ativarPlanoAction } from '@/app/actions/planos.actions'
import { toast } from 'sonner'
import type { Plano } from '@prisma/client'

interface PlanoSelectorButtonProps {
  planos: Plano[]
  planoAtivo?: Plano
}

export function PlanoSelectorButton({
  planos,
  planoAtivo,
}: PlanoSelectorButtonProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [planoAtivoLocal, setPlanoAtivoLocal] = useState(planoAtivo)

  const handleAtivarPlano = async (planoId: string) => {
    if (planoAtivoLocal?.id === planoId) {
      toast.info('Este plano já está ativo')
      return
    }

    setIsLoading(true)
    try {
      await ativarPlanoAction(planoId)
      const novoPlanoAtivo = planos.find((p) => p.id === planoId)
      setPlanoAtivoLocal(novoPlanoAtivo)
      toast.success('Plano ativado com sucesso!')
    } catch (error) {
      console.error('Erro ao ativar plano:', error)
      toast.error('Erro ao ativar plano')
    } finally {
      setIsLoading(false)
    }
  }

  if (planos.length === 0) {
    return (
      <Button
        variant="outline"
        className="border-teal-500 text-teal-600"
        disabled
      >
        <span className="mr-2">📚</span>
        Nenhum plano
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="border-teal-500 text-teal-600 hover:bg-teal-50"
          disabled={isLoading}
        >
          <span className="mr-2">
            {planoAtivoLocal?.emblema ? (
              <img
                src={planoAtivoLocal.emblema}
                alt=""
                className="h-4 w-4 inline object-contain"
              />
            ) : (
              '📚'
            )}
          </span>
          <span className="max-w-[150px] truncate">
            {planoAtivoLocal?.nome || 'Selecione um plano'}
          </span>
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[280px]">
        <DropdownMenuLabel>Planos de Estudo</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {planos.map((plano) => (
          <DropdownMenuItem
            key={plano.id}
            onClick={() => handleAtivarPlano(plano.id)}
            className="flex items-center justify-between cursor-pointer"
          >
            <div className="flex items-center gap-2 flex-1 min-w-0">
              {plano.emblema ? (
                <img
                  src={plano.emblema}
                  alt={plano.nome}
                  className="h-5 w-5 object-contain shrink-0"
                />
              ) : (
                <span className="shrink-0">📚</span>
              )}
              <div className="flex flex-col min-w-0">
                <span className="font-medium truncate">{plano.nome}</span>
                {plano.edital && (
                  <span className="text-xs text-muted-foreground truncate">
                    {plano.edital}
                    {plano.cargo && ` - ${plano.cargo}`}
                  </span>
                )}
              </div>
            </div>
            {plano.id === planoAtivoLocal?.id && (
              <Check className="h-4 w-4 text-teal-600 shrink-0 ml-2" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
