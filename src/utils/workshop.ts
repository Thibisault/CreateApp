import { etapesAtelier } from '@/content'
import type { IdeeAtelier } from '@/types/user'

export function getIdeaResponse(idea: IdeeAtelier, stepId: string) {
  return idea.reponses.find((response) => response.etapeId === stepId)?.contenu ?? ''
}

export function buildIdeaSummary(idea: IdeeAtelier) {
  const byStep = Object.fromEntries(
    etapesAtelier.map((step) => [step.id, getIdeaResponse(idea, step.id)]),
  ) as Record<string, string>

  return {
    noyau: byStep['synthese'] || byStep['idee-depart'] || idea.descriptionInitiale,
    pointsForts: [byStep['couches-signature'], byStep['concretisation']]
      .filter(Boolean)
      .slice(0, 2),
    pointsARetravailler: [byStep['evaluation']]
      .filter(Boolean)
      .slice(0, 1),
    prochainesPistes: [byStep['synthese'] || byStep['evaluation']].filter(Boolean),
  }
}
