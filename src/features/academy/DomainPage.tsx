import { Link, useParams } from 'react-router-dom'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { EmptyState } from '@/components/ui/EmptyState'
import { InfoCard } from '@/components/ui/InfoCard'
import { PageContainer } from '@/components/ui/PageContainer'
import { ProgressBadge } from '@/components/ui/ProgressBadge'
import { domainSlugMap, getChapterProgress, getChaptersForDomain } from '@/utils/content'
import { useAppStore } from '@/stores/useAppStore'

export function DomainPage() {
  const { domainSlug = '' } = useParams()
  const domain = domainSlugMap.get(domainSlug)
  const studied = useAppStore((state) => state.data.notionsEtudiees)

  if (!domain) {
    return (
      <PageContainer>
        <EmptyState title="Domaine introuvable" description="Ce domaine n'existe pas ou son slug a changé." />
      </PageContainer>
    )
  }

  const chapters = getChaptersForDomain(domain.id)

  return (
    <PageContainer className="space-y-8">
      <Breadcrumbs items={[{ label: 'Accueil', href: '/' }, { label: 'Académie', href: '/academie' }, { label: domain.titre }]} />
      <section className={`rounded-[2rem] border border-app-border/60 bg-gradient-to-br ${domain.couleur} p-6 shadow-float`}>
        <p className="text-xs uppercase tracking-[0.2em] text-app-muted">Domaine</p>
        <h1 className="mt-3 font-serif text-4xl text-app-ink">{domain.titre}</h1>
        <p className="mt-4 max-w-reading text-sm leading-7 text-app-muted">{domain.resume}</p>
        <p className="mt-4 max-w-reading text-sm font-semibold text-app-ink">{domain.intention}</p>
      </section>
      <div className="grid gap-5">
        {chapters.map((chapter) => {
          const progress = getChapterProgress(chapter, studied)
          return (
            <Link key={chapter.id} to={`/academie/chapitre/${chapter.slug}`}>
              <InfoCard title={chapter.titre}>
                <p className="text-sm leading-7 text-app-muted">{chapter.resume}</p>
                <p className="mt-3 text-sm font-semibold text-app-ink">{chapter.objectif}</p>
                <div className="mt-4 flex items-center justify-between">
                  <ProgressBadge value={progress.completed} total={progress.total} />
                  <span className="text-xs uppercase tracking-[0.18em] text-app-muted">
                    {chapter.conceptIds.length} notions
                  </span>
                </div>
              </InfoCard>
            </Link>
          )
        })}
      </div>
    </PageContainer>
  )
}
