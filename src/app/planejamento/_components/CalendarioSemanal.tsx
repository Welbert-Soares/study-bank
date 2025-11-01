'use client'

import { Calendar, Clock } from 'lucide-react'
import type { DistribuicaoSemanal } from '@/types/planejamento'

interface CalendarioSemanalProps {
  distribuicao: DistribuicaoSemanal
  titulo?: string
}

const DIAS_SEMANA = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
]

const DIAS_ABREVIADOS: Record<string, string> = {
  Domingo: 'Domingo',
  'Segunda-feira': 'Segunda',
  'Terça-feira': 'Terça',
  'Quarta-feira': 'Quarta',
  'Quinta-feira': 'Quinta',
  'Sexta-feira': 'Sexta',
  Sábado: 'Sábado',
}

export function CalendarioSemanal({
  distribuicao,
  titulo = 'Planejamento Semanal',
}: CalendarioSemanalProps) {
  // Validar distribuicao
  if (!distribuicao || typeof distribuicao !== 'object') {
    return (
      <div className="text-center py-12">
        <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <p className="text-gray-500">Nenhuma distribuição disponível</p>
      </div>
    )
  }

  // Contar dias com sessões para estatísticas
  const diasComSessoes = DIAS_SEMANA.filter(
    (dia) =>
      distribuicao[dia] &&
      Array.isArray(distribuicao[dia]?.sessoes) &&
      distribuicao[dia].sessoes.length > 0,
  ).length

  return (
    <div className="space-y-4">
      {/* Cabeçalho */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-teal-500 flex items-center justify-center">
          <Calendar className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="font-bold text-lg text-gray-900">{titulo}</h3>
          <p className="text-sm text-gray-500">
            {diasComSessoes} dia{diasComSessoes !== 1 ? 's' : ''} com estudo
          </p>
        </div>
      </div>

      {/* Grid de dias - SEMPRE exibe todos os dias */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {DIAS_SEMANA.map((dia) => {
          const diaData = distribuicao[dia]
          const diaAbreviado = DIAS_ABREVIADOS[dia] || dia
          const temSessoes =
            diaData &&
            Array.isArray(diaData?.sessoes) &&
            diaData.sessoes.length > 0

          return (
            <div
              key={dia}
              className={`border-2 rounded-xl overflow-hidden transition-all ${
                temSessoes
                  ? 'border-gray-200 bg-white hover:shadow-md'
                  : 'border-gray-100 bg-gray-50'
              }`}
            >
              {/* Cabeçalho do dia */}
              <div
                className={`px-4 py-3 border-b-2 ${
                  temSessoes
                    ? 'bg-gradient-to-r from-teal-50 to-teal-100 border-teal-200'
                    : 'bg-gray-100 border-gray-200'
                }`}
              >
                <h4
                  className={`font-bold text-sm ${
                    temSessoes ? 'text-teal-900' : 'text-gray-400'
                  }`}
                >
                  {diaAbreviado}
                </h4>
                {temSessoes ? (
                  <p className="text-xs text-teal-700 flex items-center gap-1 mt-1">
                    <Clock className="w-3 h-3" />
                    {Math.floor(diaData.totalMinutos / 60)}h{' '}
                    {diaData.totalMinutos % 60 > 0
                      ? `${diaData.totalMinutos % 60}min`
                      : ''}
                  </p>
                ) : (
                  <p className="text-xs text-gray-400 mt-1">Sem atividades</p>
                )}
              </div>

              {/* Sessões do dia ou mensagem vazia */}
              <div className="p-3 space-y-2 min-h-[80px]">
                {temSessoes ? (
                  diaData.sessoes.map((sessao, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-lg border-l-4 transition-all hover:shadow-sm"
                      style={{
                        borderLeftColor: sessao.cor,
                        backgroundColor: `${sessao.cor}10`,
                      }}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <h5
                            className="font-semibold text-xs truncate"
                            style={{ color: sessao.cor }}
                          >
                            {sessao.nome}
                          </h5>
                          <p className="text-xs text-gray-600 mt-0.5">
                            {sessao.inicio} - {sessao.fim}
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          <span
                            className="text-xs font-bold px-2 py-1 rounded-md"
                            style={{
                              backgroundColor: sessao.cor,
                              color: 'white',
                            }}
                          >
                            {sessao.duracao}min
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <p className="text-xs text-gray-400 text-center">
                      Nenhuma sessão
                      <br />
                      agendada
                    </p>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Estatísticas */}
      <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
        <div className="flex flex-wrap gap-6 justify-center text-center">
          <div>
            <p className="text-2xl font-bold text-teal-600">
              {Object.values(distribuicao).reduce(
                (total, dia) => total + (dia?.sessoes?.length || 0),
                0,
              )}
            </p>
            <p className="text-xs text-gray-600 mt-1">Sessões</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-teal-600">
              {Math.floor(
                Object.values(distribuicao).reduce(
                  (total, dia) => total + (dia?.totalMinutos || 0),
                  0,
                ) / 60,
              )}
              h
            </p>
            <p className="text-xs text-gray-600 mt-1">Total Semanal</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-teal-600">
              {diasComSessoes > 0
                ? (
                    Object.values(distribuicao).reduce(
                      (total, dia) => total + (dia?.totalMinutos || 0),
                      0,
                    ) /
                    60 /
                    diasComSessoes
                  ).toFixed(1)
                : '0.0'}
              h
            </p>
            <p className="text-xs text-gray-600 mt-1">Média por Dia</p>
          </div>
        </div>
      </div>
    </div>
  )
}
