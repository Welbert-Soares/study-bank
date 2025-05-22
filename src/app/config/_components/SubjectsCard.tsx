'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
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
import { DisciplinaNome } from '@prisma/client'
import { MateriaFromDB, MateriaFormData } from '@/types/config'
import { materiaSchema } from '@/lib/validations/schemas'
import { toast } from 'sonner'

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
  const form = useForm<MateriaFormData>({
    resolver: zodResolver(materiaSchema),
    defaultValues: {
      titulo: '',
      descricao: '',
      disciplina: DisciplinaNome.Matematica,
      ordem: 0,
    },
  })

  const handleAddMateria = async (data: MateriaFormData) => {
    try {
      await onAddMateria(data)
      form.reset()
      toast.success('Matéria adicionada com sucesso!')
    } catch (error) {
      toast.error('Erro ao adicionar matéria')
      console.error('Erro ao adicionar matéria:', error)
    }
  }

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>📚 Matérias</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleAddMateria)}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="titulo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Título</FormLabel>
                      <FormControl>
                        <Input placeholder="Título da matéria" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="disciplina"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Disciplina</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione a disciplina" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {Object.values(DisciplinaNome).map((disciplina) => (
                            <SelectItem key={disciplina} value={disciplina}>
                              {disciplina}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="self-end">
                  Adicionar
                </Button>
              </div>
            </form>
          </Form>

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
