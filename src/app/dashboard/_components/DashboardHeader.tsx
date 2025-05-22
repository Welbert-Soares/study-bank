'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface DashboardHeaderProps {
  dataFormatada: string
}

export function DashboardHeader({ dataFormatada }: DashboardHeaderProps) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Dashboard Diário</h1>
        <p className="text-gray-600 mt-1 capitalize">{dataFormatada}</p>
      </div>
      <div className="flex gap-4">
        <Button variant="outline" size="lg" className="gap-2" asChild>
          <Link href="/config">📚 Gerenciar Matérias</Link>
        </Button>
        <Button variant="outline" size="lg" className="gap-2" asChild>
          <Link href="/">← Voltar ao Início</Link>
        </Button>
      </div>
    </div>
  )
}
