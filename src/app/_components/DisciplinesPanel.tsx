import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { listarDisciplinasAction } from '@/app/actions/planos.actions'
import { Check, X, Edit, Percent } from 'lucide-react'

interface DisciplinesPanelProps {
  planoId: string
}

export async function DisciplinesPanel({ planoId }: DisciplinesPanelProps) {
  const disciplinas = await listarDisciplinasAction(planoId)

  // TODO: Buscar estatísticas reais de cada disciplina
  const disciplinasComStats = disciplinas.map((d) => ({
    ...d,
    tempo: '6h00min',
    acertos: 32,
    erros: 9,
    questoes: 41,
    percentual: 78,
  }))

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium text-gray-600 uppercase">
          Painel
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-y border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Disciplinas
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Tempo
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-600 uppercase tracking-wider">
                  <Check className="h-4 w-4 inline" />
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-600 uppercase tracking-wider">
                  <X className="h-4 w-4 inline" />
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-600 uppercase tracking-wider">
                  <Edit className="h-4 w-4 inline" />
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-600 uppercase tracking-wider">
                  <Percent className="h-4 w-4 inline" />
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {disciplinasComStats.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-4 text-center text-gray-500"
                  >
                    Nenhuma disciplina cadastrada
                  </td>
                </tr>
              ) : (
                disciplinasComStats.map((disciplina) => (
                  <tr key={disciplina.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <div
                          className="h-3 w-3 rounded-full"
                          style={{
                            backgroundColor: disciplina.cor || '#3DD9B3',
                          }}
                        />
                        <span className="text-sm font-medium text-teal-600">
                          {disciplina.nome}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-900">
                      {disciplina.tempo}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-900">
                      {disciplina.acertos}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-900">
                      {disciplina.erros}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-900">
                      {disciplina.questoes}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {disciplina.percentual}%
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
