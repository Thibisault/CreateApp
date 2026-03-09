import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { ConceptCard } from '@/components/ui/ConceptCard'
import { EmptyState } from '@/components/ui/EmptyState'
import { PageContainer } from '@/components/ui/PageContainer'
import { ProgressBadge } from '@/components/ui/ProgressBadge'
import { SearchBar } from '@/components/ui/SearchBar'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { chapterSlugMap, domainMap, getConceptsForChapter } from '@/utils/content'
import { useAppStore } from '@/stores/useAppStore'

export function ChapterPage() {
  const { chapterSlug = '' } = useParams()
  const chapter = chapterSlugMap.get(chapterSlug)
  const favorites = useAppStore((state) => state.data.favoris)
  const studied = useAppStore((state) => state.data.notionsEtudiees)
  const [query, setQuery] = useState('')

  const concepts = useMemo(() => {
    if (!chapter) {
      return []
    }

    return getConceptsForChapter(chapter.id).filter((concept) =>
      [concept.titre, concept.resume, concept.tags.join(' '), concept.questionsCles.join(' ')]
        .join(' ')
        .toLowerCase()
        .includes(query.toLowerCase()),
    )
  }, [chapter, query])

  if (!chapter) {
    return (
      <PageContainer>
        <EmptyState title="Chapitre introuvable" description="Ce chapitre n'existe pas ou son slug a changé." />
      </PageContainer>
    )
  }

  const domain = domainMap.get(chapter.domaineId)
  const completed = chapter.conceptIds.filter((id) => studied.includes(id)).length

  return (
    <PageContainer className="space-y-8">
      <Breadcrumbs
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'Académie', href: '/academie' },
          { label: domain?.titre ?? 'Domaine', href: domain ? `/academie/domaine/${domain.slug}` : '/academie' },
          { label: chapter.titre },
        ]}
      />
      <section>
        <SectionTitle eyebrow="Chapitre">{chapter.titre}</SectionTitle>
        <p className="max-w-reading text-sm leading-7 text-app-muted">{chapter.resume}</p>
        <div className="mt-4 flex items-center gap-3">
          <ProgressBadge value={completed} total={chapter.conceptIds.length} />
          <span className="text-xs uppercase tracking-[0.18em] text-app-muted">{chapter.objectif}</span>
        </div>
      </section>
      <SearchBar value={query} onChange={setQuery} placeholder="Rechercher dans ce chapitre, y compris les questions-clés..." />
      <section>
        <SectionTitle eyebrow="Sommaire">Notions du chapitre</SectionTitle>
        <div className="grid gap-5 md:grid-cols-2">
          {concepts.map((concept) => (
            <ConceptCard
              key={concept.id}
              concept={concept}
              studied={studied.includes(concept.id)}
              favorite={favorites.includes(concept.id)}
            />
          ))}
        </div>
      </section>
    </PageContainer>
  )
}
