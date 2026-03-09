import { chapitres, notions, routines } from '@/content'
import type { DonneesUtilisateur } from '@/types/user'
import { getDomainProgress } from '@/utils/content'

export function buildProgressSnapshot(data: DonneesUtilisateur) {
  const domainProgress = ['fondements', 'philosophie', 'modes-pensee', 'leviers', 'methodes', 'imagination', 'transformation', 'pratique'].map(
    (domainId) => ({
      domainId,
      ...getDomainProgress(domainId, data.notionsEtudiees),
    }),
  )

  return {
    totalConcepts: notions.length,
    studiedConcepts: data.notionsEtudiees.length,
    favoriteConcepts: data.favoris.length,
    revisitConcepts: data.notionsARetravailler.length,
    completedExercises: data.journauxExercices.length,
    routinesCompleted: data.suivisRoutines.length,
    activeIdeas: data.ideesAtelier.length,
    chaptersTouched: chapitres.filter((chapter) =>
      chapter.conceptIds.some((id) => data.notionsEtudiees.includes(id)),
    ).length,
    routineCompletionRate:
      routines.length > 0 ? Math.min(1, data.suivisRoutines.length / routines.length) : 0,
    domainProgress,
  }
}
