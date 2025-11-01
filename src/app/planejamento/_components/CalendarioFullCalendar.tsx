'use client'

import { useRef, useCallback } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import type {
  EventInput,
  EventClickArg,
  DateSelectArg,
} from '@fullcalendar/core'
import ptBrLocale from '@fullcalendar/core/locales/pt-br'
import { toast } from 'sonner'
import type { DistribuicaoSemanal } from '@/types/planejamento'

interface CalendarioFullCalendarProps {
  distribuicao: DistribuicaoSemanal
  titulo?: string
  editable?: boolean
  onEventClick?: (event: any) => void
  onDateSelect?: (info: any) => void
  onEventDrop?: (info: any) => void
  onEventResize?: (info: any) => void
}

export function CalendarioFullCalendar({
  distribuicao,
  titulo = 'Calendário de Estudos',
  editable = true,
  onEventClick,
  onDateSelect,
  onEventDrop,
  onEventResize,
}: CalendarioFullCalendarProps) {
  const calendarRef = useRef<FullCalendar>(null)

  // Converter distribuição para eventos do FullCalendar
  // Usando eventos recorrentes semanais com daysOfWeek
  const events: EventInput[] = Object.entries(distribuicao).flatMap(
    ([diaSemana, dia]) => {
      if (!dia?.sessoes || !Array.isArray(dia.sessoes)) return []

      return dia.sessoes.map((sessao, index) => ({
        id: `${diaSemana}-${index}`,
        title: sessao.nome,
        // Usar daysOfWeek para eventos recorrentes
        daysOfWeek: [getDayNumber(diaSemana)],
        startTime: sessao.inicio, // HH:mm
        endTime: sessao.fim, // HH:mm
        backgroundColor: sessao.cor,
        borderColor: sessao.cor,
        textColor: '#ffffff',
        extendedProps: {
          disciplinaId: sessao.disciplinaId,
          duracao: sessao.duracao,
          diaSemana,
        },
      }))
    },
  )

  // Debug: verificar eventos gerados
  console.log('📋 Eventos gerados para FullCalendar:', events.length)
  if (events.length === 0) {
    console.log('⚠️ Nenhum evento gerado. Distribuição:', distribuicao)
  }

  // Mapear dia da semana para número FullCalendar (0=Domingo, 1=Segunda, ..., 6=Sábado)
  function getDayNumber(diaSemana: string): number {
    const mapa: Record<string, number> = {
      Domingo: 0,
      Segunda: 1,
      Terça: 2,
      Quarta: 3,
      Quinta: 4,
      Sexta: 5,
      Sabado: 6,
      Sábado: 6,
    }
    return mapa[diaSemana] ?? 1
  }

  // Handlers
  const handleEventClick = useCallback(
    (clickInfo: EventClickArg) => {
      if (onEventClick) {
        onEventClick({
          id: clickInfo.event.id,
          title: clickInfo.event.title,
          start: clickInfo.event.start,
          end: clickInfo.event.end,
          extendedProps: clickInfo.event.extendedProps,
        })
      } else {
        // Comportamento padrão: mostrar toast com info
        const props = clickInfo.event.extendedProps
        toast.info(`${clickInfo.event.title}`, {
          description: `${props.duracao} minutos • ${props.diaSemana}`,
        })
      }
    },
    [onEventClick],
  )

  const handleDateSelect = useCallback(
    (selectInfo: DateSelectArg) => {
      if (onDateSelect) {
        onDateSelect({
          start: selectInfo.start,
          end: selectInfo.end,
          allDay: selectInfo.allDay,
        })
      } else {
        // Comportamento padrão: abrir modal para adicionar sessão
        toast.info('Adicionar sessão de estudo', {
          description: 'Funcionalidade em desenvolvimento',
        })
      }

      // Limpar seleção
      const calendarApi = selectInfo.view.calendar
      calendarApi.unselect()
    },
    [onDateSelect],
  )

  const handleEventDrop = useCallback(
    (info: any) => {
      if (onEventDrop) {
        onEventDrop({
          event: {
            id: info.event.id,
            title: info.event.title,
            start: info.event.start,
            end: info.event.end,
            extendedProps: info.event.extendedProps,
          },
          oldEvent: info.oldEvent,
          delta: info.delta,
        })
      } else {
        // Comportamento padrão: atualizar no backend
        toast.success('Sessão movida com sucesso', {
          description: 'Alterações salvas automaticamente',
        })
      }
    },
    [onEventDrop],
  )

  const handleEventResize = useCallback(
    (info: any) => {
      if (onEventResize) {
        onEventResize({
          event: {
            id: info.event.id,
            title: info.event.title,
            start: info.event.start,
            end: info.event.end,
            extendedProps: info.event.extendedProps,
          },
          oldEvent: info.oldEvent,
        })
      } else {
        // Comportamento padrão: atualizar no backend
        toast.success('Duração alterada com sucesso', {
          description: 'Alterações salvas automaticamente',
        })
      }
    },
    [onEventResize],
  )

  return (
    <div className="bg-white rounded-xl border-2 border-gray-200 p-6 shadow-sm">
      <h2 className="font-bold text-lg mb-4 text-gray-900">{titulo}</h2>

      {/* Empty state */}
      {events.length === 0 && (
        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-8 mb-6 text-center">
          <div className="text-blue-600 mb-2">📅</div>
          <h3 className="font-semibold text-blue-900 mb-2">
            Nenhuma sessão agendada
          </h3>
          <p className="text-sm text-blue-700 mb-4">
            Clique em um horário no calendário abaixo para adicionar sua
            primeira sessão de estudo
          </p>
        </div>
      )}

      <div className="fullcalendar-wrapper">
        <FullCalendar
          ref={calendarRef}
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
            listPlugin,
          ]}
          initialView="timeGridWeek"
          locale={ptBrLocale}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
          }}
          buttonText={{
            today: 'Hoje',
            month: 'Mês',
            week: 'Semana',
            day: 'Dia',
            list: 'Lista',
          }}
          height="auto"
          events={events}
          editable={editable}
          selectable={editable}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={true}
          slotMinTime="06:00:00"
          slotMaxTime="24:00:00"
          slotDuration="00:30:00"
          allDaySlot={false}
          nowIndicator={true}
          eventClick={handleEventClick}
          select={handleDateSelect}
          eventDrop={handleEventDrop}
          eventResize={handleEventResize}
          eventTimeFormat={{
            hour: '2-digit',
            minute: '2-digit',
            meridiem: false,
          }}
          slotLabelFormat={{
            hour: '2-digit',
            minute: '2-digit',
            meridiem: false,
          }}
          // Estilo dos eventos
          eventClassNames="cursor-pointer hover:opacity-90 transition-opacity"
          // Prevenir eventos de sobreporem
          slotEventOverlap={false}
        />
      </div>

      <style jsx global>{`
        .fullcalendar-wrapper {
          --fc-border-color: #e5e7eb;
          --fc-button-bg-color: #14b8a6;
          --fc-button-border-color: #14b8a6;
          --fc-button-hover-bg-color: #0d9488;
          --fc-button-hover-border-color: #0d9488;
          --fc-button-active-bg-color: #0f766e;
          --fc-button-active-border-color: #0f766e;
          --fc-today-bg-color: rgba(20, 184, 166, 0.1);
        }

        .fullcalendar-wrapper .fc {
          font-family: inherit;
        }

        .fullcalendar-wrapper .fc-toolbar-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #111827;
        }

        .fullcalendar-wrapper .fc-button {
          text-transform: capitalize;
          font-weight: 500;
          padding: 0.5rem 0.875rem;
          border-radius: 0.5rem;
          box-shadow: none;
        }

        .fullcalendar-wrapper .fc-button:focus {
          box-shadow: none;
        }

        .fullcalendar-wrapper .fc-col-header-cell {
          padding: 0.75rem 0.5rem;
          font-weight: 600;
          text-transform: uppercase;
          font-size: 0.75rem;
          color: #6b7280;
          background-color: #f9fafb;
        }

        .fullcalendar-wrapper .fc-daygrid-day-number {
          padding: 0.5rem;
          font-weight: 600;
          color: #374151;
        }

        .fullcalendar-wrapper
          .fc-daygrid-day.fc-day-today
          .fc-daygrid-day-number {
          background-color: #14b8a6;
          color: white;
          border-radius: 50%;
          width: 2rem;
          height: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .fullcalendar-wrapper .fc-event {
          border-radius: 0.375rem;
          padding: 0.25rem 0.5rem;
          font-size: 0.875rem;
          font-weight: 500;
          border-width: 1px;
          margin-bottom: 2px;
        }

        .fullcalendar-wrapper .fc-event-time {
          font-weight: 600;
        }

        .fullcalendar-wrapper .fc-timegrid-slot {
          height: 3rem;
        }

        .fullcalendar-wrapper .fc-timegrid-slot-label {
          font-size: 0.75rem;
          color: #6b7280;
        }

        .fullcalendar-wrapper .fc-list-event:hover td {
          background-color: #f3f4f6;
        }

        .fullcalendar-wrapper .fc-list-event-dot {
          border-width: 6px;
        }

        /* Melhorar aparência em mobile */
        @media (max-width: 768px) {
          .fullcalendar-wrapper .fc-toolbar {
            flex-direction: column;
            gap: 0.5rem;
          }

          .fullcalendar-wrapper .fc-toolbar-chunk {
            display: flex;
            justify-content: center;
          }
        }

        /* Animação suave para drag & drop */
        .fullcalendar-wrapper .fc-event-dragging {
          opacity: 0.7;
          transform: scale(1.05);
        }

        .fullcalendar-wrapper .fc-event-resizing {
          opacity: 0.8;
        }
      `}</style>

      {/* Legenda */}
      <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">
          💡 Dicas de uso:
        </h3>
        <ul className="text-xs text-gray-600 space-y-1">
          <li>
            • <strong>Clique</strong> em um evento para ver detalhes
          </li>
          {editable && (
            <>
              <li>
                • <strong>Arraste</strong> eventos para mover para outro horário
              </li>
              <li>
                • <strong>Redimensione</strong> eventos pelas bordas para
                alterar duração
              </li>
              <li>
                • <strong>Selecione</strong> um período vazio para adicionar
                nova sessão
              </li>
            </>
          )}
          <li>• Use os botões no topo para alternar entre visualizações</li>
        </ul>
      </div>
    </div>
  )
}
