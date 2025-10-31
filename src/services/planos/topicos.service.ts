import { db } from '@/lib/db'
import type { TopicoFormData } from '@/types/plano'
import type { StatusConteudo } from '@prisma/client'

export const topicosService = {
  /**
   * Lista todos os tópicos de uma disciplina
   */
  async listarTopicos(disciplinaId: string, userId: string) {
    try {
      // Verificar se a disciplina pertence ao usuário
      const disciplina = await db.disciplina.findFirst({
        where: { id: disciplinaId, userId },
      })

      if (!disciplina) {
        throw new Error('Disciplina não encontrada ou sem permissão')
      }

      return await db.topico.findMany({
        where: { disciplinaId },
        orderBy: { ordem: 'asc' },
      })
    } catch (error) {
      console.error('Erro ao buscar tópicos:', error)
      throw new Error('Não foi possível carregar os tópicos')
    }
  },

  /**
   * Obtém um tópico por ID
   */
  async obterTopicoPorId(id: string, userId: string) {
    try {
      const topico = await db.topico.findFirst({
        where: {
          id,
          disciplina: {
            userId,
          },
        },
        include: {
          disciplina: true,
        },
      })

      if (!topico) {
        throw new Error('Tópico não encontrado')
      }

      return topico
    } catch (error) {
      console.error('Erro ao buscar tópico:', error)
      throw new Error('Não foi possível carregar o tópico')
    }
  },

  /**
   * Cria um novo tópico
   */
  async criarTopico(data: TopicoFormData, userId: string) {
    try {
      // Verificar se a disciplina pertence ao usuário
      const disciplina = await db.disciplina.findFirst({
        where: { id: data.disciplinaId, userId },
      })

      if (!disciplina) {
        throw new Error('Disciplina não encontrada ou sem permissão')
      }

      // Se não forneceu ordem, usar a próxima disponível
      let ordem = data.ordem
      if (ordem === 0) {
        const ultimoTopico = await db.topico.findFirst({
          where: { disciplinaId: data.disciplinaId },
          orderBy: { ordem: 'desc' },
        })
        ordem = (ultimoTopico?.ordem ?? 0) + 1
      }

      return await db.topico.create({
        data: {
          disciplinaId: data.disciplinaId,
          titulo: data.titulo,
          conteudo: data.conteudo,
          ordem,
          status: data.status || 'pendente',
        },
      })
    } catch (error) {
      console.error('Erro ao criar tópico:', error)
      if (error instanceof Error) {
        throw error
      }
      throw new Error('Não foi possível criar o tópico')
    }
  },

  /**
   * Cria múltiplos tópicos de uma vez
   */
  async criarTopicosEmLote(
    disciplinaId: string,
    topicos: Array<{ titulo: string; conteudo?: string }>,
    userId: string,
  ) {
    try {
      // Verificar se a disciplina pertence ao usuário
      const disciplina = await db.disciplina.findFirst({
        where: { id: disciplinaId, userId },
      })

      if (!disciplina) {
        throw new Error('Disciplina não encontrada ou sem permissão')
      }

      // Obter a ordem inicial
      const ultimoTopico = await db.topico.findFirst({
        where: { disciplinaId },
        orderBy: { ordem: 'desc' },
      })
      let ordemInicial = (ultimoTopico?.ordem ?? 0) + 1

      // Criar todos os tópicos
      const topicosParaCriar = topicos.map((topico, index) => ({
        disciplinaId,
        titulo: topico.titulo,
        conteudo: topico.conteudo,
        ordem: ordemInicial + index,
        status: 'pendente' as StatusConteudo,
      }))

      await db.topico.createMany({
        data: topicosParaCriar,
      })

      return { success: true, count: topicosParaCriar.length }
    } catch (error) {
      console.error('Erro ao criar tópicos em lote:', error)
      throw new Error('Não foi possível criar os tópicos')
    }
  },

  /**
   * Atualiza um tópico
   */
  async atualizarTopico(
    id: string,
    data: Partial<TopicoFormData>,
    userId: string,
  ) {
    try {
      // Verificar se o tópico pertence ao usuário
      const topicoExistente = await db.topico.findFirst({
        where: {
          id,
          disciplina: {
            userId,
          },
        },
      })

      if (!topicoExistente) {
        throw new Error('Tópico não encontrado ou sem permissão')
      }

      return await db.topico.update({
        where: { id },
        data,
      })
    } catch (error) {
      console.error('Erro ao atualizar tópico:', error)
      throw new Error('Não foi possível atualizar o tópico')
    }
  },

  /**
   * Deleta um tópico
   */
  async deletarTopico(id: string, userId: string) {
    try {
      // Verificar se o tópico pertence ao usuário
      const topico = await db.topico.findFirst({
        where: {
          id,
          disciplina: {
            userId,
          },
        },
      })

      if (!topico) {
        throw new Error('Tópico não encontrado ou sem permissão')
      }

      return await db.topico.delete({
        where: { id },
      })
    } catch (error) {
      console.error('Erro ao deletar tópico:', error)
      throw new Error('Não foi possível deletar o tópico')
    }
  },

  /**
   * Reordena tópicos
   */
  async reordenarTopicos(
    disciplinaId: string,
    topicosOrdenados: { id: string; ordem: number }[],
    userId: string,
  ) {
    try {
      // Verificar se a disciplina pertence ao usuário
      const disciplina = await db.disciplina.findFirst({
        where: { id: disciplinaId, userId },
      })

      if (!disciplina) {
        throw new Error('Disciplina não encontrada ou sem permissão')
      }

      // Atualizar ordem de cada tópico
      await Promise.all(
        topicosOrdenados.map((topico) =>
          db.topico.update({
            where: { id: topico.id },
            data: { ordem: topico.ordem },
          }),
        ),
      )

      return { success: true }
    } catch (error) {
      console.error('Erro ao reordenar tópicos:', error)
      throw new Error('Não foi possível reordenar os tópicos')
    }
  },

  /**
   * Atualiza o status de um tópico
   */
  async atualizarStatus(id: string, status: StatusConteudo, userId: string) {
    try {
      return await this.atualizarTopico(id, { status }, userId)
    } catch (error) {
      console.error('Erro ao atualizar status:', error)
      throw new Error('Não foi possível atualizar o status')
    }
  },
}
