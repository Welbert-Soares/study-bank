'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
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
import Link from 'next/link'
import { Eye, Edit, Trash2 } from 'lucide-react'
import type { DisciplinaCardData } from '@/types/plano'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { deletarDisciplinaAction } from '@/app/actions/planos.actions'
import { toast } from 'sonner'

interface DisciplinaCardProps {
  disciplina: DisciplinaCardData
  planoId: string
  planoNome: string
}

export function DisciplinaCard({
  disciplina,
  planoId,
  planoNome,
}: DisciplinaCardProps) {
  const router = useRouter()
  const [isHovered, setIsHovered] = useState(false)
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const corDisciplina = disciplina.cor || '#3DD9B3'

  const handleDelete = async () => {
    setIsDeleting(true)

    try {
      await deletarDisciplinaAction(disciplina.id, planoId)
      toast.success('Disciplina excluída com sucesso!')
      router.refresh()
    } catch (error) {
      toast.error('Erro ao excluir disciplina')
      console.error(error)
    } finally {
      setIsDeleting(false)
      setShowDeleteDialog(false)
    }
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ '--disciplina-cor': corDisciplina } as React.CSSProperties}
    >
      <Card className="hover:shadow-lg transition-all duration-300 relative overflow-hidden h-full group border-l-4 [border-left-color:var(--disciplina-cor)]">
        {/* Background color overlay com animação da esquerda */}
        <div
          className={`absolute inset-0 transition-all duration-500 ease-out [background-color:var(--disciplina-cor)] pointer-events-none ${
            isHovered ? 'translate-x-0' : '-translate-x-full'
          }`}
        />

        {/* Conteúdo do card */}
        <div className="relative z-10">
          <CardHeader className="pb-2 pt-3 px-4">
            <div className="flex items-center gap-2">
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                  isHovered
                    ? 'bg-white/30'
                    : '[background-color:var(--disciplina-cor)]'
                }`}
              >
                <span className="font-bold text-xs text-gray-900">
                  {disciplina.edital ||
                    planoNome
                      .split(' ')
                      .map((word) => word[0])
                      .join('')
                      .toUpperCase()
                      .slice(0, 2)}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-base truncate transition-colors duration-500 text-foreground">
                  {disciplina.nome}
                </h3>
                <p className="text-xs truncate transition-colors duration-500 text-foreground">
                  {disciplina.cargo || planoNome}
                </p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="pt-0 pb-3 px-4 min-h-[70px] relative">
            <div
              className={`grid grid-cols-3 gap-2 text-center absolute inset-0 items-center transition-opacity duration-300 ${
                isHovered ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}
            >
              <div className="space-y-0.5">
                <p className="text-2xl font-bold text-foreground">
                  {disciplina.topicosEstudados}
                </p>
                <p className="text-[10px] text-muted-foreground leading-tight">
                  Tópicos
                  <br />
                  Estudados
                </p>
              </div>

              <div className="space-y-0.5">
                <p className="text-2xl font-bold text-foreground">
                  {disciplina.topicosTotal}
                </p>
                <p className="text-[10px] text-muted-foreground leading-tight">
                  Tópicos
                  <br />
                  Totais
                </p>
              </div>

              <div className="space-y-0.5">
                <p className="text-2xl font-bold text-foreground">
                  {disciplina.questoesResolvidas}
                </p>
                <p className="text-[10px] text-muted-foreground leading-tight">
                  Questões
                  <br />
                  Resolvidas
                </p>
              </div>
            </div>

            <div
              className={`flex items-center justify-center gap-3 absolute inset-0 transition-opacity duration-300 ${
                isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <Link
                href={`/planos/${planoId}/disciplinas/${disciplina.id}`}
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-white/20 hover:bg-white/30 text-foreground border border-white/30 h-9 px-3 cursor-pointer"
                onClick={(e) => e.stopPropagation()}
              >
                <Eye className="w-4 h-4 mr-1" />
                Visualizar
              </Link>
              <button
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-white/20 hover:bg-white/30 text-foreground border border-white/30 h-9 px-3 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  router.push(`/planos/${planoId}/disciplinas/${disciplina.id}`)
                }}
              >
                <Edit className="w-4 h-4 mr-1" />
                Editar
              </button>
              <button
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-white/20 hover:bg-white/30 text-foreground border border-white/30 h-9 px-3 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setShowDeleteDialog(true)
                }}
              >
                <Trash2 className="w-4 h-4 mr-1" />
                Remover
              </button>
            </div>
          </CardContent>
        </div>
      </Card>

      {/* Dialog de Confirmação de Exclusão */}
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Excluir Disciplina</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir a disciplina{' '}
              <strong>{disciplina.nome}</strong>? Todos os tópicos relacionados
              também serão excluídos. Esta ação não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isDeleting}>
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
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
