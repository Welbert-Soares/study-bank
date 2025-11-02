'use client'

import { useState } from 'react'
import {
  Calendar,
  Clock,
  MoreVertical,
  Pencil,
  Power,
  Trash2,
  BookOpen,
  Play,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { CalendarioFullCalendar } from './CalendarioFullCalendar'
import { AdicionarSessaoModal } from './AdicionarSessaoModal'
import { EditarSessaoModal } from './EditarSessaoModal'
import { PreviewSessaoModal } from './PreviewSessaoModal'
import { CronometroEstudo } from '@/app/_components/CronometroEstudo'
import { RegistroEstudoModal } from '@/app/_components/RegistroEstudoModal'
import { toast } from 'sonner'
import { deletarPlanejamentoAction } from '@/app/actions/planos.actions'
import { useRouter } from 'next/navigation'
import type { DistribuicaoSemanal, SessaoEstudo } from '@/types/planejamento'

interface PlanejamentoAtivoProps {
  planejamento: {
    id: string
    nome: string
    dataInicio: Date
    dataFim: Date
    horasPorDia: number
    tempoMinimo: number
    tempoMaximo: number
    ativo: boolean
    distribuicao: any
    configuracoes: any
    criadoEm: Date
    plano: {
      id: string
      titulo: string
      emblema: string | null
    }
  }
  planoNome: string
}

export function PlanejamentoAtivo({
  planejamento,
  planoNome,
}: PlanejamentoAtivoProps) {
  const router = useRouter()
  const [isDeleting, setIsDeleting] = useState(false)

  // Estados dos modais
  const [showAdicionarModal, setShowAdicionarModal] = useState(false)
  const [showEditarModal, setShowEditarModal] = useState(false)
  const [showPreviewModal, setShowPreviewModal] = useState(false)
  const [showCronometro, setShowCronometro] = useState(false)
  const [showRegistroModal, setShowRegistroModal] = useState(false)

  const [modalData, setModalData] = useState<{
    diaSemana: string
    dataInicial?: string
    horaInicial?: string
    sessao?: SessaoEstudo
    sessaoIndex?: number
  }>({
    diaSemana: 'Segunda',
  })

  // Dados da sessão de estudo em andamento
  const [sessaoEmAndamento, setSessaoEmAndamento] = useState<{
    disciplinaId: string
    disciplinaNome: string
    duracao: number
    agendamentoKey: string
    categoria: 'TEORIA' | 'EXERCICIOS' | 'REVISAO'
    material: string
    dataEstudo: string // Data específica da sessão
  } | null>(null)

  // Parse dos dados JSON com validação
  let distribuicao: DistribuicaoSemanal = {}
  let configuracoes: Array<{
    disciplinaId: string
    nome: string
    cor: string
    importancia: number
    conhecimento: number
    percentual: number
  }> = []

  try {
    // Se já for objeto, usar diretamente; senão, parsear
    distribuicao =
      typeof planejamento.distribuicao === 'string'
        ? JSON.parse(planejamento.distribuicao)
        : planejamento.distribuicao || {}

    configuracoes =
      typeof planejamento.configuracoes === 'string'
        ? JSON.parse(planejamento.configuracoes)
        : planejamento.configuracoes || []
  } catch (error) {
    console.error('Erro ao parsear dados do planejamento:', error)
  }

  // Validar se distribuicao tem dados válidos
  if (!distribuicao || typeof distribuicao !== 'object') {
    distribuicao = {}
  }

  // Validar se configuracoes é um array
  if (!Array.isArray(configuracoes)) {
    configuracoes = []
  }

  // Debug: verificar conteúdo da distribuição
  console.log('📅 Distribuição recebida:', distribuicao)
  console.log('📊 Total de dias:', Object.keys(distribuicao).length)
  Object.entries(distribuicao).forEach(([dia, dados]) => {
    console.log(`  ${dia}:`, dados?.sessoes?.length || 0, 'sessões')
  })

  // Calcular estatísticas com validação
  const totalSessoes = Object.values(distribuicao).reduce(
    (total, dia) => total + (dia?.sessoes?.length || 0),
    0,
  )
  const totalMinutos = Object.values(distribuicao).reduce(
    (total, dia) => total + (dia?.totalMinutos || 0),
    0,
  )
  const totalHoras = Math.floor(totalMinutos / 60)
  const totalMinutosResto = totalMinutos % 60

  const handleDelete = async () => {
    if (
      !confirm(
        'Tem certeza que deseja deletar este planejamento? Esta ação não pode ser desfeita.',
      )
    ) {
      return
    }

    setIsDeleting(true)

    try {
      await deletarPlanejamentoAction(planejamento.id)
      toast.success('Planejamento deletado com sucesso!')
      router.refresh()
    } catch (error) {
      console.error('Erro ao deletar planejamento:', error)
      toast.error('Erro ao deletar planejamento')
    } finally {
      setIsDeleting(false)
    }
  }

  // Handlers para o calendário
  const handleEventClick = (event: any) => {
    // Extrair informações do evento
    const diaSemana = event.extendedProps.diaSemana
    const sessaoIndex = event.extendedProps.sessaoIndex
    const eventDate = event.extendedProps.eventDate // Data específica da ocorrência

    // Buscar sessão na distribuição
    const sessao = distribuicao[diaSemana]?.sessoes[sessaoIndex]

    if (sessao) {
      // Salvar dados da sessão (incluindo data específica) e abrir modal de preview
      setModalData({
        diaSemana,
        sessao,
        sessaoIndex,
        dataInicial: eventDate, // Armazenar data específica
      })
      setShowPreviewModal(true)
    }
  }

  const handleIniciarSessao = () => {
    if (!modalData.sessao || !modalData.dataInicial) return

    // Fechar preview e iniciar sessão
    setShowPreviewModal(false)
    iniciarSessao(
      modalData.sessao,
      modalData.diaSemana,
      modalData.sessaoIndex!,
      modalData.dataInicial, // Passar data específica
    )
  }

  const handleEditarSessao = () => {
    // Fechar preview e abrir modal de edição
    setShowPreviewModal(false)
    setShowEditarModal(true)
  }

  const iniciarSessao = (
    sessao: SessaoEstudo,
    diaSemana: string,
    sessaoIndex: number,
    dataEstudo: string, // Nova parameter: data específica
  ) => {
    const agendamentoKey = `${diaSemana}_${sessaoIndex}`

    setSessaoEmAndamento({
      disciplinaId: sessao.disciplinaId,
      disciplinaNome: sessao.nome,
      duracao: sessao.duracao,
      agendamentoKey,
      categoria: 'TEORIA', // Default, pode ser alterado no modal
      material: '', // Será preenchido no modal
      dataEstudo, // Armazenar data específica
    })

    setShowCronometro(true)
  }

  const handleCronometroFinalizar = (tempoDecorrido: number) => {
    setShowCronometro(false)

    if (sessaoEmAndamento) {
      // Preparar dados para preencher o modal de registro
      setShowRegistroModal(true)
    }
  }

  const handleRegistroSuccess = () => {
    setShowRegistroModal(false)
    setSessaoEmAndamento(null)
    toast.success('Estudo registrado com sucesso!')
    router.refresh()
  }

  const handleDateSelect = (info: any) => {
    // Obter dia da semana a partir da data
    const date = new Date(info.start)
    const diasSemana = [
      'Domingo',
      'Segunda',
      'Terça',
      'Quarta',
      'Quinta',
      'Sexta',
      'Sabado',
    ]
    const diaSemana = diasSemana[date.getDay()]

    // Formatar hora inicial
    const horaInicial = date.toTimeString().slice(0, 5)
    const dataInicial = date.toISOString().split('T')[0]

    setModalData({
      diaSemana,
      horaInicial,
      dataInicial,
    })
    setShowAdicionarModal(true)
  }

  const handleModalSuccess = () => {
    router.refresh()
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl p-6 text-white shadow-lg">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            {planejamento.plano.emblema ? (
              <div className="text-5xl">{planejamento.plano.emblema}</div>
            ) : (
              <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center">
                <BookOpen className="w-8 h-8" />
              </div>
            )}
            <div>
              <h1 className="text-2xl font-bold mb-1">
                {planejamento.plano.titulo}
              </h1>
              <p className="text-teal-50 text-sm flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(planejamento.dataInicio).toLocaleDateString(
                  'pt-BR',
                )}{' '}
                - {new Date(planejamento.dataFim).toLocaleDateString('pt-BR')}
              </p>
            </div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
              >
                <MoreVertical className="w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem disabled>
                <Pencil className="w-4 h-4 mr-2" />
                Editar
              </DropdownMenuItem>
              <DropdownMenuItem disabled>
                <Power className="w-4 h-4 mr-2" />
                Desativar
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={handleDelete}
                disabled={isDeleting}
                className="text-red-600 focus:text-red-600"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                {isDeleting ? 'Deletando...' : 'Deletar'}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Estatísticas rápidas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <p className="text-teal-50 text-xs mb-1">Sessões Semanais</p>
            <p className="text-2xl font-bold">{totalSessoes}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <p className="text-teal-50 text-xs mb-1">Total Semanal</p>
            <p className="text-2xl font-bold">
              {totalHoras}h
              {totalMinutosResto > 0 ? `${totalMinutosResto}m` : ''}
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <p className="text-teal-50 text-xs mb-1">Sessão Mínima</p>
            <p className="text-2xl font-bold">{planejamento.tempoMinimo}min</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <p className="text-teal-50 text-xs mb-1">Sessão Máxima</p>
            <p className="text-2xl font-bold">{planejamento.tempoMaximo}min</p>
          </div>
        </div>
      </div>

      {/* Disciplinas configuradas */}
      <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
        <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-teal-600" />
          Disciplinas Configuradas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {configuracoes.map((config) => (
            <div
              key={config.disciplinaId}
              className="flex items-center gap-3 p-3 rounded-lg border-2 border-gray-200 hover:shadow-sm transition-shadow"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white text-sm"
                style={{ backgroundColor: config.cor }}
              >
                {config.percentual}%
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm truncate">
                  {config.nome}
                </h3>
                <p className="text-xs text-gray-500">
                  Imp: {config.importancia}/10 • Conh: {config.conhecimento}/10
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Calendário FullCalendar */}
      <CalendarioFullCalendar
        distribuicao={distribuicao}
        titulo="Calendário de Estudos"
        editable={true}
        dataInicio={planejamento.dataInicio}
        dataFim={planejamento.dataFim}
        onEventClick={handleEventClick}
        onDateSelect={handleDateSelect}
      />

      {/* Modais */}
      {/* Preview da Sessão */}
      <PreviewSessaoModal
        open={showPreviewModal}
        onOpenChange={setShowPreviewModal}
        sessao={modalData.sessao || null}
        diaSemana={modalData.diaSemana}
        eventDate={modalData.dataInicial} // Passar data específica
        onIniciar={handleIniciarSessao}
        onEditar={handleEditarSessao}
      />

      <AdicionarSessaoModal
        open={showAdicionarModal}
        onOpenChange={setShowAdicionarModal}
        planejamentoId={planejamento.id}
        planoId={planejamento.plano.id}
        diaSemana={modalData.diaSemana}
        dataInicial={modalData.dataInicial}
        horaInicial={modalData.horaInicial}
        onSuccess={handleModalSuccess}
      />

      <EditarSessaoModal
        open={showEditarModal}
        onOpenChange={setShowEditarModal}
        planejamentoId={planejamento.id}
        planoId={planejamento.plano.id}
        diaSemana={modalData.diaSemana}
        sessao={modalData.sessao || null}
        sessaoIndex={modalData.sessaoIndex || 0}
        onSuccess={handleModalSuccess}
      />

      {/* Cronômetro de Estudo */}
      {showCronometro && sessaoEmAndamento && (
        <CronometroEstudo
          open={showCronometro}
          onOpenChange={setShowCronometro}
          disciplinaNome={sessaoEmAndamento.disciplinaNome}
          duracaoMinutos={sessaoEmAndamento.duracao}
          onFinalizar={handleCronometroFinalizar}
        />
      )}

      {/* Modal de Registro */}
      {showRegistroModal && sessaoEmAndamento && (
        <RegistroEstudoModal
          open={showRegistroModal}
          onOpenChange={setShowRegistroModal}
          planoId={planejamento.plano.id}
          dadosIniciais={{
            disciplinaId: sessaoEmAndamento.disciplinaId,
            disciplinaNome: sessaoEmAndamento.disciplinaNome,
            tempoDecorrido: sessaoEmAndamento.duracao, // Tempo total da sessão
            categoria: sessaoEmAndamento.categoria,
            material: sessaoEmAndamento.material,
            planejamentoSemanalId: planejamento.id,
            agendamentoKey: sessaoEmAndamento.agendamentoKey,
            dataEstudo: sessaoEmAndamento.dataEstudo, // Passar data específica
          }}
          onSuccess={handleRegistroSuccess}
        />
      )}

      {/* Info card */}
      <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
        <div className="flex gap-3">
          <div className="flex-shrink-0">
            <Clock className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-sm text-blue-900 mb-1">
              Como usar seu planejamento
            </h3>
            <p className="text-xs text-blue-700 leading-relaxed">
              Este é o seu planejamento ativo. As sessões acima mostram quais
              disciplinas estudar em cada dia da semana, com os horários e
              durações já calculados. Use o dashboard para marcar o progresso
              das suas sessões de estudo.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
