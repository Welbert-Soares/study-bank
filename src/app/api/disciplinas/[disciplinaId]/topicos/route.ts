import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { prisma } from '@/lib/prisma'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ disciplinaId: string }> },
) {
  try {
    const session = await auth()
    if (!session.userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Await params in Next.js 15
    const { disciplinaId } = await params

    const topicos = await prisma.topico.findMany({
      where: {
        disciplinaId: disciplinaId,
        disciplina: {
          userId: session.userId,
        },
      },
      select: {
        id: true,
        titulo: true,
        ordem: true,
      },
      orderBy: {
        ordem: 'asc',
      },
    })

    return NextResponse.json(topicos)
  } catch (error) {
    console.error('Erro ao buscar tópicos:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    )
  }
}
