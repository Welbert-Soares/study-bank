'use server'

import prisma from '@/lib/db'

export async function getDisciplinas() {
  const disciplinas = await prisma.disciplina.findMany({
    include: {
      conteudos: {
        orderBy: {
          ordem: 'asc',
        },
      },
      metricas: {
        include: {
          historico: true,
        },
      },
    },
  })
  return disciplinas
}

export async function createDisciplina(data: { nome: string; cor?: string }) {
  const disciplina = await prisma.disciplina.create({
    data: {
      nome: data.nome,
      cor: data.cor || 'bg-blue-500',
    },
  })
  return disciplina
}

export async function updateDisciplina(
  id: string,
  data: {
    nome?: string
    cor?: string
  },
) {
  const disciplina = await prisma.disciplina.update({
    where: { id },
    data,
  })
  return disciplina
}

export async function createConteudo(data: {
  titulo: string
  descricao?: string
  ordem: number
  disciplinaId: string
}) {
  const conteudo = await prisma.conteudo.create({
    data,
  })
  return conteudo
}

export async function updateConteudo(
  id: string,
  data: {
    titulo?: string
    descricao?: string
    ordem?: number
    completo?: boolean
  },
) {
  const conteudo = await prisma.conteudo.update({
    where: { id },
    data,
  })
  return conteudo
}

export async function createHorarioEstudo(data: {
  diaSemana: number
  inicio: string
  fim: string
  disciplinaId: string
}) {
  const horario = await prisma.horarioEstudo.create({
    data: {
      ...data,
      ativo: true,
    },
  })
  return horario
}

export async function updateHorarioEstudo(
  id: string,
  data: {
    diaSemana?: number
    inicio?: string
    fim?: string
    ativo?: boolean
  },
) {
  const horario = await prisma.horarioEstudo.update({
    where: { id },
    data,
  })
  return horario
}

export async function getHorarios() {
  const horarios = await prisma.horarioEstudo.findMany({
    include: {
      disciplina: true,
    },
    orderBy: [{ diaSemana: 'asc' }, { inicio: 'asc' }],
  })
  return horarios
}
