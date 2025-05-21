'use server'

import { revalidatePath } from 'next/cache'
import { auth } from '@clerk/nextjs/server'
import type {
  DiaDaSemana,
  StatusConteudo,
  DisciplinaNome,
} from '@/app/generated/prisma'
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
  const session = await auth()
  if (!session.userId) throw new Error('Unauthorized')
  return getDashboardData(date, session.userId)
}

export async function agendarMateriaAction(
  materiaId: string,
  dia: DiaDaSemana,
  criarRevisao: boolean = false,
): Promise<void> {
  const session = await auth()
  if (!session.userId) throw new Error('Unauthorized')
  await scheduleSubject(materiaId, dia, criarRevisao, session.userId)
  revalidatePath('/dashboard')
  revalidatePath('/historico')
}

export async function atualizarStatusAtividadeAction(
  id: string,
  status: StatusConteudo,
): Promise<void> {
  const session = await auth()
  if (!session.userId) throw new Error('Unauthorized')
  await updateActivityStatus(id, status, session.userId)
  revalidatePath('/dashboard')
  revalidatePath('/historico')
  revalidatePath('/metricas')
}

export async function atualizarStatusObjetivoAction(
  id: string,
  completo: boolean,
): Promise<void> {
  const session = await auth()
  if (!session.userId) throw new Error('Unauthorized')
  await updateObjectiveStatus(id, completo, session.userId)
  revalidatePath('/dashboard')
  revalidatePath('/historico')
}

export async function atualizarProgressoDisciplinaAction(
  disciplina: DisciplinaNome,
  progresso: number,
): Promise<void> {
  const session = await auth()
  if (!session.userId) throw new Error('Unauthorized')
  await updateDisciplineProgress(disciplina, progresso, session.userId)
  revalidatePath('/dashboard')
  revalidatePath('/historico')
  revalidatePath('/metricas')
}

export async function atualizarStatusRevisaoAction(
  id: string,
  status: StatusConteudo,
): Promise<void> {
  const session = await auth()
  if (!session.userId) throw new Error('Unauthorized')
  await updateActivityStatus(id, status, session.userId)
  revalidatePath('/dashboard')
  revalidatePath('/historico')
}
