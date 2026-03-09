import { describe, expect, it } from 'vitest'
import { buildProgressSnapshot } from '@/utils/progress'
import { createDefaultUserData } from '@/utils/storage'

describe('progress snapshot', () => {
  it('aggregates progress stats from user data', () => {
    const data = createDefaultUserData()
    data.notionsEtudiees = ['definition-creativite', 'pensee-divergente']
    data.favoris = ['definition-creativite']
    data.ideesAtelier = [
      {
        id: 'idea-1',
        titre: 'Idée',
        descriptionInitiale: '',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        currentStepId: 'idee-depart',
        reponses: [],
      },
    ]

    const snapshot = buildProgressSnapshot(data)
    expect(snapshot.studiedConcepts).toBe(2)
    expect(snapshot.favoriteConcepts).toBe(1)
    expect(snapshot.activeIdeas).toBe(1)
    expect(snapshot.chaptersTouched).toBeGreaterThan(0)
  })
})
