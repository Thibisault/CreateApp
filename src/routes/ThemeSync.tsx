import { useEffect } from 'react'
import { useAppStore } from '@/stores/useAppStore'

export function ThemeSync() {
  const { theme, densiteLecture } = useAppStore((state) => state.data.preferences)

  useEffect(() => {
    const root = document.documentElement
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const dark = theme === 'sombre' || (theme === 'systeme' && prefersDark)
    root.classList.toggle('dark', dark)
  }, [theme])

  useEffect(() => {
    document.documentElement.style.setProperty('--font-scale', densiteLecture === 'compact' ? '0.95' : '1')
  }, [densiteLecture])

  return null
}
