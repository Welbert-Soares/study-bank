import { getCorDisciplina } from '@/lib/cores'
import { db } from '@/lib/db'
import type {
  DisciplinaNome,
  StatusConteudo,
} from '@/generated/prisma/index.js'
import type { DashboardMetrica } from './types'
import { getBrazilianDate, getStartOfDay, getEndOfDay } from '@/lib/date'

type MateriaComAgendamento = {
  materia: { disciplina: DisciplinaNome; titulo: string }
  status: StatusConteudo
}

export async function calculateDailyMetrics(
  materias: MateriaComAgendamento[],
): Promise<DashboardMetrica[]> {
  const disciplinasMap = new Map<DisciplinaNome, MateriaComAgendamento[]>()

  // Group subjects by discipline, mapping revisions to their original disciplines
  for (const item of materias) {
    let disciplina = item.materia.disciplina

    // If it's a revision, extract the original discipline from the title
    if (disciplina === 'Revisoes') {
      const tituloOriginal = item.materia.titulo.replace('Revisão: ', '')
      const materiaOriginal = materias.find(
        (m) =>
          m.materia.disciplina !== 'Revisoes' &&
          tituloOriginal.includes(m.materia.titulo),
      )
      if (materiaOriginal) {
        disciplina = materiaOriginal.materia.disciplina
      }
    }

    if (!disciplinasMap.has(disciplina)) {
      disciplinasMap.set(disciplina, [])
    }
    disciplinasMap.get(disciplina)!.push(item)
  }

  const metricas: DashboardMetrica[] = []

  // Calculate progress for each discipline
  for (const [disciplina, items] of disciplinasMap.entries()) {
    const total = items.length
    const completed = items.filter((item) => item.status === 'concluido').length
    const inProgress = items.filter(
      (item) => item.status === 'em_progresso',
    ).length

    // Calculate progress considering in-progress items as 50% complete
    const progresso =
      total > 0 ? Math.round(((completed + inProgress * 0.5) / total) * 100) : 0

    metricas.push({
      id: String(disciplina),
      disciplina,
      progresso,
      cor: getCorDisciplina(disciplina),
    })
  }

  return metricas
}

export async function updateDisciplineProgress(
  disciplina: DisciplinaNome,
  progresso: number,
): Promise<void> {
  try {
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

      // Buscar o último agendamento para verificar o status atual
      const ultimoAgendamento = await db.diaDisciplinaMateria.findFirst({
        where: { materiaId: materia.id },
        orderBy: { atualizadoEm: 'desc' },
      })

      // Atualizar todos os agendamentos desta matéria
      await db.diaDisciplinaMateria.updateMany({
        where: { materiaId: materia.id },
        data: { status: novoStatus },
      })

      // Se a matéria foi concluída e não estava antes
      if (
        novoStatus === 'concluido' &&
        ultimoAgendamento?.status !== 'concluido'
      ) {
        await db.historicoEstudo.create({
          data: {
            tituloDaMateria: materia.titulo,
            disciplina: materia.disciplina,
            dataEstudo: getBrazilianDate(),
            tempoEstudado: ultimoAgendamento?.tempoEstudado ?? 0,
            anotacoes: ultimoAgendamento?.anotacoes,
            progresso: progresso,
            planoId: ultimoAgendamento?.planoId,
          },
        })
      }
      // Se a matéria foi desmarcada como concluída
      else if (
        novoStatus !== 'concluido' &&
        ultimoAgendamento?.status === 'concluido'
      ) {
        const dataBrasil = getBrazilianDate()
        const dataInicio = getStartOfDay(dataBrasil)
        const dataFim = getEndOfDay(dataBrasil)

        await db.historicoEstudo.deleteMany({
          where: {
            tituloDaMateria: materia.titulo,
            disciplina: materia.disciplina,
            dataEstudo: {
              gte: dataInicio,
              lte: dataFim,
            },
          },
        })
      }
    }
  } catch (error) {
    console.error('Erro ao atualizar progresso da disciplina:', error)
    throw error
  }
}
