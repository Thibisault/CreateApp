import { describe, expect, it } from 'vitest'
import { createDefaultUserData, parseImportedUserData, serializeUserData } from '@/utils/storage'

describe('storage helpers', () => {
  it('serializes and hydrates user data', () => {
    const data = createDefaultUserData()
    data.favoris = ['definition-creativite']
    const serialized = serializeUserData(data)
    const parsed = parseImportedUserData(serialized)
    expect(parsed.favoris).toEqual(['definition-creativite'])
  })

  it('fills missing properties during import', () => {
    const parsed = parseImportedUserData(JSON.stringify({ favoris: ['a'] }))
    expect(parsed.notesExercices).toEqual({})
    expect(parsed.favoris).toEqual(['a'])
  })
})
