'use client'

import { useEffect, useState } from 'react'
import { Check } from 'lucide-react'
import type { Step2Data, DisciplinaSelecionada } from '@/types/planejamento'
import type { Disciplina } from '@prisma/client'

interface Step2DisciplinasProps {
  planoId: string
  data?: Step2Data
  onChange: (data: Step2Data) => void
}

export function Step2Disciplinas({
  planoId,
  data,
  onChange,
}: Step2DisciplinasProps) {
  const [disciplinas, setDisciplinas] = useState<Disciplina[]>([])
  const [loading, setLoading] = useState(true)
  const [selecionadas, setSelecionadas] = useState<DisciplinaSelecionada[]>(
    data?.disciplinas || [],
  )

  useEffect(() => {
    async function carregarDisciplinas() {
      try {
        setLoading(true)
        const { listarDisciplinasAction } = await import(
          '@/app/actions/planos.actions'
        )
        const dados = await listarDisciplinasAction(planoId)
        setDisciplinas(dados)
      } catch (error) {
        console.error('Erro ao carregar disciplinas:', error)
      } finally {
        setLoading(false)
      }
    }

    carregarDisciplinas()
  }, [planoId])

  const toggleDisciplina = (disciplina: Disciplina) => {
    const jaExiste = selecionadas.find((d) => d.id === disciplina.id)

    let novaSelecao: DisciplinaSelecionada[]
    if (jaExiste) {
      novaSelecao = selecionadas.filter((d) => d.id !== disciplina.id)
    } else {
      novaSelecao = [
        ...selecionadas,
        {
          id: disciplina.id,
          nome: disciplina.nome,
          cor: disciplina.cor || '#3DD9B3',
        },
      ]
    }

    setSelecionadas(novaSelecao)
    onChange({ disciplinas: novaSelecao })
  }

  const estaSelecionada = (id: string) => selecionadas.some((d) => d.id === id)

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500"></div>
      </div>
    )
  }

  if (disciplinas.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">
          Nenhuma disciplina encontrada neste plano. Adicione disciplinas antes
          de criar um planejamento.
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col space-y-6">
      <div className="text-center mb-8">
        <p className="text-muted-foreground mb-2">
          Selecione as disciplinas que farão parte do planejamento
        </p>
        <p className="text-sm font-medium text-teal-600">
          {selecionadas.length} disciplina{selecionadas.length !== 1 ? 's' : ''}{' '}
          selecionada
          {selecionadas.length !== 1 ? 's' : ''}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {disciplinas.map((disciplina) => {
          const selecionada = estaSelecionada(disciplina.id)
          const cor = disciplina.cor || '#3DD9B3'

          return (
            <button
              key={disciplina.id}
              onClick={() => toggleDisciplina(disciplina)}
              className={`relative p-4 rounded-xl border-2 transition-all hover:shadow-md ${
                selecionada
                  ? 'border-2 shadow-md'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              style={{
                borderColor: selecionada ? cor : undefined,
                backgroundColor: selecionada ? `${cor}15` : undefined,
              }}
            >
              <div className="flex flex-col items-center gap-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                  style={{ backgroundColor: cor }}
                >
                  {disciplina.nome.charAt(0).toUpperCase()}
                </div>
                <span className="font-medium text-sm text-center line-clamp-2">
                  {disciplina.nome}
                </span>
              </div>

              {selecionada && (
                <div
                  className="absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: cor }}
                >
                  <Check className="w-4 h-4 text-white" />
                </div>
              )}
            </button>
          )
        })}
      </div>

      {selecionadas.length > 0 && (
        <div className="mt-8 p-4 bg-teal-50 border border-teal-200 rounded-lg">
          <p className="text-sm text-teal-800">
            <span className="font-semibold">✨ Ótimo!</span> Você selecionou{' '}
            {selecionadas.length} disciplina
            {selecionadas.length !== 1 ? 's' : ''}. No próximo passo, vamos
            definir quanto tempo dedicar a cada uma.
          </p>
        </div>
      )}
    </div>
  )
}
