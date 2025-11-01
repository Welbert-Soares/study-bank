'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export function EmptyPlanejamento() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
      <Card className="max-w-2xl mx-auto p-12 text-center">
        {/* Ilustração */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <svg
              width="200"
              height="200"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Documento */}
              <rect
                x="50"
                y="30"
                width="80"
                height="100"
                rx="4"
                fill="#e5e7eb"
              />
              <rect x="60" y="45" width="30" height="4" rx="2" fill="#d1d5db" />
              <rect x="60" y="55" width="50" height="4" rx="2" fill="#d1d5db" />
              <rect x="60" y="65" width="40" height="4" rx="2" fill="#d1d5db" />

              {/* Círculo check teal */}
              <circle cx="75" cy="80" r="12" fill="#14b8a6" />
              <path
                d="M71 80 L74 83 L79 77"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />

              {/* Lupa */}
              <circle
                cx="110"
                cy="95"
                r="20"
                stroke="#6b7280"
                strokeWidth="4"
                fill="white"
              />
              <line
                x1="125"
                y1="110"
                x2="140"
                y2="125"
                stroke="#6b7280"
                strokeWidth="4"
                strokeLinecap="round"
              />

              {/* Pessoa */}
              <ellipse cx="145" cy="145" rx="8" ry="10" fill="#1f2937" />
              <rect
                x="135"
                y="155"
                width="20"
                height="30"
                rx="2"
                fill="#14b8a6"
              />
              <rect
                x="130"
                y="165"
                width="10"
                height="20"
                rx="2"
                fill="#f59e0b"
              />
              <rect
                x="150"
                y="165"
                width="10"
                height="20"
                rx="2"
                fill="#f59e0b"
              />
            </svg>
          </div>
        </div>

        {/* Título */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Ops, parece que você ainda não tem um planejamento
        </h2>

        {/* Descrição */}
        <p className="text-gray-600 mb-2">
          Já dizia Benjamim Franklin, "Se você falha em planejar, está
          planejando falhar".
        </p>
        <p className="text-gray-600 mb-8">Vamos criar seu ciclo de estudos?</p>

        {/* Botão */}
        <Button
          onClick={() => setShowModal(true)}
          className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 text-base"
        >
          Criar Planejamento
        </Button>

        {/* TODO: Adicionar modal de criação de planejamento */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <Card className="p-8 max-w-md">
              <h3 className="text-xl font-bold mb-4">Criar Planejamento</h3>
              <p className="text-gray-600 mb-4">
                Funcionalidade em desenvolvimento...
              </p>
              <Button onClick={() => setShowModal(false)}>Fechar</Button>
            </Card>
          </div>
        )}
      </Card>
    </div>
  )
}
