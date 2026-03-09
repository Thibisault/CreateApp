import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { chapterSlugMap, conceptSlugMap, exerciseSlugMap, routineSlugMap } from '@/utils/content'
import { useAppStore } from '@/stores/useAppStore'

export function RouteTracker() {
  const location = useLocation()
  const recordHistory = useAppStore((state) => state.recordHistory)
  const ideas = useAppStore((state) => state.data.ideesAtelier)

  useEffect(() => {
    const path = location.pathname
    const conceptMatch = path.match(/^\/academie\/notion\/([^/]+)$/)
    const chapterMatch = path.match(/^\/academie\/chapitre\/([^/]+)$/)
    const exerciseMatch = path.match(/^\/entrainement\/exercice\/([^/]+)$/)
    const routineMatch = path.match(/^\/routines\/([^/]+)$/)
    const workshopMatch = path.match(/^\/atelier\/([^/]+)/)

    if (conceptMatch) {
      const concept = conceptSlugMap.get(conceptMatch[1])
      if (concept) {
        recordHistory({
          id: concept.id,
          type: 'concept',
          titre: concept.titre,
          chemin: path,
          dateIso: new Date().toISOString(),
        })
      }
      return
    }

    if (chapterMatch) {
      const chapter = chapterSlugMap.get(chapterMatch[1])
      if (chapter) {
        recordHistory({
          id: chapter.id,
          type: 'chapitre',
          titre: chapter.titre,
          chemin: path,
          dateIso: new Date().toISOString(),
        })
      }
      return
    }

    if (exerciseMatch) {
      const exercise = exerciseSlugMap.get(exerciseMatch[1])
      if (exercise) {
        recordHistory({
          id: exercise.id,
          type: 'exercice',
          titre: exercise.titre,
          chemin: path,
          dateIso: new Date().toISOString(),
        })
      }
      return
    }

    if (routineMatch) {
      const routine = routineSlugMap.get(routineMatch[1])
      if (routine) {
        recordHistory({
          id: routine.id,
          type: 'routine',
          titre: routine.titre,
          chemin: path,
          dateIso: new Date().toISOString(),
        })
      }
      return
    }

    if (workshopMatch) {
      const idea = ideas.find((entry) => entry.id === workshopMatch[1])
      if (idea) {
        recordHistory({
          id: idea.id,
          type: 'atelier',
          titre: idea.titre,
          chemin: path,
          dateIso: new Date().toISOString(),
        })
      }
    }
  }, [ideas, location.pathname, recordHistory])

  return null
}
