import { listarPlanosAction } from '@/app/actions/planos.actions'
import { PlanoCard } from './_components/PlanoCard'
import { EmptyPlanos } from './_components/EmptyPlanos'
import { CorrigirPlanosButton } from './_components/CorrigirPlanosButton'

export default async function PlanosPage() {
  const planos = await listarPlanosAction()

  // Ordenar para mostrar plano ativo primeiro
  const planosOrdenados = [...planos].sort((a, b) => {
    if (a.ativo && !b.ativo) return -1
    if (!a.ativo && b.ativo) return 1
    return 0
  })

  // Verificar se há múltiplos planos ativos (necessita correção)
  const planosAtivos = planos.filter((p) => p.ativo)
  const necessitaCorrecao = planosAtivos.length > 1

  return (
    <>
      {planos.length === 0 ? (
        <EmptyPlanos />
      ) : (
        <div className="max-w-7xl mx-auto">
          {necessitaCorrecao && (
            <div className="mb-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-sm text-amber-800 mb-2">
                ⚠️ Detectados {planosAtivos.length} planos ativos. Apenas um
                deve estar ativo por vez.
              </p>
              <CorrigirPlanosButton />
            </div>
          )}
          <div className="space-y-4">
            {planosOrdenados.map((plano) => {
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
