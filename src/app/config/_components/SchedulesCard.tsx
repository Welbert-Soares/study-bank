'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
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
  const [novoAgendamento, setNovoAgendamento] = useState<AgendamentoFormData>({
    dia: DiaDaSemana.Segunda,
    materiaId: '',
    status: StatusConteudo.pendente,
    tempoEstudado: undefined,
    anotacoes: undefined,
    criarRevisao: false,
  })

  const handleAddAgendamento = async () => {
    await onAddAgendamento(novoAgendamento)
    setNovoAgendamento({
      dia: DiaDaSemana.Segunda,
      materiaId: '',
      status: StatusConteudo.pendente,
      tempoEstudado: undefined,
      anotacoes: undefined,
      criarRevisao: false,
    })
  }

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>⏰ Agendamentos</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Select
              value={novoAgendamento.materiaId}
              onValueChange={(value) =>
                setNovoAgendamento({
                  ...novoAgendamento,
                  materiaId: value,
                })
              }
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
              value={novoAgendamento.dia}
              onValueChange={(value) =>
                setNovoAgendamento({
                  ...novoAgendamento,
                  dia: value as DiaDaSemana,
                })
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

            <div className="col-span-2">
              <div className="space-y-2">
                <label className="text-sm font-medium">Criar Revisão</label>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="criarRevisao"
                      checked={novoAgendamento.criarRevisao === true}
                      onChange={() =>
                        setNovoAgendamento({
                          ...novoAgendamento,
                          criarRevisao: true,
                        })
                      }
                      className="h-4 w-4"
                    />
                    <span>Sim</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="criarRevisao"
                      checked={novoAgendamento.criarRevisao === false}
                      onChange={() =>
                        setNovoAgendamento({
                          ...novoAgendamento,
                          criarRevisao: false,
                        })
                      }
                      className="h-4 w-4"
                    />
                    <span>Não</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="col-span-2">
              <Textarea
                placeholder="Anotações (opcional)"
                value={novoAgendamento.anotacoes ?? ''}
                onChange={(e) =>
                  setNovoAgendamento({
                    ...novoAgendamento,
                    anotacoes: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <Button onClick={handleAddAgendamento} className="w-full">
            Adicionar Agendamento
          </Button>

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
