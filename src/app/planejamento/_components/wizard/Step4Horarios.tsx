'use client'

import { useEffect, useState, useRef } from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import type { Step4Data, HorarioDisponivel } from '@/types/planejamento'

interface Step4HorariosProps {
  data?: Step4Data
  onChange: (data: Step4Data) => void
}

const DIAS_SEMANA = [
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
  'Domingo',
]

const OPCOES_TEMPO = [
  { valor: 30, label: '30 minutos' },
  { valor: 45, label: '45 minutos' },
  { valor: 60, label: '1 hora' },
  { valor: 75, label: '1 hora e 15 minutos' },
  { valor: 90, label: '1 hora e 30 minutos' },
  { valor: 105, label: '1 hora e 45 minutos' },
  { valor: 120, label: '2 horas' },
]

export function Step4Horarios({ data, onChange }: Step4HorariosProps) {
  const [horarios, setHorarios] = useState<HorarioDisponivel[]>(() => {
    if (data?.horarios) return data.horarios

    // Inicializar com valores padrão (Segunda a Sexta ativas)
    return DIAS_SEMANA.map((dia, index) => ({
      dia,
      ativo: index < 5, // Segunda a Sexta
      inicio: '08:00',
      fim: '18:00',
    }))
  })

  const [tempoMinimo, setTempoMinimo] = useState(data?.tempoMinimo || 60)
  const [tempoMaximo, setTempoMaximo] = useState(data?.tempoMaximo || 90)
  const isFirstRender = useRef(true)

  // Notificar mudanças sempre que os estados mudarem (exceto primeira renderização)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      // Apenas notificar na primeira vez se não houver data inicial
      if (!data) {
        onChange({
          horarios,
          tempoMinimo,
          tempoMaximo,
        })
      }
      return
    }

    onChange({
      horarios,
      tempoMinimo,
      tempoMaximo,
    })
  }, [horarios, tempoMinimo, tempoMaximo])

  const toggleDia = (dia: string) => {
    setHorarios((prev) =>
      prev.map((h) => (h.dia === dia ? { ...h, ativo: !h.ativo } : h)),
    )
  }

  const atualizarHorario = (
    dia: string,
    campo: 'inicio' | 'fim',
    valor: string,
  ) => {
    setHorarios((prev) =>
      prev.map((h) => (h.dia === dia ? { ...h, [campo]: valor } : h)),
    )
  }

  const atualizarTempoMinimo = (valor: number) => {
    setTempoMinimo(valor)
  }

  const atualizarTempoMaximo = (valor: number) => {
    setTempoMaximo(valor)
  }

  const calcularHorasSemanais = () => {
    return horarios.reduce((total, horario) => {
      if (!horario.ativo) return total

      const [inicioH, inicioM] = horario.inicio.split(':').map(Number)
      const [fimH, fimM] = horario.fim.split(':').map(Number)

      const inicioMinutos = inicioH * 60 + inicioM
      const fimMinutos = fimH * 60 + fimM

      return total + (fimMinutos - inicioMinutos)
    }, 0)
  }

  const totalMinutos = calcularHorasSemanais()
  const totalHoras = Math.floor(totalMinutos / 60)
  const totalMinutosResto = totalMinutos % 60

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <p className="text-muted-foreground mb-4">
          Configure os dias e horários disponíveis para estudo durante a semana
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-200 rounded-lg">
          <span className="font-semibold text-teal-700">
            Total semanal: {totalHoras}h
            {totalMinutosResto > 0 ? ` ${totalMinutosResto}min` : ''}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Coluna esquerda: Dias e horários */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg mb-4">Dias Disponíveis</h3>

          {horarios.map((horario) => (
            <div
              key={horario.dia}
              className={`p-4 border-2 rounded-xl transition-all ${
                horario.ativo
                  ? 'border-teal-500 bg-teal-50'
                  : 'border-gray-200 bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-4">
                <Checkbox
                  checked={horario.ativo}
                  onCheckedChange={() => toggleDia(horario.dia)}
                  className="data-[state=checked]:bg-teal-500 data-[state=checked]:border-teal-500"
                />

                <div className="flex-1">
                  <label className="font-medium text-sm cursor-pointer">
                    {horario.dia}
                  </label>

                  {horario.ativo && (
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center gap-2">
                        <label className="text-xs text-muted-foreground">
                          De
                        </label>
                        <Input
                          type="time"
                          value={horario.inicio}
                          onChange={(e) =>
                            atualizarHorario(
                              horario.dia,
                              'inicio',
                              e.target.value,
                            )
                          }
                          className="w-28 h-8 text-sm"
                        />
                      </div>

                      <div className="flex items-center gap-2">
                        <label className="text-xs text-muted-foreground">
                          Até
                        </label>
                        <Input
                          type="time"
                          value={horario.fim}
                          onChange={(e) =>
                            atualizarHorario(horario.dia, 'fim', e.target.value)
                          }
                          className="w-28 h-8 text-sm"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coluna direita: Duração das sessões */}
        <div className="space-y-6">
          <div className="p-6 bg-gray-50 rounded-xl border-2 border-gray-200">
            <h3 className="font-bold text-lg mb-4">Duração das Sessões</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Defina a duração mínima e máxima de cada sessão de estudo
            </p>

            <div className="space-y-6">
              {/* Tempo Mínimo */}
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Tempo Mínimo
                </label>
                <Select
                  value={tempoMinimo.toString()}
                  onValueChange={(valor) => atualizarTempoMinimo(Number(valor))}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione o tempo mínimo" />
                  </SelectTrigger>
                  <SelectContent>
                    {OPCOES_TEMPO.map((opcao) => (
                      <SelectItem
                        key={opcao.valor}
                        value={opcao.valor.toString()}
                      >
                        {opcao.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground mt-2">
                  Sessões não serão menores que este tempo
                </p>
              </div>

              {/* Tempo Máximo */}
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Tempo Máximo
                </label>
                <Select
                  value={tempoMaximo.toString()}
                  onValueChange={(valor) => atualizarTempoMaximo(Number(valor))}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione o tempo máximo" />
                  </SelectTrigger>
                  <SelectContent>
                    {OPCOES_TEMPO.filter(
                      (opcao) => opcao.valor >= tempoMinimo,
                    ).map((opcao) => (
                      <SelectItem
                        key={opcao.valor}
                        value={opcao.valor.toString()}
                      >
                        {opcao.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground mt-2">
                  Sessões não serão maiores que este tempo
                </p>
              </div>
            </div>

            {tempoMaximo < tempoMinimo && (
              <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-xs text-red-700">
                  ⚠️ O tempo máximo deve ser maior ou igual ao tempo mínimo
                </p>
              </div>
            )}
          </div>

          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">💡 Dica:</span> Estudos mostram
              que sessões entre 45-90 minutos são mais eficazes para retenção de
              conhecimento.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
