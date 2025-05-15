'use client'

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import type { DisciplinaDoDia } from '@/app/actions/historico.actions'
import { StudyMaterialItem } from './StudyMaterialItem'

interface SubjectItemProps {
  dia: string
  disciplina: DisciplinaDoDia
  index: number
}

export function SubjectItem({ dia, disciplina, index }: SubjectItemProps) {
  return (
    <AccordionItem
      value={`${dia}-${disciplina.disciplina}-${index}`}
      className="border rounded-lg px-4"
    >
      <AccordionTrigger className="hover:no-underline">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">{disciplina.disciplina}</Badge>
          <span className="text-sm text-gray-500">
            {disciplina.materias.length} matéria(s)
          </span>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <div className="space-y-4 pt-4">
          {disciplina.materias.map((materia) => (
            <StudyMaterialItem key={materia.id} materia={materia} />
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}
