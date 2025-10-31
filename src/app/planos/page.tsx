import { listarPlanosAction } from '@/app/actions/planos.actions'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import { PlanoCard } from './_components/PlanoCard'
import { EmptyPlanos } from './_components/EmptyPlanos'

export default async function PlanosPage() {
  const planos = await listarPlanosAction()

  return (
    <div className="w-full min-h-screen p-4 md:p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Meus Planos de Estudo</h1>
            <p className="text-muted-foreground mt-1">
              Organize seus estudos por concurso ou objetivo
            </p>
          </div>
          <Button asChild size="lg">
            <Link href="/planos/novo">
              <Plus className="w-5 h-5 mr-2" />
              Novo Plano
            </Link>
          </Button>
        </div>

        {/* Content */}
        {planos.length === 0 ? (
          <EmptyPlanos />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {planos.map((plano) => {
              const totalDisciplinas = plano.disciplinas.length
              const totalTopicos = plano.disciplinas.reduce(
                (acc, disc) => acc + disc.topicos.length,
                0,
              )

              return (
                <PlanoCard
                  key={plano.id}
                  plano={{
                    ...plano,
                    totalDisciplinas,
                    totalTopicos,
                  }}
                />
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
