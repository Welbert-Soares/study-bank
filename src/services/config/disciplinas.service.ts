import { db } from '@/lib/db'
import type { DisciplinaNome } from '@prisma/client'
import { StatusConteudo } from '@prisma/client'
import type { MateriaFormData } from '@/types/config'

export const disciplinasService = {
  async listarDisciplinas() {
    try {
      return await db.materia.findMany({
        orderBy: {
          ordem: 'asc',
        },
      })
    } catch (error) {
      console.error('Erro ao buscar disciplinas:', error)
      throw new Error('Não foi possível carregar as disciplinas')
    }
  },

  async criarMateria(data: MateriaFormData) {
    try {
      return await db.materia.create({
        data: {
          ...data,
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
  ) {
    try {
      return await db.materia.update({
        where: { id },
        data,
      })
    } catch (error) {
      console.error('Erro ao atualizar matéria:', error)
      throw new Error('Não foi possível atualizar a matéria')
    }
  },

  async deletarMateria(id: string) {
    try {
      // Primeiro, buscar a matéria e seus agendamentos para preservar o histórico
      const materiaComAgendamentos = await db.materia.findUnique({
        where: { id },
        include: {
          agendamentos: true,
        },
      })

      if (!materiaComAgendamentos) {
        throw new Error('Matéria não encontrada')
      }

      // Criar registros históricos para cada agendamento
      if (materiaComAgendamentos.agendamentos.length > 0) {
        await db.historicoEstudo.createMany({
          data: materiaComAgendamentos.agendamentos.map((agendamento) => ({
            tituloDaMateria: materiaComAgendamentos.titulo,
            disciplina: materiaComAgendamentos.disciplina,
            dataEstudo: agendamento.criadoEm,
            tempoEstudado: agendamento.tempoEstudado || 0,
            anotacoes: agendamento.anotacoes,
            progresso: agendamento.progresso,
            planoId: agendamento.planoId,
          })),
        })
      }

      // Depois, deletar todos os agendamentos
      await db.diaDisciplinaMateria.deleteMany({
        where: { materiaId: id },
      })

      // Por fim, deletar a matéria
      return await db.materia.delete({
        where: { id },
      })
    } catch (error) {
      console.error('Erro ao deletar matéria:', error)
      throw new Error('Não foi possível deletar a matéria')
    }
  },
}
