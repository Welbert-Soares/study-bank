'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { ArrowLeft, Check, Plus, Trash2 } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import type { DisciplinaFormData } from '@/types/plano'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'

interface DisciplinaComTopicos extends DisciplinaFormData {
  tempId?: string
  topicos: Array<{ titulo: string; conteudo?: string }>
}

interface TopicosStepProps {
  disciplinas: DisciplinaComTopicos[]
  onFinish: (disciplinas: DisciplinaComTopicos[]) => Promise<void>
  onBack: () => void
  isSubmitting: boolean
}

export function TopicosStep({
  disciplinas: initialDisciplinas,
  onFinish,
  onBack,
  isSubmitting,
}: TopicosStepProps) {
  const [disciplinas, setDisciplinas] = useState(initialDisciplinas)
  const [disciplinaAtiva, setDisciplinaAtiva] = useState(
    initialDisciplinas[0]?.tempId || '',
  )
  const [novoTopico, setNovoTopico] = useState({ titulo: '', conteudo: '' })

  const disciplinaAtual = disciplinas.find((d) => d.tempId === disciplinaAtiva)

  const adicionarTopico = () => {
    if (!novoTopico.titulo.trim()) {
      toast.error('Digite o título do tópico')
      return
    }

    setDisciplinas(
      disciplinas.map((disc) =>
        disc.tempId === disciplinaAtiva
          ? {
              ...disc,
              topicos: [
                ...disc.topicos,
                { titulo: novoTopico.titulo, conteudo: novoTopico.conteudo },
              ],
            }
          : disc,
      ),
    )

    setNovoTopico({ titulo: '', conteudo: '' })
    toast.success('Tópico adicionado!')
  }

  const removerTopico = (index: number) => {
    setDisciplinas(
      disciplinas.map((disc) =>
        disc.tempId === disciplinaAtiva
          ? {
              ...disc,
              topicos: disc.topicos.filter((_, i) => i !== index),
            }
          : disc,
      ),
    )
    toast.success('Tópico removido')
  }

  const handleFinish = async () => {
    // Verificar se todas as disciplinas têm pelo menos um tópico
    const disciplinasSemTopicos = disciplinas.filter(
      (d) => d.topicos.length === 0,
    )

    if (disciplinasSemTopicos.length > 0) {
      const confirmar = confirm(
        `As seguintes disciplinas não têm tópicos:\n${disciplinasSemTopicos
          .map((d) => `- ${d.nome}`)
          .join('\n')}\n\nDeseja continuar mesmo assim?`,
      )
      if (!confirmar) return
    }

    await onFinish(disciplinas)
  }

  const totalTopicos = disciplinas.reduce(
    (acc, disc) => acc + disc.topicos.length,
    0,
  )

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Adicionar Tópicos</h2>
        <p className="text-muted-foreground">
          Adicione os tópicos que você vai estudar em cada disciplina
        </p>
        <div className="mt-2 flex gap-2">
          <Badge variant="secondary">{disciplinas.length} disciplina(s)</Badge>
          <Badge variant="secondary">{totalTopicos} tópico(s) total</Badge>
        </div>
      </div>

      <Tabs value={disciplinaAtiva} onValueChange={setDisciplinaAtiva}>
        <TabsList className="w-full flex-wrap h-auto justify-start">
          {disciplinas.map((disc) => (
            <TabsTrigger
              key={disc.tempId}
              value={disc.tempId!}
              className="gap-2"
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: disc.cor }}
              />
              {disc.nome}
              <Badge variant="secondary" className="ml-1">
                {disc.topicos.length}
              </Badge>
            </TabsTrigger>
          ))}
        </TabsList>

        {disciplinas.map((disc) => (
          <TabsContent
            key={disc.tempId}
            value={disc.tempId!}
            className="space-y-4"
          >
            {/* Formulário de Novo Tópico */}
            <Card className="p-4 bg-gray-50">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="titulo-topico">Título do Tópico *</Label>
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

                <Button onClick={adicionarTopico} className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Adicionar Tópico
                </Button>
              </div>
            </Card>

            {/* Lista de Tópicos */}
            {disc.topicos.length > 0 ? (
              <div className="space-y-2">
                <Label className="text-base">
                  Tópicos ({disc.topicos.length})
                </Label>
                {disc.topicos.map((topico, index) => (
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
          </TabsContent>
        ))}
      </Tabs>

      <div className="flex gap-3 pt-4 border-t">
        <Button
          type="button"
          variant="outline"
          onClick={onBack}
          disabled={isSubmitting}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Button>
        <Button
          type="button"
          className="flex-1"
          onClick={handleFinish}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Criando Plano...
            </>
          ) : (
            <>
              <Check className="w-4 h-4 mr-2" />
              Finalizar e Criar Plano
            </>
          )}
        </Button>
      </div>
    </div>
  )
}
