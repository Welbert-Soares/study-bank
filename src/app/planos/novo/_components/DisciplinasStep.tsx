'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ColorPicker } from '@/components/ui/color-picker'
import { ArrowLeft, ArrowRight, Plus, Trash2 } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { DisciplinaFormData } from '@/types/plano'
import { toast } from 'sonner'

interface DisciplinaComTopicos extends DisciplinaFormData {
  tempId?: string
  topicos: Array<{ titulo: string; conteudo?: string }>
}

interface DisciplinasStepProps {
  initialData: DisciplinaComTopicos[]
  onNext: (disciplinas: DisciplinaComTopicos[]) => void
  onBack: () => void
}

export function DisciplinasStep({
  initialData,
  onNext,
  onBack,
}: DisciplinasStepProps) {
  const [disciplinas, setDisciplinas] = useState<DisciplinaComTopicos[]>(
    initialData.length > 0 ? initialData : [],
  )
  const [novaDisciplina, setNovaDisciplina] = useState({
    nome: '',
    cor: '#3DD9B3',
    edital: '',
  })

  const adicionarDisciplina = () => {
    if (!novaDisciplina.nome.trim()) {
      toast.error('Digite o nome da disciplina')
      return
    }

    const disciplina: DisciplinaComTopicos = {
      tempId: Date.now().toString(),
      nome: novaDisciplina.nome,
      cor: novaDisciplina.cor,
      edital: novaDisciplina.edital,
      ordem: disciplinas.length,
      planoId: '', // Será preenchido depois
      topicos: [],
    }

    setDisciplinas([...disciplinas, disciplina])
    setNovaDisciplina({ nome: '', cor: '#3DD9B3', edital: '' })
    toast.success('Disciplina adicionada!')
  }

  const removerDisciplina = (tempId: string) => {
    setDisciplinas(disciplinas.filter((d) => d.tempId !== tempId))
    toast.success('Disciplina removida')
  }

  const handleNext = () => {
    if (disciplinas.length === 0) {
      toast.error('Adicione pelo menos uma disciplina')
      return
    }
    onNext(disciplinas)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Adicionar Disciplinas</h2>
        <p className="text-muted-foreground">
          Defina as disciplinas que você vai estudar neste plano
        </p>
      </div>

      {/* Formulário de Nova Disciplina */}
      <Card className="p-4 bg-gray-50">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-1">
              <Label htmlFor="nome-disciplina">Nome da Disciplina *</Label>
              <Input
                id="nome-disciplina"
                placeholder="Ex: Direito Constitucional"
                value={novaDisciplina.nome}
                onChange={(e) =>
                  setNovaDisciplina({ ...novaDisciplina, nome: e.target.value })
                }
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault()
                    adicionarDisciplina()
                  }
                }}
              />
            </div>

            <div className="md:col-span-1">
              <Label htmlFor="edital-badge">Badge (opcional)</Label>
              <Input
                id="edital-badge"
                placeholder="Ex: PF"
                value={novaDisciplina.edital}
                onChange={(e) =>
                  setNovaDisciplina({
                    ...novaDisciplina,
                    edital: e.target.value,
                  })
                }
                maxLength={5}
              />
            </div>

            <div className="md:col-span-1">
              <Label>Cor</Label>
              <ColorPicker
                value={novaDisciplina.cor}
                onChange={(cor) =>
                  setNovaDisciplina({ ...novaDisciplina, cor })
                }
              />
            </div>
          </div>

          <Button onClick={adicionarDisciplina} className="w-full">
            <Plus className="w-4 h-4 mr-2" />
            Adicionar Disciplina
          </Button>
        </div>
      </Card>

      {/* Lista de Disciplinas Adicionadas */}
      {disciplinas.length > 0 && (
        <div className="space-y-3">
          <Label className="text-base">
            Disciplinas Adicionadas ({disciplinas.length})
          </Label>
          <div className="space-y-2">
            {disciplinas.map((disciplina) => (
              <Card
                key={disciplina.tempId}
                className="p-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: disciplina.cor }}
                  >
                    {disciplina.edital && (
                      <span className="text-white font-bold text-xs">
                        {disciplina.edital}
                      </span>
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{disciplina.nome}</p>
                    <p className="text-sm text-muted-foreground">
                      {disciplina.topicos.length} tópico(s)
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removerDisciplina(disciplina.tempId!)}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      )}

      {disciplinas.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          <p>Nenhuma disciplina adicionada ainda</p>
          <p className="text-sm">
            Adicione pelo menos uma disciplina para continuar
          </p>
        </div>
      )}

      <div className="flex gap-3 pt-4">
        <Button type="button" variant="outline" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Button>
        <Button
          type="button"
          className="flex-1"
          onClick={handleNext}
          disabled={disciplinas.length === 0}
        >
          Próximo: Adicionar Tópicos
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  )
}
