'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface Objetivo {
  id: string
  descricao: string
  completo: boolean
  prioridade: number
}

interface ObjetivosCardProps {
  objetivos: Objetivo[]
  onStatusChange: (id: string, completo: boolean) => Promise<void>
}

export function ObjetivosCard({
  objetivos,
  onStatusChange,
}: ObjetivosCardProps) {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>🎯 Objetivos do Dia</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {objetivos.map((objetivo) => (
            <div
              key={objetivo.id}
              className="flex items-center gap-2 p-2 rounded-lg border bg-card"
            >
              <input
                type="checkbox"
                checked={objetivo.completo}
                onChange={(e) => onStatusChange(objetivo.id, e.target.checked)}
                className="w-4 h-4"
              />
              <Badge
                variant="outline"
                className="w-6 h-6 flex items-center justify-center p-1"
              >
                {objetivo.prioridade}
              </Badge>
              <span
                className={
                  objetivo.completo ? 'line-through text-gray-500' : ''
                }
              >
                {objetivo.descricao}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
