import { describe, expect, it } from 'vitest'
import { searchCatalog } from '@/utils/search'

describe('searchCatalog', () => {
  it('searches in concept questions and summaries', () => {
    const results = searchCatalog('vrai problème')
    expect(results.some((result) => result.id === 'reformuler-vrai-probleme')).toBe(true)
  })

  it('searches exercises too', () => {
    const results = searchCatalog('5 min')
    expect(results.some((result) => result.kind === 'exercise')).toBe(true)
  })
})
