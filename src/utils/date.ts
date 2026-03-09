const shortFormatter = new Intl.DateTimeFormat('fr-FR', {
  day: '2-digit',
  month: 'short',
})

const longFormatter = new Intl.DateTimeFormat('fr-FR', {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
})

export function formatDateShort(value: string) {
  return shortFormatter.format(new Date(value))
}

export function formatDateLong(value: string) {
  return longFormatter.format(new Date(value))
}

export function formatRelativeFromNow(value: string) {
  const diffMs = Date.now() - new Date(value).getTime()
  const minutes = Math.round(diffMs / 60000)
  if (minutes < 60) {
    return `il y a ${Math.max(1, minutes)} min`
  }

  const hours = Math.round(minutes / 60)
  if (hours < 24) {
    return `il y a ${hours} h`
  }

  const days = Math.round(hours / 24)
  if (days < 7) {
    return `il y a ${days} j`
  }

  return formatDateShort(value)
}

export function getWeekdayIndex(date = new Date()) {
  return date.getDay()
}
