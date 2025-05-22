import { NextRequest, NextResponse } from 'next/server'
import { getOrCreateUser } from '@/lib/user'
import { auth } from '@clerk/nextjs/server'
import { ZodError } from 'zod'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'

export async function POST(req: NextRequest) {
  try {
    // Verify if the request is authenticated
    const session = await auth()
    if (!session?.userId) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    // Try to get or create the user
    const user = await getOrCreateUser()

    return NextResponse.json({
      status: 'success',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    })
  } catch (error) {
    console.error('[verify-user] Error:', error)

    // Handle specific error types
    if (error instanceof ZodError) {
      return NextResponse.json(
        { message: 'Dados inválidos', errors: error.errors },
        { status: 400 },
      )
    }
    if (error instanceof PrismaClientKnownRequestError) {
      // Handle unique constraint violations
      if (error.code === 'P2002') {
        return NextResponse.json(
          { message: 'Usuário já existe' },
          { status: 409 },
        )
      }
    }

    // Generic error response
    return NextResponse.json(
      { message: 'Erro interno do servidor' },
      { status: 500 },
    )
  }
}
