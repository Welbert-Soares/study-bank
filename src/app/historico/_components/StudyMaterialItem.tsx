'use client'

import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { MateriaDoDia } from '@/app/actions/historico.actions'
import { getStatusColor } from '../utils/formatters'

interface StudyMaterialItemProps {
  materia: MateriaDoDia
}

export function StudyMaterialItem({ materia }: StudyMaterialItemProps) {
  return (
    <div className="space-y-3 p-4 rounded-lg border bg-gray-50">
      <div className="flex justify-between items-start gap-4">
        <div className="space-y-1 flex-1">
          <div className="space-y-1">
            <h3 className="font-medium text-base">{materia.titulo}</h3>
            {materia.descricao && (
              <div className="text-sm text-gray-600 bg-gray-100 p-2 rounded-md">
                <span className="font-medium text-gray-700">
                  Conteúdo estudado:
                </span>
                <p className="mt-1">{materia.descricao}</p>
              </div>
            )}
          </div>
        </div>
        <Badge
          variant="secondary"
          className={`whitespace-nowrap ${getStatusColor(materia.status)}`}
        >
          {materia.status.replace('_', ' ')}
        </Badge>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center text-sm">
          <span>Progresso</span>
          <span>{materia.progresso}%</span>
        </div>
        <Progress value={materia.progresso} className="h-2" />
      </div>

      {(materia.tempoEstudado || materia.anotacoes) && (
        <>
          <Separator />
          <div className="space-y-2 pt-2">
            {materia.tempoEstudado && (
              <div className="text-sm">
                <span className="font-medium">Tempo estudado:</span>{' '}
                {Math.floor(materia.tempoEstudado / 60)}h{' '}
                {materia.tempoEstudado % 60}min
              </div>
            )}
            {materia.anotacoes && (
              <div className="text-sm">
                <span className="font-medium">Anotações:</span>{' '}
                {materia.anotacoes}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}
