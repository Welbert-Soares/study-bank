'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Globe, Edit, Trash2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import type { PlanoCardData } from '@/types/plano'
import { deletarPlanoAction } from '@/app/actions/planos.actions'
import { toast } from 'sonner'
import { useState } from 'react'
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

interface PlanoCardProps {
  plano: PlanoCardData
}

export function PlanoCard({ plano }: PlanoCardProps) {
  const [showDeleteAlert, setShowDeleteAlert] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async () => {
    setIsDeleting(true)
    try {
      await deletarPlanoAction(plano.id)
      toast.success(`Plano "${plano.nome}" excluído com sucesso!`)
    } catch (error) {
      console.error('Erro ao deletar plano:', error)
      toast.error('Erro ao excluir plano. Tente novamente.')
    } finally {
      setIsDeleting(false)
      setShowDeleteAlert(false)
    }
  }

  return (
    <>
      <div className="flex items-stretch gap-3">
        {/* Card 1: Imagem/Ícone */}
        <Link href={`/planos/${plano.id}`}>
          <Card className="p-6 hover:shadow-lg transition-all duration-300 flex items-center justify-center bg-white h-full">
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
        </Link>

        {/* Card 2: Informações do Plano */}
        <Card className="p-6 hover:shadow-lg transition-all duration-300 flex-1 bg-white relative h-full">
          {/* Botões de Ação - Topo Direito deste card */}
          <div className="absolute top-4 right-4 flex gap-2 z-10">
            <Button
              variant="ghost"
              size="icon"
              onClick={(e) => {
                e.stopPropagation()
                window.location.href = `/planos/${plano.id}/editar`
              }}
              className="text-gray-400 hover:text-gray-600 h-8 w-8"
            >
              <Edit className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={(e) => {
                e.stopPropagation()
                setShowDeleteAlert(true)
              }}
              className="text-gray-400 hover:text-red-600 h-8 w-8"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>

          <Link href={`/planos/${plano.id}`} className="flex h-full">
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
                    {plano.totalDisciplinas}
                    <span className="ml-8">
                      <span className="font-semibold">Tópicos:</span>{' '}
                      {plano.totalTopicos}
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
                onClick={(e) => {
                  e.preventDefault()
                  window.location.href = `/planos/${plano.id}/nova-disciplina`
                }}
                className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-6 whitespace-nowrap"
                size="sm"
              >
                Nova Disciplina
              </Button>
            </div>
          </Link>
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

      <AlertDialog open={showDeleteAlert} onOpenChange={setShowDeleteAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Tem certeza?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta ação não pode ser desfeita. O plano "{plano.nome}" e todas as
              suas disciplinas e tópicos serão permanentemente excluídos.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-red-600 hover:bg-red-700"
              disabled={isDeleting}
            >
              {isDeleting ? 'Excluindo...' : 'Excluir'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
