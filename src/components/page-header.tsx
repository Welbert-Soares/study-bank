'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'
import { Plus } from 'lucide-react'
import { NovoPlanoModal } from '@/app/planos/_components/NovoPlanoModal'
import { PlanoSelectorButton } from './plano-selector-button'
import { RegistroEstudoModal } from '@/app/_components/RegistroEstudoModal'
import { listarPlanosAction } from '@/app/actions/planos.actions'
import type { Plano } from '@prisma/client'

interface PageConfig {
  title: string
  showPlanoSelector?: boolean
  showAddStudyButton?: boolean
  customActions?: React.ReactNode
}

function getPageConfig(
  pathname: string,
  setShowNovoPlanoModal: (show: boolean) => void,
): PageConfig {
  const pageConfigs: Record<string, PageConfig> = {
    '/': {
      title: 'Home',
      showPlanoSelector: true,
      showAddStudyButton: true,
    },
    '/planos': {
      title: 'Planos de Estudo',
      customActions: (
        <Button
          onClick={() => setShowNovoPlanoModal(true)}
          className="bg-teal-500 hover:bg-teal-600 text-white"
        >
          <Plus className="w-4 h-4 mr-2" />
          Novo Plano
        </Button>
      ),
    },
    '/planejamento': {
      title: 'Planejamento Semanal',
      showPlanoSelector: true,
    },
    '/simulados': {
      title: 'Simulados',
    },
  }

  // Verifica se é uma rota exata
  if (pageConfigs[pathname]) {
    return pageConfigs[pathname]
  }

  // Verifica se é uma rota dinâmica de planos
  if (pathname.startsWith('/planos/')) {
    if (pathname.includes('/disciplinas/')) {
      return { title: 'Detalhes da Disciplina' }
    }
    return { title: 'Detalhes do Plano' }
  }

  // Página padrão
  return { title: 'Página' }
}

export function PageHeader() {
  const pathname = usePathname()
  const [showNovoPlanoModal, setShowNovoPlanoModal] = useState(false)
  const [showRegistroEstudoModal, setShowRegistroEstudoModal] = useState(false)
  const [planos, setPlanos] = useState<Plano[]>([])
  const [planoAtivo, setPlanoAtivo] = useState<Plano | undefined>()
  const [isLoading, setIsLoading] = useState(true)

  const currentPage = getPageConfig(pathname, setShowNovoPlanoModal)

  useEffect(() => {
    async function carregarPlanos() {
      try {
        const planosData = await listarPlanosAction()
        setPlanos(planosData)
        setPlanoAtivo(planosData.find((p) => p.ativo))
      } catch (error) {
        console.error('Erro ao carregar planos:', error)
      } finally {
        setIsLoading(false)
      }
    }

    carregarPlanos()
  }, [pathname])

  return (
    <>
      <div className="sticky top-16 z-20 bg-gray-50 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto border-b border-gray-200 pb-4">
          <h1 className="text-3xl font-bold text-gray-900">
            {currentPage.title}
          </h1>

          {/* Actions customizadas ou padrão (Plano Selector + Add Study) */}
          {(currentPage.customActions ||
            currentPage.showPlanoSelector ||
            currentPage.showAddStudyButton) && (
            <div className="flex items-center gap-3">
              {/* Botão Adicionar Estudo */}
              {currentPage.showAddStudyButton && !isLoading && planoAtivo && (
                <Button
                  onClick={() => setShowRegistroEstudoModal(true)}
                  className="bg-teal-500 hover:bg-teal-600 text-white"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Adicionar Estudo
                </Button>
              )}

              {/* Seletor de Plano */}
              {currentPage.showPlanoSelector && !isLoading && (
                <PlanoSelectorButton planos={planos} planoAtivo={planoAtivo} />
              )}

              {/* Actions customizadas */}
              {currentPage.customActions}
            </div>
          )}
        </div>
      </div>

      {/* Modals */}
      <NovoPlanoModal
        open={showNovoPlanoModal}
        onOpenChange={setShowNovoPlanoModal}
      />

      {planoAtivo && (
        <RegistroEstudoModal
          open={showRegistroEstudoModal}
          onOpenChange={setShowRegistroEstudoModal}
          planoId={planoAtivo.id}
        />
      )}
    </>
  )
}
