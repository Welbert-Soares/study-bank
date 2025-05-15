'use client'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import type { RegistroDiario } from '@/app/actions/historico.actions'
import { Accordion } from '@/components/ui/accordion'
import Link from 'next/link'
import { SubjectItem } from './SubjectItem'
import { formatarDiaSemana, formatarData } from '../utils/formatters'

interface StudyDayCardProps {
  dia: RegistroDiario
}

export function StudyDayCard({ dia }: StudyDayCardProps) {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="border-b bg-gray-50">
        <CardTitle className="text-lg capitalize">
          {formatarDiaSemana(dia.data)} - {formatarData(dia.data)}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="space-y-4">
          {dia.disciplinas.map((disciplina, index) => (
            <SubjectItem
              key={`${dia.data}-${disciplina.disciplina}-${index}`}
              dia={dia.data}
              disciplina={disciplina}
              index={index}
            />
          ))}
        </Accordion>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Link
          href={`/historico/${dia.data}`}
          className="text-sm text-cyan-600 hover:underline"
        >
          Ver detalhes
        </Link>
      </CardFooter>
    </Card>
  )
}
