import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { prisma } from '@/lib/prisma'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const session = await auth()
    if (!session.userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const disciplinas = await prisma.disciplina.findMany({
      where: {
        userId: session.userId,
        planoId: params.id,
      },
      select: {
        id: true,
        nome: true,
        cor: true,
      },
      orderBy: {
        ordem: 'asc',
      },
    })

    return NextResponse.json(disciplinas)
  } catch (error) {
    console.error('Erro ao buscar disciplinas:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    )
  }
}
