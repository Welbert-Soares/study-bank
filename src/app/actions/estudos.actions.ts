'use server'

import { auth } from '@clerk/nextjs/server'
import { revalidatePath } from 'next/cache'
import { prisma } from '@/lib/prisma'
import type { RegistroEstudoInput } from '@/types/estudo'

export async function registrarEstudoAction(data: RegistroEstudoInput) {
  const session = await auth()
  if (!session.userId) throw new Error('Unauthorized')

  // Converter tempo HH:MM para minutos
  const [horas, minutos] = data.tempoEstudo.split(':').map(Number)
  const tempoEmMinutos = horas * 60 + minutos

  // Criar registro no banco
  const registro = await prisma.estudoRealizado.create({
    data: {
      userId: session.userId,
      planoId: data.planoId,
      disciplinaId: data.disciplinaId,
      topicoId: data.topicoId,
      planejamentoSemanalId: data.planejamentoSemanalId,
      agendamentoKey: data.agendamentoKey,
      dataEstudo: new Date(data.dataEstudo),
      tempoEstudado: tempoEmMinutos,
      categoria: data.categoria,
      material: data.material,
      teoriaFinalizada: data.teoriaFinalizada,
      anotacoes: JSON.stringify({
        categoria: data.categoria,
        topicoId: data.topicoId,
        material: data.material,
        teoriaFinalizada: data.teoriaFinalizada,
        programarRevisoes: data.programarRevisoes,
        intervalosRevisao: data.intervalosRevisao,
        questoes: data.questoes,
        paginas: data.paginas,
        videoAulas: data.videoAulas,
        comentarios: data.comentarios,
      }),
    },
  })

  // TODO: Se programarRevisoes = true, criar agendamentos de revisão
  // if (data.programarRevisoes && data.intervalosRevisao.length > 0) {
  //   // Implementar lógica de criar revisões futuras
  // }

  // Revalidar páginas relevantes
  revalidatePath('/')
  revalidatePath('/planos')
  revalidatePath('/planejamento')

  return registro
}
