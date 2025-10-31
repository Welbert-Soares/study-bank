'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { ChevronUp, ChevronDown, Pencil, Trash2, X } from 'lucide-react'
import { ColorPicker } from '@/components/ui/color-picker'
import type { DisciplinaComTopicos, TopicoFromDB } from '@/types/plano'
import {
  atualizarDisciplinaAction,
  deletarDisciplinaAction,
  atualizarTopicoAction,
  deletarTopicoAction,
} from '@/app/actions/planos.actions'
import { toast } from 'sonner'

interface EditDisciplinaModalProps {
  disciplina: DisciplinaComTopicos
  planoId: string
  isOpen: boolean
}

export function EditDisciplinaModal({
  disciplina: initialDisciplina,
  planoId,
  isOpen,
}: EditDisciplinaModalProps) {
  const router = useRouter()
  const [disciplina, setDisciplina] = useState(initialDisciplina)
  const [isEditingName, setIsEditingName] = useState(false)
  const [nome, setNome] = useState(disciplina.nome)
  const [cor, setCor] = useState(disciplina.cor)
  const [expandedTopics, setExpandedTopics] = useState<Set<string>>(new Set())

  const handleClose = () => {
    router.push(`/planos/${planoId}`)
  }

  const handleSave = async () => {
    try {
      await atualizarDisciplinaAction(disciplina.id, {
        nome,
        cor: cor || '#3DD9B3',
      })
      toast.success('Disciplina atualizada com sucesso!')
      setDisciplina({ ...disciplina, nome, cor })
      setIsEditingName(false)
    } catch (error) {
      toast.error('Erro ao atualizar disciplina')
      console.error(error)
    }
  }

  const handleDeleteDisciplina = async () => {
    if (
      !confirm(
        'Tem certeza que deseja excluir esta disciplina? Todos os tópicos serão excluídos também.',
      )
    ) {
      return
    }

    try {
      await deletarDisciplinaAction(disciplina.id, planoId)
      toast.success('Disciplina excluída com sucesso!')
      handleClose()
    } catch (error) {
      toast.error('Erro ao excluir disciplina')
      console.error(error)
    }
  }

  const toggleTopic = (topicId: string) => {
    const newExpanded = new Set(expandedTopics)
    if (newExpanded.has(topicId)) {
      newExpanded.delete(topicId)
    } else {
      newExpanded.add(topicId)
    }
    setExpandedTopics(newExpanded)
  }

  const handleToggleTopicStatus = async (
    topicId: string,
    currentStatus: string,
  ) => {
    const newStatus = currentStatus === 'concluido' ? 'pendente' : 'concluido'

    try {
      await atualizarTopicoAction(topicId, { status: newStatus })
      setDisciplina({
        ...disciplina,
        topicos: disciplina.topicos.map((t) =>
          t.id === topicId ? { ...t, status: newStatus } : t,
        ),
      })
      toast.success('Status do tópico atualizado!')
    } catch (error) {
      toast.error('Erro ao atualizar status do tópico')
      console.error(error)
    }
  }

  const handleDeleteTopic = async (topicId: string) => {
    if (!confirm('Tem certeza que deseja excluir este tópico?')) {
      return
    }

    try {
      await deletarTopicoAction(topicId)
      setDisciplina({
        ...disciplina,
        topicos: disciplina.topicos.filter(
          (t: TopicoFromDB) => t.id !== topicId,
        ),
      })
      toast.success('Tópico excluído com sucesso!')
    } catch (error) {
      toast.error('Erro ao excluir tópico')
      console.error(error)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {isEditingName ? (
              <div className="flex items-center gap-2">
                <Input
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="text-2xl font-bold"
                  autoFocus
                />
              </div>
            ) : (
              <div className="flex items-center gap-2">
                {disciplina.nome}
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => setIsEditingName(true)}
                >
                  <Pencil className="w-4 h-4" />
                </Button>
              </div>
            )}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Nome e Cor */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Nome</Label>
              <Input
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Nome da disciplina"
              />
            </div>
            <div className="space-y-2">
              <Label>Cor</Label>
              <ColorPicker value={cor || '#3DD9B3'} onChange={setCor} />
            </div>
          </div>

          {/* Tópicos */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label className="text-lg font-semibold">Tópicos</Label>
              <Badge variant="secondary">
                {disciplina.topicos.length} tópicos
              </Badge>
            </div>

            <div className="space-y-2 max-h-[400px] overflow-y-auto">
              {disciplina.topicos
                .sort((a: TopicoFromDB, b: TopicoFromDB) => a.ordem - b.ordem)
                .map((topico: TopicoFromDB) => (
                  <div
                    key={topico.id}
                    className="border rounded-lg overflow-hidden"
                  >
                    <div
                      className="flex items-center gap-3 p-3 bg-primary/5 cursor-pointer hover:bg-primary/10 transition-colors"
                      onClick={() => toggleTopic(topico.id)}
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: cor || '#3DD9B3' }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-white/80 text-xs"
                        >
                          {disciplina.edital || 'PF'}
                        </Badge>
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">
                          {topico.ordem}. {topico.titulo}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleToggleTopicStatus(topico.id, topico.status)
                          }}
                        >
                          <Checkbox
                            checked={topico.status === 'concluido'}
                            className="pointer-events-none"
                          />
                        </Button>
                        {expandedTopics.has(topico.id) ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </div>
                    </div>

                    {expandedTopics.has(topico.id) && (
                      <div className="p-4 bg-white space-y-3">
                        {topico.conteudo && (
                          <div>
                            <Label className="text-sm">Conteúdo</Label>
                            <p className="text-sm text-muted-foreground">
                              {topico.conteudo}
                            </p>
                          </div>
                        )}

                        <div className="flex items-center justify-between pt-3 border-t">
                          <Badge
                            variant={
                              topico.status === 'concluido'
                                ? 'default'
                                : 'secondary'
                            }
                          >
                            {topico.status === 'concluido'
                              ? 'Concluído'
                              : 'Pendente'}
                          </Badge>

                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() =>
                                handleToggleTopicStatus(
                                  topico.id,
                                  topico.status,
                                )
                              }
                            >
                              <Pencil className="w-4 h-4 mr-1" />
                              {topico.status === 'concluido'
                                ? 'Marcar Pendente'
                                : 'Marcar Concluído'}
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => handleDeleteTopic(topico.id)}
                            >
                              <Trash2 className="w-4 h-4 mr-1" />
                              Excluir
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>

          {/* Botões de Ação */}
          <div className="flex justify-between pt-4 border-t">
            <Button variant="destructive" onClick={handleDeleteDisciplina}>
              <Trash2 className="w-4 h-4 mr-2" />
              Remover Disciplina
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" onClick={handleClose}>
                Cancelar
              </Button>
              <Button onClick={handleSave} className="bg-primary">
                Salvar
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
