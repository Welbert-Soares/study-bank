import { db } from '@/lib/db'
import type { PlanoFormData } from '@/types/plano'

export const planosService = {
  /**
   * Lista todos os planos de um usuário
   */
  async listarPlanos(userId: string) {
    try {
      return await db.plano.findMany({
        where: { userId },
        include: {
          disciplinas: {
            include: {
              topicos: true,
              _count: {
                select: {
                  topicos: true,
                  ciclosPomodoro: true,
                },
              },
            },
          },
        },
        orderBy: {
          criadoEm: 'desc',
        },
      })
    } catch (error) {
      console.error('Erro ao buscar planos:', error)
      throw new Error('Não foi possível carregar os planos')
    }
  },

  /**
   * Obtém um plano específico por ID
   */
  async obterPlanoPorId(id: string, userId: string) {
    try {
      const plano = await db.plano.findFirst({
        where: { id, userId },
        include: {
          disciplinas: {
            include: {
              topicos: {
                orderBy: { ordem: 'asc' },
              },
              _count: {
                select: {
                  topicos: true,
                },
              },
            },
            orderBy: { ordem: 'asc' },
          },
        },
      })

      if (!plano) {
        throw new Error('Plano não encontrado')
      }

      return plano
    } catch (error) {
      console.error('Erro ao buscar plano:', error)
      throw new Error('Não foi possível carregar o plano')
    }
  },

  /**
   * Cria um novo plano
   */
  async criarPlano(data: PlanoFormData, userId: string) {
    try {
      return await db.plano.create({
        data: {
          nome: data.nome,
          emblema: data.emblema,
          edital: data.edital,
          cargo: data.cargo,
          observacoes: data.observacoes,
          ativo: data.ativo ?? true,
          userId,
        },
      })
    } catch (error) {
      console.error('Erro ao criar plano:', error)
      if (error instanceof Error) {
        throw error
      }
      throw new Error('Não foi possível criar o plano')
    }
  },

  /**
   * Atualiza um plano existente
   */
  async atualizarPlano(
    id: string,
    data: Partial<PlanoFormData>,
    userId: string,
  ) {
    try {
      // Verificar se o plano pertence ao usuário
      const planoExistente = await db.plano.findFirst({
        where: { id, userId },
      })

      if (!planoExistente) {
        throw new Error('Plano não encontrado ou sem permissão')
      }

      return await db.plano.update({
        where: { id },
        data,
      })
    } catch (error) {
      console.error('Erro ao atualizar plano:', error)
      throw new Error('Não foi possível atualizar o plano')
    }
  },

  /**
   * Deleta um plano e todas as suas disciplinas, tópicos e ciclos relacionados
   */
  async deletarPlano(id: string, userId: string) {
    try {
      // Verificar se o plano pertence ao usuário
      const plano = await db.plano.findFirst({
        where: { id, userId },
      })

      if (!plano) {
        throw new Error('Plano não encontrado ou sem permissão')
      }

      // O Prisma deletará automaticamente as disciplinas, tópicos e ciclos
      // devido ao onDelete: Cascade
      return await db.plano.delete({
        where: { id },
      })
    } catch (error) {
      console.error('Erro ao deletar plano:', error)
      throw new Error('Não foi possível deletar o plano')
    }
  },

  /**
   * Obtém estatísticas de um plano
   */
  async obterEstatisticas(id: string, userId: string) {
    try {
      const plano = await db.plano.findFirst({
        where: { id, userId },
        include: {
          disciplinas: {
            include: {
              topicos: true,
            },
          },
        },
      })

      if (!plano) {
        throw new Error('Plano não encontrado')
      }

      const totalDisciplinas = plano.disciplinas.length
      const totalTopicos = plano.disciplinas.reduce(
        (acc, disc) => acc + disc.topicos.length,
        0,
      )
      const topicosEstudados = plano.disciplinas.reduce(
        (acc, disc) =>
          acc + disc.topicos.filter((t) => t.status === 'concluido').length,
        0,
      )

      return {
        totalDisciplinas,
        totalTopicos,
        topicosEstudados,
        percentualConcluido:
          totalTopicos > 0 ? (topicosEstudados / totalTopicos) * 100 : 0,
      }
    } catch (error) {
      console.error('Erro ao obter estatísticas:', error)
      throw new Error('Não foi possível obter as estatísticas')
    }
  },
}
