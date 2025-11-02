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
import { toast } from 'sonner'
import { registrarEstudoAction } from '@/app/actions/estudos.actions'
import { marcarSessaoConcluidaAction } from '@/app/actions/planos.actions'

interface Disciplina {
  id: string
  nome: string
  cor: string | null
}

interface RegistroEstudoModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  planoId: string
  // Dados pré-preenchidos vindos do cronômetro
  dadosIniciais?: {
    disciplinaId?: string
    disciplinaNome?: string
    tempoDecorrido?: number // em minutos
    categoria?: 'TEORIA' | 'EXERCICIOS' | 'REVISAO'
    material?: string
    planejamentoSemanalId?: string
    agendamentoKey?: string
  }
  onSuccess?: () => void
}

type TipoRegistro = 'HOJE' | 'ONTEM' | 'OUTRO'

export function RegistroEstudoModal({
  open,
  onOpenChange,
  planoId,
  dadosIniciais,
  onSuccess,
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
    { titulo: '', duracao: '00:00' },
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
        const response = await fetch(`/api/planos/${planoId}/disciplinas`)
        if (!response.ok) throw new Error('Erro ao carregar disciplinas')
        const disciplinasData = await response.json()
        setDisciplinas(disciplinasData)
      } catch (error) {
        console.error('Erro ao carregar disciplinas:', error)
      } finally {
        setIsLoadingDisciplinas(false)
      }
    }

    carregarDisciplinas()
  }, [open, planoId])

  // Preencher dados iniciais vindos do cronômetro
  useEffect(() => {
    if (open && dadosIniciais) {
      if (dadosIniciais.disciplinaId) {
        setDisciplina(dadosIniciais.disciplinaId)
      }
      if (dadosIniciais.tempoDecorrido) {
        const horas = Math.floor(dadosIniciais.tempoDecorrido / 60)
        const minutos = dadosIniciais.tempoDecorrido % 60
        setTempoEstudo(
          `${String(horas).padStart(2, '0')}:${String(minutos).padStart(
            2,
            '0',
          )}:00`,
        )
      }
      if (dadosIniciais.categoria) {
        setCategoria(dadosIniciais.categoria.toLowerCase())
      }
      if (dadosIniciais.material) {
        setMaterial(dadosIniciais.material)
      }
    }
  }, [open, dadosIniciais])

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
    setVideoAulas([...videoAulas, { titulo: '', duracao: '00:00' }])
  }

  const handleRemoveVideoaula = (index: number) => {
    setVideoAulas(videoAulas.filter((_, i) => i !== index))
  }

  const handleSalvar = async () => {
    // Validações básicas
    if (!categoria) {
      toast.error('Selecione uma categoria')
      return
    }
    if (!disciplina) {
      toast.error('Selecione uma disciplina')
      return
    }
    if (!tempoEstudo || tempoEstudo === '00:00:00') {
      toast.error('Informe o tempo de estudo')
      return
    }

    try {
      const dataEstudo = getDataEstudo()

      // Preparar dados do estudo
      const estudoData = {
        planoId,
        disciplinaId: disciplina,
        topicoId: topico || undefined,
        dataEstudo,
        tempoEstudo, // HH:MM format
        categoria: categoria.toLowerCase() as
          | 'teoria'
          | 'exercicios'
          | 'revisao',
        material,
        teoriaFinalizada,
        programarRevisoes,
        intervalosRevisao: programarRevisoes ? [7, 15, 30] : [], // Intervalos padrão
        questoes:
          questoesAcertos > 0 || questoesErros > 0
            ? Array.from(
                { length: questoesAcertos + questoesErros },
                (_, i) => ({
                  numero: i + 1,
                  acertou: i < questoesAcertos,
                }),
              )
            : [],
        paginas:
          paginasInicio > 0 && paginasFim >= paginasInicio
            ? [{ inicio: paginasInicio, fim: paginasFim }]
            : [],
        videoAulas: videoAulas.filter((v) => v.titulo.trim() !== ''),
        comentarios,
        planejamentoSemanalId: dadosIniciais?.planejamentoSemanalId,
        agendamentoKey: dadosIniciais?.agendamentoKey,
      }

      // Salvar estudo
      const resultado = await registrarEstudoAction(estudoData)

      // Se veio de um planejamento, marcar sessão como concluída
      if (
        dadosIniciais?.planejamentoSemanalId &&
        dadosIniciais?.agendamentoKey &&
        resultado.id
      ) {
        await marcarSessaoConcluidaAction(
          dadosIniciais.planejamentoSemanalId,
          dadosIniciais.agendamentoKey,
          resultado.id,
        )
      }

      toast.success('Estudo registrado com sucesso!')

      // Fechar modal ou limpar para novo registro
      if (salvarCriarNovo) {
        // Limpar campos mas manter modal aberto
        resetForm()
      } else {
        onOpenChange(false)
        if (onSuccess) {
          onSuccess()
        }
      }
    } catch (error) {
      console.error('Erro ao salvar estudo:', error)
      toast.error('Erro ao registrar estudo. Tente novamente.')
    }
  }

  const resetForm = () => {
    setTipoRegistro('HOJE')
    setDataOutro('')
    setCategoria('')
    setDisciplina('')
    setTopico('')
    setTempoEstudo('00:00:00')
    setMaterial('')
    setTeoriaFinalizada(false)
    setProgramarRevisoes(false)
    setQuestoesAcertos(0)
    setQuestoesErros(0)
    setPaginasInicio(0)
    setPaginasFim(0)
    setVideoAulas([{ titulo: '', duracao: '00:00' }])
    setComentarios('')
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
                  Título / Duração (MM:SS)
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
                    <Input
                      placeholder="15:30"
                      value={video.duracao}
                      onChange={(e) => {
                        const newVideos = [...videoAulas]
                        newVideos[index].duracao = e.target.value
                        setVideoAulas(newVideos)
                      }}
                      className="text-xs h-9 bg-white border-0 border-b-2 border-gray-300 rounded-none focus-visible:ring-0 focus-visible:border-teal-400"
                    />
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
