import { auth } from '@clerk/nextjs/server'
import { obterPlanoPorIdAction } from '@/app/actions/planos.actions'
import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const session = await auth()
    if (!session.userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await params
    const plano = await obterPlanoPorIdAction(id)

    return NextResponse.json(plano)
  } catch (error) {
    console.error('Erro ao buscar plano:', error)
    return NextResponse.json({ error: 'Erro ao buscar plano' }, { status: 500 })
  }
}
