import { useAuth } from '@clerk/nextjs'
import { db } from './db'

export function useCurrentUser() {
  const { userId } = useAuth()
  return userId
}

export async function getCurrentUserById(userId: string | null) {
  if (!userId) {
    return null
  }

  const user = await db.user.findUnique({
    where: {
      id: userId,
    },
  })

  return user
}

export async function createOrUpdateUser(
  id: string,
  email: string,
  name?: string | null,
  imageUrl?: string | null,
) {
  try {
    const user = await db.user.upsert({
      where: {
        id,
      },
      create: {
        id,
        email,
        name,
        imageUrl,
      },
      update: {
        email,
        name,
        imageUrl,
      },
    })
    return user
  } catch (error) {
    console.error('Error creating/updating user:', error)
    throw error
  }
}
