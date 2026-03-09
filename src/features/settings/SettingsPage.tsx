import type { ChangeEvent } from 'react'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { InfoCard } from '@/components/ui/InfoCard'
import { PageContainer } from '@/components/ui/PageContainer'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { useInstallPrompt } from '@/hooks/useInstallPrompt'
import { useAppStore } from '@/stores/useAppStore'
import { parseImportedUserData, serializeUserData } from '@/utils/storage'

export function SettingsPage() {
  const data = useAppStore((state) => state.data)
  const setTheme = useAppStore((state) => state.setTheme)
  const setReadingDensity = useAppStore((state) => state.setReadingDensity)
  const importData = useAppStore((state) => state.importData)
  const resetData = useAppStore((state) => state.resetData)
  const setInstallPromptEvent = useAppStore((state) => state.setInstallPromptEvent)
  const installPromptEvent = useInstallPrompt()

  const downloadExport = () => {
    const blob = new Blob([serializeUserData(data)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'forge-creative-export.json'
    link.click()
    URL.revokeObjectURL(url)
  }

  const handleImport = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) {
      return
    }

    const text = await file.text()
    importData(parseImportedUserData(text))
  }

  const handleInstall = async () => {
    if (!installPromptEvent) {
      return
    }
    await installPromptEvent.prompt()
    await installPromptEvent.userChoice
    setInstallPromptEvent(null)
  }

  return (
    <PageContainer className="space-y-8">
      <Breadcrumbs items={[{ label: 'Accueil', href: '/' }, { label: 'Réglages' }]} />
      <section>
        <SectionTitle eyebrow="Réglages">Préférences et données locales</SectionTitle>
      </section>
      <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
        <InfoCard title="Apparence">
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Système', value: 'systeme' as const },
              { label: 'Clair', value: 'clair' as const },
              { label: 'Sombre', value: 'sombre' as const },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setTheme(option.value)}
                className={`rounded-full px-4 py-3 text-sm font-semibold ${
                  data.preferences.theme === option.value ? 'bg-app-accent text-white' : 'border border-app-border/70 bg-app-surface'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { label: 'Confort', value: 'confort' as const },
              { label: 'Compact', value: 'compact' as const },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setReadingDensity(option.value)}
                className={`rounded-full px-4 py-3 text-sm font-semibold ${
                  data.preferences.densiteLecture === option.value ? 'bg-app-accent text-white' : 'border border-app-border/70 bg-app-surface'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </InfoCard>
        <InfoCard title="PWA et installation">
          <p className="text-sm leading-7 text-app-muted">
            L’application fonctionne en statique, en mode hors ligne de base après premier chargement, et peut être
            installée comme PWA sur mobile ou desktop compatible.
          </p>
          <button
            onClick={handleInstall}
            disabled={!installPromptEvent}
            className="mt-5 rounded-full bg-app-accent px-5 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            {installPromptEvent ? "Installer l'application" : 'Invite d’installation indisponible'}
          </button>
        </InfoCard>
      </div>
      <InfoCard title="Export, import et reset local">
        <div className="flex flex-wrap gap-3">
          <button onClick={downloadExport} className="rounded-full bg-app-accent px-5 py-3 text-sm font-semibold text-white">
            Exporter les données
          </button>
          <label className="rounded-full border border-app-border/70 bg-app-surface px-5 py-3 text-sm font-semibold text-app-ink">
            Importer un JSON
            <input type="file" accept="application/json" onChange={handleImport} className="hidden" />
          </label>
          <button
            onClick={resetData}
            className="rounded-full border border-red-400/50 bg-red-500/10 px-5 py-3 text-sm font-semibold text-red-700 dark:text-red-300"
          >
            Réinitialiser le local
          </button>
        </div>
      </InfoCard>
    </PageContainer>
  )
}
