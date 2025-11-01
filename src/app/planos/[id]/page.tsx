'use client'

import { obterPlanoPorIdAction } from '@/app/actions/planos.actions'
import { Globe, Edit, Trash2, Plus } from 'lucide-react'
import Image from 'next/image'
import { DisciplinaCard } from './_components/DisciplinaCard'
import { notFound } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'
import { EditarPlanoModal } from '@/app/planos/_components/EditarPlanoModal'
import { NovaDisciplinaModal } from '@/app/planos/_components/NovaDisciplinaModal'
import { deletarPlanoAction } from '@/app/actions/planos.actions'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'

interface PlanoPageProps {
  params: Promise<{
    id: string
  }>
}

export default function PlanoPage({ params }: PlanoPageProps) {
  const router = useRouter()
  const [plano, setPlano] = useState<any>(null)
  const [planoId, setPlanoId] = useState<string>('')
  const [showEditarPlanoModal, setShowEditarPlanoModal] = useState(false)
  const [showNovaDisciplinaModal, setShowNovaDisciplinaModal] = useState(false)
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    params.then(({ id }) => {
      setPlanoId(id)
      obterPlanoPorIdAction(id)
        .then((data) => setPlano(data))
        .catch((error) => {
          console.error('Erro ao carregar plano:', error)
          notFound()
        })
    })
  }, [params])

  const handleDeletePlano = async () => {
    setIsDeleting(true)
    try {
      await deletarPlanoAction(planoId)
      toast.success('Plano excluído com sucesso!')
      router.push('/planos')
    } catch (error) {
      toast.error('Erro ao excluir plano')
      console.error(error)
    } finally {
      setIsDeleting(false)
      setShowDeleteDialog(false)
    }
  }

  if (!plano) {
    return (
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-stretch gap-3">
          <Card className="p-6 h-40 w-40 animate-pulse bg-gray-200" />
          <Card className="p-6 flex-1 animate-pulse bg-gray-200" />
          <Card className="p-6 w-[200px] animate-pulse bg-gray-200" />
        </div>
      </div>
    )
  }

  const totalTopicos = plano.disciplinas.reduce(
    (acc: number, disc: any) => acc + disc.topicos.length,
    0,
  )

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header com 3 cards */}
      <div className="flex items-stretch gap-3">
        {/* Card 1: Imagem/Ícone */}
        <Card className="p-6 hover:shadow-lg transition-all duration-300 flex items-center justify-center bg-white">
          {plano.emblema ? (
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-gray-800">
              <Image
                src={plano.emblema}
                alt={plano.nome}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="w-32 h-32 rounded-full border-4 border-gray-800 bg-white flex items-center justify-center">
              <Globe className="w-16 h-16 text-gray-800" strokeWidth={1.5} />
            </div>
          )}
        </Card>

        {/* Card 2: Informações do Plano */}
        <Card className="p-6 hover:shadow-lg transition-all duration-300 flex-1 bg-white relative">
          {/* Botões de Ação - Topo Direito */}
          <div className="absolute top-4 right-4 flex gap-2 z-10">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-gray-600 h-8 w-8"
              onClick={() => setShowEditarPlanoModal(true)}
            >
              <Edit className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-red-600 h-8 w-8"
              onClick={() => setShowDeleteDialog(true)}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex h-full">
            <div className="flex-1 flex flex-col justify-between pr-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-teal-500">
                  {plano.nome}
                </h3>

                <div className="space-y-1 text-sm text-gray-600">
                  <p>
                    <span className="font-semibold">Editais:</span>{' '}
                    {plano.edital || 'Nenhum'}
                  </p>
                  <p>
                    <span className="font-semibold">Cargos:</span>{' '}
                    {plano.cargo || 'Nenhum'}
                  </p>
                  <p>
                    <span className="font-semibold">Disciplinas:</span>{' '}
                    {plano.disciplinas.length}
                    <span className="ml-8">
                      <span className="font-semibold">Tópicos:</span>{' '}
                      {totalTopicos}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Observações:</span>{' '}
                    {plano.observacoes || 'Sem informações extras'}
                  </p>
                </div>
              </div>
            </div>

            {/* Botão Nova Disciplina - Lado Direito mais abaixo */}
            <div className="flex items-end pb-2">
              <Button
                onClick={() => setShowNovaDisciplinaModal(true)}
                className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-6 whitespace-nowrap"
                size="sm"
              >
                Nova Disciplina
              </Button>
            </div>
          </div>
        </Card>

        {/* Card 3: Estatísticas */}
        <Card className="p-6 hover:shadow-lg transition-all duration-300 flex flex-col justify-center gap-4 bg-white w-[200px]">
          <div className="text-center">
            <p className="text-2xl font-bold text-teal-500">0h00min</p>
            <p className="text-xs text-gray-500 whitespace-nowrap">
              Horas de Estudo
            </p>
          </div>

          <div className="flex gap-6 justify-center">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">0</p>
              <p className="text-xs text-gray-500">Questões</p>
            </div>

            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">0%</p>
              <p className="text-xs text-gray-500">Desempenho</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Grid de Disciplinas */}
      {plano.disciplinas.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {plano.disciplinas.map((disciplina: any) => {
            const topicosEstudados = disciplina.topicos.filter(
              (t: any) => t.status === 'concluido',
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
                  questoesResolvidas: 0,
                }}
                planoId={planoId}
                planoNome={plano.nome}
              />
            )
          })}
        </div>
      ) : (
        <Card className="text-center py-16 border-2 border-dashed">
          <div className="text-6xl mb-4">📚</div>
          <h3 className="text-xl font-semibold mb-2">
            Nenhuma disciplina ainda
          </h3>
          <p className="text-gray-500 mb-6">
            Comece adicionando disciplinas ao seu plano
          </p>
          <Button
            onClick={() => setShowNovaDisciplinaModal(true)}
            className="bg-teal-500 hover:bg-teal-600"
          >
            <Plus className="w-4 h-4 mr-2" />
            Adicionar Primeira Disciplina
          </Button>
        </Card>
      )}

      {/* Modais */}
      {showEditarPlanoModal && (
        <EditarPlanoModal
          planoId={planoId}
          open={showEditarPlanoModal}
          onOpenChange={setShowEditarPlanoModal}
        />
      )}

      {showNovaDisciplinaModal && (
        <NovaDisciplinaModal
          planoId={planoId}
          open={showNovaDisciplinaModal}
          onOpenChange={setShowNovaDisciplinaModal}
        />
      )}

      {/* Dialog de Confirmação de Exclusão */}
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Excluir Plano</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir o plano{' '}
              <strong>{plano.nome}</strong>? Todas as disciplinas e tópicos
              relacionados também serão excluídos. Esta ação não pode ser
              desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isDeleting}>
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeletePlano}
              disabled={isDeleting}
              className="bg-destructive hover:bg-destructive/90"
            >
              {isDeleting ? 'Excluindo...' : 'Excluir'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
