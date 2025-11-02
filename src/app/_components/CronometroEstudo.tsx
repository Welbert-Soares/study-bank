'use client'

import { useState, useEffect, useRef } from 'react'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { VisuallyHidden } from '@/components/ui/visually-hidden'
import { Button } from '@/components/ui/button'
import { Pause, Play, Square } from 'lucide-react'

interface CronometroEstudoProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  disciplinaNome: string
  duracaoMinutos: number // Duração total em minutos
  onFinalizar: (tempoDecorrido: number) => void // Callback com tempo em minutos
}

export function CronometroEstudo({
  open,
  onOpenChange,
  disciplinaNome,
  duracaoMinutos,
  onFinalizar,
}: CronometroEstudoProps) {
  const [segundosDecorridos, setSegundosDecorridos] = useState(0)
  const [isPausado, setIsPausado] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const duracaoTotalSegundos = duracaoMinutos * 60
  const progresso = (segundosDecorridos / duracaoTotalSegundos) * 100

  // Formatar tempo em HH:MM:SS
  const formatarTempo = (segundos: number) => {
    const h = Math.floor(segundos / 3600)
    const m = Math.floor((segundos % 3600) / 60)
    const s = segundos % 60
    return `${String(h).padStart(2, '0')}:${String(m).padStart(
      2,
      '0',
    )}:${String(s).padStart(2, '0')}`
  }

  // Formatar duração total
  const formatarDuracao = (minutos: number) => {
    const h = Math.floor(minutos / 60)
    const m = minutos % 60
    if (h > 0) {
      return `${String(h).padStart(2, '0')}h${String(m).padStart(2, '0')}`
    }
    return `${String(m).padStart(2, '0')}min`
  }

  // Iniciar/Pausar cronômetro
  useEffect(() => {
    if (open && !isPausado) {
      intervalRef.current = setInterval(() => {
        setSegundosDecorridos((prev) => {
          if (prev >= duracaoTotalSegundos) {
            // Tempo acabou
            clearInterval(intervalRef.current!)
            handleFinalizar()
            return prev
          }
          return prev + 1
        })
      }, 1000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [open, isPausado, duracaoTotalSegundos])

  const handlePausar = () => {
    setIsPausado(!isPausado)
  }

  const handleFinalizar = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    const minutos = Math.ceil(segundosDecorridos / 60)
    onFinalizar(minutos)
    onOpenChange(false)
    // Reset
    setSegundosDecorridos(0)
    setIsPausado(false)
  }

  const handleClose = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    setSegundosDecorridos(0)
    setIsPausado(false)
    onOpenChange(false)
  }

  if (!open) return null

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl h-[600px] p-0 bg-gradient-to-b from-gray-900 to-gray-800 border-none">
        <VisuallyHidden>
          <DialogTitle>Cronômetro de Estudo - {disciplinaNome}</DialogTitle>
        </VisuallyHidden>

        <div className="flex flex-col items-center justify-center h-full text-white relative">
          {/* Logo */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <span className="text-2xl font-bold">studei</span>
            </div>
          </div>

          {/* Conteúdo Central */}
          <div className="flex flex-col items-center gap-8">
            <p className="text-lg text-gray-300">Você está estudando:</p>

            {/* Disciplina e Progresso */}
            <div className="w-full max-w-md space-y-3">
              <h2 className="text-3xl font-bold text-center">
                {disciplinaNome}
              </h2>

              {/* Barra de Progresso */}
              <div className="relative w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-full bg-teal-500 transition-all duration-1000"
                  style={{ width: `${Math.min(progresso, 100)}%` }}
                />
              </div>

              {/* Tempo Decorrido / Total */}
              <div className="flex justify-between text-sm text-gray-400">
                <span>{formatarTempo(segundosDecorridos)}</span>
                <span>{formatarDuracao(duracaoMinutos)}</span>
              </div>
            </div>

            {/* Cronômetro Grande */}
            <div className="text-8xl font-bold tracking-wider">
              {formatarTempo(segundosDecorridos)}
            </div>

            {/* Botões de Controle */}
            <div className="flex items-center gap-4">
              <Button
                onClick={handlePausar}
                size="lg"
                variant="ghost"
                className="w-14 h-14 rounded-full bg-white/10 hover:bg-white/20"
              >
                {isPausado ? (
                  <Play className="w-6 h-6" />
                ) : (
                  <Pause className="w-6 h-6" />
                )}
              </Button>

              <Button
                onClick={handleFinalizar}
                size="lg"
                className="px-8 py-6 bg-teal-500 hover:bg-teal-600 text-white rounded-full font-semibold"
              >
                <Square className="w-5 h-5 mr-2" />
                PARAR E SALVAR
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
