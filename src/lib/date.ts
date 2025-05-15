export function getBrazilianDate(date?: Date): Date {
  const d = date || new Date()
  // Brazil is UTC-3
  return new Date(d.toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' }))
}

export function getStartOfDay(date: Date): Date {
  const d = getBrazilianDate(date)
  d.setHours(0, 0, 0, 0)
  return d
}

export function getEndOfDay(date: Date): Date {
  const d = getBrazilianDate(date)
  d.setHours(23, 59, 59, 999)
  return d
}

export function formatDateToYYYYMMDD(date: Date): string {
  const d = getBrazilianDate(date)
  return d.toISOString().split('T')[0]
}
