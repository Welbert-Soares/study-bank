import { obterPlanoPorIdAction } from '@/app/actions/planos.actions'
import { notFound } from 'next/navigation'
import { EditarPlanoModal } from './_components/EditarPlanoModal'

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function EditarPlanoPage({ params }: PageProps) {
  const { id } = await params

  try {
    const plano = await obterPlanoPorIdAction(id)

    return (
      <EditarPlanoModal
        planoId={id}
        initialData={{
          nome: plano.nome,
          edital: plano.edital,
          cargo: plano.cargo,
          observacoes: plano.observacoes,
          emblema: plano.emblema,
        }}
        isOpen={true}
      />
    )
  } catch (error) {
    console.error('Erro ao carregar plano:', error)
    notFound()
  }
}
