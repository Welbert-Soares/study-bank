'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@clerk/nextjs'
import { toast } from 'sonner'

export function AuthCheck() {
  const { isLoaded, isSignedIn } = useAuth()
  const router = useRouter()
  const [isVerifying, setIsVerifying] = useState(false)
  const [hasVerified, setHasVerified] = useState(false)

  useEffect(() => {
    async function verifyUser() {
      // Evita verificações repetidas
      if (!isLoaded || !isSignedIn || isVerifying || hasVerified) return

      try {
        setIsVerifying(true)
        const response = await fetch('/api/auth/verify-user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        })

        if (!response.ok) {
          const error = await response.json()
          throw new Error(error.message || 'Failed to verify user')
        }

        // Marca como verificado e atualiza a página
        setHasVerified(true)
        router.refresh()
      } catch (error) {
        console.error('Error verifying user:', error)
        toast.error('Erro ao verificar usuário. Por favor, tente novamente.')
      } finally {
        setIsVerifying(false)
      }
    }

    verifyUser()
  }, [isLoaded, isSignedIn, router, hasVerified])

  return null
}
