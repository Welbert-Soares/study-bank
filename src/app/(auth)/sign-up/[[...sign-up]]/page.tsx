import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <SignUp
      appearance={{
        elements: {
          headerTitle: 'Criar conta',
          footerActionText: 'Já tem uma conta?',
          footerActionLink: 'Entre aqui',
        },
      }}
    />
  )
}
