import { useParams } from 'react-router-dom'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { EmptyState } from '@/components/ui/EmptyState'
import { InfoCard } from '@/components/ui/InfoCard'
import { PageContainer } from '@/components/ui/PageContainer'
import { QuestionList } from '@/components/ui/QuestionList'
import { conceptMap, exerciseMap, routineSlugMap } from '@/utils/content'
import { useAppStore } from '@/stores/useAppStore'

export function RoutinePage() {
  const { routineSlug = '' } = useParams()
  const routine = routineSlugMap.get(routineSlug)
  const completeRoutine = useAppStore((state) => state.completeRoutine)

  if (!routine) {
    return (
      <PageContainer>
        <EmptyState title="Routine introuvable" description="Cette routine n'existe pas ou son slug a changé." />
      </PageContainer>
    )
  }

  return (
    <PageContainer className="space-y-8">
      <Breadcrumbs items={[{ label: 'Accueil', href: '/' }, { label: 'Routines', href: '/routines' }, { label: routine.titre }]} />
      <section className="rounded-[2rem] border border-app-border/60 bg-app-surface/90 p-6 shadow-float">
        <p className="text-xs uppercase tracking-[0.2em] text-app-muted">{routine.frequence}</p>
        <h1 className="mt-3 font-serif text-4xl text-app-ink">{routine.titre}</h1>
        <p className="mt-3 text-sm leading-7 text-app-muted">{routine.resume}</p>
        <p className="mt-4 text-sm font-semibold text-app-ink">{routine.objectif}</p>
        <div className="mt-4 text-xs uppercase tracking-[0.18em] text-app-muted">
          {routine.duree} · {routine.progression}
        </div>
      </section>
      <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <InfoCard title="Déroulé">
          <QuestionList items={routine.etapes} />
          <button onClick={() => completeRoutine(routine.id)} className="mt-4 rounded-full bg-app-accent px-5 py-3 text-sm font-semibold text-white">
            Marquer la routine comme suivie
          </button>
        </InfoCard>
        <InfoCard title="Exercices et notions utiles">
          <div className="space-y-4">
            <div>
              <p className="mb-2 text-sm font-semibold text-app-ink">Exercices</p>
              <div className="space-y-2">
                {routine.exercicesIds
                  .map((id) => exerciseMap.get(id))
                  .filter((exercise): exercise is NonNullable<typeof exercise> => Boolean(exercise))
                  .map((exercise) => (
                    <a key={exercise.id} href={`#/entrainement/exercice/${exercise.slug}`} className="block rounded-2xl bg-app-surfaceMuted/30 px-4 py-3">
                      <p className="text-sm font-semibold text-app-ink">{exercise.titre}</p>
                      <p className="text-sm text-app-muted">{exercise.objectif}</p>
                    </a>
                  ))}
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold text-app-ink">Notions liées</p>
              <div className="space-y-2">
                {routine.notionIds
                  .map((id) => conceptMap.get(id))
                  .filter((concept): concept is NonNullable<typeof concept> => Boolean(concept))
                  .map((concept) => (
                    <a key={concept.id} href={`#/academie/notion/${concept.slug}`} className="block rounded-2xl bg-app-surfaceMuted/30 px-4 py-3">
                      <p className="text-sm font-semibold text-app-ink">{concept.titre}</p>
                      <p className="text-sm text-app-muted">{concept.resume}</p>
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </InfoCard>
      </div>
    </PageContainer>
  )
}
