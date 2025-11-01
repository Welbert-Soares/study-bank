'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { CriarPlanejamentoSimples } from './CriarPlanejamentoSimples'
import { useRouter } from 'next/navigation'

interface EmptyPlanejamentoProps {
  planoId: string
}

export function EmptyPlanejamento({ planoId }: EmptyPlanejamentoProps) {
  const router = useRouter()
  const [showModal, setShowModal] = useState(false)

  const handleSuccess = () => {
    router.refresh()
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center py-16 px-4">
        {/* Ilustração SVG customizada */}
        <div className="mb-8">
          <svg
            width="240"
            height="240"
            viewBox="0 0 240 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-lg"
          >
            {/* Background circle */}
            <circle cx="120" cy="120" r="100" fill="#F0FDFA" />

            {/* Document/Calendar */}
            <rect
              x="60"
              y="50"
              width="120"
              height="140"
              rx="8"
              fill="white"
              stroke="#14B8A6"
              strokeWidth="3"
            />
            <rect x="60" y="50" width="120" height="30" rx="8" fill="#14B8A6" />

            {/* Calendar grid */}
            <line
              x1="80"
              y1="100"
              x2="160"
              y2="100"
              stroke="#CBD5E1"
              strokeWidth="2"
            />
            <line
              x1="80"
              y1="120"
              x2="160"
              y2="120"
              stroke="#CBD5E1"
              strokeWidth="2"
            />
            <line
              x1="80"
              y1="140"
              x2="160"
              y2="140"
              stroke="#CBD5E1"
              strokeWidth="2"
            />
            <line
              x1="80"
              y1="160"
              x2="160"
              y2="160"
              stroke="#CBD5E1"
              strokeWidth="2"
            />

            <line
              x1="100"
              y1="90"
              x2="100"
              y2="170"
              stroke="#CBD5E1"
              strokeWidth="2"
            />
            <line
              x1="120"
              y1="90"
              x2="120"
              y2="170"
              stroke="#CBD5E1"
              strokeWidth="2"
            />
            <line
              x1="140"
              y1="90"
              x2="140"
              y2="170"
              stroke="#CBD5E1"
              strokeWidth="2"
            />

            {/* Magnifying glass */}
            <circle
              cx="180"
              cy="140"
              r="20"
              fill="white"
              stroke="#14B8A6"
              strokeWidth="3"
            />
            <line
              x1="194"
              y1="154"
              x2="210"
              y2="170"
              stroke="#14B8A6"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* Person studying */}
            <circle cx="40" cy="160" r="15" fill="#14B8A6" />
            <path
              d="M 40 175 L 40 200 M 40 185 L 30 195 M 40 185 L 50 195"
              stroke="#14B8A6"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Texto motivacional */}
        <h2 className="text-2xl font-bold text-gray-800 mb-3 text-center">
          Nenhum Planejamento Criado
        </h2>
        <p className="text-gray-600 text-center max-w-md mb-2">
          Comece organizando sua semana de estudos. Um bom planejamento é o
          primeiro passo para o sucesso!
        </p>
        <p className="text-sm text-gray-500 italic text-center max-w-md mb-8">
          "Se você falha em planejar, você está planejando falhar." - Benjamin
          Franklin
        </p>

        {/* Botão de ação */}
        <Button
          onClick={() => setShowModal(true)}
          className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
        >
          Criar Planejamento
        </Button>
      </div>

      {/* Modal simplificado */}
      <CriarPlanejamentoSimples
        open={showModal}
        onOpenChange={setShowModal}
        planoId={planoId}
        onSuccess={handleSuccess}
      />
    </>
  )
}
