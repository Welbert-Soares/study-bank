import { db } from '@/lib/db'
import type { DisciplinaNome } from '@prisma/client'
import { StatusConteudo } from '@prisma/client'
import type { MateriaFormData } from '@/types/config'

export const disciplinasService = {
  async listarDisciplinas(userId: string) {
    try {
      return await db.materia.findMany({
        where: {
          userId: userId, // Filter by userId
        },
        orderBy: {
          ordem: 'asc',
        },
      })
    } catch (error) {
      console.error('Erro ao buscar disciplinas:', error)
      throw new Error('Não foi possível carregar as disciplinas')
    }
  },

  async criarMateria(data: MateriaFormData, userId: string) {
    try {
      return await db.materia.create({
        data: {
          ...data,
          userId, // Simplifica a criação usando o userId diretamente
          status: StatusConteudo.pendente,
        },
      })
    } catch (error) {
      console.error('Erro ao criar matéria:', error)
      throw new Error('Não foi possível criar a matéria')
    }
  },

  async atualizarMateria(
    id: string,
    data: {
      titulo?: string
      descricao?: string
      status?: StatusConteudo
      ordem?: number
      disciplina?: DisciplinaNome
    },
    userId: string,
  ) {
    try {
      return await db.materia.update({
        where: {
          id,
          userId: userId, // Only allow updating own content
        },
        data,
      })
    } catch (error) {
      console.error('Erro ao atualizar matéria:', error)
      throw new Error('Não foi possível atualizar a matéria')
    }
  },

  async deletarMateria(id: string, userId: string) {
    try {
      // First, check if the user owns this material
      const materia = await db.materia.findFirst({
        where: {
          id,
          userId: userId,
        },
        include: {
          agendamentos: true,
        },
      })

      if (!materia) {
        throw new Error(
          'Matéria não encontrada ou você não tem permissão para excluí-la',
        )
      }

      // Create historic records for each schedule
      if (materia.agendamentos.length > 0) {
        await db.historicoEstudo.createMany({
          data: materia.agendamentos.map((agendamento) => ({
            userId: userId,
            tituloDaMateria: materia.titulo,
            disciplina: materia.disciplina,
            dataEstudo: agendamento.criadoEm,
            tempoEstudado: agendamento.tempoEstudado || 0,
            anotacoes: agendamento.anotacoes,
            progresso: agendamento.progresso,
            planoId: agendamento.planoId,
          })),
        })
      }

      // Delete all schedules
      await db.diaDisciplinaMateria.deleteMany({
        where: {
          materiaId: id,
          userId: userId,
        },
      })

      // Finally, delete the subject
      return await db.materia.delete({
        where: {
          id,
          userId: userId,
        },
      })
    } catch (error) {
      console.error('Erro ao deletar matéria:', error)
      throw new Error('Não foi possível deletar a matéria')
    }
  },
}
