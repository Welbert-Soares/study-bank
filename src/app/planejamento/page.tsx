import { EmptyPlanejamento } from './_components/EmptyPlanejamento'

export default function PlanejamentoPage() {
  // TODO: Implementar lógica de buscar planejamentos
  const planejamentos: any[] = []

  return (
    <>
      {planejamentos.length === 0 ? (
        <EmptyPlanejamento />
      ) : (
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4">{/* TODO: Mapear planejamentos */}</div>
        </div>
      )}
    </>
  )
}
