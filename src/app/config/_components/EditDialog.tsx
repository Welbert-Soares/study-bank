'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { DisciplinaNome, DiaDaSemana, StatusConteudo } from '@/generated/prisma'
import { MateriaFromDB, AgendamentoFromDB } from '@/types/config'

interface EditDialogProps {
  isOpen: boolean
  onClose: () => void
  editingItem: MateriaFromDB | AgendamentoFromDB | null
  onUpdateItem: () => Promise<void>
  onDeleteItem: () => Promise<void>
  updateEditingItem: (
    updates: Partial<MateriaFromDB | AgendamentoFromDB>,
  ) => void
  materias: MateriaFromDB[]
}

export function EditDialog({
  isOpen,
  onClose,
  editingItem,
  onUpdateItem,
  onDeleteItem,
  updateEditingItem,
  materias,
}: EditDialogProps) {
  const isAgendamento = (
    item: MateriaFromDB | AgendamentoFromDB,
  ): item is AgendamentoFromDB => {
    return 'materiaId' in item
  }

  if (!editingItem) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {isAgendamento(editingItem)
              ? 'Editar Agendamento'
              : 'Editar Matéria'}
          </DialogTitle>
        </DialogHeader>
        {isAgendamento(editingItem) ? (
          <div className="space-y-4">
            <Select
              value={editingItem.materiaId}
              onValueChange={(value) => updateEditingItem({ materiaId: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione a matéria" />
              </SelectTrigger>
              <SelectContent>
                {materias.map((materia) => (
                  <SelectItem key={materia.id} value={materia.id}>
                    {materia.titulo}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={editingItem.dia}
              onValueChange={(value) =>
                updateEditingItem({ dia: value as DiaDaSemana })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Dia da semana" />
              </SelectTrigger>
              <SelectContent>
                {Object.values(DiaDaSemana).map((dia) => (
                  <SelectItem key={dia} value={dia}>
                    {dia}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={editingItem.status}
              onValueChange={(value) =>
                updateEditingItem({ status: value as StatusConteudo })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                {Object.values(StatusConteudo).map((status) => (
                  <SelectItem key={status} value={status}>
                    {status}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="space-y-2">
              <label className="text-sm font-medium">Criar Revisão</label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="criarRevisao"
                    checked={editingItem.criarRevisao === true}
                    onChange={() => updateEditingItem({ criarRevisao: true })}
                    className="h-4 w-4"
                  />
                  <span>Sim</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="criarRevisao"
                    checked={editingItem.criarRevisao === false}
                    onChange={() => updateEditingItem({ criarRevisao: false })}
                    className="h-4 w-4"
                  />
                  <span>Não</span>
                </label>
              </div>
            </div>

            <Textarea
              placeholder="Anotações (opcional)"
              value={editingItem.anotacoes ?? ''}
              onChange={(e) => updateEditingItem({ anotacoes: e.target.value })}
            />
          </div>
        ) : (
          <div className="space-y-4">
            <Input
              placeholder="Título"
              value={editingItem.titulo}
              onChange={(e) => updateEditingItem({ titulo: e.target.value })}
            />

            <Select
              value={editingItem.disciplina}
              onValueChange={(value) =>
                updateEditingItem({ disciplina: value as DisciplinaNome })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Disciplina" />
              </SelectTrigger>
              <SelectContent>
                {Object.values(DisciplinaNome).map((disciplina) => (
                  <SelectItem key={disciplina} value={disciplina}>
                    {disciplina}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Input
              type="number"
              placeholder="Ordem"
              value={editingItem.ordem}
              onChange={(e) =>
                updateEditingItem({ ordem: parseInt(e.target.value) || 0 })
              }
            />
          </div>
        )}

        <DialogFooter className="space-x-2">
          <Button variant="outline" onClick={onDeleteItem}>
            Excluir
          </Button>
          <Button variant="secondary" onClick={onClose}>
            Cancelar
          </Button>
          <Button onClick={onUpdateItem}>Salvar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
