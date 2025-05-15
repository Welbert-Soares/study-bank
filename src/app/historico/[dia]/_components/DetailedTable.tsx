'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import type { DisciplinaDoDia } from '@/services/historico/types'
import { DetailedSubjectRow } from './DetailedSubjectRow'
import { DetailedMaterialRow } from './DetailedMaterialRow'

interface DetailedTableProps {
  disciplinas: DisciplinaDoDia[]
}

export function DetailedTable({ disciplinas }: DetailedTableProps) {
  return (
    <div className="rounded-md border bg-white">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">Matéria</TableHead>
            <TableHead>Conteúdo</TableHead>
            <TableHead className="w-[150px]">Status</TableHead>
            <TableHead className="w-[150px]">Progresso</TableHead>
            <TableHead className="w-[150px]">Tempo</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {disciplinas
            .map((disciplina) => [
              <DetailedSubjectRow
                key={disciplina.disciplina}
                disciplina={disciplina}
              />,
              ...disciplina.materias.map((materia) => (
                <DetailedMaterialRow key={materia.id} materia={materia} />
              )),
            ])
            .flat()}

          {disciplinas.length === 0 && (
            <TableRow>
              <TableCell colSpan={5} className="h-24 text-center">
                <p className="text-gray-500">
                  Nenhum registro encontrado para este dia.
                </p>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
