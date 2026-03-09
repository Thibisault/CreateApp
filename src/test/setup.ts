import { beforeEach } from 'vitest'
import { resetLocalUserData } from '@/utils/storage'

beforeEach(() => {
  localStorage.clear()
  resetLocalUserData()
})
