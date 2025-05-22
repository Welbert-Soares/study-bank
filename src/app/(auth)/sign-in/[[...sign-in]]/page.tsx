import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <SignIn
      appearance={{
        elements: {
          headerTitle: 'Entrar',
          footerActionText: 'Não tem uma conta?',
          footerActionLink: 'Cadastre-se',
        },
      }}
    />
  )
}
