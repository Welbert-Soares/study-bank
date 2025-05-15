'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

interface StudyOptionsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function StudyOptionsModal({ isOpen, onClose }: StudyOptionsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">
            Escolha o tipo de estudo
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 mt-4">
          <Button
            variant="outline"
            className="p-8 text-lg hover:bg-blue-50"
            onClick={() => {
              window.open(
                'https://www.estrategiaconcursos.com.br/app/dashboard/cursos',
                '_blank',
              )
              onClose()
            }}
          >
            📖 Estudar Passo a Passo
          </Button>
          <Button
            variant="outline"
            className="p-8 text-lg hover:bg-green-50"
            onClick={() => {
              window.open(
                'https://www.estrategiaconcursos.com.br/app/dashboard/cursos',
                '_blank',
              )
              onClose()
            }}
          >
            📚 Estudar Curso Regular
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
