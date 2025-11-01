'use client'

import { Calendar, RotateCcw } from 'lucide-react'
import type { Step1Data } from '@/types/planejamento'

interface Step1TipoSelecaoProps {
  data?: Step1Data
  onChange: (data: Step1Data) => void
}

export function Step1TipoSelecao({ data, onChange }: Step1TipoSelecaoProps) {
  const tipo = data?.tipo || 'semanal'

  return (
    <div className="flex flex-col space-y-8 py-2">
      <p className="text-center text-sm text-gray-600 px-4">
        Para iniciar o seu planejamento, escolha a melhor forma de visualização
        para você:
      </p>

      <div className="grid grid-cols-2 gap-6">
        {/* Ciclo de Estudos - Desabilitado */}
        <button
          disabled
          className="p-6 border-2 rounded-2xl transition-all opacity-40 cursor-not-allowed bg-white hover:shadow-none"
        >
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
              <RotateCcw className="w-7 h-7 text-gray-400" strokeWidth={2} />
            </div>
            <div className="text-center space-y-1.5">
              <h3 className="font-bold text-sm text-gray-900">
                Ciclo de Estudos
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Estude todas as matérias em uma ordem rotativa, sem depender de
                dias fixos. Ideal para quem precisa de flexibilidade na rotina.
              </p>
            </div>
          </div>
        </button>

        {/* Planejamento Semanal - Ativo */}
        <button
          onClick={() => onChange({ tipo: 'semanal' })}
          className={`p-6 border-2 rounded-2xl transition-all hover:shadow-lg ${
            tipo === 'semanal'
              ? 'border-teal-500 bg-teal-50/30 shadow-md'
              : 'border-gray-200 hover:border-teal-300 bg-white'
          }`}
        >
          <div className="flex flex-col items-center gap-3">
            <div
              className={`w-14 h-14 rounded-lg flex items-center justify-center transition-colors flex-shrink-0 ${
                tipo === 'semanal' ? 'bg-teal-500' : 'bg-gray-100'
              }`}
            >
              <Calendar
                className={`w-7 h-7 ${
                  tipo === 'semanal' ? 'text-white' : 'text-gray-600'
                }`}
                strokeWidth={2}
              />
            </div>
            <div className="text-center space-y-1.5">
              <h3 className="font-bold text-sm text-gray-900">
                Planejamento Semanal
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Define quais matérias estudar em cada dia da semana. Ótimo para
                quem prefere uma rotina fixa e estruturada.
              </p>
            </div>
          </div>
        </button>
      </div>
    </div>
  )
}
