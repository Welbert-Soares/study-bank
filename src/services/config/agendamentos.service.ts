import { db } from '@/lib/db'
import type { DiaDaSemana } from '@/generated/prisma'
import { StatusConteudo } from '@/generated/prisma'
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
  async listarAgendamentos() {
    try {
      return await db.diaDisciplinaMateria.findMany({
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

  async criarAgendamento(data: AgendamentoFormData) {
    try {
      const agendamento = await db.diaDisciplinaMateria.create({
        data: {
          dia: data.dia,
          materiaId: data.materiaId,
          status: data.status ?? StatusConteudo.pendente,
          tempoEstudado: data.tempoEstudado,
          anotacoes: data.anotacoes,
        },
        include: {
          materia: true,
        },
      })

      // Se solicitado, criar revisão automaticamente
      if (data.criarRevisao) {
        await this.criarRevisao(data.materiaId, data.dia)
      }

      return agendamento
    } catch (error) {
      console.error('Erro ao criar agendamento:', error)
      throw new Error('Não foi possível criar o agendamento')
    }
  },

  async criarRevisao(materiaId: string, diaOriginal: DiaDaSemana) {
    try {
      // Busca a matéria original
      const materiaOriginal = await db.materia.findUnique({
        where: { id: materiaId },
      })

      if (!materiaOriginal) return

      // Cria uma nova matéria de revisão
      const materiaRevisao = await db.materia.create({
        data: {
          titulo: `Revisar: ${materiaOriginal.titulo}`,
          disciplina: 'Revisoes',
          ordem: materiaOriginal.ordem,
          status: 'pendente',
        },
      })

      // Agenda para o dia seguinte
      const diaRevisao = getDiaSeguinte(diaOriginal)

      await db.diaDisciplinaMateria.create({
        data: {
          dia: diaRevisao,
          materiaId: materiaRevisao.id,
          status: 'pendente',
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
  ) {
    try {
      if (!id) {
        throw new Error('ID do agendamento não fornecido')
      }

      // Buscar o agendamento atual para comparar mudanças
      const agendamentoAtual = await db.diaDisciplinaMateria.findUnique({
        where: { id },
        include: { materia: true },
      })

      if (!agendamentoAtual) {
        throw new Error('Agendamento não encontrado')
      }

      // Prepare update data, using current values if not provided
      const updateData = {
        materiaId: data.materiaId ?? agendamentoAtual.materiaId,
        dia: data.dia ?? agendamentoAtual.dia,
        status: data.status ?? agendamentoAtual.status,
        tempoEstudado: data.tempoEstudado ?? agendamentoAtual.tempoEstudado,
        anotacoes: data.anotacoes ?? agendamentoAtual.anotacoes,
      }

      // Validate required fields
      if (!updateData.materiaId) {
        throw new Error('materiaId é obrigatório')
      }
      if (!updateData.dia) {
        throw new Error('dia é obrigatório')
      }

      // Atualizar o agendamento
      return await db.diaDisciplinaMateria.update({
        where: { id },
        data: updateData,
        include: {
          materia: true,
        },
      })
    } catch (error) {
      console.error('Erro ao atualizar agendamento:', error)
      if (error instanceof Error) {
        throw new Error(
          `Não foi possível atualizar o agendamento: ${error.message}`,
        )
      } else {
        throw new Error(
          'Não foi possível atualizar o agendamento: erro desconhecido',
        )
      }
    }
  },

  async deletarAgendamento(id: string) {
    try {
      await db.diaDisciplinaMateria.delete({
        where: { id },
      })
    } catch (error) {
      console.error('Erro ao deletar agendamento:', error)
      throw new Error('Não foi possível deletar o agendamento')
    }
  },
}
