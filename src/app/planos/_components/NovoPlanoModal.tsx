'use client'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { ImageIcon, X } from 'lucide-react'
import { criarPlanoAction } from '@/app/actions/planos.actions'
import { toast } from 'sonner'
import Image from 'next/image'

interface NovoPlanoModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function NovoPlanoModal({ open, onOpenChange }: NovoPlanoModalProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [nome, setNome] = useState('')
  const [observacoes, setObservacoes] = useState('')
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImageFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemoveImage = () => {
    setImageFile(null)
    setImagePreview(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!nome.trim()) {
      toast.error('Por favor, informe o nome do plano')
      return
    }

    setLoading(true)
    try {
      await criarPlanoAction({
        nome: nome.trim(),
        observacoes: observacoes.trim() || undefined,
        emblema: imagePreview || undefined, // Salva a imagem como base64
      })

      toast.success('Plano criado com sucesso!')
      onOpenChange(false)
      setNome('')
      setObservacoes('')
      handleRemoveImage()
      router.refresh()
    } catch (error) {
      toast.error('Erro ao criar plano')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Seu Plano
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image Upload */}
          <div className="space-y-2">
            <div className="relative">
              {imagePreview ? (
                <div className="relative w-full h-40 bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src={imagePreview}
                    alt="Preview"
                    fill
                    className="object-cover"
                  />
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md hover:bg-gray-100"
                  >
                    <X className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              ) : (
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full h-40 bg-gray-100 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors"
                >
                  <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mb-2">
                    <ImageIcon className="w-8 h-8 text-gray-400" />
                  </div>
                  <span className="text-sm text-gray-600">alterar imagem</span>
                </div>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>
          </div>

          {/* Nome */}
          <div className="space-y-2">
            <Label htmlFor="nome" className="text-sm font-medium text-gray-700">
              NOME
            </Label>
            <Input
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Ex: Auditor Fiscal + Inglês"
              className="border-0 border-b-2 border-gray-300 rounded-none px-0 focus-visible:ring-0 focus-visible:border-teal-500"
              required
            />
          </div>

          {/* Observações */}
          <div className="space-y-2">
            <Label
              htmlFor="observacoes"
              className="text-sm font-medium text-gray-700"
            >
              OBSERVAÇÕES (OPCIONAL)
            </Label>
            <Textarea
              id="observacoes"
              value={observacoes}
              onChange={(e) => setObservacoes(e.target.value)}
              placeholder="Aqui você pode escrever alguma observação sobre o seu plano"
              className="border-0 border-b-2 border-gray-300 rounded-none px-0 focus-visible:ring-0 focus-visible:border-teal-500 resize-none min-h-[80px]"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={loading}
              className="border-teal-500 text-teal-600 hover:bg-teal-50"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              disabled={loading}
              className="bg-teal-500 hover:bg-teal-600 text-white"
            >
              {loading ? 'Criando...' : 'Avançar'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
