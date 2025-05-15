'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface ProximosConteudosCardProps {
  conteudos: string[]
}

export function ProximosConteudosCard({
  conteudos,
}: ProximosConteudosCardProps) {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>📚 Próximos Conteúdos</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {conteudos.map((conteudo, index) => (
            <Badge
              key={index}
              variant="outline"
              className="w-full justify-start p-2 hover:bg-blue-50"
            >
              {conteudo}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
