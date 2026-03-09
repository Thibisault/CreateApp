import { useParams } from 'react-router-dom'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { EmptyState } from '@/components/ui/EmptyState'
import { InfoCard } from '@/components/ui/InfoCard'
import { PageContainer } from '@/components/ui/PageContainer'
import { QuestionList } from '@/components/ui/QuestionList'
import { WorkshopStepper } from '@/components/ui/WorkshopStepper'
import { conceptMap } from '@/utils/content'
import { etapesAtelier } from '@/content'
import { getIdeaResponse } from '@/utils/workshop'
import { useAppStore } from '@/stores/useAppStore'

export function WorkshopStepPage() {
  const { ideaId = '', stepSlug = '' } = useParams()
  const idea = useAppStore((state) => state.data.ideesAtelier.find((entry) => entry.id === ideaId))
  const updateIdeaResponse = useAppStore((state) => state.updateIdeaResponse)
  const setIdeaCurrentStep = useAppStore((state) => state.setIdeaCurrentStep)
  const step = etapesAtelier.find((item) => item.slug === stepSlug)

  if (!idea || !step) {
    return (
      <PageContainer>
        <EmptyState title="Étape introuvable" description="Cette étape ou cette idée n'existe pas." />
      </PageContainer>
    )
  }

  const note = getIdeaResponse(idea, step.id)

  return (
    <PageContainer className="space-y-8">
      <Breadcrumbs
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'Atelier', href: '/atelier' },
          { label: idea.titre, href: `/atelier/${idea.id}` },
          { label: step.titre },
        ]}
      />
      <WorkshopStepper ideaId={idea.id} currentStepId={step.id} steps={etapesAtelier} />
      <section className="rounded-[2rem] border border-app-border/60 bg-app-surface/90 p-6 shadow-float">
        <p className="text-xs uppercase tracking-[0.2em] text-app-muted">Étape guidée</p>
        <h1 className="mt-3 font-serif text-4xl text-app-ink">{step.titre}</h1>
        <p className="mt-3 text-sm leading-7 text-app-muted">{step.description}</p>
        <p className="mt-4 text-sm font-semibold text-app-ink">{step.intention}</p>
      </section>
      <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <InfoCard title="Questions-guides">
          <QuestionList items={step.questions} />
          <div className="mt-4 space-y-2 text-sm leading-7 text-app-muted">
            {step.sousPrompts.map((prompt) => (
              <p key={prompt}>• {prompt}</p>
            ))}
          </div>
        </InfoCard>
        <InfoCard title="Ta réponse">
          <textarea
            value={note}
            onChange={(event) => {
              setIdeaCurrentStep(idea.id, step.id)
              updateIdeaResponse(idea.id, step.id, event.target.value)
            }}
            className="min-h-[18rem] w-full rounded-3xl border border-app-border/60 bg-app-surface px-4 py-4 text-sm text-app-ink outline-none"
            placeholder="Écris ici ta réponse. La sauvegarde est locale et automatique."
          />
          <p className="mt-4 text-xs uppercase tracking-[0.18em] text-app-muted">Livrable attendu : {step.livrable}</p>
        </InfoCard>
      </div>
      <InfoCard title="Méthodes liées">
        <div className="grid gap-4 md:grid-cols-2">
          {step.notionIds
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
