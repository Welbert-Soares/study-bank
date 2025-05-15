'use server'

import { revalidatePath } from 'next/cache'
import type {
  DiaDaSemana,
  StatusConteudo,
  DisciplinaNome,
} from '@prisma/client'
import {
  updateActivityStatus,
  updateObjectiveStatus,
} from '@/services/dashboard/activity.service'
import { getDashboardData } from '@/services/dashboard/dashboard.service'
import { scheduleSubject } from '@/services/dashboard/schedule.service'
import { updateDisciplineProgress } from '@/services/dashboard/metrics.service'
import type {
  DashboardCronograma,
  DashboardMetrica,
  DashboardObjetivo,
  DashboardData,
} from '@/services/dashboard/types'

export type {
  DashboardCronograma,
  DashboardMetrica,
  DashboardObjetivo,
  DashboardData,
}

export async function getDashboardDataAction(
  date: Date,
): Promise<DashboardData> {
  return getDashboardData(date)
}

export async function agendarMateriaAction(
  materiaId: string,
  dia: DiaDaSemana,
  criarRevisao: boolean = false,
): Promise<void> {
  await scheduleSubject(materiaId, dia, criarRevisao)
  revalidatePath('/dashboard')
  revalidatePath('/historico')
}

export async function atualizarStatusAtividadeAction(
  id: string,
  status: StatusConteudo,
): Promise<void> {
  await updateActivityStatus(id, status)
  revalidatePath('/dashboard')
  revalidatePath('/historico')
  revalidatePath('/metricas')
}

export async function atualizarStatusObjetivoAction(
  id: string,
  completo: boolean,
): Promise<void> {
  await updateObjectiveStatus(id, completo)
  revalidatePath('/dashboard')
  revalidatePath('/historico')
}

export async function atualizarProgressoDisciplinaAction(
  disciplina: DisciplinaNome,
  progresso: number,
): Promise<void> {
  await updateDisciplineProgress(disciplina, progresso)
  revalidatePath('/dashboard')
  revalidatePath('/historico')
  revalidatePath('/metricas')
}

export async function atualizarStatusRevisaoAction(
  id: string,
  status: StatusConteudo,
): Promise<void> {
  await updateActivityStatus(id, status)
  revalidatePath('/dashboard')
  revalidatePath('/historico')
}
