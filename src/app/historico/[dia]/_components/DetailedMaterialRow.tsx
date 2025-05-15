'use client'

import { TableRow, TableCell } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import type { MateriaDoDia } from '@/app/actions/historico.actions'
import { getStatusColor } from '../../utils/formatters'

interface DetailedMaterialRowProps {
  materia: MateriaDoDia
}

export function DetailedMaterialRow({ materia }: DetailedMaterialRowProps) {
  return (
    <TableRow>
      <TableCell className="font-medium">{materia.titulo}</TableCell>
      <TableCell>
        {materia.descricao && (
          <div className="text-sm text-gray-600">
            <p className="line-clamp-2">{materia.descricao}</p>
            {materia.anotacoes && (
              <div className="mt-2 text-xs bg-gray-50 p-2 rounded border">
                <span className="font-medium text-gray-700">Anotações:</span>{' '}
                <span className="text-gray-600">{materia.anotacoes}</span>
              </div>
            )}
          </div>
        )}
      </TableCell>
      <TableCell>
        <Badge
          variant="secondary"
          className={`whitespace-nowrap ${getStatusColor(materia.status)}`}
        >
          {materia.status.replace('_', ' ')}
        </Badge>
      </TableCell>
      <TableCell>
        <div className="w-full space-y-1">
          <div className="flex justify-between text-xs">
            <span className="text-gray-600">Progresso</span>
            <span className="font-medium">{materia.progresso}%</span>
          </div>
          <Progress value={materia.progresso} className="h-2" />
        </div>
      </TableCell>
      <TableCell>
        {materia.tempoEstudado ? (
          <span className="text-sm text-gray-600">
            {Math.floor(materia.tempoEstudado / 60)}h{' '}
            {materia.tempoEstudado % 60}min
          </span>
        ) : (
          <span className="text-sm text-gray-400">-</span>
        )}
      </TableCell>
    </TableRow>
  )
}
