'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { StatusConteudo } from '@prisma/client'

interface Atividade {
  id: string
  titulo: string
  disciplina: string
  status: string
}

interface CronogramaCardProps {
  cronograma: Atividade[]
  onStatusChange: (id: string, status: StatusConteudo) => Promise<void>
}

export function CronogramaCard({
  cronograma,
  onStatusChange,
}: CronogramaCardProps) {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>📋 Cronograma de Hoje</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Atividade</TableHead>
              <TableHead>Disciplina</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[100px]">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cronograma.map((item) => (
              <TableRow
                key={item.id}
                className={
                  item.status === 'concluido'
                    ? 'bg-green-50'
                    : item.status === 'em_progresso'
                    ? 'bg-yellow-50'
                    : ''
                }
              >
                <TableCell className="font-medium">{item.titulo}</TableCell>
                <TableCell>{item.disciplina}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="capitalize">
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => onStatusChange(item.id, 'em_progresso')}
                      disabled={item.status === 'concluido'}
                    >
                      ▶️
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => onStatusChange(item.id, 'concluido')}
                      disabled={item.status === 'concluido'}
                    >
                      ✓
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
