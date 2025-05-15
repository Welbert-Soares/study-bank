'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

interface Metrica {
  id: string
  disciplina: string
  progresso: number
  cor: string
}

interface ProgressoDisciplinasCardProps {
  metricas: Metrica[]
  onProgressoChange: (id: string, valor: number) => Promise<void>
}

export function ProgressoDisciplinasCard({
  metricas,
  onProgressoChange,
}: ProgressoDisciplinasCardProps) {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>📊 Progresso por Disciplina</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {metricas.map((metrica) => (
            <div key={metrica.id} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">{metrica.disciplina}</span>
                <span className="text-gray-500">{metrica.progresso}%</span>
              </div>
              <div className="flex gap-4 items-center">
                <Progress value={metrica.progresso} className={metrica.cor} />
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={metrica.progresso}
                  onChange={(e) =>
                    metrica.id &&
                    onProgressoChange(metrica.id, parseInt(e.target.value))
                  }
                  className="w-16 px-2 py-1 border rounded"
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
