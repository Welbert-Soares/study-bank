'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { DisciplinaNome } from '@/generated/prisma'
import { MateriaFromDB, MateriaFormData } from '@/types/config'

interface SubjectsCardProps {
  materias: MateriaFromDB[]
  onAddMateria: (materia: MateriaFormData) => Promise<void>
  onEditMateria: (materia: MateriaFromDB) => void
}

export function SubjectsCard({
  materias,
  onAddMateria,
  onEditMateria,
}: SubjectsCardProps) {
  const [novaMateria, setNovaMateria] = useState<MateriaFormData>({
    titulo: '',
    descricao: undefined,
    disciplina: DisciplinaNome.Matematica,
    ordem: 0,
  })

  const handleAddMateria = async () => {
    await onAddMateria(novaMateria)
    setNovaMateria({
      titulo: '',
      descricao: undefined,
      disciplina: DisciplinaNome.Matematica,
      ordem: 0,
    })
  }

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>📚 Matérias</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex gap-4">
            <Input
              placeholder="Título da matéria"
              value={novaMateria.titulo}
              onChange={(e) =>
                setNovaMateria({
                  ...novaMateria,
                  titulo: e.target.value,
                })
              }
            />
            <Select
              value={novaMateria.disciplina}
              onValueChange={(value) =>
                setNovaMateria({
                  ...novaMateria,
                  disciplina: value as DisciplinaNome,
                })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione a disciplina" />
              </SelectTrigger>
              <SelectContent>
                {Object.values(DisciplinaNome).map((disciplina) => (
                  <SelectItem key={disciplina} value={disciplina}>
                    {disciplina}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button onClick={handleAddMateria}>Adicionar</Button>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Título</TableHead>
                <TableHead>Disciplina</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-[100px]">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {materias.map((materia) => (
                <TableRow key={materia.id}>
                  <TableCell className="font-medium">
                    {materia.titulo}
                  </TableCell>
                  <TableCell>{materia.disciplina}</TableCell>
                  <TableCell>{materia.status}</TableCell>
                  <TableCell>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onEditMateria(materia)}
                    >
                      Editar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
