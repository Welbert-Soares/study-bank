'use client'

import { Button } from '@/components/ui/button'
import { BookOpen, Calendar } from 'lucide-react'
import { useState } from 'react'
import { NovoPlanoModal } from './NovoPlanoModal'

export function EmptyPlanos() {
  const [showNovoPlanoModal, setShowNovoPlanoModal] = useState(false)

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl" />
          <div className="relative bg-gradient-to-br from-primary/20 to-primary/5 p-12 rounded-full">
            <BookOpen className="w-24 h-24 text-primary" strokeWidth={1.5} />
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-4">
          Ops, parece que você ainda não tem um planejamento
        </h2>

        <p className="text-muted-foreground max-w-md mb-2 text-lg">
          Já dizia Benjamin Franklin,{' '}
          <em>"Se você falha em planejar, está planejando falhar"</em>.
        </p>

        <p className="text-muted-foreground max-w-md mb-8">
          Vamos criar seu ciclo de estudos?
        </p>

        <div className="flex gap-4">
          <Button
            size="lg"
            className="gap-2"
            onClick={() => setShowNovoPlanoModal(true)}
          >
            <Calendar className="w-5 h-5" />
            Criar Planejamento
          </Button>
        </div>

        <div className="mt-16 max-w-2xl">
          <h3 className="text-xl font-semibold mb-4">
            O que você pode fazer com um plano:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="p-4 border rounded-lg bg-card">
              <div className="text-4xl mb-2">📚</div>
              <p className="font-medium mb-1">Organize Disciplinas</p>
              <p className="text-muted-foreground text-xs">
                Adicione disciplinas e tópicos do seu edital
              </p>
            </div>
            <div className="p-4 border rounded-lg bg-card">
              <div className="text-4xl mb-2">⏱️</div>
              <p className="font-medium mb-1">Ciclos Pomodoro</p>
              <p className="text-muted-foreground text-xs">
                Crie ciclos de estudo cronometrados
              </p>
            </div>
            <div className="p-4 border rounded-lg bg-card">
              <div className="text-4xl mb-2">📊</div>
              <p className="font-medium mb-1">Acompanhe Progresso</p>
              <p className="text-muted-foreground text-xs">
                Visualize seu avanço em cada disciplina
              </p>
            </div>
          </div>
        </div>
      </div>

      <NovoPlanoModal
        open={showNovoPlanoModal}
        onOpenChange={setShowNovoPlanoModal}
      />
    </>
  )
}
