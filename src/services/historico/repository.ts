import { db } from '@/lib/db'

export const historicoRepository = {
  async buscarTodosRegistros(userId: string) {
    return db.historicoEstudo.findMany({
      where: {
        userId: userId,
      },
      orderBy: {
        dataEstudo: 'desc',
      },
    })
  },

  async buscarRegistrosPorDia(data: Date, userId: string) {
    return db.historicoEstudo.findMany({
      where: {
        userId: userId,
        dataEstudo: {
          gte: new Date(data.setHours(0, 0, 0, 0)),
          lt: new Date(data.setHours(23, 59, 59, 999)),
        },
      },
      orderBy: {
        dataEstudo: 'asc',
      },
    })
  },
}
