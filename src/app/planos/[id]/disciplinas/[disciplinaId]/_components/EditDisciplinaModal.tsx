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
import { Textarea } from '@/components/ui/textarea'
import { ChevronUp, ChevronDown, Pencil, Trash2, X, Plus } from 'lucide-react'
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
  const [nome, setNome] = useState(disciplina.nome)
  const [cor, setCor] = useState(disciplina.cor || '#3DD9B3')
  const [expandedTopics, setExpandedTopics] = useState<Set<string>>(new Set())
  const [editingTopicId, setEditingTopicId] = useState<string | null>(null)
  const [editingTopicData, setEditingTopicData] = useState<{
    titulo: string
    conteudo: string
  }>({ titulo: '', conteudo: '' })

  const handleClose = () => {
    router.push(`/planos/${planoId}`)
  }

  const handleSave = async () => {
    try {
      await atualizarDisciplinaAction(disciplina.id, {
        nome,
        cor,
      })
      toast.success('Disciplina atualizada com sucesso!')
      handleClose()
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

  const startEditingTopic = (topico: TopicoFromDB) => {
    setEditingTopicId(topico.id)
    setEditingTopicData({
      titulo: topico.titulo,
      conteudo: topico.conteudo || '',
    })
    setExpandedTopics(new Set([topico.id]))
  }

  const cancelEditingTopic = () => {
    setEditingTopicId(null)
    setEditingTopicData({ titulo: '', conteudo: '' })
  }

  const saveTopicEdit = async (topicId: string) => {
    try {
      await atualizarTopicoAction(topicId, {
        titulo: editingTopicData.titulo,
        conteudo: editingTopicData.conteudo || undefined,
      })
      setDisciplina({
        ...disciplina,
        topicos: disciplina.topicos.map((t) =>
          t.id === topicId
            ? {
                ...t,
                titulo: editingTopicData.titulo,
                conteudo: editingTopicData.conteudo,
              }
            : t,
        ),
      })
      setEditingTopicId(null)
      toast.success('Tópico atualizado!')
    } catch (error) {
      toast.error('Erro ao atualizar tópico')
      console.error(error)
    }
  }

  const handleDeleteTopic = async (topicId: string) => {
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
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 gap-0">
        {/* Header */}
        <DialogHeader className="px-6 pt-6 pb-4 border-b">
          <div className="flex items-start justify-between gap-8">
            <div className="flex-1 space-y-2">
              <DialogTitle className="text-2xl font-bold text-gray-900">
                {nome}
              </DialogTitle>
              <div className="space-y-1">
                <Label className="text-xs font-medium text-gray-500 uppercase">
                  Nome
                </Label>
                <Input
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="border-0 border-b-2 border-teal-400 rounded-none px-0 focus-visible:ring-0 focus-visible:border-teal-500 bg-transparent"
                  placeholder="Nome da disciplina"
                />
              </div>
            </div>
            <div className="space-y-1">
              <Label className="text-xs font-medium text-gray-500 uppercase">
                Cor
              </Label>
              <ColorPicker value={cor} onChange={setCor} />
            </div>
          </div>
        </DialogHeader>

        {/* Tópicos */}
        <div className="px-6 py-4 overflow-hidden flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <Label className="text-xs font-medium text-gray-500 uppercase">
              Tópicos
            </Label>
            <Button
              variant="ghost"
              size="sm"
              className="text-teal-500 hover:text-teal-600 hover:bg-teal-50 font-medium text-xs uppercase"
            >
              <Plus className="w-4 h-4 mr-1" />
              Adicionar novo tópico
            </Button>
          </div>

          <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
            {disciplina.topicos
              .sort((a: TopicoFromDB, b: TopicoFromDB) => a.ordem - b.ordem)
              .map((topico: TopicoFromDB) => {
                const isExpanded = expandedTopics.has(topico.id)
                const isEditing = editingTopicId === topico.id

                return (
                  <div
                    key={topico.id}
                    className="border border-gray-200 rounded-md overflow-hidden bg-white"
                  >
                    {/* Linha do tópico */}
                    <div className="flex items-center gap-3 p-3 hover:bg-gray-50 transition-colors">
                      <div
                        className="w-10 h-10 rounded-md flex items-center justify-center flex-shrink-0 text-white font-bold text-xs"
                        style={{ backgroundColor: cor }}
                      >
                        {disciplina.edital || 'PF'}
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-800 leading-relaxed">
                          {topico.ordem}. {topico.titulo}
                        </p>
                      </div>

                      <div className="flex items-center gap-0.5">
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-8 w-8 hover:bg-gray-100"
                          onClick={() => toggleTopic(topico.id)}
                        >
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4 text-gray-600" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-gray-600" />
                          )}
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-8 w-8 hover:bg-gray-100"
                          onClick={() => startEditingTopic(topico)}
                        >
                          <Pencil className="w-4 h-4 text-gray-600" />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-8 w-8 hover:bg-gray-100"
                          onClick={() => handleDeleteTopic(topico.id)}
                        >
                          <Trash2 className="w-4 h-4 text-gray-600" />
                        </Button>
                      </div>
                    </div>

                    {/* Conteúdo expandido */}
                    {isExpanded && (
                      <div className="px-3 pb-3 bg-white border-t border-gray-100">
                        {isEditing ? (
                          <div className="space-y-3 pt-3">
                            <div>
                              <Label className="text-xs text-muted-foreground">
                                TÍTULO
                              </Label>
                              <Input
                                value={editingTopicData.titulo}
                                onChange={(e) =>
                                  setEditingTopicData({
                                    ...editingTopicData,
                                    titulo: e.target.value,
                                  })
                                }
                                className="mt-1"
                              />
                            </div>
                            <div>
                              <Label className="text-xs text-muted-foreground">
                                CONTEÚDO
                              </Label>
                              <Textarea
                                value={editingTopicData.conteudo}
                                onChange={(e) =>
                                  setEditingTopicData({
                                    ...editingTopicData,
                                    conteudo: e.target.value,
                                  })
                                }
                                className="mt-1 min-h-[100px]"
                                placeholder="Adicione detalhes sobre o tópico..."
                              />
                            </div>
                            <div className="flex justify-end gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={cancelEditingTopic}
                              >
                                Cancelar
                              </Button>
                              <Button
                                size="sm"
                                onClick={() => saveTopicEdit(topico.id)}
                                className="bg-teal-500 hover:bg-teal-600"
                              >
                                Salvar
                              </Button>
                            </div>
                          </div>
                        ) : (
                          <div className="pt-3">
                            {topico.conteudo && (
                              <p className="text-sm text-gray-700 whitespace-pre-wrap">
                                {topico.conteudo}
                              </p>
                            )}
                            {!topico.conteudo && (
                              <p className="text-sm text-muted-foreground italic">
                                Nenhum conteúdo adicionado
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )
              })}
          </div>

          {disciplina.topicos.length === 0 && (
            <div className="text-center py-8 text-muted-foreground border-2 border-dashed rounded-lg">
              <p>Nenhum tópico adicionado ainda</p>
              <p className="text-sm mt-1">
                Clique em "Adicionar Novo Tópico" para começar
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t flex justify-between items-center bg-white">
          <Button
            variant="outline"
            onClick={handleDeleteDisciplina}
            className="border-teal-500 text-teal-600 hover:bg-teal-50 hover:text-teal-700"
          >
            Remover
          </Button>
          <Button
            onClick={handleSave}
            className="bg-teal-500 hover:bg-teal-600 text-white px-8"
          >
            Salvar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
