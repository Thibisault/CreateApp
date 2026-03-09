import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { EmptyState } from '@/components/ui/EmptyState'
import { InfoCard } from '@/components/ui/InfoCard'
import { PageContainer } from '@/components/ui/PageContainer'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { formatRelativeFromNow } from '@/utils/date'
import { useAppStore } from '@/stores/useAppStore'

export function WorkshopListPage() {
  const ideas = useAppStore((state) => state.data.ideesAtelier)
  const createWorkshopIdea = useAppStore((state) => state.createWorkshopIdea)
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleCreate = () => {
    if (!title.trim()) {
      return
    }
    const ideaId = createWorkshopIdea(title.trim(), description.trim())
    setTitle('')
    setDescription('')
    navigate(`/atelier/${ideaId}`)
  }

  return (
    <PageContainer className="space-y-8">
      <Breadcrumbs items={[{ label: 'Accueil', href: '/' }, { label: 'Atelier' }]} />
      <section>
        <SectionTitle eyebrow="Atelier">Développer une idée guidée</SectionTitle>
        <p className="max-w-reading text-sm leading-7 text-app-muted">
          Crée plusieurs idées, reprends-les plus tard et fais-les passer par neuf étapes inspirées de la fiche
          maîtresse.
        </p>
      </section>

      <InfoCard title="Nouvelle idée">
        <div className="grid gap-4">
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Titre du projet, de l'idée ou du concept"
            className="rounded-2xl border border-app-border/60 bg-app-surface px-4 py-3 text-sm text-app-ink outline-none"
          />
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Décris rapidement l'idée de départ ou la problématique."
            className="min-h-28 rounded-2xl border border-app-border/60 bg-app-surface px-4 py-3 text-sm text-app-ink outline-none"
          />
          <button onClick={handleCreate} className="rounded-full bg-app-accent px-5 py-3 text-sm font-semibold text-white">
            Créer l'idée
          </button>
        </div>
      </InfoCard>

      <section>
        <SectionTitle eyebrow="Idées en cours">Reprendre une idée</SectionTitle>
        {ideas.length ? (
          <div className="grid gap-5 md:grid-cols-2">
            {ideas
              .slice()
              .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
              .map((idea) => (
                <InfoCard key={idea.id} title={idea.titre}>
                  <p className="text-sm leading-7 text-app-muted">{idea.descriptionInitiale || 'Pas encore de description.'}</p>
                  <p className="mt-4 text-xs uppercase tracking-[0.18em] text-app-muted">
                    {idea.reponses.length} étapes remplies · mis à jour {formatRelativeFromNow(idea.updatedAt)}
                  </p>
                  <button
                    onClick={() => navigate(`/atelier/${idea.id}`)}
                    className="mt-5 rounded-full border border-app-border/70 bg-app-surface px-4 py-3 text-sm font-semibold text-app-ink"
                  >
                    Ouvrir l'idée
                  </button>
                </InfoCard>
              ))}
          </div>
        ) : (
          <EmptyState
            title="Aucune idée encore"
            description="Commence par formuler un projet, une piste ou un problème à travailler dans l’atelier guidé."
          />
        )}
      </section>
    </PageContainer>
  )
}
