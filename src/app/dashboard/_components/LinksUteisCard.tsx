'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function LinksUteisCard() {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>📝 Links Úteis</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Button
          variant="outline"
          className="w-full justify-start bg-blue-50 hover:bg-blue-100 text-blue-700"
          asChild
        >
          <Link href="#">✍️ Exercícios do Dia</Link>
        </Button>
        <Button
          variant="outline"
          className="w-full justify-start bg-green-50 hover:bg-green-100 text-green-700"
          asChild
        >
          <Link href="#">📝 Resumos</Link>
        </Button>
        <Button
          variant="outline"
          className="w-full justify-start bg-purple-50 hover:bg-purple-100 text-purple-700"
          asChild
        >
          <Link href="#">📈 Métricas Gerais</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
