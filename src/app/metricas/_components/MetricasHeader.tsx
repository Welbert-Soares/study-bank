'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function MetricasHeader() {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Métricas Gerais</h1>
        <p className="text-gray-600">Progresso geral por disciplina</p>
      </div>
      <Button variant="outline" size="lg" className="gap-2" asChild>
        <Link href="/dashboard">← Voltar ao Dashboard</Link>
      </Button>
    </div>
  )
}
