export function formatarDiaSemana(dataString: string): string {
  const [ano, mes, dia] = dataString.split('-').map(Number)
  const data = new Date(ano, mes - 1, dia)
  const diasDaSemana = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
  ]
  return diasDaSemana[data.getDay()]
}

export function formatarData(dataString: string): string {
  const [ano, mes, dia] = dataString.split('-').map(Number)
  return `${dia.toString().padStart(2, '0')}/${mes
    .toString()
    .padStart(2, '0')}/${ano}`
}

export function getStatusColor(status: string): string {
  switch (status) {
    case 'concluido':
      return 'bg-green-100 text-green-800 border-green-300'
    case 'em_progresso':
      return 'bg-yellow-100 text-yellow-800 border-yellow-300'
    default:
      return 'bg-gray-100 text-gray-800 border-gray-300'
  }
}
