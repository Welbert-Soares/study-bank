'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Play, Pencil, Clock, BookOpen, CheckCircle2 } from 'lucide-react'
import type { SessaoEstudo } from '@/types/planejamento'

interface PreviewSessaoModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  sessao: SessaoEstudo | null
  diaSemana: string
  eventDate?: string // Data específica da ocorrência
  onIniciar: () => void
  onEditar: () => void
}

export function PreviewSessaoModal({
  open,
  onOpenChange,
  sessao,
  diaSemana,
  eventDate,
  onIniciar,
  onEditar,
}: PreviewSessaoModalProps) {
  if (!sessao) return null

  // Verificar se a data específica foi concluída
  const isConcluida = eventDate
    ? !!sessao.conclusoesPorData?.[eventDate]
    : false

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-800">
            Sessão de Estudo
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Status da sessão */}
          {isConcluida && (
            <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-green-800">
                Sessão já concluída
              </span>
            </div>
          )}

          {/* Informações da disciplina */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: sessao.cor }}
              >
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-gray-900">
                  {sessao.nome}
                </h3>
                <p className="text-sm text-gray-600">{diaSemana}</p>
              </div>
            </div>

            {/* Horário e duração */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2 text-gray-600 mb-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs font-medium uppercase">Horário</span>
                </div>
                <p className="text-sm font-semibold text-gray-900">
                  {sessao.inicio} - {sessao.fim}
                </p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2 text-gray-600 mb-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs font-medium uppercase">Duração</span>
                </div>
                <p className="text-sm font-semibold text-gray-900">
                  {sessao.duracao} minutos
                </p>
              </div>
            </div>

            {/* Tópico se disponível */}
            {sessao.topico && (
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-xs font-medium text-blue-700 uppercase mb-1">
                  Tópico
                </p>
                <p className="text-sm text-blue-900">{sessao.topico}</p>
              </div>
            )}
          </div>

          {/* Ações */}
          <div className="flex gap-3 pt-2">
            {!isConcluida && (
              <Button
                onClick={onIniciar}
                className="flex-1 gap-2 bg-teal-500 hover:bg-teal-600 h-12"
              >
                <Play className="w-5 h-5" />
                Iniciar Sessão
              </Button>
            )}
            <Button
              onClick={onEditar}
              variant="outline"
              className={`gap-2 h-12 ${isConcluida ? 'flex-1' : 'flex-[0.5]'}`}
            >
              <Pencil className="w-4 h-4" />
              Editar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
