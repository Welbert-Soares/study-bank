'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { StudyOptionsModal } from '@/components/ui/study-options-modal'
import { listarFerramentasAction } from '@/app/actions/ferramentas.actions'
import { FerramentaPersonalizada } from '@/types/ferramentas'

export function HeaderSection() {
  const [showStudyOptions, setShowStudyOptions] = useState(false)
  const [ferramentas, setFerramentas] = useState<FerramentaPersonalizada[]>([])

  useEffect(() => {
    async function carregarFerramentas() {
      const response = await listarFerramentasAction()
      if (response.data) {
        setFerramentas(response.data)
      }
    }
    carregarFerramentas()
  }, [])

  return (
    <Card className="border-none shadow-none bg-transparent">
      <CardHeader>
        <CardTitle className="text-4xl font-bold text-blue-900 mb-4">
          Banco do Brasil - Concurso TI
        </CardTitle>
        <div className="flex flex-wrap gap-4">
          {ferramentas.map((ferramenta) => (
            <Button
              key={ferramenta.id}
              variant="default"
              size="lg"
              className="bg-white hover:bg-blue-50 text-blue-600 hover:text-blue-800 border shadow-sm hover:shadow-md transition-all"
              asChild
            >
              <a
                href={ferramenta.url}
                target="_blank"
                rel="noopener noreferrer"
                title={ferramenta.descricao || ferramenta.nome}
              >
                {ferramenta.icone} {ferramenta.nome}
              </a>
            </Button>
          ))}
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
      <StudyOptionsModal
        isOpen={showStudyOptions}
        onClose={() => setShowStudyOptions(false)}
      />
    </Card>
  )
}
