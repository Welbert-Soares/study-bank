import { NextRequest, NextResponse } from 'next/server'
import { getOrCreateUser } from '@/lib/user'

export async function POST(req: NextRequest) {
  try {
    await getOrCreateUser()
    return NextResponse.json({ status: 'success' })
  } catch (error) {
    console.error('Error in verify-user route:', error)
    return NextResponse.json(
      { error: 'Failed to verify/create user' },
      { status: 500 },
    )
  }
}
