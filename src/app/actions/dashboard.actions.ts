'use server'

import { db } from '@/lib/db'
import {
  DiaDaSemana,
  DisciplinaNome,
  StatusConteudo,
  Materia,
} from '@/generated/prisma'
import { getCorDisciplina } from '@/lib/cores'

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

interface DashboardRevisao {
  id: string
  titulo: string
  disciplina: DisciplinaNome
  status: StatusConteudo
}

export interface DashboardData {
  cronograma: DashboardCronograma[]
  metricas: DashboardMetrica[]
  objetivos: DashboardObjetivo[]
  proximosConteudos: string[]
  revisoes: DashboardRevisao[]
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

// Função auxiliar para obter o dia seguinte
function getDiaSeguinte(dia: DiaDaSemana): DiaDaSemana {
  const dias: DiaDaSemana[] = [
    'Domingo',
    'Segunda',
    'Terca',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sabado',
  ]
  const index = dias.indexOf(dia)
  const proximoIndex = (index + 1) % 7
  return dias[proximoIndex]
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

// Moved to src/lib/cores.ts

// Função para criar matéria de revisão
async function criarMateriaRevisao(materiaOriginal: Materia): Promise<Materia> {
  return await db.materia.create({
    data: {
      titulo: `Revisão: ${materiaOriginal.titulo}`,
      disciplina: 'Revisoes',
      ordem: materiaOriginal.ordem,
      status: 'pendente',
    },
  })
}

// Função para agendar revisão
async function agendarRevisao(
  materiaOriginal: Materia,
  diaOriginal: DiaDaSemana,
) {
  // Cria uma matéria específica para revisão
  const materiaRevisao = await criarMateriaRevisao(materiaOriginal)

  // Agenda para o dia seguinte
  const diaRevisao = getDiaSeguinte(diaOriginal)

  await db.diaDisciplinaMateria.create({
    data: {
      dia: diaRevisao,
      materiaId: materiaRevisao.id,
      status: 'pendente',
    },
  })
}

async function buscarMateriasRevisao(date: Date): Promise<DashboardRevisao[]> {
  const diaAtual = getDiaSemana(date)

  const materiasRevisao = await db.diaDisciplinaMateria.findMany({
    where: {
      dia: diaAtual,
      materia: {
        disciplina: 'Revisoes',
      },
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

  return materiasRevisao.map((item) => ({
    id: item.id,
    titulo: item.materia.titulo,
    disciplina: item.materia.disciplina,
    status: item.status,
  }))
}

export async function getDashboardData(date: Date): Promise<DashboardData> {
  const diaSemana = getDiaSemana(date)

  // Buscar materias do dia
  const materiasHoje = await db.diaDisciplinaMateria.findMany({
    where: {
      dia: diaSemana,
      materia: {
        disciplina: {
          not: 'Revisoes', // Não incluir revisões no cronograma principal
        },
      },
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
    titulo: item.materia.titulo,
    disciplina: item.materia.disciplina,
    status: item.status,
  }))

  // Calcular métricas apenas das matérias do dia
  const metricas = await calcularMetricasDoDia(materiasHoje)

  // Montar objetivos
  const objetivos: DashboardObjetivo[] = materiasHoje.map((item) => ({
    id: item.id,
    descricao: `Estudar ${item.materia.titulo}`,
    completo: item.status === 'concluido',
    prioridade: item.materia.ordem,
  }))

  // Buscar próximos conteúdos
  const proximosConteudos = await buscarProximosConteudos(diaSemana)

  // Buscar revisões do dia atual
  const revisoes = await buscarMateriasRevisao(date)

  return {
    cronograma,
    metricas,
    objetivos,
    proximosConteudos,
    revisoes,
  }
}

// Função movida para metricas/actions.ts

type MateriaComAgendamento = {
  materia: { disciplina: DisciplinaNome; titulo: string }
  status: StatusConteudo
}

async function calcularMetricasDoDia(
  materiasHoje: MateriaComAgendamento[],
): Promise<DashboardMetrica[]> {
  const disciplinas = new Set(
    materiasHoje.map((item) => item.materia.disciplina),
  )
  const metricas: DashboardMetrica[] = []

  for (const disciplina of disciplinas) {
    const materiasDaDisciplina = materiasHoje.filter(
      (item) => item.materia.disciplina === disciplina,
    )
    const total = materiasDaDisciplina.length
    const concluidos = materiasDaDisciplina.filter(
      (item) => item.status === 'concluido',
    ).length

    const progresso = total > 0 ? Math.round((concluidos / total) * 100) : 0

    metricas.push({
      id: String(disciplina),
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
      materia: {
        disciplina: {
          not: 'Revisoes', // Não incluir revisões nos próximos conteúdos
        },
      },
    },
    include: {
      materia: true,
    },
    take: 5,
  })

  return materias.map((m) => `${m.materia.titulo} (${m.dia})`)
}

export async function agendarMateria(
  materiaId: string,
  dia: DiaDaSemana,
  criarRevisao: boolean = false,
): Promise<void> {
  // Agenda a matéria original
  await db.diaDisciplinaMateria.create({
    data: {
      dia,
      materiaId,
      status: 'pendente',
    },
  })

  // Se solicitado, cria e agenda a revisão
  if (criarRevisao) {
    const materiaOriginal = await db.materia.findUnique({
      where: { id: materiaId },
    })

    if (materiaOriginal) {
      await agendarRevisao(materiaOriginal, dia)
    }
  }
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

export async function atualizarStatusRevisao(
  id: string,
  status: StatusConteudo,
): Promise<void> {
  await db.diaDisciplinaMateria.update({
    where: { id },
    data: { status },
  })
}
