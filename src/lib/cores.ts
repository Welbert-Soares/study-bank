import { DisciplinaNome } from '@/app/generated/prisma'

export function getCorDisciplina(disciplina: DisciplinaNome): string {
  const cores: Record<DisciplinaNome, string> = {
    TI: 'bg-blue-500',
    Ingles: 'bg-green-500',
    Portugues: 'bg-yellow-500',
    Estatistica: 'bg-purple-500',
    Atualidades: 'bg-pink-500',
    Bancarios: 'bg-orange-500',
    Matematica: 'bg-red-500',
    Simulado: 'bg-indigo-500',
    Revisoes: 'bg-gray-500',
    Redacao: 'bg-teal-500',
  }
  return cores[disciplina] || 'bg-gray-500'
}
