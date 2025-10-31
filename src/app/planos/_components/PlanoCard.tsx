'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { BookOpen, Target, Edit, Trash2 } from 'lucide-react'
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
      <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              {plano.emblema ? (
                <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={plano.emblema}
                    alt={plano.nome}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="w-8 h-8 text-primary" />
                </div>
              )}
              <div className="flex-1">
                <CardTitle className="text-xl">{plano.nome}</CardTitle>
                {plano.edital && (
                  <p className="text-sm text-muted-foreground mt-1">
                    {plano.edital}
                  </p>
                )}
                {plano.cargo && (
                  <Badge variant="secondary" className="mt-2">
                    {plano.cargo}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-sm">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="font-medium">{plano.totalDisciplinas}</span>
              <span className="text-muted-foreground">disciplinas</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Target className="w-4 h-4 text-primary" />
              <span className="font-medium">{plano.totalTopicos}</span>
              <span className="text-muted-foreground">tópicos</span>
            </div>
          </div>

          <div className="flex gap-2 pt-2">
            <Button asChild className="flex-1" size="sm">
              <Link href={`/planos/${plano.id}`}>Abrir Plano</Link>
            </Button>
            <Button
              variant="outline"
              size="sm"
              asChild
              className="aspect-square p-0"
            >
              <Link href={`/planos/${plano.id}/editar`}>
                <Edit className="w-4 h-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="aspect-square p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
              onClick={() => setShowDeleteAlert(true)}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>

          {!plano.ativo && (
            <Badge variant="secondary" className="w-full justify-center">
              Inativo
            </Badge>
          )}
        </CardContent>
      </Card>

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
