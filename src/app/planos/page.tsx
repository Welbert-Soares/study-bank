import { listarPlanosAction } from '@/app/actions/planos.actions'
import { PlanoCard } from './_components/PlanoCard'
import { EmptyPlanos } from './_components/EmptyPlanos'

export default async function PlanosPage() {
  const planos = await listarPlanosAction()

  return (
    <>
      {planos.length === 0 ? (
        <EmptyPlanos />
      ) : (
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4">
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
        </div>
      )}
    </>
  )
}
