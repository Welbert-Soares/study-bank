'use client'

import { useState, useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
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
  Repeat,
} from 'lucide-react'
import { toast } from 'sonner'
import {
  editarSessaoAction,
  deletarSessaoAction,
} from '@/app/actions/planos.actions'
import { listarDisciplinasAction } from '@/app/actions/planos.actions'
import type { DisciplinaFromDB } from '@/types/plano'
import type { SessaoEstudo } from '@/types/planejamento'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

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
  const [showDeleteAlert, setShowDeleteAlert] = useState(false)
  const [disciplinas, setDisciplinas] = useState<DisciplinaFromDB[]>([])
  const [isLoadingDisciplinas, setIsLoadingDisciplinas] = useState(true)

  const [formData, setFormData] = useState({
    disciplinaId: '',
    inicio: '',
    fim: '',
    topico: '',
    // Recorrência
    repetir: false,
    frequencia: 1,
    diasSemana: [diaSemana],
    terminaEm: 'nunca' as 'nunca' | 'em',
    dataInicio: '',
    dataFim: '',
  })

  // Estado para armazenar os dados originais
  const [dadosOriginais, setDadosOriginais] = useState<typeof formData | null>(
    null,
  )

  // Função para verificar se houve alterações
  const temAlteracoes = () => {
    if (!dadosOriginais) return false

    return (
      formData.disciplinaId !== dadosOriginais.disciplinaId ||
      formData.inicio !== dadosOriginais.inicio ||
      formData.fim !== dadosOriginais.fim ||
      formData.topico !== dadosOriginais.topico ||
      formData.repetir !== dadosOriginais.repetir ||
      formData.frequencia !== dadosOriginais.frequencia ||
      JSON.stringify(formData.diasSemana) !==
        JSON.stringify(dadosOriginais.diasSemana) ||
      formData.terminaEm !== dadosOriginais.terminaEm ||
      formData.dataInicio !== dadosOriginais.dataInicio ||
      formData.dataFim !== dadosOriginais.dataFim
    )
  }

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
      // Verificar se tem múltiplos dias (recorrência)
      const temRecorrencia = sessao.dataFim !== undefined

      const dadosIniciais = {
        disciplinaId: sessao.disciplinaId || '',
        inicio: sessao.inicio,
        fim: sessao.fim,
        topico: sessao.topico || '',
        repetir: temRecorrencia,
        frequencia: 1,
        diasSemana: [diaSemana],
        terminaEm: (sessao.dataFim ? 'em' : 'nunca') as 'nunca' | 'em',
        dataInicio: sessao.dataInicio || '',
        dataFim: sessao.dataFim || '',
      }

      setFormData(dadosIniciais)
      setDadosOriginais(dadosIniciais)
    }
  }, [sessao, open, diaSemana])

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

    // Validações de recorrência
    if (formData.repetir) {
      if (formData.diasSemana.length === 0) {
        toast.error('Selecione pelo menos um dia da semana para recorrência')
        return
      }

      if (formData.terminaEm === 'em') {
        if (!formData.dataFim) {
          toast.error('Selecione a data de término da recorrência')
          return
        }
        if (formData.dataFim <= formData.dataInicio) {
          toast.error('A data de término deve ser posterior à data de início')
          return
        }
      }
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
        dataInicio: formData.repetir ? formData.dataInicio : undefined,
        dataFim:
          formData.repetir && formData.terminaEm === 'em'
            ? formData.dataFim
            : undefined,
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

    setIsDeleting(true)

    try {
      await deletarSessaoAction(planejamentoId, diaSemana, sessaoIndex)

      toast.success('Sessão excluída com sucesso!')
      setShowDeleteAlert(false)
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
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[520px] p-0 gap-0 bg-white max-h-[90vh] overflow-hidden flex flex-col [&>button]:hidden">
          {/* Header com cor teal e botão de deletar */}
          <DialogHeader className="bg-teal-500 px-6 py-4 space-y-0 flex-shrink-0">
            <div className="flex items-center justify-between w-full">
              <DialogTitle className="text-white text-lg font-medium">
                Editar Sessão
              </DialogTitle>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => setShowDeleteAlert(true)}
                disabled={isDeleting || isSubmitting}
                className="h-10 w-10 rounded-md bg-white/10 text-white hover:bg-white/20 transition-colors disabled:opacity-50"
              >
                <Trash2 className="w-5 h-5" />
              </Button>
            </div>
          </DialogHeader>

          {/* Form com scroll */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col flex-1 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-5 overflow-y-auto flex-1">
              {/* Disciplina */}
              <div className="flex items-center gap-4">
                <CircleDot className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <div className="flex-1">
                  <Select
                    value={formData.disciplinaId}
                    onValueChange={(value) =>
                      setFormData({ ...formData, disciplinaId: value })
                    }
                    disabled={
                      isSubmitting || isLoadingDisciplinas || isDeleting
                    }
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

              {/* Recorrência */}
              <div className="flex items-start gap-4">
                <Repeat className="w-5 h-5 text-gray-400 flex-shrink-0 mt-2" />
                <div className="flex-1 space-y-2">
                  <select
                    value={formData.repetir ? 'recorrente' : 'nao-repete'}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        repetir: e.target.value === 'recorrente',
                      })
                    }
                    disabled={isSubmitting || isDeleting}
                    className="w-full border-0 border-b-2 border-teal-500 rounded-none h-10 focus:outline-none focus:ring-0 bg-transparent"
                  >
                    <option value="nao-repete">Não se repete</option>
                    <option value="recorrente">Recorrente</option>
                  </select>

                  {formData.repetir && (
                    <div className="space-y-4 pt-2">
                      {/* Frequência */}
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">
                          Repetir a cada
                        </span>
                        <Input
                          type="number"
                          min="1"
                          value={formData.frequencia}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              frequencia: parseInt(e.target.value) || 1,
                            })
                          }
                          disabled={isSubmitting || isDeleting}
                          className="w-16 border-0 border-b-2 border-teal-500 rounded-none h-8 focus-visible:ring-0 focus-visible:ring-offset-0 text-center"
                        />
                        <span className="text-sm text-gray-600">semana(s)</span>
                      </div>

                      {/* Dias da semana */}
                      <div>
                        <Label className="text-sm text-gray-600 mb-2 block">
                          Repetir em
                        </Label>
                        <div className="flex gap-1">
                          {(
                            [
                              'Domingo',
                              'Segunda',
                              'Terça',
                              'Quarta',
                              'Quinta',
                              'Sexta',
                              'Sabado',
                            ] as const
                          ).map((dia, index) => {
                            const isSelected = formData.diasSemana.includes(dia)
                            return (
                              <button
                                key={dia}
                                type="button"
                                onClick={() => {
                                  const newDias = isSelected
                                    ? formData.diasSemana.filter(
                                        (d) => d !== dia,
                                      )
                                    : [...formData.diasSemana, dia]
                                  if (newDias.length > 0) {
                                    setFormData({
                                      ...formData,
                                      diasSemana: newDias,
                                    })
                                  }
                                }}
                                disabled={isSubmitting || isDeleting}
                                className={`flex-1 h-10 rounded-md text-sm font-medium transition-colors ${
                                  isSelected
                                    ? 'bg-teal-500 text-white'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                              >
                                {dia.charAt(0)}
                              </button>
                            )
                          })}
                        </div>
                      </div>

                      {/* Termina */}
                      <div>
                        <Label className="text-sm text-gray-600 mb-2 block">
                          Termina
                        </Label>
                        <RadioGroup
                          value={formData.terminaEm}
                          onValueChange={(value: 'nunca' | 'em') =>
                            setFormData({ ...formData, terminaEm: value })
                          }
                          disabled={isSubmitting || isDeleting}
                          className="space-y-2"
                        >
                          <div className="flex items-center space-x-2">
                            <input
                              type="radio"
                              id="termina-nunca"
                              checked={formData.terminaEm === 'nunca'}
                              onChange={() =>
                                setFormData({ ...formData, terminaEm: 'nunca' })
                              }
                              disabled={isSubmitting || isDeleting}
                              className="w-4 h-4 text-teal-500 focus:ring-teal-500"
                            />
                            <Label
                              htmlFor="termina-nunca"
                              className="text-sm font-normal cursor-pointer"
                            >
                              Nunca
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="radio"
                              id="termina-em"
                              checked={formData.terminaEm === 'em'}
                              onChange={() =>
                                setFormData({ ...formData, terminaEm: 'em' })
                              }
                              disabled={isSubmitting || isDeleting}
                              className="w-4 h-4 text-teal-500 focus:ring-teal-500"
                            />
                            <Label
                              htmlFor="termina-em"
                              className="text-sm font-normal cursor-pointer"
                            >
                              Em
                            </Label>
                            <Input
                              type="date"
                              value={formData.dataFim || ''}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  dataFim: e.target.value,
                                })
                              }
                              disabled={
                                isSubmitting ||
                                isDeleting ||
                                formData.terminaEm === 'nunca'
                              }
                              className="flex-1 border-0 border-b-2 border-teal-500 rounded-none h-8 focus-visible:ring-0 focus-visible:ring-offset-0 disabled:opacity-50"
                            />
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Botões de ação */}
            <div className="p-6 border-t flex gap-2">
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
                disabled={isSubmitting || isDeleting || !temAlteracoes()}
                className="flex-1 bg-teal-500 hover:bg-teal-600 text-white h-11 text-base font-medium disabled:opacity-50 disabled:cursor-not-allowed"
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

      {/* AlertDialog para confirmar exclusão */}
      <AlertDialog open={showDeleteAlert} onOpenChange={setShowDeleteAlert}>
        <AlertDialogContent className="sm:max-w-[425px]">
          <AlertDialogHeader className="space-y-3">
            <AlertDialogTitle className="text-xl font-semibold">
              Tem certeza?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-base text-gray-600">
              Esta ação não pode ser desfeita. A sessão de estudo será
              permanentemente excluída.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="gap-2 sm:gap-2">
            <AlertDialogCancel disabled={isDeleting} className="h-11 sm:flex-1">
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-red-600 hover:bg-red-700 h-11 sm:flex-1"
              disabled={isDeleting}
            >
              {isDeleting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Excluindo...
                </>
              ) : (
                'Excluir'
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
