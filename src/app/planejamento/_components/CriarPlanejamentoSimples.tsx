'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Calendar as CalendarIcon, Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import { criarPlanejamentoAction } from '@/app/actions/planos.actions'
import type { DistribuicaoSemanal } from '@/types/planejamento'

interface CriarPlanejamentoSimplesProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  planoId: string
  onSuccess?: () => void
}

export function CriarPlanejamentoSimples({
  open,
  onOpenChange,
  planoId,
  onSuccess,
}: CriarPlanejamentoSimplesProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    nome: '',
    dataInicio: '',
    dataFim: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validações
    if (!formData.nome.trim()) {
      toast.error('Digite um nome para o planejamento')
      return
    }

    if (!formData.dataInicio) {
      toast.error('Selecione a data de início')
      return
    }

    if (!formData.dataFim) {
      toast.error('Selecione a data de fim')
      return
    }

    const dataInicio = new Date(formData.dataInicio)
    const dataFim = new Date(formData.dataFim)

    if (dataFim <= dataInicio) {
      toast.error('A data de fim deve ser posterior à data de início')
      return
    }

    setIsSubmitting(true)

    try {
      // Criar planejamento vazio com distribuição vazia
      const distribuicaoVazia: DistribuicaoSemanal = {}

      await criarPlanejamentoAction({
        planoId,
        nome: formData.nome,
        dataInicio,
        dataFim,
        horasPorDia: 0, // Será calculado dinamicamente
        tempoMinimo: 30, // Valores padrão
        tempoMaximo: 120,
        diasDisponiveis: [],
        horariosDisponiveis: {},
        configuracoes: [],
        distribuicao: distribuicaoVazia,
      })

      toast.success('Planejamento criado!', {
        description:
          'Agora você pode adicionar suas sessões de estudo no calendário.',
      })

      // Resetar formulário
      setFormData({
        nome: '',
        dataInicio: '',
        dataFim: '',
      })

      onOpenChange(false)
      onSuccess?.()
    } catch (error) {
      console.error('Erro ao criar planejamento:', error)
      toast.error('Erro ao criar planejamento', {
        description: error instanceof Error ? error.message : 'Tente novamente',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <CalendarIcon className="w-5 h-5 text-teal-600" />
            Criar Novo Planejamento
          </DialogTitle>
          <DialogDescription>
            Defina o nome e período do seu planejamento. As sessões de estudo
            serão adicionadas diretamente no calendário.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          {/* Nome */}
          <div className="space-y-2">
            <Label htmlFor="nome" className="text-sm font-semibold">
              Nome do Planejamento <span className="text-red-500">*</span>
            </Label>
            <Input
              id="nome"
              placeholder="Ex: Planejamento Novembro 2025"
              value={formData.nome}
              onChange={(e) =>
                setFormData({ ...formData, nome: e.target.value })
              }
              disabled={isSubmitting}
              className="h-11"
            />
            <p className="text-xs text-gray-500">
              Um nome descritivo para identificar este planejamento
            </p>
          </div>

          {/* Data Início */}
          <div className="space-y-2">
            <Label htmlFor="dataInicio" className="text-sm font-semibold">
              Data de Início <span className="text-red-500">*</span>
            </Label>
            <Input
              id="dataInicio"
              type="date"
              value={formData.dataInicio}
              onChange={(e) =>
                setFormData({ ...formData, dataInicio: e.target.value })
              }
              disabled={isSubmitting}
              className="h-11"
            />
          </div>

          {/* Data Fim */}
          <div className="space-y-2">
            <Label htmlFor="dataFim" className="text-sm font-semibold">
              Data de Término <span className="text-red-500">*</span>
            </Label>
            <Input
              id="dataFim"
              type="date"
              value={formData.dataFim}
              onChange={(e) =>
                setFormData({ ...formData, dataFim: e.target.value })
              }
              disabled={isSubmitting}
              className="h-11"
            />
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <CalendarIcon className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-blue-900 mb-1">
                  Como funciona?
                </h4>
                <p className="text-xs text-blue-700 leading-relaxed">
                  Após criar o planejamento, você poderá adicionar sessões de
                  estudo diretamente no calendário através de:
                </p>
                <ul className="text-xs text-blue-700 mt-2 space-y-1 ml-4">
                  <li>
                    • <strong>Clique</strong> em um horário vazio
                  </li>
                  <li>
                    • <strong>Arraste</strong> para definir duração
                  </li>
                  <li>
                    • <strong>Edite</strong> a qualquer momento
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <DialogFooter className="gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isSubmitting}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-teal-600 hover:bg-teal-700"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Criando...
                </>
              ) : (
                'Criar Planejamento'
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
