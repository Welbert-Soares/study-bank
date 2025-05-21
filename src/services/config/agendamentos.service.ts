import { db } from '@/lib/db'
import type { DiaDaSemana } from '@prisma/client'
import { StatusConteudo } from '@prisma/client'
import type { AgendamentoFormData } from '@/types/config'

function getDiaSeguinte(dia: DiaDaSemana): DiaDaSemana {
  const dias: DiaDaSemana[] = [
    'Domingo',
    'Segunda',
    'Terca',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sabado',
  ]
  const index = dias.indexOf(dia)
  const proximoIndex = (index + 1) % 7
  return dias[proximoIndex]
}

export const agendamentosService = {
  async listarAgendamentos(userId: string) {
    try {
      return await db.diaDisciplinaMateria.findMany({
        where: {
          userId: userId,
        },
        include: {
          materia: true,
        },
        orderBy: [
          {
            dia: 'asc',
          },
          {
            materia: {
              ordem: 'asc',
            },
          },
        ],
      })
    } catch (error) {
      console.error('Erro ao buscar agendamentos:', error)
      throw new Error('Não foi possível carregar os agendamentos')
    }
  },

  async criarAgendamento(data: AgendamentoFormData, userId: string) {
    try {
      // Primeiro, verifica se o usuário possui a matéria
      const materia = await db.materia.findFirst({
        where: {
          id: data.materiaId,
          userId: userId,
        },
      })

      if (!materia) {
        throw new Error(
          'Matéria não encontrada ou você não tem permissão para agendá-la',
        )
      }

      const agendamento = await db.diaDisciplinaMateria.create({
        data: {
          ...data,
          userId: userId,
          status: data.status ?? StatusConteudo.pendente,
        },
        include: {
          materia: true,
        },
      })

      // Se solicitado, criar revisão automaticamente
      if (data.criarRevisao) {
        await this.criarRevisao(data.materiaId, data.dia, userId)
      }

      return agendamento
    } catch (error) {
      console.error('Erro ao criar agendamento:', error)
      throw new Error('Não foi possível criar o agendamento')
    }
  },

  async criarRevisao(
    materiaId: string,
    diaOriginal: DiaDaSemana,
    userId: string,
  ) {
    try {
      // Busca a matéria original
      const materiaOriginal = await db.materia.findFirst({
        where: {
          id: materiaId,
          userId: userId,
        },
      })

      if (!materiaOriginal) return

      // Cria uma nova matéria de revisão
      const materiaRevisao = await db.materia.create({
        data: {
          titulo: `Revisar: ${materiaOriginal.titulo}`,
          disciplina: 'Revisoes',
          ordem: materiaOriginal.ordem,
          status: 'pendente',
          userId: userId,
        },
      })

      // Agenda para o dia seguinte
      const diaRevisao = getDiaSeguinte(diaOriginal)

      await db.diaDisciplinaMateria.create({
        data: {
          dia: diaRevisao,
          materiaId: materiaRevisao.id,
          status: 'pendente',
          userId: userId,
        },
      })
    } catch (error) {
      console.error('Erro ao criar revisão:', error)
      throw new Error('Não foi possível criar a revisão')
    }
  },

  async atualizarAgendamento(
    id: string,
    data: {
      materiaId?: string
      dia?: DiaDaSemana
      status?: StatusConteudo
      tempoEstudado?: number
      anotacoes?: string
    },
    userId: string,
  ) {
    try {
      if (!id) {
        throw new Error('ID do agendamento não fornecido')
      }

      // Buscar o agendamento atual para comparar mudanças e verificar propriedade
      const agendamentoAtual = await db.diaDisciplinaMateria.findFirst({
        where: {
          id,
          userId: userId,
        },
        include: { materia: true },
      })

      if (!agendamentoAtual) {
        throw new Error(
          'Agendamento não encontrado ou você não tem permissão para alterá-lo',
        )
      }

      // Se estiver mudando a matéria, verifica a propriedade da nova matéria
      if (data.materiaId && data.materiaId !== agendamentoAtual.materiaId) {
        const novaMateria = await db.materia.findFirst({
          where: {
            id: data.materiaId,
            userId: userId,
          },
        })

        if (!novaMateria) {
          throw new Error(
            'Nova matéria não encontrada ou você não tem permissão para usá-la',
          )
        }
      }

      // Prepare os dados da atualização, usando os valores atuais se não forem fornecidos
      const updateData = {
        materiaId: data.materiaId ?? agendamentoAtual.materiaId,
        dia: data.dia ?? agendamentoAtual.dia,
        status: data.status ?? agendamentoAtual.status,
        tempoEstudado: data.tempoEstudado ?? agendamentoAtual.tempoEstudado,
        anotacoes: data.anotacoes ?? agendamentoAtual.anotacoes,
      }

      // Atualizar o agendamento
      return await db.diaDisciplinaMateria.update({
        where: {
          id,
          userId: userId,
        },
        data: updateData,
        include: {
          materia: true,
        },
      })
    } catch (error) {
      console.error('Erro ao atualizar agendamento:', error)
      throw new Error('Não foi possível atualizar o agendamento')
    }
  },

  async deletarAgendamento(id: string, userId: string) {
    try {
      await db.diaDisciplinaMateria.deleteMany({
        where: {
          id,
          userId: userId,
        },
      })
    } catch (error) {
      console.error('Erro ao deletar agendamento:', error)
      throw new Error('Não foi possível deletar o agendamento')
    }
  },
}
