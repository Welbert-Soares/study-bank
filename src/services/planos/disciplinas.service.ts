import { db } from '@/lib/db'
import type { DisciplinaFormData } from '@/types/plano'

export const disciplinasService = {
  /**
   * Lista todas as disciplinas de um plano
   */
  async listarDisciplinas(planoId: string, userId: string) {
    try {
      return await db.disciplina.findMany({
        where: {
          planoId,
          userId,
        },
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
      })
    } catch (error) {
      console.error('Erro ao buscar disciplinas:', error)
      throw new Error('Não foi possível carregar as disciplinas')
    }
  },

  /**
   * Obtém uma disciplina por ID com todos os tópicos
   */
  async obterDisciplinaPorId(id: string, userId: string) {
    try {
      const disciplina = await db.disciplina.findFirst({
        where: { id, userId },
        include: {
          topicos: {
            orderBy: { ordem: 'asc' },
          },
          plano: true,
        },
      })

      if (!disciplina) {
        throw new Error('Disciplina não encontrada')
      }

      return disciplina
    } catch (error) {
      console.error('Erro ao buscar disciplina:', error)
      throw new Error('Não foi possível carregar a disciplina')
    }
  },

  /**
   * Cria uma nova disciplina
   */
  async criarDisciplina(data: DisciplinaFormData, userId: string) {
    try {
      // Verificar se o plano pertence ao usuário
      const plano = await db.plano.findFirst({
        where: { id: data.planoId, userId },
      })

      if (!plano) {
        throw new Error('Plano não encontrado ou sem permissão')
      }

      // Se não forneceu ordem, usar a próxima disponível
      let ordem = data.ordem ?? 0
      if (ordem === 0) {
        const ultimaDisciplina = await db.disciplina.findFirst({
          where: { planoId: data.planoId },
          orderBy: { ordem: 'desc' },
        })
        ordem = (ultimaDisciplina?.ordem ?? 0) + 1
      }

      return await db.disciplina.create({
        data: {
          nome: data.nome,
          cor: data.cor,
          descricao: data.descricao,
          ordem,
          edital: data.edital,
          cargo: data.cargo,
          status: data.status || 'pendente',
          userId,
          planoId: data.planoId,
        },
      })
    } catch (error) {
      console.error('Erro ao criar disciplina:', error)
      if (error instanceof Error) {
        throw error
      }
      throw new Error('Não foi possível criar a disciplina')
    }
  },

  /**
   * Atualiza uma disciplina
   */
  async atualizarDisciplina(
    id: string,
    data: Partial<DisciplinaFormData>,
    userId: string,
  ) {
    try {
      // Verificar se a disciplina pertence ao usuário
      const disciplinaExistente = await db.disciplina.findFirst({
        where: { id, userId },
      })

      if (!disciplinaExistente) {
        throw new Error('Disciplina não encontrada ou sem permissão')
      }

      return await db.disciplina.update({
        where: { id },
        data,
      })
    } catch (error) {
      console.error('Erro ao atualizar disciplina:', error)
      throw new Error('Não foi possível atualizar a disciplina')
    }
  },

  /**
   * Deleta uma disciplina e todos os seus tópicos
   */
  async deletarDisciplina(id: string, userId: string) {
    try {
      // Verificar se a disciplina pertence ao usuário
      const disciplina = await db.disciplina.findFirst({
        where: { id, userId },
      })

      if (!disciplina) {
        throw new Error('Disciplina não encontrada ou sem permissão')
      }

      // O Prisma deletará automaticamente os tópicos e ciclos relacionados
      // devido ao onDelete: Cascade
      return await db.disciplina.delete({
        where: { id },
      })
    } catch (error) {
      console.error('Erro ao deletar disciplina:', error)
      throw new Error('Não foi possível deletar a disciplina')
    }
  },

  /**
   * Obtém estatísticas de uma disciplina
   */
  async obterEstatisticas(id: string, userId: string) {
    try {
      const disciplina = await db.disciplina.findFirst({
        where: { id, userId },
        include: {
          topicos: true,
        },
      })

      if (!disciplina) {
        throw new Error('Disciplina não encontrada')
      }

      const totalTopicos = disciplina.topicos.length
      const topicosEstudados = disciplina.topicos.filter(
        (t) => t.status === 'concluido',
      ).length
      const topicosEmProgresso = disciplina.topicos.filter(
        (t) => t.status === 'em_progresso',
      ).length

      return {
        totalTopicos,
        topicosEstudados,
        topicosEmProgresso,
        topicosPendentes: totalTopicos - topicosEstudados - topicosEmProgresso,
        percentualConcluido:
          totalTopicos > 0 ? (topicosEstudados / totalTopicos) * 100 : 0,
      }
    } catch (error) {
      console.error('Erro ao obter estatísticas:', error)
      throw new Error('Não foi possível obter as estatísticas')
    }
  },

  /**
   * Reordena disciplinas
   */
  async reordenarDisciplinas(
    planoId: string,
    disciplinasOrdenadas: { id: string; ordem: number }[],
    userId: string,
  ) {
    try {
      // Verificar se o plano pertence ao usuário
      const plano = await db.plano.findFirst({
        where: { id: planoId, userId },
      })

      if (!plano) {
        throw new Error('Plano não encontrado ou sem permissão')
      }

      // Atualizar ordem de cada disciplina
      await Promise.all(
        disciplinasOrdenadas.map((disc) =>
          db.disciplina.update({
            where: { id: disc.id },
            data: { ordem: disc.ordem },
          }),
        ),
      )

      return { success: true }
    } catch (error) {
      console.error('Erro ao reordenar disciplinas:', error)
      throw new Error('Não foi possível reordenar as disciplinas')
    }
  },
}
