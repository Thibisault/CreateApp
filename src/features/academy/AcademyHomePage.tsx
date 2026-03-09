import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { chapitres, domaines, notions } from '@/content'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { InfoCard } from '@/components/ui/InfoCard'
import { PageContainer } from '@/components/ui/PageContainer'
import { ProgressBadge } from '@/components/ui/ProgressBadge'
import { SearchBar } from '@/components/ui/SearchBar'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { useAppStore } from '@/stores/useAppStore'
import { getDomainProgress } from '@/utils/content'
import { useState } from 'react'

export function AcademyHomePage() {
  const studied = useAppStore((state) => state.data.notionsEtudiees)
  const [query, setQuery] = useState('')

  const filteredDomains = domaines.filter((domain) =>
    [domain.titre, domain.resume, domain.intention]
      .join(' ')
      .toLowerCase()
      .includes(query.toLowerCase()),
  )

  return (
    <PageContainer className="space-y-8">
      <Breadcrumbs items={[{ label: 'Accueil', href: '/' }, { label: 'Académie' }]} />
      <section>
        <SectionTitle eyebrow="Académie">Parcours structuré</SectionTitle>
        <p className="max-w-reading text-sm leading-7 text-app-muted">
          Explore les domaines, avance chapitre par chapitre, marque les notions étudiées et utilise la recherche
          pour retrouver un angle, une méthode ou une question-clé.
        </p>
      </section>
      <SearchBar value={query} onChange={setQuery} placeholder="Rechercher un domaine ou une intention pédagogique..." />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredDomains.map((domain) => {
          const progress = getDomainProgress(domain.id, studied)
          const chapterCount = chapitres.filter((chapter) => chapter.domaineId === domain.id).length
          const conceptCount = notions.filter((concept) => concept.domaineId === domain.id).length
          return (
            <Link key={domain.id} to={`/academie/domaine/${domain.slug}`}>
              <InfoCard title={domain.titre} className={`bg-gradient-to-br ${domain.couleur}`}>
                <p className="text-sm leading-7 text-app-muted">{domain.resume}</p>
                <p className="mt-4 text-sm font-semibold text-app-ink">{domain.intention}</p>
                <div className="mt-4 flex items-center justify-between">
                  <ProgressBadge value={progress.completed} total={progress.total} />
                  <span className="text-xs uppercase tracking-[0.18em] text-app-muted">
                    {chapterCount} chapitres · {conceptCount} notions
                  </span>
                </div>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-app-accent">
                  Ouvrir le domaine
                  <ArrowRight size={16} />
                </div>
              </InfoCard>
            </Link>
          )
        })}
      </div>
    </PageContainer>
  )
}
