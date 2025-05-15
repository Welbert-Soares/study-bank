'use client'

import { TableRow, TableCell } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import type { DisciplinaDoDia } from '@/services/historico/types'

interface DetailedSubjectRowProps {
  disciplina: DisciplinaDoDia
}

export function DetailedSubjectRow({ disciplina }: DetailedSubjectRowProps) {
  return (
    <TableRow className="hover:bg-transparent">
      <TableCell colSpan={5} className="bg-gray-50 p-2">
        <div className="flex items-center justify-between px-2">
          <Badge variant="secondary" className="text-base">
            {disciplina.disciplina}
          </Badge>
          <span className="text-sm text-gray-500">
            {disciplina.materias.length} matéria(s)
          </span>
        </div>
      </TableCell>
    </TableRow>
  )
}
