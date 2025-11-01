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
  X,
} from 'lucide-react'
import { toast } from 'sonner'
import {
  editarSessaoAction,
  deletarSessaoAction,
} from '@/app/actions/planos.actions'
import { listarDisciplinasAction } from '@/app/actions/planos.actions'
import type { DisciplinaFromDB } from '@/types/plano'
import type { SessaoEstudo } from '@/types/planejamento'

interface EditarSessaoModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  planejamentoId: string
  planoId: string
  diaSemana: string
  sessao: SessaoEstudo | null
  sessaoIndex: number
  onSuccess?: () => void
}

export function EditarSessaoModal({
  open,
  onOpenChange,
  planejamentoId,
  planoId,
  diaSemana,
  sessao,
  sessaoIndex,
  onSuccess,
}: EditarSessaoModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const [disciplinas, setDisciplinas] = useState<DisciplinaFromDB[]>([])
  const [isLoadingDisciplinas, setIsLoadingDisciplinas] = useState(true)

  const [formData, setFormData] = useState({
    disciplinaId: '',
    inicio: '',
    fim: '',
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

  // Preencher formulário com dados da sessão
  useEffect(() => {
    if (sessao && open) {
      setFormData({
        disciplinaId: sessao.disciplinaId || '',
        inicio: sessao.inicio,
        fim: sessao.fim,
        topico: (sessao as any).topico || '',
      })
    }
  }, [sessao, open])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!sessao) return

    // Validações
    if (!formData.disciplinaId) {
      toast.error('Selecione uma disciplina')
      return
    }

    if (!formData.inicio || !formData.fim) {
      toast.error('Informe os horários de início e fim')
      return
    }

    // Validar que início é antes do fim
    if (formData.inicio >= formData.fim) {
      toast.error('O horário de início deve ser anterior ao de término')
      return
    }

    setIsSubmitting(true)

    try {
      const disciplinaSelecionada = disciplinas.find(
        (d) => d.id === formData.disciplinaId,
      )

      // Calcular duração em minutos
      const [horaIni, minIni] = formData.inicio.split(':').map(Number)
      const [horaFim, minFim] = formData.fim.split(':').map(Number)
      const duracaoMinutos = horaFim * 60 + minFim - (horaIni * 60 + minIni)

      await editarSessaoAction(planejamentoId, diaSemana, sessaoIndex, {
        disciplinaId: formData.disciplinaId,
        nome: disciplinaSelecionada?.nome || sessao.nome,
        cor: disciplinaSelecionada?.cor || sessao.cor,
        inicio: formData.inicio,
        fim: formData.fim,
        duracao: duracaoMinutos,
        topico: formData.topico || undefined,
      })

      toast.success('Sessão atualizada com sucesso!')
      onOpenChange(false)
      onSuccess?.()
    } catch (error) {
      console.error('Erro ao editar sessão:', error)
      toast.error('Erro ao editar sessão', {
        description: error instanceof Error ? error.message : 'Tente novamente',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDelete = async () => {
    if (!sessao) return

    if (
      !confirm(
        'Tem certeza que deseja excluir esta sessão de estudo? Esta ação não pode ser desfeita.',
      )
    ) {
      return
    }

    setIsDeleting(true)

    try {
      await deletarSessaoAction(planejamentoId, diaSemana, sessaoIndex)

      toast.success('Sessão excluída com sucesso!')
      onOpenChange(false)
      onSuccess?.()
    } catch (error) {
      console.error('Erro ao deletar sessão:', error)
      toast.error('Erro ao deletar sessão', {
        description: error instanceof Error ? error.message : 'Tente novamente',
      })
    } finally {
      setIsDeleting(false)
    }
  }

  if (!sessao) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px] p-0 gap-0 bg-white">
        {/* Header com cor teal e botão de deletar */}
        <DialogHeader className="bg-teal-500 px-6 py-4 space-y-0 flex flex-row items-center justify-between">
          <DialogTitle className="text-white text-lg font-medium">
            Editar Sessão
          </DialogTitle>
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={handleDelete}
              disabled={isDeleting || isSubmitting}
              className="h-8 w-8 text-white hover:bg-teal-600 hover:text-white"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => onOpenChange(false)}
              disabled={isDeleting || isSubmitting}
              className="h-8 w-8 text-white hover:bg-teal-600 hover:text-white"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
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
                disabled={isSubmitting || isLoadingDisciplinas || isDeleting}
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

          {/* Horário Início */}
          <div className="flex items-center gap-4">
            <Clock className="w-5 h-5 text-gray-400 flex-shrink-0" />
            <div className="flex-1">
              <Input
                type="time"
                value={formData.inicio}
                onChange={(e) =>
                  setFormData({ ...formData, inicio: e.target.value })
                }
                disabled={isSubmitting || isDeleting}
                className="border-0 border-b-2 border-teal-500 rounded-none h-10 focus-visible:ring-0 focus-visible:ring-offset-0"
                placeholder="Início"
              />
            </div>
          </div>

          {/* Horário Fim */}
          <div className="flex items-center gap-4">
            <Clock className="w-5 h-5 text-gray-400 flex-shrink-0" />
            <div className="flex-1">
              <Input
                type="time"
                value={formData.fim}
                onChange={(e) =>
                  setFormData({ ...formData, fim: e.target.value })
                }
                disabled={isSubmitting || isDeleting}
                className="border-0 border-b-2 border-teal-500 rounded-none h-10 focus-visible:ring-0 focus-visible:ring-offset-0"
                placeholder="Fim"
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
                disabled={isSubmitting || isDeleting}
                className="border-0 border-b-2 border-teal-500 rounded-none h-10 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Botões de ação */}
          <div className="pt-4 flex gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isSubmitting || isDeleting}
              className="flex-1 h-11"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting || isDeleting}
              className="flex-1 bg-teal-500 hover:bg-teal-600 text-white h-11 text-base font-medium"
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
