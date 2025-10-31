import { obterDisciplinaPorIdAction } from '@/app/actions/planos.actions'
import { notFound } from 'next/navigation'
import { EditDisciplinaModal } from './_components/EditDisciplinaModal'

interface DisciplinaPageProps {
  params: {
    id: string
    disciplinaId: string
  }
}

export default async function DisciplinaPage({ params }: DisciplinaPageProps) {
  try {
    const disciplina = await obterDisciplinaPorIdAction(params.disciplinaId)

    return (
      <EditDisciplinaModal
        disciplina={disciplina}
        planoId={params.id}
        isOpen={true}
      />
    )
  } catch (error) {
    console.error('Erro ao carregar disciplina:', error)
    notFound()
  }
}
