'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
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
import { DiaDaSemana, StatusConteudo } from '@prisma/client'
import {
  MateriaFromDB,
  AgendamentoFromDB,
  AgendamentoFormData,
} from '@/types/config'
import { agendamentoSchema } from '@/lib/validations/schemas'
import { toast } from 'sonner'

interface SchedulesCardProps {
  agendamentos: AgendamentoFromDB[]
  materias: MateriaFromDB[]
  onAddAgendamento: (agendamento: AgendamentoFormData) => Promise<void>
  onEditAgendamento: (agendamento: AgendamentoFromDB) => void
}

export function SchedulesCard({
  agendamentos,
  materias,
  onAddAgendamento,
  onEditAgendamento,
}: SchedulesCardProps) {
  const form = useForm<AgendamentoFormData>({
    resolver: zodResolver(agendamentoSchema),
    defaultValues: {
      materiaId: '',
      dia: DiaDaSemana.Segunda,
      status: StatusConteudo.pendente,
      tempoEstudado: undefined,
      anotacoes: '',
      criarRevisao: false,
    },
  })

  const handleAddAgendamento = async (data: AgendamentoFormData) => {
    try {
      await onAddAgendamento(data)
      form.reset()
      toast.success('Agendamento criado com sucesso!')
    } catch (error) {
      toast.error('Erro ao criar agendamento')
      console.error('Erro ao criar agendamento:', error)
    }
  }

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>⏰ Agendamentos</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleAddAgendamento)}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="materiaId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Matéria</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione a matéria" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {materias.map((materia) => (
                            <SelectItem key={materia.id} value={materia.id}>
                              {materia.titulo}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="dia"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Dia da Semana</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o dia" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {Object.values(DiaDaSemana).map((dia) => (
                            <SelectItem key={dia} value={dia}>
                              {dia}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="criarRevisao"
                  render={({ field }) => (
                    <FormItem className="space-y-0">
                      <FormLabel>Criar Revisão</FormLabel>
                      <div className="flex items-center space-x-4">
                        <label className="flex items-center space-x-2">
                          <FormControl>
                            <input
                              type="radio"
                              checked={field.value === true}
                              onChange={() => field.onChange(true)}
                              className="h-4 w-4"
                            />
                          </FormControl>
                          <span>Sim</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <FormControl>
                            <input
                              type="radio"
                              checked={field.value === false}
                              onChange={() => field.onChange(false)}
                              className="h-4 w-4"
                            />
                          </FormControl>
                          <span>Não</span>
                        </label>
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="anotacoes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Anotações</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Anotações (opcional)"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button type="submit" className="w-full">
                Adicionar Agendamento
              </Button>
            </form>
          </Form>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Dia</TableHead>
                <TableHead>Matéria</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-[100px]">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {agendamentos.map((agendamento) => (
                <TableRow key={agendamento.id}>
                  <TableCell>{agendamento.dia}</TableCell>
                  <TableCell>{agendamento.materia.titulo}</TableCell>
                  <TableCell>{agendamento.status}</TableCell>
                  <TableCell className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onEditAgendamento(agendamento)}
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
