'use client'

import { useEffect, useState } from 'react'
import { Slider } from '@/components/ui/slider'
import type {
  Step3Data,
  DisciplinaSelecionada,
  DisciplinaRelevancia,
} from '@/types/planejamento'

interface Step3RelevanciaProps {
  disciplinasSelecionadas: DisciplinaSelecionada[]
  data?: Step3Data
  onChange: (data: Step3Data) => void
}

export function Step3Relevancia({
  disciplinasSelecionadas,
  data,
  onChange,
}: Step3RelevanciaProps) {
  const [relevancia, setRelevancia] = useState<DisciplinaRelevancia[]>(() => {
    if (data?.relevancia) return data.relevancia

    // Inicializar com valores padrão
    return disciplinasSelecionadas.map((disc) => ({
      disciplinaId: disc.id,
      nome: disc.nome,
      cor: disc.cor,
      importancia: 5,
      conhecimento: 5,
      percentual: 0,
    }))
  })

  // Calcular percentuais automaticamente
  useEffect(() => {
    const total = relevancia.reduce((acc, disc) => {
      // Fórmula: quanto maior a importância e menor o conhecimento, maior o peso
      const peso = disc.importancia * (11 - disc.conhecimento)
      return acc + peso
    }, 0)

    const novaRelevancia = relevancia.map((disc) => {
      const peso = disc.importancia * (11 - disc.conhecimento)
      const percentual = total > 0 ? Math.round((peso / total) * 100) : 0
      return { ...disc, percentual }
    })

    setRelevancia(novaRelevancia)
    onChange({ relevancia: novaRelevancia })
  }, [
    relevancia
      .map((d) => `${d.disciplinaId}-${d.importancia}-${d.conhecimento}`)
      .join(','),
  ])

  const atualizarDisciplina = (
    disciplinaId: string,
    campo: 'importancia' | 'conhecimento',
    valor: number,
  ) => {
    setRelevancia((prev) =>
      prev.map((disc) =>
        disc.disciplinaId === disciplinaId ? { ...disc, [campo]: valor } : disc,
      ),
    )
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <p className="text-muted-foreground mb-4">
          Defina a importância e seu nível de conhecimento em cada disciplina
          para distribuir o tempo de estudo
        </p>
        <div className="inline-flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-teal-500 rounded"></div>
            <span>Importância: maior prioridade</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded"></div>
            <span>Conhecimento: menor = mais tempo</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Coluna esquerda: Sliders */}
        <div className="space-y-6">
          {relevancia.map((disc) => (
            <div
              key={disc.disciplinaId}
              className="p-6 border-2 rounded-xl"
              style={{ borderColor: disc.cor }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: disc.cor }}
                >
                  {disc.nome.charAt(0).toUpperCase()}
                </div>
                <h3 className="font-bold text-lg">{disc.nome}</h3>
              </div>

              <div className="space-y-6">
                {/* Slider Importância */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium text-muted-foreground">
                      Importância
                    </label>
                    <span className="text-sm font-bold text-teal-600">
                      {disc.importancia}/10
                    </span>
                  </div>
                  <Slider
                    min={1}
                    max={10}
                    step={1}
                    value={[disc.importancia]}
                    onValueChange={([valor]) =>
                      atualizarDisciplina(
                        disc.disciplinaId,
                        'importancia',
                        valor,
                      )
                    }
                    className="[&_[role=slider]]:bg-teal-500 [&_[role=slider]]:border-teal-500"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>Baixa</span>
                    <span>Alta</span>
                  </div>
                </div>

                {/* Slider Conhecimento */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium text-muted-foreground">
                      Conhecimento
                    </label>
                    <span className="text-sm font-bold text-blue-600">
                      {disc.conhecimento}/10
                    </span>
                  </div>
                  <Slider
                    min={1}
                    max={10}
                    step={1}
                    value={[disc.conhecimento]}
                    onValueChange={([valor]) =>
                      atualizarDisciplina(
                        disc.disciplinaId,
                        'conhecimento',
                        valor,
                      )
                    }
                    className="[&_[role=slider]]:bg-blue-500 [&_[role=slider]]:border-blue-500"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>Baixo</span>
                    <span>Alto</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coluna direita: Preview de percentuais */}
        <div className="lg:sticky lg:top-0 lg:h-fit">
          <div className="p-6 bg-gray-50 rounded-xl border-2 border-gray-200">
            <h3 className="font-bold text-lg mb-4">Distribuição do Tempo</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Com base nos valores definidos, assim será a divisão do tempo de
              estudo:
            </p>

            <div className="space-y-3">
              {relevancia
                .sort((a, b) => b.percentual - a.percentual)
                .map((disc) => (
                  <div key={disc.disciplinaId} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-4 h-4 rounded"
                          style={{ backgroundColor: disc.cor }}
                        ></div>
                        <span className="font-medium text-sm">{disc.nome}</span>
                      </div>
                      <span
                        className="font-bold text-lg"
                        style={{ color: disc.cor }}
                      >
                        {disc.percentual}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-300"
                        style={{
                          backgroundColor: disc.cor,
                          width: `${disc.percentual}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
            </div>

            <div className="mt-6 p-4 bg-white border border-gray-200 rounded-lg">
              <p className="text-xs text-muted-foreground">
                <span className="font-semibold">💡 Dica:</span> Disciplinas com
                alta importância e baixo conhecimento receberão mais tempo de
                estudo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
