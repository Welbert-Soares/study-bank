'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { ArrowLeft, Plus, Trash2 } from 'lucide-react'
import Link from 'next/link'
import { ColorPicker } from '@/components/ui/color-picker'
import {
  criarDisciplinaAction,
  criarTopicosEmLoteAction,
} from '@/app/actions/planos.actions'
import { toast } from 'sonner'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface NovaDisciplinaPageProps {
  params: {
    id: string
  }
}

export default function NovaDisciplinaPage({
  params,
}: NovaDisciplinaPageProps) {
  const router = useRouter()
  const [nome, setNome] = useState('')
  const [cor, setCor] = useState('#3DD9B3')
  const [descricao, setDescricao] = useState('')
  const [edital, setEdital] = useState('')
  const [cargo, setCargo] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // Estado para tópicos
  const [topicos, setTopicos] = useState<
    Array<{ titulo: string; conteudo?: string }>
  >([])
  const [novoTopico, setNovoTopico] = useState({ titulo: '', conteudo: '' })

  const adicionarTopico = () => {
    if (!novoTopico.titulo.trim()) {
      toast.error('Digite o título do tópico')
      return
    }

    setTopicos([
      ...topicos,
      { titulo: novoTopico.titulo, conteudo: novoTopico.conteudo },
    ])

    setNovoTopico({ titulo: '', conteudo: '' })
    toast.success('Tópico adicionado!')
  }

  const removerTopico = (index: number) => {
    setTopicos(topicos.filter((_, i) => i !== index))
    toast.success('Tópico removido')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!nome.trim()) {
      toast.error('Nome da disciplina é obrigatório')
      return
    }

    setIsLoading(true)

    try {
      // 1. Criar disciplina
      const disciplinaCriada = await criarDisciplinaAction({
        planoId: params.id,
        nome: nome.trim(),
        cor,
        descricao: descricao.trim() || undefined,
        edital: edital.trim() || undefined,
        cargo: cargo.trim() || undefined,
      })

      // 2. Criar tópicos se existirem
      if (topicos.length > 0) {
        await criarTopicosEmLoteAction(disciplinaCriada.id, topicos)
      }

      toast.success('Disciplina criada com sucesso!')
      router.push(`/planos/${params.id}`)
    } catch (error) {
      toast.error('Erro ao criar disciplina')
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full min-h-screen p-4 md:p-8 bg-gray-50">
      <div className="max-w-3xl mx-auto space-y-8">
        <div>
          <Button asChild variant="ghost" size="sm" className="mb-4">
            <Link href={`/planos/${params.id}`}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para o Plano
            </Link>
          </Button>

          <h1 className="text-4xl font-bold">Nova Disciplina</h1>
          <p className="text-muted-foreground mt-2">
            Adicione uma nova disciplina ao seu plano de estudos
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
              onClick={() => router.push(`/planos/${params.id}`)}
              disabled={isLoading}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="bg-primary hover:bg-primary/90"
              disabled={isLoading}
            >
              {isLoading ? 'Criando...' : 'Criar Disciplina'}
            </Button>
          </div>
        </form>

        {/* Seção de Tópicos */}
        <div className="bg-white rounded-lg border p-6 space-y-6">
          <div>
            <h2 className="text-2xl font-bold">Tópicos</h2>
            <p className="text-muted-foreground mt-1">
              Adicione os tópicos que você vai estudar nesta disciplina
              (opcional)
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
              >
                <Plus className="w-4 h-4 mr-2" />
                Adicionar Tópico
              </Button>
            </div>
          </Card>

          {/* Lista de Tópicos */}
          {topicos.length > 0 ? (
            <div className="space-y-2">
              <Label className="text-base">Tópicos ({topicos.length})</Label>
              {topicos.map((topico, index) => (
                <Card key={index} className="p-4">
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
                      onClick={() => removerTopico(index)}
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
