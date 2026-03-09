import { Link, useNavigate, useParams } from 'react-router-dom'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { EmptyState } from '@/components/ui/EmptyState'
import { InfoCard } from '@/components/ui/InfoCard'
import { PageContainer } from '@/components/ui/PageContainer'
import { WorkshopStepper } from '@/components/ui/WorkshopStepper'
import { etapesAtelier } from '@/content'
import { buildIdeaSummary, getIdeaResponse } from '@/utils/workshop'
import { useAppStore } from '@/stores/useAppStore'

export function WorkshopIdeaPage() {
  const { ideaId = '' } = useParams()
  const idea = useAppStore((state) => state.data.ideesAtelier.find((entry) => entry.id === ideaId))
  const updateIdeaBasics = useAppStore((state) => state.updateIdeaBasics)
  const deleteIdea = useAppStore((state) => state.deleteIdea)
  const navigate = useNavigate()

  if (!idea) {
    return (
      <PageContainer>
        <EmptyState title="Idée introuvable" description="Cette idée n'existe plus ou a été supprimée." />
      </PageContainer>
    )
  }

  const summary = buildIdeaSummary(idea)

  return (
    <PageContainer className="space-y-8">
      <Breadcrumbs items={[{ label: 'Accueil', href: '/' }, { label: 'Atelier', href: '/atelier' }, { label: idea.titre }]} />
      <section className="rounded-[2rem] border border-app-border/60 bg-app-surface/90 p-6 shadow-float">
        <div className="grid gap-4 lg:grid-cols-[1fr_auto]">
          <div className="grid gap-4">
            <input
              value={idea.titre}
              onChange={(event) => updateIdeaBasics(idea.id, event.target.value, idea.descriptionInitiale)}
              className="rounded-2xl border border-app-border/60 bg-app-surface px-4 py-3 text-lg font-semibold text-app-ink outline-none"
            />
            <textarea
              value={idea.descriptionInitiale}
              onChange={(event) => updateIdeaBasics(idea.id, idea.titre, event.target.value)}
              className="min-h-28 rounded-2xl border border-app-border/60 bg-app-surface px-4 py-3 text-sm text-app-ink outline-none"
            />
          </div>
          <div className="flex flex-col gap-3">
            <Link
              to={`/atelier/${idea.id}/etape/${etapesAtelier.find((step) => step.id === idea.currentStepId)?.slug ?? etapesAtelier[0].slug}`}
              className="rounded-full bg-app-accent px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Continuer
            </Link>
            <button
              onClick={() => {
                deleteIdea(idea.id)
                navigate('/atelier')
              }}
              className="rounded-full border border-app-border/70 bg-app-surface px-5 py-3 text-sm font-semibold text-app-ink"
            >
              Supprimer
            </button>
          </div>
        </div>
      </section>

      <WorkshopStepper ideaId={idea.id} currentStepId={idea.currentStepId} steps={etapesAtelier} />

      <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <InfoCard title="Synthèse actuelle">
          <div className="space-y-4 text-sm leading-7 text-app-muted">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-app-muted">Noyau</p>
              <p className="mt-1 text-app-ink">{summary.noyau || 'La synthèse se construira à mesure des réponses.'}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-app-muted">Points forts</p>
              <ul className="mt-1 space-y-2">
                {summary.pointsForts.length ? summary.pointsForts.map((item) => <li key={item}>• {item}</li>) : <li>• À faire émerger dans les étapes suivantes.</li>}
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-app-muted">À retravailler</p>
              <ul className="mt-1 space-y-2">
                {summary.pointsARetravailler.length ? summary.pointsARetravailler.map((item) => <li key={item}>• {item}</li>) : <li>• Aucun point faible encore formulé.</li>}
              </ul>
            </div>
          </div>
        </InfoCard>
        <InfoCard title="Étapes remplies">
          <div className="space-y-3">
            {etapesAtelier.map((step) => {
              const response = getIdeaResponse(idea, step.id)
              return (
                <Link key={step.id} to={`/atelier/${idea.id}/etape/${step.slug}`} className="block rounded-2xl bg-app-surfaceMuted/30 px-4 py-3">
                  <p className="text-sm font-semibold text-app-ink">{step.titre}</p>
                  <p className="mt-1 text-sm leading-7 text-app-muted">
                    {response ? `${response.slice(0, 120)}${response.length > 120 ? '…' : ''}` : 'Aucune réponse pour le moment.'}
                  </p>
                </Link>
              )
            })}
          </div>
        </InfoCard>
      </div>
    </PageContainer>
  )
}
