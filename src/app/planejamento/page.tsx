import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { EmptyPlanejamento } from './_components/EmptyPlanejamento'

export default async function PlanejamentoPage() {
  const session = await auth()
  if (!session.userId) {
    redirect('/sign-in')
  }

  // TODO: Buscar plano ativo da home (quando implementada)
  // Por enquanto, busca o primeiro plano ativo do usuário
  const planoAtivo = await prisma.plano.findFirst({
    where: {
      userId: session.userId,
      ativo: true,
    },
    orderBy: {
      criadoEm: 'desc',
    },
  })

  if (!planoAtivo) {
    redirect('/planos')
  }

  // TODO: Buscar planejamentos existentes
  const planejamentos: any[] = [] // await getPlanejamentos(session.userId, planoAtivo.id)

  return (
    <>
      {planejamentos.length === 0 ? (
        <EmptyPlanejamento planoId={planoAtivo.id} />
      ) : (
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4">{/* TODO: Mapear planejamentos */}</div>
        </div>
      )}
    </>
  )
}
