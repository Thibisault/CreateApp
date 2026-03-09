import { exercices, notions, routines } from '@/content'

export type SearchKind = 'concept' | 'exercise' | 'routine'

export interface SearchResult {
  id: string
  titre: string
  resume: string
  kind: SearchKind
  href: string
  tags: string[]
}

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
}

export function searchCatalog(query: string) {
  const q = normalize(query.trim())
  if (!q) {
    return [] as SearchResult[]
  }

  const conceptResults: SearchResult[] = notions
    .filter((item) =>
      normalize(
        [
          item.titre,
          item.resume,
          item.definition,
          item.but,
          item.pourquoiCestImportant,
          item.questionsCles.join(' '),
          item.tags.join(' '),
        ].join(' '),
      ).includes(q),
    )
    .map((item) => ({
      id: item.id,
      titre: item.titre,
      resume: item.resume,
      kind: 'concept',
      href: `/academie/notion/${item.slug}`,
      tags: item.tags,
    }))

  const exerciseResults: SearchResult[] = exercices
    .filter((item) => normalize([item.titre, item.objectif, item.tags.join(' ')].join(' ')).includes(q))
    .map((item) => ({
      id: item.id,
      titre: item.titre,
      resume: item.objectif,
      kind: 'exercise',
      href: `/entrainement/exercice/${item.slug}`,
      tags: item.tags,
    }))

  const routineResults: SearchResult[] = routines
    .filter((item) => normalize([item.titre, item.resume, item.objectif].join(' ')).includes(q))
    .map((item) => ({
      id: item.id,
      titre: item.titre,
      resume: item.resume,
      kind: 'routine',
      href: `/routines/${item.slug}`,
      tags: item.notionIds,
    }))

  return [...conceptResults, ...exerciseResults, ...routineResults]
}
