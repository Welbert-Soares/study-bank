import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'

export function HeaderSection() {
  return (
    <Card className="border-none shadow-none bg-transparent">
      <CardHeader>
        <CardTitle className="text-4xl font-bold text-blue-900 mb-4">
          Banco do Brasil - Concurso TI
        </CardTitle>
        <div className="flex flex-wrap gap-4">
          <Button
            variant="default"
            size="lg"
            className="bg-white hover:bg-blue-50 text-blue-600 hover:text-blue-800 border shadow-sm hover:shadow-md transition-all"
            asChild
          >
            <a
              href="https://www.estrategiaconcursos.com.br/app/dashboard/cursos"
              target="_blank"
              rel="noopener noreferrer"
            >
              📚 Estudar
            </a>
          </Button>
          <Button
            variant="default"
            size="lg"
            className="bg-white hover:bg-blue-50 text-blue-600 hover:text-blue-800 border shadow-sm hover:shadow-md transition-all"
            asChild
          >
            <a
              href="https://acrobat.adobe.com/link/documents/files/?theme=dark&x_api_client_id=aweb_bookmark&uri=urn%3Aaaid%3Asc%3AUS%3Ac875d06a-30be-4b0f-8e92-bb152c1eb031"
              target="_blank"
              rel="noopener noreferrer"
            >
              📖 Continuar Estudos
            </a>
          </Button>
          <Button
            variant="default"
            size="lg"
            className="bg-white hover:bg-blue-50 text-blue-600 hover:text-blue-800 border shadow-sm hover:shadow-md transition-all"
            asChild
          >
            <a
              href="https://www.notion.so/154e31f45426811f95d3e4522fdf9298?v=154e31f45426810c9af4000c7a64e002"
              target="_blank"
              rel="noopener noreferrer"
            >
              📊 Kanban Board (Notion)
            </a>
          </Button>
          <Button
            variant="default"
            size="lg"
            className="bg-white hover:bg-blue-50 text-blue-600 hover:text-blue-800 border shadow-sm hover:shadow-md transition-all"
            asChild
          >
            <a
              href="https://quizlet.com/user/Welbert_Soares/folders/banco-do-brasil?i=6jvs8z&x=1xqt"
              target="_blank"
              rel="noopener noreferrer"
            >
              🗂️ Flashcards (Quizlet)
            </a>
          </Button>
          <Button
            variant="default"
            size="lg"
            className="bg-white hover:bg-blue-50 text-blue-600 hover:text-blue-800 border shadow-sm hover:shadow-md transition-all"
            asChild
          >
            <a href="/metricas">📈 Métricas Gerais</a>
          </Button>
        </div>
      </CardHeader>
    </Card>
  )
}
