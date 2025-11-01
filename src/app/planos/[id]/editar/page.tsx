'use client'

import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { ImageIcon, X, ArrowLeft } from 'lucide-react'
import {
  atualizarPlanoAction,
  obterPlanoPorIdAction,
} from '@/app/actions/planos.actions'
import { toast } from 'sonner'
import Image from 'next/image'
import Link from 'next/link'

interface PageProps {
  params: Promise<{ id: string }>
}

export default function EditarPlanoPage({ params }: PageProps) {
  const router = useRouter()
  const [id, setId] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const [nome, setNome] = useState('')
  const [edital, setEdital] = useState('')
  const [cargo, setCargo] = useState('')
  const [observacoes, setObservacoes] = useState('')
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    params.then(async (resolved) => {
      setId(resolved.id)

      try {
        const plano = await obterPlanoPorIdAction(resolved.id)
        setNome(plano.nome)
        setEdital(plano.edital || '')
        setCargo(plano.cargo || '')
        setObservacoes(plano.observacoes || '')
        if (plano.emblema) {
          setImagePreview(plano.emblema)
        }
      } catch (error) {
        console.error('Erro ao carregar plano:', error)
        toast.error('Erro ao carregar dados do plano')
      }
    })
  }, [params])

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
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!nome.trim()) {
      toast.error('Por favor, informe o nome do plano')
      return
    }

    setLoading(true)
    try {
      await atualizarPlanoAction(id, {
        nome: nome.trim(),
        edital: edital.trim() || undefined,
        cargo: cargo.trim() || undefined,
        observacoes: observacoes.trim() || undefined,
        emblema: imagePreview || undefined,
      })

      toast.success('Plano atualizado com sucesso!')
      router.push(`/planos/${id}`)
      router.refresh()
    } catch (error) {
      toast.error('Erro ao atualizar plano')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <Link href={`/planos/${id}`}>
          <Button variant="ghost" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
        </Link>
      </div>

      <Card className="p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Editar Plano</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image Upload */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700">
              IMAGEM DO PLANO
            </Label>
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
              NOME *
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

          {/* Edital */}
          <div className="space-y-2">
            <Label
              htmlFor="edital"
              className="text-sm font-medium text-gray-700"
            >
              EDITAL (OPCIONAL)
            </Label>
            <Input
              id="edital"
              value={edital}
              onChange={(e) => setEdital(e.target.value)}
              placeholder="Ex: Polícia Federal"
              className="border-0 border-b-2 border-gray-300 rounded-none px-0 focus-visible:ring-0 focus-visible:border-teal-500"
            />
          </div>

          {/* Cargo */}
          <div className="space-y-2">
            <Label
              htmlFor="cargo"
              className="text-sm font-medium text-gray-700"
            >
              CARGO (OPCIONAL)
            </Label>
            <Input
              id="cargo"
              value={cargo}
              onChange={(e) => setCargo(e.target.value)}
              placeholder="Ex: Agente de Polícia Federal"
              className="border-0 border-b-2 border-gray-300 rounded-none px-0 focus-visible:ring-0 focus-visible:border-teal-500"
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
              onClick={() => router.push(`/planos/${id}`)}
              disabled={loading}
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              disabled={loading}
              className="bg-teal-500 hover:bg-teal-600 text-white"
            >
              {loading ? 'Salvando...' : 'Salvar Alterações'}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}
