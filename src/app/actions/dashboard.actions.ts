'use server'

import { db } from '@/lib/db'
import { DiaDaSemana, DisciplinaNome, StatusConteudo } from '@/generated/prisma'

export interface DashboardCronograma {
  id: string
  titulo: string
  disciplina: DisciplinaNome
  status: StatusConteudo
}

export interface DashboardMetrica {
  id: string
  disciplina: DisciplinaNome
  progresso: number
  cor: string
}

export interface DashboardObjetivo {
  id: string
  descricao: string
  completo: boolean
  prioridade: number
}

export interface DashboardData {
  cronograma: DashboardCronograma[]
  metricas: DashboardMetrica[]
  objetivos: DashboardObjetivo[]
  proximosConteudos: string[]
}

function getDiaSemana(date: Date): DiaDaSemana {
  const dias: DiaDaSemana[] = [
    'Domingo',
    'Segunda',
    'Terca',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sabado',
  ]
  return dias[date.getDay()]
}

function getProximosDias(
  atual: DiaDaSemana,
  quantidade: number,
): DiaDaSemana[] {
  const dias = [
    'Domingo',
    'Segunda',
    'Terca',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sabado',
  ]
  const indexAtual = dias.indexOf(atual)
  const proximos: DiaDaSemana[] = []

  for (let i = 1; i <= quantidade; i++) {
    const index = (indexAtual + i) % 7
    proximos.push(dias[index] as DiaDaSemana)
  }

  return proximos
}

function getCorDisciplina(disciplina: DisciplinaNome): string {
  const cores = {
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

export async function getDashboardData(date: Date): Promise<DashboardData> {
  const diaSemana = getDiaSemana(date)

  // Buscar materias do dia
  const materiasHoje = await db.diaDisciplinaMateria.findMany({
    where: {
      dia: diaSemana,
    },
    include: {
      materia: true,
    },
    orderBy: {
      materia: {
        ordem: 'asc',
      },
    },
  })

  // Montar cronograma
  const cronograma: DashboardCronograma[] = materiasHoje.map((item) => ({
    id: item.id,
    horario: '08:00',
    titulo: item.materia.titulo,
    disciplina: item.materia.disciplina,
    status: item.status,
  }))

  // Calcular métricas
  const metricas = await calcularMetricas()

  // Montar objetivos
  const objetivos: DashboardObjetivo[] = materiasHoje.map((item) => ({
    id: item.id,
    descricao: `Estudar ${item.materia.titulo}`,
    completo: item.status === 'concluido',
    prioridade: item.materia.ordem,
  }))

  // Buscar próximos conteúdos
  const proximosConteudos = await buscarProximosConteudos(diaSemana)

  return {
    cronograma,
    metricas,
    objetivos,
    proximosConteudos,
  }
}

async function calcularMetricas(): Promise<DashboardMetrica[]> {
  const disciplinas = Object.values(DisciplinaNome)
  const metricas: DashboardMetrica[] = []

  for (const disciplina of disciplinas) {
    const materias = await db.materia.findMany({
      where: { disciplina },
      include: { agendamentos: true },
    })

    const totalMaterias = materias.length
    let materiasCompletas = 0

    materias.forEach((materia) => {
      const concluidos = materia.agendamentos.filter(
        (a) => a.status === 'concluido',
      ).length
      materiasCompletas += concluidos / materia.agendamentos.length
    })

    const progresso =
      totalMaterias > 0
        ? Math.round((materiasCompletas / totalMaterias) * 100)
        : 0

    metricas.push({
      id: disciplina,
      disciplina,
      progresso,
      cor: getCorDisciplina(disciplina),
    })
  }

  return metricas
}

async function buscarProximosConteudos(
  diaSemana: DiaDaSemana,
): Promise<string[]> {
  const proximosDias = getProximosDias(diaSemana, 3)

  const materias = await db.diaDisciplinaMateria.findMany({
    where: {
      dia: {
        in: proximosDias,
      },
      status: 'pendente',
    },
    include: {
      materia: true,
    },
    take: 5,
  })

  return materias.map((m) => `${m.materia.titulo} (${m.dia})`)
}

export async function atualizarStatusAtividade(
  id: string,
  status: StatusConteudo,
) {
  await db.diaDisciplinaMateria.update({
    where: { id },
    data: { status },
  })
}

export async function atualizarStatusObjetivo(id: string, completo: boolean) {
  await db.diaDisciplinaMateria.update({
    where: { id },
    data: { status: completo ? 'concluido' : 'pendente' },
  })
}

export async function atualizarProgressoDisciplina(
  disciplina: DisciplinaNome,
  progresso: number,
) {
  const materias = await db.materia.findMany({
    where: { disciplina },
    include: { agendamentos: true },
  })

  // Atualiza o status das matérias baseado no progresso geral
  for (const materia of materias) {
    const novoStatus: StatusConteudo =
      progresso >= 100
        ? 'concluido'
        : progresso > 0
        ? 'em_progresso'
        : 'pendente'

    await db.diaDisciplinaMateria.updateMany({
      where: { materiaId: materia.id },
      data: { status: novoStatus },
    })
  }
}
