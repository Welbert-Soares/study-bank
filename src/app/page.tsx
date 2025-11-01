export const revalidate = 0 // Disable cache

export default async function Home() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">
            Bem-vindo ao Study Bank
          </h1>
          <p className="text-lg text-gray-600">Página inicial em refatoração</p>
        </div>
      </div>
    </div>
  )
}
