'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'
import { Plus } from 'lucide-react'
import { NovoPlanoModal } from '@/app/planos/_components/NovoPlanoModal'

interface PageConfig {
  title: string
  actionType?: 'static' | 'modal'
  actions?: React.ReactNode
}

function getPageConfig(
  pathname: string,
  setShowNovoPlanoModal: (show: boolean) => void,
): PageConfig {
  const pageConfigs: Record<string, PageConfig> = {
    '/': {
      title: 'Home',
      actionType: 'static',
      actions: (
        <div className="flex items-center gap-3">
          <Button className="bg-teal-500 hover:bg-teal-600 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Adicionar Estudo
          </Button>
          <Button variant="outline" className="border-teal-500 text-teal-600">
            <span className="mr-2">📚</span>
            Plano PF
          </Button>
        </div>
      ),
    },
    '/planos': {
      title: 'Planos de Estudo',
      actionType: 'modal',
      actions: (
        <Button
          onClick={() => setShowNovoPlanoModal(true)}
          className="bg-teal-500 hover:bg-teal-600 text-white"
        >
          <Plus className="w-4 h-4 mr-2" />
          Novo Plano
        </Button>
      ),
    },
    '/config': {
      title: 'Disciplinas',
      actionType: 'static',
      actions: (
        <Button className="bg-teal-500 hover:bg-teal-600 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Nova Disciplina
        </Button>
      ),
    },
    '/edital': {
      title: 'Edital',
    },
    '/planejamento': {
      title: 'Planejamento',
      actionType: 'static',
      actions: (
        <Button className="bg-teal-500 hover:bg-teal-600 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Novo Planejamento
        </Button>
      ),
    },
    '/revisoes': {
      title: 'Revisões',
    },
    '/historico': {
      title: 'Histórico de Estudos',
    },
    '/metricas': {
      title: 'Estatísticas',
    },
    '/simulados': {
      title: 'Simulados',
    },
    '/dashboard': {
      title: 'Meta Diária',
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
    if (pathname.endsWith('/nova-disciplina')) {
      return { title: 'Nova Disciplina' }
    }
    return { title: 'Detalhes do Plano' }
  }

  // Verifica se é uma rota dinâmica de histórico
  if (pathname.startsWith('/historico/')) {
    return { title: 'Histórico de Estudos' }
  }

  // Página padrão
  return { title: 'Página' }
}

export function PageHeader() {
  const pathname = usePathname()
  const [showNovoPlanoModal, setShowNovoPlanoModal] = useState(false)
  const currentPage = getPageConfig(pathname, setShowNovoPlanoModal)

  return (
    <>
      <div className="sticky top-16 z-20 bg-gray-50 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto border-b border-gray-200 pb-4">
          <h1 className="text-3xl font-bold text-gray-900">
            {currentPage.title}
          </h1>
          {currentPage.actions && (
            <div className="flex items-center gap-3">{currentPage.actions}</div>
          )}
        </div>
      </div>

      {/* Modals */}
      <NovoPlanoModal
        open={showNovoPlanoModal}
        onOpenChange={setShowNovoPlanoModal}
      />
    </>
  )
}
