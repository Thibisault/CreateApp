import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { PageContainer } from '@/components/ui/PageContainer'
import { RoutineCard } from '@/components/ui/RoutineCard'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { routines } from '@/content'
import { getRoutineOfDay } from '@/utils/content'

export function RoutinesPage() {
  const routineOfDay = getRoutineOfDay()

  return (
    <PageContainer className="space-y-8">
      <Breadcrumbs items={[{ label: 'Accueil', href: '/' }, { label: 'Routines' }]} />
      <section>
        <SectionTitle eyebrow="Routines">Cadres réutilisables</SectionTitle>
        <p className="max-w-reading text-sm leading-7 text-app-muted">
          Des routines courtes, hebdomadaires et approfondies pour relier apprentissage, entraînement et atelier.
        </p>
      </section>
      <div className="grid gap-5 md:grid-cols-2">
        {routines.map((routine) => (
          <RoutineCard key={routine.id} routine={routine} highlight={routine.id === routineOfDay.id} />
        ))}
      </div>
    </PageContainer>
  )
}
