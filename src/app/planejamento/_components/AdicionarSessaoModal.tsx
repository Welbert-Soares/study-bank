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
  Save,
  Repeat,
} from 'lucide-react'
import { toast } from 'sonner'
import { adicionarSessaoAction } from '@/app/actions/planos.actions'
import { listarDisciplinasAction } from '@/app/actions/planos.actions'
import type { DisciplinaFromDB } from '@/types/plano'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'

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
    // Recorrência
    repetir: false,
    frequencia: 1, // A cada X semanas
    diasSemana: [diaSemana], // Array de dias da semana
    terminaEm: 'nunca' as 'nunca' | 'em',
    dataFim: '',
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
        repetir: false,
        frequencia: 1,
        diasSemana: [diaSemana],
        terminaEm: 'nunca',
        dataFim: '',
      })
    }
  }, [open, dataInicial, horaInicial, diaSemana])

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

    // Validar data fim da recorrência
    if (formData.repetir && formData.terminaEm === 'em') {
      if (!formData.dataFim) {
        toast.error('Informe a data de término da recorrência')
        return
      }

      if (formData.dataFim <= formData.data) {
        toast.error('A data de término deve ser posterior à data inicial')
        return
      }
    }

    setIsSubmitting(true)

    try {
      const disciplinaSelecionada = disciplinas.find(
        (d) => d.id === formData.disciplinaId,
      )

      const sessaoBase = {
        disciplinaId: formData.disciplinaId,
        nome: disciplinaSelecionada?.nome || 'Estudo',
        cor: disciplinaSelecionada?.cor || '#14b8a6',
        inicio: formData.hora,
        fim: calcularHoraFim(formData.hora, 60), // 1 hora padrão
        duracao: 60,
        topico: formData.topico || undefined,
        // Adicionar controle de datas para recorrência
        dataInicio: formData.data, // Data do agendamento
        dataFim:
          formData.repetir && formData.terminaEm === 'em'
            ? formData.dataFim
            : undefined,
      }

      // Se não repetir, adicionar apenas no dia selecionado
      if (!formData.repetir) {
        await adicionarSessaoAction(planejamentoId, diaSemana, sessaoBase)
        toast.success('Sessão adicionada com sucesso!')
      } else {
        // Se repetir, adicionar em todos os dias da semana selecionados
        const diasParaAdicionar = formData.diasSemana

        // Adicionar em cada dia da semana
        for (const dia of diasParaAdicionar) {
          await adicionarSessaoAction(planejamentoId, dia, sessaoBase)
        }

        toast.success(
          `Sessão recorrente adicionada em ${diasParaAdicionar.length} dia(s) da semana!`,
        )
      }

      // Resetar formulário
      setFormData({
        disciplinaId: '',
        hora: horaInicial || '08:00',
        data: dataInicial || '',
        topico: '',
        repetir: false,
        frequencia: 1,
        diasSemana: [diaSemana],
        terminaEm: 'nunca',
        dataFim: '',
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
      <DialogContent className="sm:max-w-[520px] p-0 gap-0 bg-white max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header com cor teal */}
        <DialogHeader className="bg-teal-500 px-6 py-4 space-y-0 flex-shrink-0">
          <DialogTitle className="text-white text-lg font-medium">
            Nova Sessão de Estudo
          </DialogTitle>
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

            {/* Recorrência */}
            <div className="flex items-center gap-4">
              <Repeat className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <div className="flex-1">
                <Select
                  value={formData.repetir ? 'sim' : 'nao'}
                  onValueChange={(value) =>
                    setFormData({ ...formData, repetir: value === 'sim' })
                  }
                  disabled={isSubmitting}
                >
                  <SelectTrigger className="border-0 border-b-2 border-teal-500 rounded-none h-10 focus:ring-0 focus:ring-offset-0">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nao">Não se repete</SelectItem>
                    <SelectItem value="sim">Recorrente</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Opções de recorrência (quando ativado) */}
            {formData.repetir && (
              <div className="space-y-4 pl-9 border-l-2 border-teal-200">
                {/* Repetir a cada X semanas */}
                <div>
                  <Label className="text-sm text-gray-600 mb-2 block">
                    REPETIR A CADA
                  </Label>
                  <div className="flex items-center gap-2">
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
                      disabled={isSubmitting}
                      className="w-20 text-center border-2 border-gray-300 rounded h-10"
                    />
                    <span className="text-sm text-gray-600">Semana</span>
                  </div>
                </div>

                {/* Dias da semana */}
                <div>
                  <Label className="text-sm text-gray-600 mb-2 block">
                    REPETIR
                  </Label>
                  <div className="flex gap-1">
                    {[
                      { value: 'Domingo', label: 'D' },
                      { value: 'Segunda', label: 'S' },
                      { value: 'Terça', label: 'T' },
                      { value: 'Quarta', label: 'Q' },
                      { value: 'Quinta', label: 'Q' },
                      { value: 'Sexta', label: 'S' },
                      { value: 'Sabado', label: 'S' },
                    ].map((dia) => {
                      const isSelected = formData.diasSemana.includes(dia.value)
                      return (
                        <button
                          key={dia.value}
                          type="button"
                          onClick={() => {
                            if (isSelected) {
                              // Remover dia (mínimo 1)
                              if (formData.diasSemana.length > 1) {
                                setFormData({
                                  ...formData,
                                  diasSemana: formData.diasSemana.filter(
                                    (d) => d !== dia.value,
                                  ),
                                })
                              }
                            } else {
                              // Adicionar dia
                              setFormData({
                                ...formData,
                                diasSemana: [...formData.diasSemana, dia.value],
                              })
                            }
                          }}
                          disabled={isSubmitting}
                          className={`w-10 h-10 rounded-md font-medium text-sm transition-colors ${
                            isSelected
                              ? 'bg-teal-500 text-white'
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                        >
                          {dia.label}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Termina em */}
                <div>
                  <Label className="text-sm text-gray-600 mb-2 block">
                    TERMINA EM
                  </Label>
                  <RadioGroup
                    value={formData.terminaEm}
                    onValueChange={(value: 'nunca' | 'em') =>
                      setFormData({ ...formData, terminaEm: value })
                    }
                    disabled={isSubmitting}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="nunca" id="nunca" />
                      <Label htmlFor="nunca" className="text-sm cursor-pointer">
                        Nunca
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="em" id="em" />
                      <Label htmlFor="em" className="text-sm cursor-pointer">
                        Em
                      </Label>
                      {formData.terminaEm === 'em' && (
                        <Input
                          type="date"
                          value={formData.dataFim}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              dataFim: e.target.value,
                            })
                          }
                          disabled={isSubmitting}
                          className="ml-2 h-9 w-40 text-sm"
                        />
                      )}
                    </div>
                  </RadioGroup>
                </div>
              </div>
            )}

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
