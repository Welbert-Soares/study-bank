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

interface Revisao {
  id: string
  titulo: string
  disciplina: string
  status: string
}

interface RevisaoCardProps {
  revisoes: Revisao[]
  onStatusChange: (id: string, status: StatusConteudo) => Promise<void>
}

export function RevisaoCard({ revisoes, onStatusChange }: RevisaoCardProps) {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>🔄 Revisão do Dia Anterior</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Matéria</TableHead>
              <TableHead>Disciplina</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Ação</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {revisoes.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{item.titulo}</TableCell>
                <TableCell>{item.disciplina}</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={
                      item.status === 'concluido'
                        ? 'bg-green-100'
                        : item.status === 'em_progresso'
                        ? 'bg-yellow-100'
                        : ''
                    }
                  >
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
                      🔄 Revisar
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
