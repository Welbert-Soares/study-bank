import { db } from '@/lib/db'
import { StatusConteudo } from '@prisma/client'
import { getBrazilianDate, getStartOfDay, getEndOfDay } from '@/lib/date'

export async function updateActivityStatus(
  id: string,
  status: StatusConteudo,
): Promise<void> {
  const registro = await db.diaDisciplinaMateria.findUnique({
    where: { id },
    include: { materia: true },
  })

  if (!registro) {
    throw new Error('Activity not found')
  }

  // Update status
  await db.diaDisciplinaMateria.update({
    where: { id },
    data: { status },
  })

  // Get today's range in Brazilian timezone
  const hoje = getStartOfDay(new Date())
  const amanha = getEndOfDay(new Date())

  // If marking as completed
  if (status === 'concluido') {
    // Create history entry
    await db.historicoEstudo.create({
      data: {
        tituloDaMateria: registro.materia.titulo,
        disciplina: registro.materia.disciplina,
        dataEstudo: getBrazilianDate(),
        tempoEstudado: registro.tempoEstudado ?? 0,
        anotacoes: registro.anotacoes,
        progresso: registro.progresso,
        planoId: registro.planoId,
      },
    })
  }
  // If unmarking from completed
  else if (registro.status === 'concluido') {
    // Remove from history
    await db.historicoEstudo.deleteMany({
      where: {
        tituloDaMateria: registro.materia.titulo,
        disciplina: registro.materia.disciplina,
        dataEstudo: {
          gte: hoje,
          lte: amanha,
        },
      },
    })
  }
}

export async function updateObjectiveStatus(
  id: string,
  completo: boolean,
): Promise<void> {
  try {
    // Buscar o registro para ter acesso aos dados da matéria
    const registro = await db.diaDisciplinaMateria.findUnique({
      where: { id },
      include: { materia: true },
    })

    if (!registro) {
      throw new Error('Objetivo não encontrado')
    }

    // Atualizar o status
    await db.diaDisciplinaMateria.update({
      where: { id },
      data: { status: completo ? 'concluido' : 'pendente' },
    })

    // Get today's range in Brazilian timezone
    const hoje = getStartOfDay(new Date())
    const amanha = getEndOfDay(new Date())

    // Se está marcando como completo
    if (completo) {
      // Criar entrada no histórico
      await db.historicoEstudo.create({
        data: {
          tituloDaMateria: registro.materia.titulo,
          disciplina: registro.materia.disciplina,
          dataEstudo: getBrazilianDate(),
          tempoEstudado: registro.tempoEstudado ?? 0,
          anotacoes: registro.anotacoes,
          progresso: registro.progresso,
          planoId: registro.planoId,
        },
      })
    }
    // Se está desmarcando como completo
    else {
      // Remover do histórico
      await db.historicoEstudo.deleteMany({
        where: {
          tituloDaMateria: registro.materia.titulo,
          disciplina: registro.materia.disciplina,
          dataEstudo: {
            gte: hoje,
            lte: amanha,
          },
        },
      })
    }
  } catch (error) {
    console.error('Erro ao atualizar status do objetivo:', error)
    throw new Error('Falha ao atualizar objetivo: ' + (error as Error).message)
  }
}
