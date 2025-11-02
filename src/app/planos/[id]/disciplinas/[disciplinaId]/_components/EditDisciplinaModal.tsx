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
import {
  ChevronUp,
  ChevronDown,
  Pencil,
  Trash2,
  X,
  Plus,
  Check,
} from 'lucide-react'
import { ColorPicker } from '@/components/ui/color-picker'
import type { DisciplinaComTopicos, TopicoFromDB } from '@/types/plano'
import {
  atualizarDisciplinaAction,
  deletarDisciplinaAction,
  atualizarTopicoAction,
  deletarTopicoAction,
  criarTopicoAction,
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
  const [isAddingNew, setIsAddingNew] = useState(false)
  const [newTopicData, setNewTopicData] = useState({
    titulo: '',
    conteudo: '',
  })

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

  const handleAddNewTopic = async () => {
    if (!newTopicData.titulo.trim()) {
      toast.error('Digite o título do tópico')
      return
    }

    try {
      const ordens = disciplina.topicos.map((t) => t.ordem)
      const proximaOrdem = ordens.length > 0 ? Math.max(...ordens) + 1 : 1

      const novoTopico = await criarTopicoAction({
        disciplinaId: disciplina.id,
        titulo: newTopicData.titulo.trim(),
        conteudo: newTopicData.conteudo.trim() || undefined,
        ordem: proximaOrdem,
      })

      setDisciplina({
        ...disciplina,
        topicos: [...disciplina.topicos, novoTopico],
      })

      setNewTopicData({ titulo: '', conteudo: '' })
      setIsAddingNew(false)
      toast.success('Tópico adicionado com sucesso!')
    } catch (error) {
      toast.error('Erro ao adicionar tópico')
      console.error(error)
    }
  }

  const cancelAddNewTopic = () => {
    setIsAddingNew(false)
    setNewTopicData({ titulo: '', conteudo: '' })
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            {nome}
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col flex-1 overflow-hidden">
          {/* Nome com Autocomplete e Cor */}
          <div className="grid grid-cols-[1fr,auto] gap-6 mb-4">
            {/* Nome */}
            <div className="space-y-2">
              <Label
                htmlFor="nome"
                className="text-sm font-medium text-gray-700"
              >
                NOME
              </Label>
              <Input
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Digite o nome da disciplina"
                className="border-0 border-b-2 border-gray-300 rounded-none px-0 focus-visible:ring-0 focus-visible:border-teal-500"
                required
              />
            </div>

            {/* Seletor de Cor */}
            <div className="space-y-2 min-w-[200px]">
              <Label
                htmlFor="cor"
                className="text-sm font-medium text-gray-700"
              >
                COR
              </Label>
              <ColorPicker value={cor} onChange={setCor} />
            </div>
          </div>

          {/* Área de Tópicos - Scrollable */}
          <div className="flex-1 overflow-y-auto border border-gray-200 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between mb-4">
              <Label className="text-sm font-medium text-gray-700">
                TÓPICOS
              </Label>
              <Button
                type="button"
                variant="link"
                className="text-teal-500 hover:text-teal-600 p-0 h-auto"
                onClick={() => setIsAddingNew(true)}
              >
                + ADICIONAR NOVO TÓPICO
              </Button>
            </div>

            {/* Formulário de Novo Tópico */}
            {isAddingNew && (
              <div className="mb-4 p-4 bg-teal-50 border border-teal-200 rounded-lg space-y-3">
                <div className="space-y-2">
                  <Label className="text-xs text-gray-700">
                    TÍTULO DO TÓPICO
                  </Label>
                  <Input
                    value={newTopicData.titulo}
                    onChange={(e) =>
                      setNewTopicData({
                        ...newTopicData,
                        titulo: e.target.value,
                      })
                    }
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault()
                        handleAddNewTopic()
                      }
                      if (e.key === 'Escape') {
                        cancelAddNewTopic()
                      }
                    }}
                    placeholder="Ex: Conceitos básicos"
                    className="text-sm"
                    autoFocus
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs text-gray-700">
                    CONTEÚDO (OPCIONAL)
                  </Label>
                  <Textarea
                    value={newTopicData.conteudo}
                    onChange={(e) =>
                      setNewTopicData({
                        ...newTopicData,
                        conteudo: e.target.value,
                      })
                    }
                    placeholder="Adicione detalhes sobre o tópico..."
                    className="min-h-[80px] text-sm resize-none"
                  />
                </div>
                <div className="flex gap-2 justify-end">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={cancelAddNewTopic}
                  >
                    Cancelar
                  </Button>
                  <Button
                    type="button"
                    size="sm"
                    onClick={handleAddNewTopic}
                    className="bg-teal-500 hover:bg-teal-600"
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Adicionar
                  </Button>
                </div>
              </div>
            )}

            {/* Lista de Tópicos */}
            <div className="space-y-2">
              {disciplina.topicos
                .sort((a: TopicoFromDB, b: TopicoFromDB) => a.ordem - b.ordem)
                .map((topico: TopicoFromDB) => {
                  const isExpanded = expandedTopics.has(topico.id)
                  const isEditing = editingTopicId === topico.id

                  return (
                    <div key={topico.id}>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg group hover:bg-gray-100">
                        {isEditing ? (
                          // Modo de Edição
                          <>
                            <Input
                              value={editingTopicData.titulo}
                              onChange={(e) =>
                                setEditingTopicData({
                                  ...editingTopicData,
                                  titulo: e.target.value,
                                })
                              }
                              onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                  e.preventDefault()
                                  saveTopicEdit(topico.id)
                                }
                                if (e.key === 'Escape') {
                                  cancelEditingTopic()
                                }
                              }}
                              className="flex-1 text-sm mr-2"
                              autoFocus
                            />
                            <div className="flex gap-1">
                              <button
                                type="button"
                                onClick={() => toggleTopic(topico.id)}
                                className="text-gray-400 hover:text-gray-600 p-1"
                                title={isExpanded ? 'Recolher' : 'Expandir'}
                              >
                                {isExpanded ? (
                                  <ChevronUp className="w-4 h-4" />
                                ) : (
                                  <ChevronDown className="w-4 h-4" />
                                )}
                              </button>
                              <button
                                type="button"
                                onClick={() => saveTopicEdit(topico.id)}
                                className="text-teal-600 hover:text-teal-700 p-1"
                                title="Salvar"
                              >
                                <Check className="w-4 h-4" />
                              </button>
                              <button
                                type="button"
                                onClick={cancelEditingTopic}
                                className="text-gray-400 hover:text-gray-600 p-1"
                                title="Cancelar"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          </>
                        ) : (
                          // Modo de Visualização
                          <>
                            <span className="text-sm text-gray-700">
                              {topico.titulo}
                            </span>
                            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button
                                type="button"
                                onClick={() => toggleTopic(topico.id)}
                                className="text-gray-400 hover:text-teal-600 p-1"
                                title={isExpanded ? 'Recolher' : 'Expandir'}
                              >
                                {isExpanded ? (
                                  <ChevronUp className="w-4 h-4" />
                                ) : (
                                  <ChevronDown className="w-4 h-4" />
                                )}
                              </button>
                              <button
                                type="button"
                                onClick={() => startEditingTopic(topico)}
                                className="text-gray-400 hover:text-teal-600 p-1"
                                title="Editar"
                              >
                                <Pencil className="w-4 h-4" />
                              </button>
                              <button
                                type="button"
                                onClick={() => handleDeleteTopic(topico.id)}
                                className="text-gray-400 hover:text-red-600 p-1"
                                title="Remover"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </>
                        )}
                      </div>

                      {/* Área expandida para conteúdo */}
                      {isExpanded && !isEditing && (
                        <div className="mt-2 p-3 bg-white border border-gray-200 rounded-lg">
                          {topico.conteudo ? (
                            <p className="text-sm text-gray-700 whitespace-pre-wrap">
                              {topico.conteudo}
                            </p>
                          ) : (
                            <p className="text-sm text-gray-400 italic">
                              Nenhum conteúdo adicionado
                            </p>
                          )}
                        </div>
                      )}

                      {/* Editor de conteúdo quando expandido e editando */}
                      {isExpanded && isEditing && (
                        <div className="mt-2 p-3 bg-white border border-gray-200 rounded-lg space-y-2">
                          <Label className="text-xs text-gray-500">
                            CONTEÚDO (OPCIONAL)
                          </Label>
                          <Textarea
                            value={editingTopicData.conteudo}
                            onChange={(e) =>
                              setEditingTopicData({
                                ...editingTopicData,
                                conteudo: e.target.value,
                              })
                            }
                            className="min-h-[100px] text-sm"
                            placeholder="Adicione detalhes sobre o tópico..."
                          />
                        </div>
                      )}
                    </div>
                  )
                })}
            </div>

            {/* Mensagem quando vazio */}
            {disciplina.topicos.length === 0 && (
              <div className="text-center py-8 text-gray-400">
                <p className="text-sm">Nenhum tópico adicionado</p>
                <p className="text-xs mt-1">
                  Clique em &quot;+ ADICIONAR NOVO TÓPICO&quot; para começar
                </p>
              </div>
            )}
          </div>

          {/* Botões */}
          <div className="flex justify-between gap-3 pt-4 border-t">
            <Button
              type="button"
              variant="outline"
              onClick={handleDeleteDisciplina}
              className="border-teal-500 text-teal-600 hover:bg-teal-50"
            >
              Remover
            </Button>
            <Button
              onClick={handleSave}
              className="bg-teal-500 hover:bg-teal-600 text-white"
            >
              Salvar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
