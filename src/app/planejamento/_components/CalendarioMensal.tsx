'use client'

import { useState } from 'react'
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { DistribuicaoSemanal } from '@/types/planejamento'

interface CalendarioMensalProps {
  distribuicao: DistribuicaoSemanal
  titulo?: string
}

const DIAS_SEMANA_CURTOS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']

const DIAS_COMPLETOS = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
]

const MESES = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
]

export function CalendarioMensal({
  distribuicao,
  titulo = 'Planejamento Semanal',
}: CalendarioMensalProps) {
  const [mesAtual, setMesAtual] = useState(new Date())

  // Validar distribuicao
  if (!distribuicao || typeof distribuicao !== 'object') {
    return (
      <div className="text-center py-12">
        <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <p className="text-gray-500">Nenhuma distribuição disponível</p>
      </div>
    )
  }

  const ano = mesAtual.getFullYear()
  const mes = mesAtual.getMonth()

  // Primeiro dia do mês (0 = Domingo, 1 = Segunda, etc)
  const primeiroDiaMes = new Date(ano, mes, 1).getDay()

  // Último dia do mês
  const ultimoDiaMes = new Date(ano, mes + 1, 0).getDate()

  // Dias do mês anterior para preencher
  const diasMesAnterior = new Date(ano, mes, 0).getDate()

  // Criar array de dias para exibir
  const dias: Array<{
    dia: number
    mesAtual: boolean
    diaSemana: number
    data: Date
  }> = []

  // Dias do mês anterior
  for (let i = primeiroDiaMes - 1; i >= 0; i--) {
    dias.push({
      dia: diasMesAnterior - i,
      mesAtual: false,
      diaSemana: primeiroDiaMes - i - 1,
      data: new Date(ano, mes - 1, diasMesAnterior - i),
    })
  }

  // Dias do mês atual
  for (let i = 1; i <= ultimoDiaMes; i++) {
    dias.push({
      dia: i,
      mesAtual: true,
      diaSemana: (primeiroDiaMes + i - 1) % 7,
      data: new Date(ano, mes, i),
    })
  }

  // Dias do próximo mês para completar o grid
  const diasRestantes = 42 - dias.length // 6 semanas * 7 dias
  for (let i = 1; i <= diasRestantes; i++) {
    dias.push({
      dia: i,
      mesAtual: false,
      diaSemana: (ultimoDiaMes + primeiroDiaMes + i - 1) % 7,
      data: new Date(ano, mes + 1, i),
    })
  }

  const voltarMes = () => {
    setMesAtual(new Date(ano, mes - 1, 1))
  }

  const avancarMes = () => {
    setMesAtual(new Date(ano, mes + 1, 1))
  }

  const irParaHoje = () => {
    setMesAtual(new Date())
  }

  const getDiaSemanaDistribuicao = (diaSemana: number) => {
    return DIAS_COMPLETOS[diaSemana]
  }

  const getSessoesParaDia = (diaSemana: number) => {
    const diaDistribuicao = getDiaSemanaDistribuicao(diaSemana)
    const diaData = distribuicao[diaDistribuicao]

    if (
      diaData &&
      Array.isArray(diaData?.sessoes) &&
      diaData.sessoes.length > 0
    ) {
      return diaData.sessoes
    }
    return []
  }

  const getDiaHoje = () => {
    const hoje = new Date()
    return (
      hoje.getDate() === new Date().getDate() &&
      mes === hoje.getMonth() &&
      ano === hoje.getFullYear()
    )
  }

  const isDiaHoje = (dia: number, mesCorrente: boolean) => {
    if (!mesCorrente) return false
    const hoje = new Date()
    return (
      dia === hoje.getDate() &&
      mes === hoje.getMonth() &&
      ano === hoje.getFullYear()
    )
  }

  return (
    <div className="space-y-4">
      {/* Cabeçalho com navegação */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-teal-500 flex items-center justify-center">
            <Calendar className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-900">{titulo}</h3>
            <p className="text-sm text-teal-600 font-medium">
              {MESES[mes]} de {ano}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={irParaHoje}
            className="text-sm"
          >
            Hoje
          </Button>
          <Button variant="outline" size="icon" onClick={voltarMes}>
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={avancarMes}>
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Grid do calendário */}
      <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden">
        {/* Cabeçalho dos dias da semana */}
        <div className="grid grid-cols-7 bg-gray-50 border-b-2 border-gray-200">
          {DIAS_SEMANA_CURTOS.map((dia) => (
            <div
              key={dia}
              className="text-center py-3 text-xs font-bold text-gray-600 uppercase"
            >
              {dia}
            </div>
          ))}
        </div>

        {/* Grid dos dias */}
        <div className="grid grid-cols-7">
          {dias.map((diaObj, index) => {
            const sessoes = getSessoesParaDia(diaObj.diaSemana)
            const temSessoes = sessoes.length > 0
            const ehHoje = isDiaHoje(diaObj.dia, diaObj.mesAtual)

            return (
              <div
                key={index}
                className={`min-h-[120px] border-r border-b border-gray-200 p-2 transition-colors ${
                  diaObj.mesAtual
                    ? temSessoes
                      ? 'bg-white hover:bg-teal-50/30'
                      : 'bg-white hover:bg-gray-50'
                    : 'bg-gray-50'
                } ${index % 7 === 6 ? 'border-r-0' : ''}`}
              >
                {/* Número do dia */}
                <div className="flex items-center justify-between mb-1">
                  <span
                    className={`text-sm font-semibold ${
                      !diaObj.mesAtual
                        ? 'text-gray-300'
                        : ehHoje
                        ? 'bg-teal-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs'
                        : temSessoes
                        ? 'text-teal-700'
                        : 'text-gray-600'
                    }`}
                  >
                    {diaObj.dia}
                  </span>
                  {temSessoes && diaObj.mesAtual && (
                    <span className="text-xs text-teal-600 font-medium">
                      {sessoes.length}
                    </span>
                  )}
                </div>

                {/* Sessões do dia */}
                {diaObj.mesAtual && (
                  <div className="space-y-1">
                    {sessoes.slice(0, 3).map((sessao, idx) => (
                      <div
                        key={idx}
                        className="text-xs px-2 py-1 rounded truncate"
                        style={{
                          backgroundColor: `${sessao.cor}20`,
                          borderLeft: `3px solid ${sessao.cor}`,
                        }}
                        title={`${sessao.nome} - ${sessao.inicio} às ${sessao.fim}`}
                      >
                        <p
                          className="font-semibold truncate"
                          style={{ color: sessao.cor }}
                        >
                          {sessao.nome}
                        </p>
                        <p className="text-gray-600 text-[10px]">
                          {sessao.inicio}
                        </p>
                      </div>
                    ))}
                    {sessoes.length > 3 && (
                      <p className="text-xs text-gray-500 text-center">
                        +{sessoes.length - 3} mais
                      </p>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Legenda */}
      <div className="bg-gray-50 rounded-xl border border-gray-200 p-4">
        <div className="flex flex-wrap gap-4 justify-center text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-teal-500"></div>
            <span className="text-gray-600">Dia atual</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded border border-teal-500"></div>
            <span className="text-gray-600">Dias com sessões</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded border border-gray-300 bg-gray-50"></div>
            <span className="text-gray-600">Dias sem atividades</span>
          </div>
        </div>
      </div>
    </div>
  )
}
