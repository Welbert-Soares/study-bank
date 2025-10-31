'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ArrowRight } from 'lucide-react'
import type { PlanoFormData } from '@/types/plano'

const planoInfoSchema = z.object({
  nome: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres'),
  emblema: z.string().url('URL inválida').optional().or(z.literal('')),
  edital: z.string().optional(),
  cargo: z.string().optional(),
  observacoes: z.string().optional(),
})

interface PlanoInfoStepProps {
  initialData: PlanoFormData
  onNext: (data: PlanoFormData) => void
  onBack: () => void
}

export function PlanoInfoStep({
  initialData,
  onNext,
  onBack,
}: PlanoInfoStepProps) {
  const form = useForm<PlanoFormData>({
    resolver: zodResolver(planoInfoSchema),
    defaultValues: initialData,
  })

  const onSubmit = (data: PlanoFormData) => {
    onNext(data)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Informações do Plano</h2>
        <p className="text-muted-foreground">
          Comece definindo as informações básicas do seu plano de estudos
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="nome"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome do Plano *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ex: Plano PF 2024"
                    {...field}
                    className="text-lg"
                  />
                </FormControl>
                <FormDescription>
                  Escolha um nome que identifique facilmente este plano
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="edital"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome do Edital</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ex: Polícia Federal, TRF 2ª Região, etc."
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Qual concurso ou edital você está estudando?
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cargo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cargo Pretendido</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ex: Agente de Polícia Federal, Analista Judiciário, etc."
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Para qual cargo você está se preparando?
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="emblema"
            render={({ field }) => (
              <FormItem>
                <FormLabel>URL do Emblema/Logo</FormLabel>
                <FormControl>
                  <Input
                    type="url"
                    placeholder="https://exemplo.com/logo.png"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  URL de uma imagem para representar o plano (opcional)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="observacoes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Observações</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Adicione notas ou observações sobre este plano..."
                    className="resize-none"
                    rows={4}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Informações adicionais que você queira guardar
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onBack}>
              Cancelar
            </Button>
            <Button type="submit" className="flex-1">
              Próximo: Adicionar Disciplinas
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
