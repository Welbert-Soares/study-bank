import { z } from 'zod'
import { DisciplinaNome, DiaDaSemana, StatusConteudo } from '@prisma/client'

// Schema para validação de Matéria
export const materiaSchema = z.object({
  titulo: z.string().min(3, 'O título deve ter pelo menos 3 caracteres'),
  descricao: z.string().optional(),
  disciplina: z.nativeEnum(DisciplinaNome, {
    errorMap: () => ({ message: 'Disciplina inválida' }),
  }),
  ordem: z.number().int().min(0),
  status: z.nativeEnum(StatusConteudo).default('pendente'),
})

// Schema para validação de Agendamento
export const agendamentoSchema = z.object({
  materiaId: z.string().min(1, 'Selecione uma matéria'),
  dia: z.nativeEnum(DiaDaSemana, {
    errorMap: () => ({ message: 'Dia da semana inválido' }),
  }),
  tempoEstudado: z.number().min(0).optional(),
  anotacoes: z.string().optional(),
  status: z.nativeEnum(StatusConteudo).default('pendente'),
  criarRevisao: z.boolean().optional().default(false),
})

// Schema para validação de Plano de Estudos
export const planoEstudosSchema = z.object({
  titulo: z.string().min(3, 'O título deve ter pelo menos 3 caracteres'),
  dataInicio: z.date(),
  dataFim: z.date().optional(),
  ativo: z.boolean().default(true),
})

// Tipos inferidos dos schemas
export type MateriaInput = z.infer<typeof materiaSchema>
export type AgendamentoInput = z.infer<typeof agendamentoSchema>
export type PlanoEstudosInput = z.infer<typeof planoEstudosSchema>
