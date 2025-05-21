import { db } from '@/lib/db'
import { StatusConteudo } from '@/app/generated/prisma'
import { getBrazilianDate, getStartOfDay, getEndOfDay } from '@/lib/date'

export async function updateActivityStatus(
  id: string,
  status: StatusConteudo,
  userId: string,
): Promise<void> {
  try {
    // Verify the activity belongs to user first
    const activity = await db.diaDisciplinaMateria.findFirst({
      where: {
        id: id,
        userId: userId,
      },
      include: {
        materia: true,
      },
    })

    if (!activity) {
      throw new Error('Activity not found or unauthorized')
    }

    // Update the activity status
    await db.diaDisciplinaMateria.update({
      where: {
        id: id,
      },
      data: {
        status,
      },
    })

    if (status === 'concluido') {
      // Create historical record
      await db.historicoEstudo.create({
        data: {
          userId: userId,
          tituloDaMateria: activity.materia.titulo,
          disciplina: activity.materia.disciplina,
          dataEstudo: getBrazilianDate(),
          tempoEstudado: activity.tempoEstudado ?? 0,
          progresso: activity.progresso ?? 0,
          anotacoes: activity.anotacoes ?? '',
          planoId: activity.planoId,
        },
      })
    }
  } catch (error) {
    console.error('Error updating activity status:', error)
    throw new Error('Failed to update activity status')
  }
}

export async function updateObjectiveStatus(
  id: string,
  completo: boolean,
  userId: string,
): Promise<void> {
  try {
    // Verify the objective belongs to user first
    const registro = await db.diaDisciplinaMateria.findFirst({
      where: {
        id: id,
        userId: userId,
      },
      include: {
        materia: true,
      },
    })

    if (!registro) {
      throw new Error('Objective not found or unauthorized')
    }

    // Update the objective status
    await db.diaDisciplinaMateria.update({
      where: {
        id: id,
      },
      data: {
        status: completo ? 'concluido' : 'pendente',
      },
    })

    const hoje = getStartOfDay(getBrazilianDate())
    const amanha = getEndOfDay(getBrazilianDate())

    // If marking as complete
    if (completo) {
      // Create historical record
      await db.historicoEstudo.create({
        data: {
          userId: userId,
          tituloDaMateria: registro.materia.titulo,
          disciplina: registro.materia.disciplina,
          dataEstudo: getBrazilianDate(),
          tempoEstudado: registro.tempoEstudado ?? 0,
          progresso: registro.progresso ?? 0,
          anotacoes: registro.anotacoes ?? '',
          planoId: registro.planoId,
        },
      })
    } else {
      // If unmarking as complete, remove from history
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
    console.error('Error updating objective status:', error)
    throw new Error('Failed to update objective status')
  }
}
