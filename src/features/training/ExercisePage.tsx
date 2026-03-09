import { useParams } from 'react-router-dom'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { EmptyState } from '@/components/ui/EmptyState'
import { InfoCard } from '@/components/ui/InfoCard'
import { PageContainer } from '@/components/ui/PageContainer'
import { QuestionList } from '@/components/ui/QuestionList'
import { conceptMap, exerciseSlugMap } from '@/utils/content'
import { useAppStore } from '@/stores/useAppStore'

export function ExercisePage() {
  const { exerciseSlug = '' } = useParams()
  const exercise = exerciseSlugMap.get(exerciseSlug)
  const notes = useAppStore((state) => state.data.notesExercices)
  const setExerciseNote = useAppStore((state) => state.setExerciseNote)
  const completeExercise = useAppStore((state) => state.completeExercise)

  if (!exercise) {
    return (
      <PageContainer>
        <EmptyState title="Exercice introuvable" description="Cet exercice n'existe pas ou son slug a changé." />
      </PageContainer>
    )
  }

  return (
    <PageContainer className="space-y-8">
      <Breadcrumbs items={[{ label: 'Accueil', href: '/' }, { label: 'Entraînement', href: '/entrainement' }, { label: exercise.titre }]} />
      <section className="rounded-[2rem] border border-app-border/60 bg-app-surface/90 p-6 shadow-float">
        <p className="text-xs uppercase tracking-[0.2em] text-app-muted">{exercise.competence}</p>
        <h1 className="mt-3 font-serif text-4xl text-app-ink">{exercise.titre}</h1>
        <p className="mt-3 text-sm leading-7 text-app-muted">{exercise.objectif}</p>
        <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.16em] text-app-muted">
          <span>{exercise.dureeMinutes} min</span>
          <span>•</span>
          <span>{exercise.difficulte}</span>
        </div>
      </section>
      <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <InfoCard title="Consignes">
          <QuestionList items={exercise.consignes} />
          {exercise.variantes?.length ? (
            <div className="mt-4">
              <p className="mb-2 text-sm font-semibold text-app-ink">Variantes</p>
              <QuestionList items={exercise.variantes} />
            </div>
          ) : null}
        </InfoCard>
        <InfoCard title="Tes notes">
          <textarea
            value={notes[exercise.id] ?? ''}
            onChange={(event) => setExerciseNote(exercise.id, event.target.value)}
            className="min-h-[18rem] w-full rounded-3xl border border-app-border/60 bg-app-surface px-4 py-4 text-sm text-app-ink outline-none"
            placeholder={exercise.promptDeNote}
          />
          <button onClick={() => completeExercise(exercise.id)} className="mt-4 rounded-full bg-app-accent px-5 py-3 text-sm font-semibold text-white">
            Marquer comme fait
          </button>
        </InfoCard>
      </div>
      <InfoCard title="Notions concernées">
        <div className="grid gap-4 md:grid-cols-2">
          {exercise.notionIds
            .map((id) => conceptMap.get(id))
            .filter((concept): concept is NonNullable<typeof concept> => Boolean(concept))
            .map((concept) => (
              <a key={concept.id} href={`#/academie/notion/${concept.slug}`} className="rounded-2xl bg-app-surfaceMuted/30 px-4 py-3">
                <p className="text-sm font-semibold text-app-ink">{concept.titre}</p>
                <p className="mt-1 text-sm leading-7 text-app-muted">{concept.resume}</p>
              </a>
            ))}
        </div>
      </InfoCard>
    </PageContainer>
  )
}
