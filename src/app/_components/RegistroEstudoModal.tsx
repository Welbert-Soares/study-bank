'use client'

import { useState, useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Calendar, Plus, Minus } from 'lucide-react'
import { listarDisciplinasAction } from '@/app/actions/planos.actions'
import type { Disciplina } from '@prisma/client'

interface RegistroEstudoModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  planoId: string
}

type TipoRegistro = 'HOJE' | 'ONTEM' | 'OUTRO'

export function RegistroEstudoModal({
  open,
  onOpenChange,
  planoId,
}: RegistroEstudoModalProps) {
  const [tipoRegistro, setTipoRegistro] = useState<TipoRegistro>('HOJE')
  const [dataOutro, setDataOutro] = useState('')
  const [categoria, setCategoria] = useState('')
  const [disciplina, setDisciplina] = useState('')
  const [topico, setTopico] = useState('')
  const [tempoEstudo, setTempoEstudo] = useState('00:00:00')
  const [material, setMaterial] = useState('')
  const [teoriaFinalizada, setTeoriaFinalizada] = useState(false)
  const [programarRevisoes, setProgramarRevisoes] = useState(false)
  const [questoesAcertos, setQuestoesAcertos] = useState(0)
  const [questoesErros, setQuestoesErros] = useState(0)
  const [paginasInicio, setPaginasInicio] = useState(0)
  const [paginasFim, setPaginasFim] = useState(0)
  const [videoAulas, setVideoAulas] = useState([
    { titulo: '', inicio: '00:00:00', fim: '00:00:00' },
  ])
  const [comentarios, setComentarios] = useState('')
  const [salvarCriarNovo, setSalvarCriarNovo] = useState(false)

  // Estado para disciplinas
  const [disciplinas, setDisciplinas] = useState<Disciplina[]>([])
  const [isLoadingDisciplinas, setIsLoadingDisciplinas] = useState(true)

  // Carregar disciplinas do plano
  useEffect(() => {
    async function carregarDisciplinas() {
      if (!open || !planoId) return

      try {
        setIsLoadingDisciplinas(true)
        const disciplinasData = await listarDisciplinasAction(planoId)
        setDisciplinas(disciplinasData)
      } catch (error) {
        console.error('Erro ao carregar disciplinas:', error)
      } finally {
        setIsLoadingDisciplinas(false)
      }
    }

    carregarDisciplinas()
  }, [open, planoId])

  // Função para obter a data baseada no tipo de registro
  const getDataEstudo = (): string => {
    const hoje = new Date()

    if (tipoRegistro === 'HOJE') {
      return hoje.toISOString().split('T')[0]
    } else if (tipoRegistro === 'ONTEM') {
      const ontem = new Date(hoje)
      ontem.setDate(ontem.getDate() - 1)
      return ontem.toISOString().split('T')[0]
    } else {
      return dataOutro
    }
  }

  const handleAddVideoaula = () => {
    setVideoAulas([
      ...videoAulas,
      { titulo: '', inicio: '00:00:00', fim: '00:00:00' },
    ])
  }

  const handleRemoveVideoaula = (index: number) => {
    setVideoAulas(videoAulas.filter((_, i) => i !== index))
  }

  const handleSalvar = async () => {
    // TODO: Implementar lógica de salvamento
    const dataEstudo = getDataEstudo()
    console.log('Salvando estudo...', { dataEstudo, tipoRegistro })
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto p-8">
        <DialogHeader className="pb-4">
          <DialogTitle className="text-xl font-bold text-gray-800">
            Registro de Estudo
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-5">
          {/* Tipo de Registro */}
          <div className="flex items-center gap-3">
            <Calendar className="h-5 w-5 text-gray-600" />
            <Button
              size="sm"
              variant={tipoRegistro === 'HOJE' ? 'default' : 'outline'}
              onClick={() => setTipoRegistro('HOJE')}
              className={
                tipoRegistro === 'HOJE'
                  ? 'bg-teal-500 hover:bg-teal-600 text-white'
                  : ''
              }
            >
              HOJE
            </Button>
            <Button
              size="sm"
              variant={tipoRegistro === 'ONTEM' ? 'default' : 'outline'}
              onClick={() => setTipoRegistro('ONTEM')}
              className={
                tipoRegistro === 'ONTEM'
                  ? 'bg-teal-500 hover:bg-teal-600 text-white'
                  : ''
              }
            >
              ONTEM
            </Button>
            <Button
              size="sm"
              variant={tipoRegistro === 'OUTRO' ? 'default' : 'outline'}
              onClick={() => setTipoRegistro('OUTRO')}
              className={
                tipoRegistro === 'OUTRO'
                  ? 'bg-teal-500 hover:bg-teal-600 text-white'
                  : ''
              }
            >
              OUTRO
            </Button>

            {/* Campo de Data quando OUTRO é selecionado */}
            {tipoRegistro === 'OUTRO' && (
              <Input
                type="date"
                value={dataOutro}
                onChange={(e) => setDataOutro(e.target.value)}
                className="h-9 w-auto border-0 border-b-2 border-teal-400 rounded-none focus-visible:ring-0 focus-visible:border-teal-500"
              />
            )}
          </div>

          {/* Categoria, Disciplina e Tempo */}
          <div className="grid grid-cols-3 gap-6">
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold text-gray-600 uppercase">
                Categoria
              </Label>
              <Select value={categoria} onValueChange={setCategoria}>
                <SelectTrigger className="h-10 border-0 border-b-2 border-gray-300 rounded-none focus:ring-0 focus:border-teal-400">
                  <SelectValue placeholder="Selecione..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="teoria">Teoria</SelectItem>
                  <SelectItem value="revisao">Revisão</SelectItem>
                  <SelectItem value="questoes">Questões</SelectItem>
                  <SelectItem value="leitura_de_lei">Leitura de Lei</SelectItem>
                  <SelectItem value="jurisprudencia">Jurisprudência</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <Label className="text-xs font-semibold text-gray-600 uppercase">
                Disciplina
              </Label>
              <Select value={disciplina} onValueChange={setDisciplina}>
                <SelectTrigger className="h-10 border-0 border-b-2 border-gray-300 rounded-none focus:ring-0 focus:border-teal-400">
                  <SelectValue placeholder="Selecione..." />
                </SelectTrigger>
                <SelectContent>
                  {isLoadingDisciplinas ? (
                    <SelectItem value="loading" disabled>
                      Carregando...
                    </SelectItem>
                  ) : disciplinas.length === 0 ? (
                    <SelectItem value="empty" disabled>
                      Nenhuma disciplina cadastrada
                    </SelectItem>
                  ) : (
                    disciplinas.map((disc) => (
                      <SelectItem key={disc.id} value={disc.id}>
                        {disc.nome}
                      </SelectItem>
                    ))
                  )}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <Label className="text-xs font-semibold text-gray-600 uppercase">
                Tempo de Estudo
              </Label>
              <Input
                type="time"
                value={tempoEstudo}
                onChange={(e) => setTempoEstudo(e.target.value)}
                step="1"
                className="h-10 border-0 border-b-2 border-teal-400 rounded-none focus-visible:ring-0 focus-visible:border-teal-500"
              />
            </div>
          </div>

          {/* Tópico */}
          <div className="space-y-1.5">
            <Label className="text-xs font-semibold text-gray-600 uppercase">
              Tópico
            </Label>
            <Select value={topico} onValueChange={setTopico}>
              <SelectTrigger className="h-10 border-0 border-b-2 border-gray-300 rounded-none focus:ring-0 focus:border-teal-400">
                <SelectValue placeholder="Selecione..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="topico1">Tópico 1</SelectItem>
                <SelectItem value="topico2">Tópico 2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Material */}
          <div className="space-y-1.5">
            <Label className="text-xs font-semibold text-gray-600 uppercase">
              Material
            </Label>
            <Input
              placeholder="Ex.: Aula 01"
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
              className="h-10 border-0 border-b-2 border-teal-400 rounded-none focus-visible:ring-0 focus-visible:border-teal-500"
            />
          </div>

          {/* Checkboxes */}
          <div className="flex gap-8">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="teoria"
                checked={teoriaFinalizada}
                onCheckedChange={(checked) =>
                  setTeoriaFinalizada(checked as boolean)
                }
              />
              <Label
                htmlFor="teoria"
                className="cursor-pointer text-sm font-normal text-gray-700"
              >
                TEORIA FINALIZADA
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="revisoes"
                checked={programarRevisoes}
                onCheckedChange={(checked) =>
                  setProgramarRevisoes(checked as boolean)
                }
              />
              <Label
                htmlFor="revisoes"
                className="cursor-pointer text-sm font-normal text-gray-700"
              >
                PROGRAMAR REVISÕES
              </Label>
            </div>
          </div>

          {/* Questões, Páginas e Vídeoaulas */}
          <div className="grid grid-cols-3 gap-6">
            {/* Questões */}
            <div className="space-y-3 p-4 border rounded-md bg-teal-50/30 border-teal-200">
              <Label className="text-xs font-semibold text-gray-600 uppercase">
                Questões
              </Label>
              <div>
                <Label className="text-[11px] text-gray-500 uppercase">
                  Acertos / Erros
                </Label>
                <div className="flex gap-3 mt-1">
                  <Input
                    type="number"
                    min="0"
                    value={questoesAcertos}
                    onChange={(e) => setQuestoesAcertos(Number(e.target.value))}
                    className="text-center h-10 bg-white border-0 border-b-2 border-gray-300 rounded-none focus-visible:ring-0 focus-visible:border-teal-400"
                  />
                  <Input
                    type="number"
                    min="0"
                    value={questoesErros}
                    onChange={(e) => setQuestoesErros(Number(e.target.value))}
                    className="text-center h-10 bg-white border-0 border-b-2 border-gray-300 rounded-none focus-visible:ring-0 focus-visible:border-teal-400"
                  />
                </div>
              </div>
              <Button
                type="button"
                size="sm"
                className="w-full h-8 bg-teal-500 hover:bg-teal-600 text-white text-xs"
              >
                <Plus className="h-3 w-3 mr-1" />
                Adicionar
              </Button>
            </div>

            {/* Páginas */}
            <div className="space-y-3 p-4 border rounded-md bg-teal-50/30 border-teal-200">
              <Label className="text-xs font-semibold text-gray-600 uppercase">
                Páginas
              </Label>
              <div>
                <Label className="text-[11px] text-gray-500 uppercase">
                  Início / Fim
                </Label>
                <div className="flex gap-3 mt-1">
                  <Input
                    type="number"
                    min="0"
                    value={paginasInicio}
                    onChange={(e) => setPaginasInicio(Number(e.target.value))}
                    className="text-center h-10 bg-white border-0 border-b-2 border-gray-300 rounded-none focus-visible:ring-0 focus-visible:border-teal-400"
                  />
                  <Input
                    type="number"
                    min="0"
                    value={paginasFim}
                    onChange={(e) => setPaginasFim(Number(e.target.value))}
                    className="text-center h-10 bg-white border-0 border-b-2 border-gray-300 rounded-none focus-visible:ring-0 focus-visible:border-teal-400"
                  />
                </div>
              </div>
              <Button
                type="button"
                size="sm"
                className="w-full h-8 bg-teal-500 hover:bg-teal-600 text-white text-xs"
              >
                <Plus className="h-3 w-3 mr-1" />
                Adicionar
              </Button>
            </div>

            {/* Vídeoaulas */}
            <div className="space-y-3 p-4 border rounded-md bg-teal-50/30 border-teal-200">
              <Label className="text-xs font-semibold text-gray-600 uppercase">
                Vídeoaulas
              </Label>
              <div>
                <Label className="text-[11px] text-gray-500 uppercase">
                  Título / Início / Fim
                </Label>
                {videoAulas.map((video, index) => (
                  <div key={index} className="space-y-2 mt-2">
                    <Input
                      placeholder="Vídeo 01"
                      value={video.titulo}
                      onChange={(e) => {
                        const newVideos = [...videoAulas]
                        newVideos[index].titulo = e.target.value
                        setVideoAulas(newVideos)
                      }}
                      className="text-xs h-9 bg-white border-0 border-b-2 border-gray-300 rounded-none focus-visible:ring-0 focus-visible:border-teal-400"
                    />
                    <div className="flex gap-2">
                      <Input
                        type="time"
                        value={video.inicio}
                        onChange={(e) => {
                          const newVideos = [...videoAulas]
                          newVideos[index].inicio = e.target.value
                          setVideoAulas(newVideos)
                        }}
                        step="1"
                        className="text-xs h-9 bg-white border-0 border-b-2 border-gray-300 rounded-none focus-visible:ring-0 focus-visible:border-teal-400"
                      />
                      <Input
                        type="time"
                        value={video.fim}
                        onChange={(e) => {
                          const newVideos = [...videoAulas]
                          newVideos[index].fim = e.target.value
                          setVideoAulas(newVideos)
                        }}
                        step="1"
                        className="text-xs h-9 bg-white border-0 border-b-2 border-gray-300 rounded-none focus-visible:ring-0 focus-visible:border-teal-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <Button
                type="button"
                size="sm"
                onClick={handleAddVideoaula}
                className="w-full h-8 bg-teal-500 hover:bg-teal-600 text-white text-xs"
              >
                <Plus className="h-3 w-3 mr-1" />
                Adicionar
              </Button>
            </div>
          </div>

          {/* Comentários */}
          <div className="space-y-1.5">
            <Label className="text-xs font-semibold text-gray-600 uppercase">
              Comentários
            </Label>
            <Textarea
              placeholder="Adicione observações sobre o estudo..."
              value={comentarios}
              onChange={(e) => setComentarios(e.target.value)}
              rows={3}
              className="resize-none border-gray-300 focus-visible:border-teal-400"
            />
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-3 border-t">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="salvar-novo"
                checked={salvarCriarNovo}
                onCheckedChange={(checked) =>
                  setSalvarCriarNovo(checked as boolean)
                }
              />
              <Label
                htmlFor="salvar-novo"
                className="cursor-pointer text-sm font-normal text-gray-700"
              >
                SALVAR E CRIAR NOVO
              </Label>
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => onOpenChange(false)}
                className="px-6"
              >
                Cancelar
              </Button>
              <Button
                onClick={handleSalvar}
                className="bg-teal-500 hover:bg-teal-600 text-white px-8"
              >
                Salvar
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
