import { auth, currentUser } from '@clerk/nextjs/server'
import { db } from './db'

export async function getCurrentUser() {
  const session = await auth()
  if (!session.userId) return null

  const user = await db.user.findUnique({
    where: { id: session.userId },
  })

  if (!user) {
    // Create user if it doesn't exist
    const clerkUser = await currentUser()
    return await db.user.create({
      data: {
        id: session.userId,
        email: clerkUser?.emailAddresses?.[0]?.emailAddress ?? '',
        name: clerkUser?.firstName ?? '',
        imageUrl: clerkUser?.imageUrl ?? '',
      },
    })
  }

  return user
}

export async function getOrCreateUser() {
  const session = await auth()
  if (!session.userId) throw new Error('Unauthorized')

  try {
    // Try to find existing user
    const user = await db.user.findUnique({
      where: { id: session.userId },
    })

    if (user) return user

    // Create user if it doesn't exist
    const clerkUser = await currentUser()
    return await db.user.create({
      data: {
        id: session.userId,
        email: clerkUser?.emailAddresses?.[0]?.emailAddress ?? '',
        name: clerkUser?.firstName ?? '',
        imageUrl: clerkUser?.imageUrl ?? '',
      },
    })
  } catch (error) {
    console.error('Error getting/creating user:', error)
    throw new Error('Failed to get/create user')
  }
}
