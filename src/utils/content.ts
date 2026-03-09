import { chapitres, domaines, etapesAtelier, exercices, notions, routines } from '@/content'
import type { ChapitrePedagogique, NotionPedagogique } from '@/types/content'
import { getWeekdayIndex } from '@/utils/date'

export const domainMap = new Map(domaines.map((domaine) => [domaine.id, domaine]))
export const domainSlugMap = new Map(domaines.map((domaine) => [domaine.slug, domaine]))
export const chapterMap = new Map(chapitres.map((chapitre) => [chapitre.id, chapitre]))
export const chapterSlugMap = new Map(chapitres.map((chapitre) => [chapitre.slug, chapitre]))
export const conceptMap = new Map(notions.map((notion) => [notion.id, notion]))
export const conceptSlugMap = new Map(notions.map((notion) => [notion.slug, notion]))
export const exerciseMap = new Map(exercices.map((exercice) => [exercice.id, exercice]))
export const exerciseSlugMap = new Map(exercices.map((exercice) => [exercice.slug, exercice]))
export const routineMap = new Map(routines.map((routine) => [routine.id, routine]))
export const routineSlugMap = new Map(routines.map((routine) => [routine.slug, routine]))
export const workshopStepMap = new Map(etapesAtelier.map((step) => [step.id, step]))

export const orderedConceptIds = chapitres.flatMap((chapitre) => chapitre.conceptIds)

export function getChaptersForDomain(domainId: string) {
  return chapitres.filter((chapitre) => chapitre.domaineId === domainId)
}

export function getConceptsForChapter(chapterId: string) {
  return notions.filter((notion) => notion.chapitreId === chapterId)
}

export function getConceptNavigation(conceptId: string) {
  const index = orderedConceptIds.indexOf(conceptId)
  return {
    precedent: index > 0 ? conceptMap.get(orderedConceptIds[index - 1]) : undefined,
    suivant:
      index >= 0 && index < orderedConceptIds.length - 1
        ? conceptMap.get(orderedConceptIds[index + 1])
        : undefined,
  }
}

export function getRelatedConcepts(concept: NotionPedagogique) {
  return concept.notionsLiees
    .map((id) => conceptMap.get(id))
    .filter((item): item is NotionPedagogique => Boolean(item))
}

export function getChapterProgress(chapitre: ChapitrePedagogique, notionsEtudiees: string[]) {
  const completed = chapitre.conceptIds.filter((id) => notionsEtudiees.includes(id)).length
  return {
    completed,
    total: chapitre.conceptIds.length,
    ratio: chapitre.conceptIds.length ? completed / chapitre.conceptIds.length : 0,
  }
}

export function getDomainProgress(domainId: string, notionsEtudiees: string[]) {
  const domainChapters = getChaptersForDomain(domainId)
  const totals = domainChapters.reduce(
    (acc, chapitre) => {
      acc.completed += chapitre.conceptIds.filter((id) => notionsEtudiees.includes(id)).length
      acc.total += chapitre.conceptIds.length
      return acc
    },
    { completed: 0, total: 0 },
  )

  return {
    ...totals,
    ratio: totals.total ? totals.completed / totals.total : 0,
  }
}

export function getRoutineOfDay(date = new Date()) {
  const weekday = getWeekdayIndex(date)
  if (weekday === 0) {
    return routines.find((routine) => routine.id === 'approfondie') ?? routines[0]
  }
  if (weekday === 1) {
    return routines.find((routine) => routine.id === 'hebdomadaire-structuree') ?? routines[0]
  }
  return routines.find((routine) => routine.id === 'quotidienne-courte') ?? routines[0]
}

export function getQuickExercise() {
  return exercices.find((exercice) => exercice.dureeMinutes <= 5) ?? exercices[0]
}

export function getRandomExercise(seed?: string) {
  if (!exercices.length) {
    return undefined
  }

  const basis = seed ? seed.length : new Date().getDate()
  return exercices[basis % exercices.length]
}
