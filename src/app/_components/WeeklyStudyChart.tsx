'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useState } from 'react'

interface WeeklyStudyChartProps {
  planoId: string
}

export function WeeklyStudyChart({ planoId }: WeeklyStudyChartProps) {
  const [view, setView] = useState<'tempo' | 'questoes'>('tempo')

  // TODO: Buscar dados reais do estudo semanal
  const dados = {
    periodo: '14/01 - 20/01',
    dias: [
      { dia: 'D', tempo: 0, questoes: 0 },
      { dia: 'S', tempo: 60, questoes: 20 },
      { dia: 'T', tempo: 0, questoes: 0 },
      { dia: 'Q', tempo: 0, questoes: 0 },
      { dia: 'Q', tempo: 0, questoes: 0 },
      { dia: 'S', tempo: 120, questoes: 35 },
      { dia: 'S', tempo: 0, questoes: 0 },
    ],
  }

  const maxValue =
    view === 'tempo'
      ? Math.max(...dados.dias.map((d) => d.tempo))
      : Math.max(...dados.dias.map((d) => d.questoes))

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-gray-600 uppercase">
          Estudo Semanal
        </CardTitle>
        <div className="flex gap-1">
          <button
            onClick={() => setView('tempo')}
            className={`px-2 py-1 text-xs rounded ${
              view === 'tempo'
                ? 'bg-teal-500 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            TEMPO
          </button>
          <button
            onClick={() => setView('questoes')}
            className={`px-2 py-1 text-xs rounded ${
              view === 'questoes'
                ? 'bg-teal-500 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            QUESTÕES
          </button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-xs text-gray-600 mb-4">{dados.periodo}</div>
        <div className="flex items-end justify-between gap-2 h-32">
          {dados.dias.map((dia, index) => {
            const value = view === 'tempo' ? dia.tempo : dia.questoes
            const height = maxValue > 0 ? (value / maxValue) * 100 : 0

            return (
              <div
                key={index}
                className="flex flex-col items-center gap-2 flex-1"
              >
                <div className="flex-1 w-full flex items-end">
                  {value > 0 && (
                    <div
                      className="w-full bg-teal-500 rounded-t transition-all"
                      style={{ height: `${height}%` }}
                      title={
                        view === 'tempo' ? `${value} min` : `${value} questões`
                      }
                    />
                  )}
                </div>
                <div className="text-xs text-gray-600 font-medium">
                  {dia.dia}
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
