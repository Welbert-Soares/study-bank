import { db } from '@/lib/db'
import { StatusConteudo } from '@/app/generated/prisma'
import { getBrazilianDate, getStartOfDay, getEndOfDay } from '@/lib/date'

export async function updateActivityStatus(
  id: string,
  status: StatusConteudo,
  userId: string,
): Promise<void> {
  const registro = await db.diaDisciplinaMateria.findFirst({
    where: {
      id,
      userId: userId,
    },
    include: { materia: true },
  })

  if (!registro) {
    throw new Error(
      'Activity not found or you dont have permission to update it',
    )
  }

  // Update status
  await db.diaDisciplinaMateria.update({
    where: {
      id,
      userId: userId,
    },
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
        userId: userId,
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
        userId: userId,
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
  userId: string,
): Promise<void> {
  try {
    // Get the record to access subject data
    const registro = await db.diaDisciplinaMateria.findFirst({
      where: {
        id,
        userId: userId,
      },
      include: { materia: true },
    })

    if (!registro) {
      throw new Error(
        'Objetivo não encontrado ou você não tem permissão para atualizá-lo',
      )
    }

    // Update status
    await db.diaDisciplinaMateria.update({
      where: {
        id,
        userId: userId,
      },
      data: { status: completo ? 'concluido' : 'pendente' },
    })

    // Get today's range in Brazilian timezone
    const hoje = getStartOfDay(new Date())
    const amanha = getEndOfDay(new Date())

    // If marking as complete
    if (completo) {
      // Create history entry
      await db.historicoEstudo.create({
        data: {
          userId: userId,
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
    // If unmarking from complete
    else {
      // Remove from history
      await db.historicoEstudo.deleteMany({
        where: {
          userId: userId,
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
