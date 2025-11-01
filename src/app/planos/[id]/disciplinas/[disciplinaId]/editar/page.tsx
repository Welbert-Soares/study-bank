'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { ArrowLeft, Loader2, Plus, Trash2 } from 'lucide-react'
import Link from 'next/link'
import { ColorPicker } from '@/components/ui/color-picker'
import {
  obterDisciplinaPorIdAction,
  atualizarDisciplinaAction,
  criarTopicoAction,
  deletarTopicoAction,
} from '@/app/actions/planos.actions'
import { toast } from 'sonner'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface EditarDisciplinaPageProps {
  params: Promise<{
    id: string
    disciplinaId: string
  }>
}

export default function EditarDisciplinaPage({
  params,
}: EditarDisciplinaPageProps) {
  const router = useRouter()
  const [planoId, setPlanoId] = useState<string>('')
  const [disciplinaId, setDisciplinaId] = useState<string>('')
  const [nome, setNome] = useState('')
  const [cor, setCor] = useState('#3DD9B3')
  const [descricao, setDescricao] = useState('')
  const [edital, setEdital] = useState('')
  const [cargo, setCargo] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)

  // Estado para tópicos
  const [topicos, setTopicos] = useState<
    Array<{
      id: string
      titulo: string
      conteudo?: string | null
      ordem: number
    }>
  >([])
  const [novoTopico, setNovoTopico] = useState({ titulo: '', conteudo: '' })
  const [isAddingTopico, setIsAddingTopico] = useState(false)

  // Resolver params
  useEffect(() => {
    params.then((resolvedParams) => {
      setPlanoId(resolvedParams.id)
      setDisciplinaId(resolvedParams.disciplinaId)
    })
  }, [params])

  useEffect(() => {
    if (disciplinaId) {
      loadDisciplina()
    }
  }, [disciplinaId])

  const loadDisciplina = async () => {
    try {
      const disciplina = await obterDisciplinaPorIdAction(disciplinaId)
      setNome(disciplina.nome)
      setCor(disciplina.cor || '#3DD9B3')
      setDescricao(disciplina.descricao || '')
      setEdital(disciplina.edital || '')
      setCargo(disciplina.cargo || '')
      setTopicos(disciplina.topicos || [])
    } catch (error) {
      toast.error('Erro ao carregar disciplina')
      console.error(error)
      router.push(`/planos/${planoId}`)
    } finally {
      setIsLoading(false)
    }
  }

  const adicionarTopico = async () => {
    if (!novoTopico.titulo.trim()) {
      toast.error('Digite o título do tópico')
      return
    }

    setIsAddingTopico(true)

    try {
      // Calcular a próxima ordem
      const proximaOrdem =
        topicos.length > 0
          ? Math.max(...topicos.map((t) => t.ordem || 0)) + 1
          : 1

      const novoTopicoCreated = await criarTopicoAction({
        disciplinaId: disciplinaId,
        titulo: novoTopico.titulo,
        conteudo: novoTopico.conteudo || undefined,
        ordem: proximaOrdem,
      })

      setTopicos([...topicos, novoTopicoCreated])
      setNovoTopico({ titulo: '', conteudo: '' })
      toast.success('Tópico adicionado!')
    } catch (error) {
      toast.error('Erro ao adicionar tópico')
      console.error(error)
    } finally {
      setIsAddingTopico(false)
    }
  }

  const removerTopico = async (topicoId: string) => {
    try {
      await deletarTopicoAction(topicoId)
      setTopicos(topicos.filter((t) => t.id !== topicoId))
      toast.success('Tópico removido')
    } catch (error) {
      toast.error('Erro ao remover tópico')
      console.error(error)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!nome.trim()) {
      toast.error('Nome da disciplina é obrigatório')
      return
    }

    setIsSaving(true)

    try {
      await atualizarDisciplinaAction(disciplinaId, {
        nome: nome.trim(),
        cor,
        descricao: descricao.trim() || undefined,
        edital: edital.trim() || undefined,
        cargo: cargo.trim() || undefined,
      })

      toast.success('Disciplina atualizada com sucesso!')
      router.push(`/planos/${planoId}`)
    } catch (error) {
      toast.error('Erro ao atualizar disciplina')
      console.error(error)
    } finally {
      setIsSaving(false)
    }
  }

  if (isLoading) {
    return (
      <div className="w-full min-h-screen p-4 md:p-8 bg-gray-50 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    )
  }

  return (
    <div className="w-full min-h-screen p-4 md:p-8 bg-gray-50">
      <div className="max-w-3xl mx-auto space-y-8">
        <div>
          <Button asChild variant="ghost" size="sm" className="mb-4">
            <Link href={`/planos/${planoId}`}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para o Plano
            </Link>
          </Button>

          <h1 className="text-4xl font-bold">Editar Disciplina</h1>
          <p className="text-muted-foreground mt-2">
            Atualize as informações da disciplina
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg border p-6 space-y-6"
        >
          <div className="space-y-2">
            <Label htmlFor="nome">
              Nome da Disciplina <span className="text-red-500">*</span>
            </Label>
            <Input
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Ex: Contabilidade Geral"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cor">Cor</Label>
            <ColorPicker value={cor} onChange={setCor} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="descricao">Descrição (opcional)</Label>
            <Textarea
              id="descricao"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              placeholder="Breve descrição sobre a disciplina..."
              rows={3}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="edital">Sigla do Edital (opcional)</Label>
              <Input
                id="edital"
                value={edital}
                onChange={(e) => setEdital(e.target.value)}
                placeholder="Ex: PF"
                maxLength={5}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cargo">Cargo (opcional)</Label>
              <Input
                id="cargo"
                value={cargo}
                onChange={(e) => setCargo(e.target.value)}
                placeholder="Ex: Agente"
              />
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push(`/planos/${planoId}`)}
              disabled={isSaving}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="bg-primary hover:bg-primary/90"
              disabled={isSaving}
            >
              {isSaving ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Salvando...
                </>
              ) : (
                'Salvar Alterações'
              )}
            </Button>
          </div>
        </form>

        {/* Seção de Tópicos */}
        <div className="bg-white rounded-lg border p-6 space-y-6">
          <div>
            <h2 className="text-2xl font-bold">Tópicos</h2>
            <p className="text-muted-foreground mt-1">
              Gerencie os tópicos desta disciplina
            </p>
            <Badge variant="secondary" className="mt-2">
              {topicos.length} tópico(s)
            </Badge>
          </div>

          {/* Formulário de Novo Tópico */}
          <Card className="p-4 bg-gray-50">
            <div className="space-y-4">
              <div>
                <Label htmlFor="titulo-topico">Título do Tópico</Label>
                <Input
                  id="titulo-topico"
                  placeholder="Ex: Conceitos básicos"
                  value={novoTopico.titulo}
                  onChange={(e) =>
                    setNovoTopico({ ...novoTopico, titulo: e.target.value })
                  }
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault()
                      adicionarTopico()
                    }
                  }}
                  disabled={isAddingTopico}
                />
              </div>

              <div>
                <Label htmlFor="conteudo-topico">Conteúdo (opcional)</Label>
                <Textarea
                  id="conteudo-topico"
                  placeholder="Adicione detalhes sobre o tópico..."
                  value={novoTopico.conteudo}
                  onChange={(e) =>
                    setNovoTopico({ ...novoTopico, conteudo: e.target.value })
                  }
                  rows={3}
                  className="resize-none"
                  disabled={isAddingTopico}
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Dica: Pressione Enter para adicionar o tópico rapidamente
                </p>
              </div>

              <Button
                type="button"
                onClick={adicionarTopico}
                className="w-full"
                variant="outline"
                disabled={isAddingTopico}
              >
                {isAddingTopico ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Adicionando...
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4 mr-2" />
                    Adicionar Tópico
                  </>
                )}
              </Button>
            </div>
          </Card>

          {/* Lista de Tópicos */}
          {topicos.length > 0 ? (
            <div className="space-y-2">
              <Label className="text-base">Tópicos ({topicos.length})</Label>
              {topicos.map((topico, index) => (
                <Card key={topico.id} className="p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{index + 1}</Badge>
                        <p className="font-medium">{topico.titulo}</p>
                      </div>
                      {topico.conteudo && (
                        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                          {topico.conteudo}
                        </p>
                      )}
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removerTopico(topico.id)}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground border-2 border-dashed rounded-lg">
              <p>Nenhum tópico adicionado ainda</p>
              <p className="text-sm">
                Adicione tópicos para organizar o conteúdo desta disciplina
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
