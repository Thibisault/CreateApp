import { Link } from 'react-router-dom'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { EmptyState } from '@/components/ui/EmptyState'
import { PageContainer } from '@/components/ui/PageContainer'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { StatCard } from '@/components/ui/StatCard'
import { conceptMap, domainMap } from '@/utils/content'
import { buildProgressSnapshot } from '@/utils/progress'
import { formatRelativeFromNow } from '@/utils/date'
import { useAppStore } from '@/stores/useAppStore'

export function ProgressPage() {
  const data = useAppStore((state) => state.data)
  const snapshot = buildProgressSnapshot(data)

  return (
    <PageContainer className="space-y-8">
      <Breadcrumbs items={[{ label: 'Accueil', href: '/' }, { label: 'Progression' }]} />
      <section>
        <SectionTitle eyebrow="Progression">Vue d'ensemble</SectionTitle>
      </section>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Chapitres touchés" value={String(snapshot.chaptersTouched)} />
        <StatCard label="Notions étudiées" value={String(snapshot.studiedConcepts)} />
        <StatCard label="Exercices faits" value={String(snapshot.completedExercises)} />
        <StatCard label="Routines suivies" value={String(snapshot.routinesCompleted)} />
      </div>
      <section className="space-y-4">
        <SectionTitle eyebrow="Domaines">Avancement par domaine</SectionTitle>
        <div className="space-y-4">
          {snapshot.domainProgress.map((entry) => {
            const domain = domainMap.get(entry.domainId)
            return (
              <div key={entry.domainId} className="rounded-3xl border border-app-border/60 bg-app-surface/85 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-app-ink">{domain?.titre}</h3>
                    <p className="text-sm text-app-muted">{entry.completed}/{entry.total} notions étudiées</p>
                  </div>
                  <Link to={domain ? `/academie/domaine/${domain.slug}` : '/academie'} className="text-sm font-semibold text-app-accent">
                    Ouvrir
                  </Link>
                </div>
                <div className="mt-4 h-2 rounded-full bg-app-surfaceMuted/50">
                  <div className="h-2 rounded-full bg-app-accent" style={{ width: `${Math.round(entry.ratio * 100)}%` }} />
                </div>
              </div>
            )
          })}
        </div>
      </section>
      <section className="grid gap-5 lg:grid-cols-[1fr_1fr]">
        <div>
          <SectionTitle eyebrow="Historique">Récents</SectionTitle>
          <div className="space-y-3">
            {data.historique.length ? (
              data.historique.map((item) => (
                <Link key={item.chemin} to={item.chemin} className="block rounded-2xl border border-app-border/60 bg-app-surface/85 px-4 py-3">
                  <p className="text-sm font-semibold text-app-ink">{item.titre}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-app-muted">
                    {item.type} · {formatRelativeFromNow(item.dateIso)}
                  </p>
                </Link>
              ))
            ) : (
              <EmptyState title="Pas encore d'historique" description="Explore quelques pages et reviens ici pour voir ta trace récente." />
            )}
          </div>
        </div>
        <div>
          <SectionTitle eyebrow="À retravailler">Notions mises de côté</SectionTitle>
          <div className="space-y-3">
            {data.notionsARetravailler.length ? (
              data.notionsARetravailler
                .map((id) => conceptMap.get(id))
                .filter((concept): concept is NonNullable<typeof concept> => Boolean(concept))
                .map((concept) => (
                  <Link key={concept.id} to={`/academie/notion/${concept.slug}`} className="block rounded-2xl border border-app-border/60 bg-app-surface/85 px-4 py-3">
                    <p className="text-sm font-semibold text-app-ink">{concept.titre}</p>
                    <p className="mt-1 text-sm text-app-muted">{concept.resume}</p>
                  </Link>
                ))
            ) : (
              <EmptyState title="Aucune notion à retravailler" description="Ajoute des fiches à reprendre depuis la page notion." />
            )}
          </div>
        </div>
      </section>
    </PageContainer>
  )
}
