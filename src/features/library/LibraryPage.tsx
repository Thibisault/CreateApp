import { useMemo, useState } from 'react'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { ConceptCard } from '@/components/ui/ConceptCard'
import { InfoCard } from '@/components/ui/InfoCard'
import { PageContainer } from '@/components/ui/PageContainer'
import { SearchBar } from '@/components/ui/SearchBar'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { TagChip } from '@/components/ui/TagChip'
import { domaines, notions } from '@/content'
import { useAppStore } from '@/stores/useAppStore'

export function LibraryPage() {
  const data = useAppStore((state) => state.data)
  const [query, setQuery] = useState('')
  const [favoritesOnly, setFavoritesOnly] = useState(false)
  const [treeView, setTreeView] = useState(false)

  const filteredConcepts = useMemo(() => {
    return notions.filter((concept) => {
      const matchesQuery = [concept.titre, concept.resume, concept.questionsCles.join(' '), concept.tags.join(' ')]
        .join(' ')
        .toLowerCase()
        .includes(query.toLowerCase())
      const matchesFavorite = !favoritesOnly || data.favoris.includes(concept.id)
      return matchesQuery && matchesFavorite
    })
  }, [data.favoris, favoritesOnly, query])

  return (
    <PageContainer className="space-y-8">
      <Breadcrumbs items={[{ label: 'Accueil', href: '/' }, { label: 'Bibliothèque' }]} />
      <section>
        <SectionTitle eyebrow="Bibliothèque">Recherche globale</SectionTitle>
        <p className="max-w-reading text-sm leading-7 text-app-muted">
          Parcours l’ensemble des notions, filtre par favoris et bascule entre une vue liste et une vue arborescente.
        </p>
      </section>
      <div className="flex flex-wrap gap-3">
        <SearchBar value={query} onChange={setQuery} />
        <button
          onClick={() => setFavoritesOnly((value) => !value)}
          className={`rounded-full px-4 py-3 text-sm font-semibold ${favoritesOnly ? 'bg-app-accent text-white' : 'border border-app-border/70 bg-app-surface'}`}
        >
          Favoris seulement
        </button>
        <button
          onClick={() => setTreeView((value) => !value)}
          className={`rounded-full px-4 py-3 text-sm font-semibold ${treeView ? 'bg-app-accent text-white' : 'border border-app-border/70 bg-app-surface'}`}
        >
          {treeView ? 'Vue liste' : 'Vue arborescente'}
        </button>
      </div>
      {!treeView ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredConcepts.map((concept) => (
            <ConceptCard
              key={concept.id}
              concept={concept}
              studied={data.notionsEtudiees.includes(concept.id)}
              favorite={data.favoris.includes(concept.id)}
            />
          ))}
        </div>
      ) : (
        <div className="space-y-5">
          {domaines.map((domain) => {
            const concepts = filteredConcepts.filter((concept) => concept.domaineId === domain.id)
            if (!concepts.length) {
              return null
            }

            return (
              <InfoCard key={domain.id} title={domain.titre}>
                <div className="mb-4 flex flex-wrap gap-2">
                  <TagChip>{concepts.length} notions</TagChip>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {concepts.map((concept) => (
                    <ConceptCard
                      key={concept.id}
                      concept={concept}
                      studied={data.notionsEtudiees.includes(concept.id)}
                      favorite={data.favoris.includes(concept.id)}
                    />
                  ))}
                </div>
              </InfoCard>
            )
          })}
        </div>
      )}
    </PageContainer>
  )
}
