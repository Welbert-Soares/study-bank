export function getBrazilianDate(date?: Date): Date {
  const d = date || new Date()
  // Brazil is UTC-3, set the date to the correct timezone
  const brasiliaTimezone = 'America/Sao_Paulo'
  const brasiliaDate = new Date(
    d.toLocaleString('en-US', { timeZone: brasiliaTimezone }),
  )
  // Adjust for timezone offset difference
  const offset = -3 * 60 // Brazil is UTC-3, so -3 hours
  const browserOffset = d.getTimezoneOffset()
  const offsetDiff = (offset - browserOffset) * 60 * 1000
  return new Date(brasiliaDate.getTime() + offsetDiff)
}

export function getStartOfDay(date: Date): Date {
  const d = getBrazilianDate(date)
  // Create the date at midnight in Brazil's timezone (UTC-3)
  const startDay = new Date(
    Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), 3, 0, 0, 0),
  )
  return startDay
}

export function getEndOfDay(date: Date): Date {
  const d = getBrazilianDate(date)
  // Create the date at 23:59:59.999 in Brazil's timezone (UTC-3)
  const endDay = new Date(
    Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), 26, 59, 59, 999),
  )
  return endDay
}

export function formatDateToYYYYMMDD(date: Date): string {
  const d = getBrazilianDate(date)
  const year = d.getFullYear()
  const month = (d.getMonth() + 1).toString().padStart(2, '0')
  const day = d.getDate().toString().padStart(2, '0')
  return `${year}-${month}-${day}`
}
