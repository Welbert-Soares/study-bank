'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function ConfigHeader() {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Configuração do Plano de Estudos
        </h1>
      </div>
      <Button variant="outline" size="lg" className="gap-2 bg-white" asChild>
        <Link href="/dashboard">← Voltar ao Dashboard</Link>
      </Button>
    </div>
  )
}
