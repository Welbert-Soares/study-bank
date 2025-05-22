import { db } from '@/lib/db'
import { DiaDaSemana, DisciplinaNome } from '@prisma/client'

export interface PlanoEstudoDia {
  day: DiaDaSemana
  discipline1: DisciplinaNome | null
  discipline2: DisciplinaNome | null
  writing: boolean
  progress: number
  revisoes: number
  revisoesTitulos: string[]
}

export class PlanoEstudosService {
  private initializarDiaDaSemana(day: DiaDaSemana): PlanoEstudoDia {
    return {
      day,
      discipline1: null,
      discipline2: null,
      writing: false,
      progress: 0,
      revisoes: 0,
      revisoesTitulos: [],
    }
  }

  private calcularProgressoDia(
    plano: PlanoEstudoDia,
    status: 'concluido' | 'em_progresso' | 'pendente',
  ) {
    if (status === 'concluido') {
      plano.progress += 50 // 50% por disciplina concluída
    } else if (status === 'em_progresso') {
      plano.progress += 25 // 25% por disciplina em progresso
    }
  }

  private processarDisciplina(
    plano: PlanoEstudoDia,
    disciplina: DisciplinaNome,
    titulo: string,
  ) {
    if (disciplina === 'Revisoes') {
      plano.revisoes++
      plano.revisoesTitulos.push(titulo)
    } else if (!plano.discipline1) {
      plano.discipline1 = disciplina
    } else if (!plano.discipline2) {
      plano.discipline2 = disciplina
    }

    if (disciplina === 'Redacao') {
      plano.writing = true
    }
  }

  async obterPlanoSemanal(userId: string): Promise<PlanoEstudoDia[]> {
    try {
      if (!userId) {
        throw new Error('Usuário não autenticado')
      }

      // Buscar todas as disciplinas agendadas com suas matérias
      const agendamentos = await db.diaDisciplinaMateria.findMany({
        where: {
          userId: userId,
        },
        include: {
          materia: true,
        },
        orderBy: {
          dia: 'asc',
        },
      })

      // Criar um mapa para agrupar por dia
      const planoSemanal = new Map<DiaDaSemana, PlanoEstudoDia>()

      // Inicializar os dias da semana
      Object.values(DiaDaSemana).forEach((day) => {
        planoSemanal.set(day, this.initializarDiaDaSemana(day))
      })

      // Preencher o plano com as disciplinas
      agendamentos
        .filter((agendamento) => agendamento.materia !== null)
        .forEach((agendamento) => {
          const diaPlano = planoSemanal.get(agendamento.dia)
          if (diaPlano && agendamento.materia) {
            this.processarDisciplina(
              diaPlano,
              agendamento.materia.disciplina,
              agendamento.materia.titulo,
            )

            this.calcularProgressoDia(diaPlano, agendamento.status)
          }
        })

      return Array.from(planoSemanal.values())
    } catch (error) {
      console.error('Erro ao obter plano semanal:', error)
      throw new Error('Não foi possível carregar o plano de estudos')
    }
  }
}

export const planoEstudosService = new PlanoEstudosService()
