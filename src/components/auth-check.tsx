'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@clerk/nextjs'

export function AuthCheck() {
  const { isLoaded, isSignedIn } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      // This will trigger our server action to create/verify the user
      fetch('/api/auth/verify-user', {
        method: 'POST',
      }).then(() => {
        // Refresh the page data after user verification
        router.refresh()
      })
    }
  }, [isLoaded, isSignedIn, router])

  return null
}
