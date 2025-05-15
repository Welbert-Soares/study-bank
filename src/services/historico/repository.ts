import { db } from '@/lib/db'

export const historicoRepository = {
  async buscarTodosRegistros() {
    return db.historicoEstudo.findMany({
      orderBy: {
        dataEstudo: 'desc',
      },
    })
  },

  async buscarRegistrosPorDia(data: Date) {
    return db.historicoEstudo.findMany({
      where: {
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
