import { useAuth } from '@clerk/nextjs'

export function useUserId() {
  const { userId } = useAuth()
  if (!userId) {
    throw new Error('Not authenticated')
  }
  return userId
}
