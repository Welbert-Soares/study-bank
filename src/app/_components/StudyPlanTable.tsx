import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

interface StudyPlanDay {
  day: string
  discipline1: string | null
  discipline2: string | null
  writing: boolean
  revisoes: number
  revisoesTitulos?: string[]
  progress: number
}

interface StudyPlanTableProps {
  studyPlan: StudyPlanDay[]
}

export function StudyPlanTable({ studyPlan }: StudyPlanTableProps) {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle>📚 Plano de Estudos</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg overflow-hidden border bg-white">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50 hover:bg-gray-50">
                <TableHead className="py-3">Dia</TableHead>
                <TableHead className="py-3">Disciplina 1</TableHead>
                <TableHead className="py-3">Disciplina 2</TableHead>
                <TableHead className="py-3">Redação</TableHead>
                <TableHead className="py-3">Revisões</TableHead>
                <TableHead className="py-3">Progresso</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {studyPlan.map((day) => (
                <TableRow key={day.day} className="hover:bg-gray-50">
                  <TableCell className="font-medium py-3">{day.day}</TableCell>
                  <TableCell className="py-3">
                    {day.discipline1 ? (
                      <span className="px-2 py-1  text-cyan-600 font-semibold">
                        {day.discipline1}
                      </span>
                    ) : (
                      '-'
                    )}
                  </TableCell>
                  <TableCell className="py-3">
                    {day.discipline2 ? (
                      <span className="px-2 py-1   text-amber-600 font-semibold">
                        {day.discipline2}
                      </span>
                    ) : (
                      '-'
                    )}
                  </TableCell>
                  <TableCell className="py-3">
                    {day.writing ? (
                      <span className="text-green-600 font-bold">✓</span>
                    ) : (
                      '-'
                    )}
                  </TableCell>
                  <TableCell className="py-3">
                    {day.revisoes > 0 ? (
                      <div className="flex flex-col gap-1">
                        {day.revisoesTitulos?.map((titulo, index) => (
                          <span key={index} className="text-sm text-gray-600">
                            • {titulo.replace('Revisão: ', '')}
                          </span>
                        ))}
                      </div>
                    ) : (
                      '-'
                    )}
                  </TableCell>
                  <TableCell className="py-3">
                    <Progress value={day.progress} className="w-[60px]" />
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
