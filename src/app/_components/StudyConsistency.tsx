import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2, XCircle } from 'lucide-react'

interface StudyConsistencyProps {
  planoId: string
}

export async function StudyConsistency({ planoId }: StudyConsistencyProps) {
  // TODO: Buscar dados reais do histórico
  const diasSemFalhar = 2

  // Últimos 30 dias de consistência (true = estudou, false = não estudou)
  const consistencia = [
    false,
    false,
    false,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    false,
    true,
    true,
    true,
    true,
    false,
    false,
    false,
    false,
    true,
    true,
    true,
    true,
    false,
    false,
    false,
    false,
    false,
    true,
    true,
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium text-gray-600 uppercase">
          Constância nos Estudos
        </CardTitle>
        <div className="text-sm text-gray-600 mt-2">
          Você está há{' '}
          <span className="font-bold text-red-600">{diasSemFalhar} dias</span>{' '}
          sem falhar!
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-1 flex-wrap">
          {consistencia.map((estudou, index) => (
            <div
              key={index}
              className="relative group"
              title={estudou ? 'Estudou' : 'Não estudou'}
            >
              {estudou ? (
                <CheckCircle2 className="h-6 w-6 text-teal-500" />
              ) : (
                <XCircle className="h-6 w-6 text-red-400" />
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
