'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function TableSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="flex justify-between items-center mb-8">
        <div className="space-y-2">
          <div className="h-8 w-64 bg-gray-200 rounded-md" />
          <div className="h-4 w-48 bg-gray-200 rounded-md" />
        </div>
        <div className="h-10 w-32 bg-gray-200 rounded-md" />
      </div>

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
            {Array.from({ length: 2 })
              .map((_, i) => [
                <TableRow key={`group-${i}`} className="hover:bg-transparent">
                  <TableCell colSpan={5} className="bg-gray-50 p-2">
                    <div className="flex items-center justify-between px-2">
                      <div className="h-6 w-24 bg-gray-200 rounded-full" />
                      <div className="h-4 w-16 bg-gray-200 rounded-md" />
                    </div>
                  </TableCell>
                </TableRow>,
                ...Array.from({ length: 2 }).map((_, j) => (
                  <TableRow key={`item-${i}-${j}`}>
                    <TableCell className="max-w-[300px]">
                      <div className="h-4 w-3/4 bg-gray-200 rounded-md" />
                    </TableCell>
                    <TableCell>
                      <div className="space-y-2">
                        <div className="h-8 w-full bg-gray-200 rounded-md" />
                        <div className="h-4 w-3/4 bg-gray-200 rounded-md" />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="h-6 w-24 bg-gray-200 rounded-full" />
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <div className="h-3 w-12 bg-gray-200 rounded-md" />
                          <div className="h-3 w-8 bg-gray-200 rounded-md" />
                        </div>
                        <div className="h-2 w-full bg-gray-200 rounded-full" />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="h-4 w-16 bg-gray-200 rounded-md" />
                    </TableCell>
                  </TableRow>
                )),
              ])
              .flat()}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
