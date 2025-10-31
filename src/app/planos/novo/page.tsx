'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { PlanoInfoStep } from './_components/PlanoInfoStep'
import { DisciplinasStep } from './_components/DisciplinasStep'
import { TopicosStep } from './_components/TopicosStep'
import type { PlanoFormData, DisciplinaFormData } from '@/types/plano'
import {
  criarPlanoAction,
  criarDisciplinaAction,
  criarTopicosEmLoteAction,
} from '@/app/actions/planos.actions'
import { toast } from 'sonner'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

interface DisciplinaComTopicos extends DisciplinaFormData {
  topicos: Array<{ titulo: string; conteudo?: string }>
}

export default function NovoPlanoPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Dados do wizard
  const [planoData, setPlanoData] = useState<PlanoFormData>({
    nome: '',
    emblema: '',
    edital: '',
    cargo: '',
    observacoes: '',
  })

  const [disciplinas, setDisciplinas] = useState<DisciplinaComTopicos[]>([])

  const steps = [
    { id: 1, name: 'Informações Básicas', icon: '📋' },
    { id: 2, name: 'Disciplinas', icon: '📚' },
    { id: 3, name: 'Tópicos', icon: '✏️' },
  ]

  const handlePlanoInfoNext = (data: PlanoFormData) => {
    setPlanoData(data)
    setCurrentStep(2)
  }

  const handleDisciplinasNext = (disciplinasData: DisciplinaComTopicos[]) => {
    setDisciplinas(disciplinasData)
    setCurrentStep(3)
  }

  const handleFinalizar = async (
    disciplinasComTopicos: DisciplinaComTopicos[],
  ) => {
    setIsSubmitting(true)
    try {
      // 1. Criar o plano
      const plano = await criarPlanoAction(planoData)

      // 2. Criar cada disciplina com seus tópicos
      for (const disciplina of disciplinasComTopicos) {
        const { topicos, ...disciplinaData } = disciplina

        // Criar disciplina
        const disciplinaCriada = await criarDisciplinaAction({
          ...disciplinaData,
          planoId: plano.id,
        })

        // Criar tópicos da disciplina
        if (topicos.length > 0) {
          await criarTopicosEmLoteAction(disciplinaCriada.id, topicos)
        }
      }

      toast.success('Plano criado com sucesso!')
      router.push(`/planos/${plano.id}`)
    } catch (error) {
      console.error('Erro ao criar plano:', error)
      toast.error('Erro ao criar plano. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full min-h-screen p-4 md:p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <Button
            variant="ghost"
            size="sm"
            className="mb-4"
            onClick={() => router.push('/planos')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Planos
          </Button>
          <h1 className="text-3xl font-bold">Criar Novo Plano de Estudos</h1>
          <p className="text-muted-foreground mt-1">
            Configure seu plano, adicione disciplinas e organize seus tópicos
          </p>
        </div>

        {/* Progress Steps */}
        <Card className="p-6">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div
                    className={cn(
                      'w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold transition-all',
                      currentStep === step.id
                        ? 'bg-primary text-white scale-110'
                        : currentStep > step.id
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-200 text-gray-500',
                    )}
                  >
                    {currentStep > step.id ? (
                      <Check className="w-6 h-6" />
                    ) : (
                      step.icon
                    )}
                  </div>
                  <div className="mt-2 text-center">
                    <p
                      className={cn(
                        'text-sm font-medium',
                        currentStep === step.id
                          ? 'text-primary'
                          : currentStep > step.id
                          ? 'text-green-600'
                          : 'text-gray-500',
                      )}
                    >
                      {step.name}
                    </p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={cn(
                      'flex-1 h-1 mx-4 rounded transition-all',
                      currentStep > step.id ? 'bg-green-500' : 'bg-gray-200',
                    )}
                  />
                )}
              </div>
            ))}
          </div>
        </Card>

        {/* Step Content */}
        <Card className="p-6">
          {currentStep === 1 && (
            <PlanoInfoStep
              initialData={planoData}
              onNext={handlePlanoInfoNext}
              onBack={() => router.push('/planos')}
            />
          )}

          {currentStep === 2 && (
            <DisciplinasStep
              initialData={disciplinas}
              onNext={handleDisciplinasNext}
              onBack={() => setCurrentStep(1)}
            />
          )}

          {currentStep === 3 && (
            <TopicosStep
              disciplinas={disciplinas}
              onFinish={handleFinalizar}
              onBack={() => setCurrentStep(2)}
              isSubmitting={isSubmitting}
            />
          )}
        </Card>
      </div>
    </div>
  )
}
