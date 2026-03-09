import { useEffect } from 'react'
import { useAppStore } from '@/stores/useAppStore'

export function useInstallPrompt() {
  const installPromptEvent = useAppStore((state) => state.installPromptEvent)
  const setInstallPromptEvent = useAppStore((state) => state.setInstallPromptEvent)

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault()
      setInstallPromptEvent(event as BeforeInstallPromptEvent)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
  }, [setInstallPromptEvent])

  return installPromptEvent
}
