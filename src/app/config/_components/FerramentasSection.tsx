'use client'

import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
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
import { Separator } from '@/components/ui/separator'
import {
  FerramentaPersonalizada,
  NovaFerramentaPersonalizada,
} from '@/types/ferramentas'
import {
  listarFerramentasAction,
  criarFerramentaAction,
  atualizarFerramentaAction,
  excluirFerramentaAction,
} from '@/app/actions/ferramentas.actions'

const ferramentaSchema = z.object({
  nome: z.string().min(1, 'O nome é obrigatório'),
  descricao: z.string().optional(),
  url: z.string().url('URL inválida'),
  tipo: z.string().min(1, 'O tipo é obrigatório'),
  icone: z.string().optional(),
  ordem: z.number().min(0),
})

type FerramentaForm = z.infer<typeof ferramentaSchema>

function transformFormData(data: FerramentaForm): NovaFerramentaPersonalizada {
  return {
    ...data,
    descricao: data.descricao || null,
    icone: data.icone || null,
  }
}

export function FerramentasSection() {
  const [ferramentas, setFerramentas] = useState<FerramentaPersonalizada[]>([])
  const [editando, setEditando] = useState<string | null>(null)

  const form = useForm<FerramentaForm>({
    resolver: zodResolver(ferramentaSchema),
    defaultValues: {
      nome: '',
      descricao: '',
      url: '',
      tipo: '',
      icone: '',
      ordem: 0,
    },
  })

  useEffect(() => {
    carregarFerramentas()
  }, [])

  async function carregarFerramentas() {
    const response = await listarFerramentasAction()
    if (response.data) {
      setFerramentas(response.data)
    }
  }

  async function onSubmit(formData: FerramentaForm) {
    try {
      const data = transformFormData(formData)
      if (editando) {
        await atualizarFerramentaAction(editando, data)
        toast.success('Ferramenta atualizada com sucesso!')
      } else {
        await criarFerramentaAction(data)
        toast.success('Ferramenta criada com sucesso!')
      }
      form.reset()
      setEditando(null)
      carregarFerramentas()
    } catch (error) {
      toast.error(
        'Erro ao salvar ferramenta. Por favor, tente novamente mais tarde.',
      )
    }
  }

  function editarFerramenta(ferramenta: FerramentaPersonalizada) {
    setEditando(ferramenta.id)
    // Extract only the form fields from the ferramenta object
    const formData: FerramentaForm = {
      nome: ferramenta.nome,
      descricao: ferramenta.descricao ?? '',
      url: ferramenta.url,
      tipo: ferramenta.tipo,
      icone: ferramenta.icone ?? '',
      ordem: ferramenta.ordem,
    }
    form.reset(formData)
  }

  async function excluirFerramenta(id: string) {
    try {
      await excluirFerramentaAction(id)
      toast.success('Ferramenta excluída com sucesso!')
      carregarFerramentas()
    } catch (error) {
      toast.error(
        'Erro ao excluir ferramenta. Por favor, tente novamente mais tarde.',
      )
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>🔧 Ferramentas Personalizadas</CardTitle>
        <CardDescription>
          Configure os links das suas ferramentas favoritas que aparecerão na
          página inicial
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="nome"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: Meu Kanban" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="descricao"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição (opcional)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Uma breve descrição da ferramenta"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>URL</FormLabel>
                  <FormControl>
                    <Input placeholder="https://..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tipo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipo</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: kanban, estudar, etc" {...field} />
                  </FormControl>
                  <FormDescription>
                    Categorize sua ferramenta (ex: kanban, flashcards, estudar)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="icone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ícone (opcional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: 📚" {...field} />
                  </FormControl>
                  <FormDescription>
                    Use emojis ou códigos de ícones
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="ordem"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ordem de exibição</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={0}
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-2">
              <Button type="submit">
                {editando ? 'Atualizar' : 'Adicionar'} Ferramenta
              </Button>
              {editando && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setEditando(null)
                    form.reset()
                  }}
                >
                  Cancelar
                </Button>
              )}
            </div>
          </form>
        </Form>

        <Separator />

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Ferramentas Configuradas</h3>
          <div className="grid gap-4">
            {ferramentas.map((ferramenta) => (
              <div
                key={ferramenta.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div>
                  <h4 className="font-medium">
                    {ferramenta.icone} {ferramenta.nome}
                  </h4>
                  <p className="text-sm text-gray-500">{ferramenta.url}</p>
                  {ferramenta.descricao && (
                    <p className="text-sm text-gray-500">
                      {ferramenta.descricao}
                    </p>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => editarFerramenta(ferramenta)}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => excluirFerramenta(ferramenta.id)}
                  >
                    Excluir
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
