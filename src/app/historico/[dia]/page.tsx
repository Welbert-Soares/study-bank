'use client'

import { useState, useEffect, use } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import type { DisciplinaDoDia } from '../../actions/historico.actions'
import { buscarHistoricoDeEstudosPorDia } from '../../actions/historico.actions'
import { PageHeader } from '../_components/PageHeader'
import { TableSkeleton } from './_components/TableSkeleton'
import { DetailedTable } from './_components/DetailedTable'
import { formatarDiaSemana, formatarData } from '../utils/formatters'

export type PageParams = {
  dia: string
}

export default function DetalhesHistoricoPage({
  params,
}: {
  params: Promise<PageParams>
}) {
  const [disciplinas, setDisciplinas] = useState<DisciplinaDoDia[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const resolvedParams = use(params)
  const { dia } = resolvedParams

  useEffect(() => {
    async function carregarDados() {
      try {
        setIsLoading(true)
        const dados = await buscarHistoricoDeEstudosPorDia(dia)
        setDisciplinas(dados)
      } catch (error) {
        setError('Erro ao carregar o histórico')
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }
    carregarDados()
  }, [dia])

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center p-8">
        <p className="text-destructive">{error}</p>
        <Link href="/historico">
          <Button variant="outline" className="mt-4">
            Voltar
          </Button>
        </Link>
      </div>
    )
  }

  if (isLoading) {
    return (
      <main className="min-h-screen p-4 md:p-8 bg-gray-50">
        <div className="max-w-4xl mx-auto space-y-8">
          <TableSkeleton />
        </div>
      </main>
    )
  }

  if (disciplinas.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8">
        <p>Nenhum estudo registrado para este dia.</p>
        <Link href="/historico">
          <Button variant="outline" className="mt-4">
            Voltar
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <main className="min-h-screen p-4 md:p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto space-y-8">
        <PageHeader
          title={`${formatarDiaSemana(dia)} - ${formatarData(dia)}`}
          subtitle="Detalhes das atividades do dia"
          backLink="/historico"
          backLinkText="← Voltar ao Histórico"
        />

        <DetailedTable disciplinas={disciplinas} />
      </div>
    </main>
  )
}
