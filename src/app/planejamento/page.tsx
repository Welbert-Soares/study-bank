import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { EmptyPlanejamento } from './_components/EmptyPlanejamento'
import { PlanejamentoAtivo } from './_components/PlanejamentoAtivo'
import { buscarPlanejamentoAtivoAction } from '@/app/actions/planos.actions'

export default async function PlanejamentoPage() {
  const session = await auth()
  if (!session.userId) {
    redirect('/sign-in')
  }

  // Buscar plano ativo (usando o model Plano correto)
  const planoAtivo = await prisma.plano.findFirst({
    where: {
      userId: session.userId,
      ativo: true,
    },
    orderBy: {
      criadoEm: 'desc',
    },
  })

  // Se não tem plano ativo, mostrar mensagem para criar primeiro
  if (!planoAtivo) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <div className="rounded-full bg-amber-100 dark:bg-amber-900/20 p-6 mb-6">
            <svg
              className="w-16 h-16 text-amber-600 dark:text-amber-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
            Nenhum Plano de Estudos Ativo
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
            Você precisa ter um plano de estudos ativo antes de criar um
            planejamento semanal. Crie ou ative um plano primeiro.
          </p>
          <a
            href="/planos"
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            Ir para Planos
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>
    )
  }

  // Buscar planejamento ativo
  const planejamentoAtivo = await buscarPlanejamentoAtivoAction(planoAtivo.id)

  return (
    <div className="max-w-7xl mx-auto p-6">
      {!planejamentoAtivo ? (
        <EmptyPlanejamento planoId={planoAtivo.id} />
      ) : (
        <PlanejamentoAtivo
          planejamento={planejamentoAtivo}
          planoNome={planoAtivo.nome}
        />
      )}
    </div>
  )
}
