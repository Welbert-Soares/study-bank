'use server'

import prisma from '@/lib/db'
import { AtividadeStatus } from '../../../prisma/generated/client'

interface HorarioEstudo {
  inicio: string
  fim: string
  disciplina: {
    id: string
    nome: string
  }
}

export async function getDashboardByDate(date: Date) {
  const dashboard = await prisma.dailyDashboard.findUnique({
    where: {
      date: date,
    },
    include: {
      objetivos: true,
      cronograma: {
        include: {
          disciplina: true,
        },
      },
      metricas: {
        include: {
          historico: true,
        },
      },
    },
  })

  return dashboard
}

export async function getHorariosHoje() {
  const hoje = new Date()
  const diaSemana = hoje.getDay() // 0-6 (Domingo-Sábado)

  const horarios = await prisma.horarioEstudo.findMany({
    where: {
      diaSemana,
      ativo: true,
    },
    include: {
      disciplina: true,
    },
    orderBy: {
      inicio: 'asc',
    },
  })

  return horarios
}

export async function createDashboard(data: {
  date: Date
  objetivos: { descricao: string }[]
  cronograma?: { horario: string; atividade: string }[]
  metricas: { nome: string; progresso: number; cor: string }[]
  proximosConteudos: string[]
}) {
  // Busca os horários configurados para hoje
  const horarios = await getHorariosHoje()

  const cronograma =
    data.cronograma ||
    horarios.map((h: HorarioEstudo) => ({
      horario: `${h.inicio} - ${h.fim}`,
      atividade: h.disciplina.nome,
      disciplinaId: h.disciplina.id,
    }))

  const dashboard = await prisma.dailyDashboard.create({
    data: {
      date: data.date,
      objetivos: {
        create: data.objetivos,
      },
      cronograma: {
        create: cronograma.map((item) => ({
          horario: item.horario,
          atividade: item.atividade,
          status: AtividadeStatus.pending,
          disciplinaId: 'disciplinaId' in item ? item.disciplinaId : undefined,
        })),
      },
      metricas: {
        create: data.metricas,
      },
      proximosConteudos: data.proximosConteudos,
    },
    include: {
      objetivos: true,
      cronograma: {
        include: {
          disciplina: true,
        },
      },
      metricas: {
        include: {
          historico: true,
        },
      },
    },
  })

  return dashboard
}

export async function updateAtividadeStatus(
  atividadeId: string,
  status: AtividadeStatus,
) {
  const atividade = await prisma.atividade.update({
    where: {
      id: atividadeId,
    },
    data: {
      status,
    },
  })
  return atividade
}

export async function updateObjetivo(objetivoId: string, completo: boolean) {
  const objetivo = await prisma.objetivo.update({
    where: {
      id: objetivoId,
    },
    data: {
      completo,
    },
  })
  return objetivo
}

export async function updateMetricaDisciplina(
  disciplinaId: string,
  progresso: number,
  observacoes?: string,
) {
  const metrica = await prisma.metricaDisciplina.update({
    where: {
      id: disciplinaId,
    },
    data: {
      progresso,
      historico: {
        create: {
          data: new Date(),
          progresso,
          observacoes,
        },
      },
    },
    include: {
      historico: true,
    },
  })
  return metrica
}

export async function addProximoConteudo(
  dashboardId: string,
  conteudo: string,
) {
  const dashboard = await prisma.dailyDashboard.update({
    where: {
      id: dashboardId,
    },
    data: {
      proximosConteudos: {
        push: conteudo,
      },
    },
  })
  return dashboard
}

export async function getDashboardStats() {
  const stats = await prisma.metricaDisciplina.findMany({
    include: {
      historico: {
        orderBy: {
          data: 'desc',
        },
        take: 10,
      },
    },
  })

  return stats
}
