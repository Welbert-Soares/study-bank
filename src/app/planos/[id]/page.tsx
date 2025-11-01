import { obterPlanoPorIdAction } from '@/app/actions/planos.actions'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Edit, Plus } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { DisciplinaCard } from './_components/DisciplinaCard'
import { notFound } from 'next/navigation'

interface PlanoPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function PlanoPage({ params }: PlanoPageProps) {
  const { id } = await params

  try {
    const plano = await obterPlanoPorIdAction(id)

    const totalTopicos = plano.disciplinas.reduce(
      (acc, disc) => acc + disc.topicos.length,
      0,
    )

    return (
      <div className="w-full min-h-screen p-4 md:p-8 bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <div className="bg-white rounded-lg border p-6">
            <Button asChild variant="ghost" size="sm" className="mb-4">
              <Link href="/planos">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar para Planos
              </Link>
            </Button>

            <div className="flex items-start justify-between gap-6">
              <div className="flex items-start gap-6 flex-1">
                {plano.emblema ? (
                  <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                    <Image
                      src={plano.emblema}
                      alt={plano.nome}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-24 h-24 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-4xl">📚</span>
                  </div>
                )}

                <div className="flex-1">
                  <h1 className="text-4xl font-bold text-primary">
                    {plano.nome}
                  </h1>
                  {plano.edital && (
                    <p className="text-sm text-muted-foreground mt-1">
                      <span className="font-medium">Editais:</span>{' '}
                      {plano.edital}
                    </p>
                  )}
                  {plano.cargo && (
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Cargos:</span> {plano.cargo}
                    </p>
                  )}

                  <div className="flex items-center gap-3 mt-4">
                    <Badge variant="secondary" className="text-sm">
                      Disciplinas: {plano.disciplinas.length}
                    </Badge>
                    <Badge variant="secondary" className="text-sm">
                      Tópicos: {totalTopicos}
                    </Badge>
                    {plano.observacoes && (
                      <Badge variant="secondary" className="text-sm">
                        Observações: {plano.observacoes}
                      </Badge>
                    )}

                    <Button
                      asChild
                      size="sm"
                      className="bg-primary hover:bg-primary/90 ml-2"
                    >
                      <Link href={`/planos/${id}/nova-disciplina`}>
                        <Plus className="w-4 h-4 mr-2" />
                        Nova Disciplina
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Card de Horas de Estudo */}
              <div className="bg-gray-50 rounded-lg border p-6 min-w-[180px] text-center">
                <p className="text-3xl font-bold text-primary mb-1">0h00min</p>
                <p className="text-xs text-muted-foreground">Horas de Estudo</p>
              </div>

              {/* Card de Estatísticas */}
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg border p-4 min-w-[120px] text-center">
                  <p className="text-2xl font-bold">0</p>
                  <p className="text-xs text-muted-foreground">Questões</p>
                </div>
                <div className="bg-gray-50 rounded-lg border p-4 min-w-[120px] text-center">
                  <p className="text-2xl font-bold text-primary">0%</p>
                  <p className="text-xs text-muted-foreground">Desempenho</p>
                </div>
              </div>
            </div>
          </div>

          {/* Disciplinas Grid */}
          {plano.disciplinas.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {plano.disciplinas.map((disciplina) => {
                const topicosEstudados = disciplina.topicos.filter(
                  (t) => t.status === 'concluido',
                ).length
                const topicosTotal = disciplina.topicos.length

                return (
                  <DisciplinaCard
                    key={disciplina.id}
                    disciplina={{
                      id: disciplina.id,
                      nome: disciplina.nome,
                      cor: disciplina.cor,
                      edital: disciplina.edital,
                      cargo: disciplina.cargo,
                      topicosEstudados,
                      topicosTotal,
                      questoesResolvidas: 0, // TODO: implementar
                    }}
                    planoId={id}
                    planoNome={plano.nome}
                  />
                )
              })}
            </div>
          ) : (
            <div className="text-center py-16 border-2 border-dashed rounded-lg">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-2">
                Nenhuma disciplina ainda
              </h3>
              <p className="text-muted-foreground mb-6">
                Comece adicionando disciplinas ao seu plano
              </p>
              <Button asChild>
                <Link href={`/planos/${id}/nova-disciplina`}>
                  <Plus className="w-4 h-4 mr-2" />
                  Adicionar Primeira Disciplina
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    )
  } catch (error) {
    console.error('Erro ao carregar plano:', error)
    notFound()
  }
}
