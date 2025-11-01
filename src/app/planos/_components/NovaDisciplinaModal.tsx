'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { X, Plus, Pencil, Check } from 'lucide-react'
import { ColorPicker } from '@/components/ui/color-picker'
import {
  criarDisciplinaAction,
  criarTopicoAction,
} from '@/app/actions/planos.actions'
import { toast } from 'sonner'

interface NovaDisciplinaModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  planoId: string
}

// Sugestões de disciplinas comuns
const DISCIPLINAS_SUGERIDAS = [
  'Direito Civil',
  'Direito Civil e Direito Processual Civil',
  'Direito Civil e Empresarial',
  'Direito Constitucional',
  'Direito Administrativo',
  'Direito Penal',
  'Direito Tributário',
  'Direito do Trabalho',
  'Contabilidade Geral',
  'Contabilidade Pública',
  'Matemática',
  'Matemática Financeira',
  'Estatística',
  'Raciocínio Lógico',
  'Informática',
  'Português',
  'Inglês',
  'Espanhol',
  'Conhecimentos Bancários',
  'Atualidades',
  'Ética',
]

export function NovaDisciplinaModal({
  open,
  onOpenChange,
  planoId,
}: NovaDisciplinaModalProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [nome, setNome] = useState('')
  const [cor, setCor] = useState('#14b8a6') // Teal padrão
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [topicos, setTopicos] = useState<string[]>([])
  const [novoTopico, setNovoTopico] = useState('')
  const [showTopicoInput, setShowTopicoInput] = useState(false)
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [editingText, setEditingText] = useState('')

  const disciplinasFiltradas = DISCIPLINAS_SUGERIDAS.filter((disciplina) =>
    disciplina.toLowerCase().includes(nome.toLowerCase()),
  ).slice(0, 6)

  const handleSelectDisciplina = (disciplina: string) => {
    setNome(disciplina)
    setShowSuggestions(false)
  }

  const handleAddTopico = () => {
    if (novoTopico.trim()) {
      setTopicos([...topicos, novoTopico.trim()])
      setNovoTopico('')
      // Não fecha o input, permite adicionar múltiplos tópicos
    }
  }

  const handleRemoveTopico = (index: number) => {
    setTopicos(topicos.filter((_, i) => i !== index))
  }

  const handleEditTopico = (index: number) => {
    setEditingIndex(index)
    setEditingText(topicos[index])
  }

  const handleSaveEdit = (index: number) => {
    if (editingText.trim()) {
      const novosTopicos = [...topicos]
      novosTopicos[index] = editingText.trim()
      setTopicos(novosTopicos)
    }
    setEditingIndex(null)
    setEditingText('')
  }

  const handleCancelEdit = () => {
    setEditingIndex(null)
    setEditingText('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!nome.trim()) {
      toast.error('Por favor, informe o nome da disciplina')
      return
    }

    setLoading(true)
    try {
      // 1. Criar a disciplina
      const disciplina = await criarDisciplinaAction({
        planoId,
        nome: nome.trim(),
        cor: cor,
      })

      // 2. Criar os tópicos se houver
      if (topicos.length > 0) {
        for (let i = 0; i < topicos.length; i++) {
          await criarTopicoAction({
            disciplinaId: disciplina.id,
            titulo: topicos[i],
            ordem: i + 1,
          })
        }
      }

      toast.success(
        `Disciplina criada com sucesso!${
          topicos.length > 0
            ? ` ${topicos.length} tópico(s) adicionado(s).`
            : ''
        }`,
      )
      onOpenChange(false)
      setNome('')
      setCor('#14b8a6')
      setTopicos([])
      setNovoTopico('')
      setShowTopicoInput(false)
      router.refresh()
    } catch (error) {
      toast.error('Erro ao criar disciplina')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Nova Disciplina
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col flex-1 overflow-hidden"
        >
          {/* Nome com Autocomplete e Cor */}
          <div className="grid grid-cols-[1fr,auto] gap-6 mb-4">
            {/* Nome com Autocomplete */}
            <div className="space-y-2">
              <Label
                htmlFor="nome"
                className="text-sm font-medium text-gray-700"
              >
                NOME
              </Label>
              <div className="relative">
                <Input
                  id="nome"
                  value={nome}
                  onChange={(e) => {
                    setNome(e.target.value)
                    setShowSuggestions(true)
                  }}
                  onFocus={() => setShowSuggestions(true)}
                  placeholder="Digite o nome da disciplina"
                  className="border-0 border-b-2 border-gray-300 rounded-none px-0 focus-visible:ring-0 focus-visible:border-teal-500"
                  required
                />

                {/* Dropdown de Sugestões */}
                {showSuggestions && nome && disciplinasFiltradas.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-48 overflow-y-auto">
                    {disciplinasFiltradas.map((disciplina, index) => (
                      <div
                        key={index}
                        onClick={() => handleSelectDisciplina(disciplina)}
                        className={`px-4 py-2 cursor-pointer hover:bg-teal-50 ${
                          index === 0
                            ? 'bg-teal-500 text-white hover:bg-teal-600'
                            : ''
                        }`}
                      >
                        {disciplina}
                      </div>
                    ))}
                  </div>
                )}
              </div>
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
                onClick={() => setShowTopicoInput(true)}
              >
                + ADICIONAR NOVO TÓPICO
              </Button>
            </div>

            {/* Lista de Tópicos */}
            <div className="space-y-2">
              {topicos.map((topico, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg group hover:bg-gray-100"
                >
                  {editingIndex === index ? (
                    // Modo de Edição
                    <>
                      <Input
                        value={editingText}
                        onChange={(e) => setEditingText(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault()
                            handleSaveEdit(index)
                          }
                          if (e.key === 'Escape') {
                            handleCancelEdit()
                          }
                        }}
                        className="flex-1 text-sm mr-2"
                        autoFocus
                      />
                      <div className="flex gap-1">
                        <button
                          type="button"
                          onClick={() => handleSaveEdit(index)}
                          className="text-teal-600 hover:text-teal-700 p-1"
                          title="Salvar"
                        >
                          <Check className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={handleCancelEdit}
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
                      <span className="text-sm text-gray-700">{topico}</span>
                      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          type="button"
                          onClick={() => handleEditTopico(index)}
                          className="text-gray-400 hover:text-teal-600 p-1"
                          title="Editar"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleRemoveTopico(index)}
                          className="text-gray-400 hover:text-red-600 p-1"
                          title="Remover"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ))}

              {/* Input para adicionar novo tópico */}
              {showTopicoInput && (
                <div className="flex gap-2 p-3 bg-teal-50 rounded-lg border border-teal-200">
                  <Input
                    value={novoTopico}
                    onChange={(e) => setNovoTopico(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault()
                        handleAddTopico()
                      }
                      if (e.key === 'Escape') {
                        setShowTopicoInput(false)
                        setNovoTopico('')
                      }
                    }}
                    placeholder="Digite o nome do tópico"
                    className="flex-1 text-sm"
                    autoFocus
                  />
                  <Button
                    type="button"
                    size="sm"
                    onClick={handleAddTopico}
                    className="bg-teal-500 hover:bg-teal-600 text-white"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                  <Button
                    type="button"
                    size="sm"
                    variant="ghost"
                    onClick={() => {
                      setShowTopicoInput(false)
                      setNovoTopico('')
                    }}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              )}

              {/* Mensagem quando vazio */}
              {topicos.length === 0 && !showTopicoInput && (
                <div className="text-center py-8 text-gray-400">
                  <p className="text-sm">Nenhum tópico adicionado</p>
                  <p className="text-xs mt-1">
                    Clique em &quot;+ ADICIONAR NOVO TÓPICO&quot; para começar
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Botões */}
          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={loading}
              className="border-teal-500 text-teal-600 hover:bg-teal-50"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              disabled={loading}
              className="bg-teal-500 hover:bg-teal-600 text-white"
            >
              {loading ? 'Salvando...' : 'Salvar'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
