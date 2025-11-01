'use client'

import { useState, useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  CircleDot,
  Clock,
  Calendar as CalendarIcon,
  BookMarked,
  Loader2,
  Trash2,
  Save,
} from 'lucide-react'
import { toast } from 'sonner'
import { adicionarSessaoAction } from '@/app/actions/planos.actions'
import { listarDisciplinasAction } from '@/app/actions/planos.actions'
import type { DisciplinaFromDB } from '@/types/plano'

interface AdicionarSessaoModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  planejamentoId: string
  planoId: string
  diaSemana: string
  dataInicial?: string
  horaInicial?: string
  onSuccess?: () => void
}

export function AdicionarSessaoModal({
  open,
  onOpenChange,
  planejamentoId,
  planoId,
  diaSemana,
  dataInicial,
  horaInicial,
  onSuccess,
}: AdicionarSessaoModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [disciplinas, setDisciplinas] = useState<DisciplinaFromDB[]>([])
  const [isLoadingDisciplinas, setIsLoadingDisciplinas] = useState(true)

  const [formData, setFormData] = useState({
    disciplinaId: '',
    hora: horaInicial || '08:00',
    data: dataInicial || '',
    topico: '',
  })

  // Carregar disciplinas quando o modal abrir
  useEffect(() => {
    if (open && planoId) {
      setIsLoadingDisciplinas(true)
      listarDisciplinasAction(planoId)
        .then((data) => setDisciplinas(data))
        .catch((err) => {
          console.error('Erro ao carregar disciplinas:', err)
          toast.error('Erro ao carregar disciplinas')
        })
        .finally(() => setIsLoadingDisciplinas(false))
    }
  }, [open, planoId])

  // Reset form quando mudar os dados iniciais
  useEffect(() => {
    if (open) {
      setFormData({
        disciplinaId: '',
        hora: horaInicial || '08:00',
        data: dataInicial || '',
        topico: '',
      })
    }
  }, [open, dataInicial, horaInicial])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validações
    if (!formData.disciplinaId) {
      toast.error('Selecione uma disciplina')
      return
    }

    if (!formData.data) {
      toast.error('Selecione uma data')
      return
    }

    if (!formData.hora) {
      toast.error('Informe o horário')
      return
    }

    setIsSubmitting(true)

    try {
      const disciplinaSelecionada = disciplinas.find(
        (d) => d.id === formData.disciplinaId,
      )

      await adicionarSessaoAction(planejamentoId, diaSemana, {
        disciplinaId: formData.disciplinaId,
        nome: disciplinaSelecionada?.nome || 'Estudo',
        cor: disciplinaSelecionada?.cor || '#14b8a6',
        inicio: formData.hora,
        fim: calcularHoraFim(formData.hora, 60), // 1 hora padrão
        duracao: 60,
        topico: formData.topico || undefined,
      })

      toast.success('Sessão adicionada com sucesso!')

      // Resetar formulário
      setFormData({
        disciplinaId: '',
        hora: horaInicial || '08:00',
        data: dataInicial || '',
        topico: '',
      })

      onOpenChange(false)
      onSuccess?.()
    } catch (error) {
      console.error('Erro ao adicionar sessão:', error)
      toast.error('Erro ao adicionar sessão', {
        description: error instanceof Error ? error.message : 'Tente novamente',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px] p-0 gap-0 bg-white">
        {/* Header com cor teal */}
        <DialogHeader className="bg-teal-500 px-6 py-4 space-y-0">
          <DialogTitle className="text-white text-lg font-medium">
            Nova Sessão de Estudo
          </DialogTitle>
        </DialogHeader>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 py-6 space-y-5">
          {/* Disciplina */}
          <div className="flex items-center gap-4">
            <CircleDot className="w-5 h-5 text-gray-400 flex-shrink-0" />
            <div className="flex-1">
              <Select
                value={formData.disciplinaId}
                onValueChange={(value) =>
                  setFormData({ ...formData, disciplinaId: value })
                }
                disabled={isSubmitting || isLoadingDisciplinas}
              >
                <SelectTrigger className="border-0 border-b-2 border-teal-500 rounded-none h-10 focus:ring-0 focus:ring-offset-0">
                  <SelectValue
                    placeholder={
                      isLoadingDisciplinas
                        ? 'Carregando...'
                        : 'Selecione a disciplina'
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  {disciplinas.map((disciplina) => (
                    <SelectItem key={disciplina.id} value={disciplina.id}>
                      <div className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{
                            backgroundColor: disciplina.cor || '#14b8a6',
                          }}
                        />
                        {disciplina.nome}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Horário */}
          <div className="flex items-center gap-4">
            <Clock className="w-5 h-5 text-gray-400 flex-shrink-0" />
            <div className="flex-1">
              <Input
                type="time"
                value={formData.hora}
                onChange={(e) =>
                  setFormData({ ...formData, hora: e.target.value })
                }
                disabled={isSubmitting}
                className="border-0 border-b-2 border-teal-500 rounded-none h-10 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          </div>

          {/* Data */}
          <div className="flex items-center gap-4">
            <CalendarIcon className="w-5 h-5 text-gray-400 flex-shrink-0" />
            <div className="flex-1">
              <Input
                type="date"
                value={formData.data}
                onChange={(e) =>
                  setFormData({ ...formData, data: e.target.value })
                }
                disabled={isSubmitting}
                className="border-0 border-b-2 border-teal-500 rounded-none h-10 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          </div>

          {/* Tópico (opcional) */}
          <div className="flex items-center gap-4">
            <BookMarked className="w-5 h-5 text-gray-400 flex-shrink-0" />
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Tópico (opcional)"
                value={formData.topico}
                onChange={(e) =>
                  setFormData({ ...formData, topico: e.target.value })
                }
                disabled={isSubmitting}
                className="border-0 border-b-2 border-teal-500 rounded-none h-10 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Botão de ação */}
          <div className="pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-teal-500 hover:bg-teal-600 text-white h-11 text-base font-medium"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Salvando...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Salvar
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

// Função helper para calcular hora fim
function calcularHoraFim(horaInicio: string, duracaoMinutos: number): string {
  const [horas, minutos] = horaInicio.split(':').map(Number)
  const totalMinutos = horas * 60 + minutos + duracaoMinutos
  const novasHoras = Math.floor(totalMinutos / 60) % 24
  const novosMinutos = totalMinutos % 60
  return `${String(novasHoras).padStart(2, '0')}:${String(
    novosMinutos,
  ).padStart(2, '0')}`
}
