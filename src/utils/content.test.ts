import { describe, expect, it } from 'vitest'
import { getConceptNavigation, getQuickExercise, getRoutineOfDay } from '@/utils/content'

describe('content utils', () => {
  it('returns previous and next concept navigation', () => {
    const navigation = getConceptNavigation('pensee-divergente')
    expect(navigation.precedent?.id).toBe('principes-travail-creatif')
    expect(navigation.suivant?.id).toBe('pensee-convergente')
  })

  it('returns a quick exercise with five minutes or less', () => {
    expect(getQuickExercise().dureeMinutes).toBeLessThanOrEqual(5)
  })

  it('returns a routine of day', () => {
    expect(getRoutineOfDay(new Date('2026-03-09T09:00:00Z')).id).toBeTruthy()
  })
})
