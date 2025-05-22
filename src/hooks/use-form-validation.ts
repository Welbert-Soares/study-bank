import { useState } from 'react'
import { ZodError } from 'zod'

export function useFormValidation() {
  const [errors, setErrors] = useState<{ [key: string]: string[] }>({})

  const handleZodError = (error: unknown) => {
    if (error instanceof ZodError) {
      const formattedErrors = error.errors.reduce((acc, curr) => {
        const path = curr.path[0] as string
        if (!acc[path]) {
          acc[path] = []
        }
        acc[path].push(curr.message)
        return acc
      }, {} as { [key: string]: string[] })

      setErrors(formattedErrors)
      return true
    }
    return false
  }

  const clearErrors = () => {
    setErrors({})
  }

  const getFieldError = (field: string): string | undefined => {
    return errors[field]?.[0]
  }

  return {
    errors,
    handleZodError,
    clearErrors,
    getFieldError,
  }
}
