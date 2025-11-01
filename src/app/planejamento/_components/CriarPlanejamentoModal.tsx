'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type {
  WizardData,
  Step1Data,
  Step2Data,
  Step3Data,
  Step4Data,
} from '@/types/planejamento'
import { Step1TipoSelecao } from './wizard/Step1TipoSelecao'
import { Step2Disciplinas } from './wizard/Step2Disciplinas'
import { Step3Relevancia } from './wizard/Step3Relevancia'
import { Step4Horarios } from './wizard/Step4Horarios'

interface CriarPlanejamentoModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  planoId: string // ID do plano ativo
}

const STEPS = [
  { id: 1, title: 'Organização', description: 'Como você quer organizar?' },
  {
    id: 2,
    title: 'Disciplinas',
    description: 'Quais matérias serão estudadas?',
  },
  { id: 3, title: 'Relevância', description: 'Como dividir o tempo?' },
  { id: 4, title: 'Horários', description: 'Quando você pode estudar?' },
]

export function CriarPlanejamentoModal({
  open,
  onOpenChange,
  planoId,
}: CriarPlanejamentoModalProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [wizardData, setWizardData] = useState<Partial<WizardData>>({
    step1: { tipo: 'semanal' }, // Fixo em semanal por enquanto
  })

  const updateStepData = <T extends keyof WizardData>(
    step: T,
    data: WizardData[T],
  ) => {
    setWizardData((prev) => ({ ...prev, [step]: data }))
  }

  const handleNext = () => {
    if (currentStep < STEPS.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleFinish = async () => {
    // TODO: Implementar criação do planejamento
    console.log('Dados do wizard:', wizardData)
    onOpenChange(false)
  }

  const canGoNext = () => {
    switch (currentStep) {
      case 1:
        return !!wizardData.step1?.tipo
      case 2:
        return (wizardData.step2?.disciplinas?.length ?? 0) > 0
      case 3:
        return (wizardData.step3?.relevancia?.length ?? 0) > 0
      case 4:
        const step4 = wizardData.step4
        return (
          step4 &&
          step4.horarios.some((h) => h.ativo) &&
          step4.tempoMinimo > 0 &&
          step4.tempoMaximo > 0 &&
          step4.tempoMaximo >= step4.tempoMinimo
        )
      default:
        return false
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="!max-w-[1100px] w-[95vw] sm:!max-w-[1100px] max-h-[85vh] overflow-y-auto p-8">
        <DialogHeader className="text-center mb-6">
          <DialogTitle className="text-2xl font-bold">
            Criar Planejamento
          </DialogTitle>
        </DialogHeader>

        {/* Stepper */}
        <div className="flex items-center justify-between mb-8 px-4">
          {STEPS.map((step, index) => (
            <div key={step.id} className="flex items-center flex-1">
              <div className="flex flex-col items-center gap-1.5 flex-1">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-base transition-colors ${
                    currentStep >= step.id
                      ? 'bg-teal-500 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {String(step.id).padStart(2, '0')}
                </div>
                <span
                  className={`text-xs font-medium whitespace-nowrap ${
                    currentStep >= step.id ? 'text-teal-500' : 'text-gray-500'
                  }`}
                >
                  {step.title}
                </span>
              </div>
              {index < STEPS.length - 1 && (
                <div
                  className={`h-0.5 flex-1 mx-2 transition-colors ${
                    currentStep > step.id ? 'bg-teal-500' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Conteúdo das etapas */}
        <div className="mb-6">
          {currentStep === 1 && (
            <Step1TipoSelecao
              data={wizardData.step1}
              onChange={(data: Step1Data) => updateStepData('step1', data)}
            />
          )}
          {currentStep === 2 && (
            <Step2Disciplinas
              planoId={planoId}
              data={wizardData.step2}
              onChange={(data: Step2Data) => updateStepData('step2', data)}
            />
          )}
          {currentStep === 3 && wizardData.step2 && (
            <Step3Relevancia
              disciplinasSelecionadas={wizardData.step2.disciplinas}
              data={wizardData.step3}
              onChange={(data: Step3Data) => updateStepData('step3', data)}
            />
          )}
          {currentStep === 4 && (
            <Step4Horarios
              data={wizardData.step4}
              onChange={(data: Step4Data) => updateStepData('step4', data)}
            />
          )}
        </div>

        {/* Botões de navegação */}
        <div className="flex justify-between pt-4 border-t">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 1}
            className="px-6 py-5 text-sm font-medium border-2 border-teal-500 text-teal-600 hover:bg-teal-50"
          >
            Voltar
          </Button>

          {currentStep < STEPS.length ? (
            <Button
              onClick={handleNext}
              disabled={!canGoNext()}
              className="px-6 py-5 text-sm font-medium bg-teal-500 hover:bg-teal-600"
            >
              Próximo
            </Button>
          ) : (
            <Button
              onClick={handleFinish}
              disabled={!canGoNext()}
              className="px-6 py-5 text-sm font-medium bg-teal-500 hover:bg-teal-600"
            >
              Concluir
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
