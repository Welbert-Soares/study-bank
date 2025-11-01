import { obterDisciplinaPorIdAction } from '@/app/actions/planos.actions'
import { notFound } from 'next/navigation'
import { EditDisciplinaModal } from './_components/EditDisciplinaModal'

interface DisciplinaPageProps {
  params: Promise<{
    id: string
    disciplinaId: string
  }>
}

export default async function DisciplinaPage({ params }: DisciplinaPageProps) {
  const { id, disciplinaId } = await params

  try {
    const disciplina = await obterDisciplinaPorIdAction(disciplinaId)

    // Calcular estatísticas
    const topicosEstudados = disciplina.topicos.filter(
      (t) => t.status === 'concluido',
    ).length
    const topicosTotal = disciplina.topicos.length

    return (
      <EditDisciplinaModal
        disciplina={{
          ...disciplina,
          topicosEstudados,
          topicosTotal,
          questoesResolvidas: 0, // TODO: implementar sistema de questões
        }}
        planoId={id}
        isOpen={true}
      />
    )
  } catch (error) {
    console.error('Erro ao carregar disciplina:', error)
    notFound()
  }
}
