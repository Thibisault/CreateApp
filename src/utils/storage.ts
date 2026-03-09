import { etapesAtelier } from '@/content'
import type { DonneesUtilisateur, IdeeAtelier } from '@/types/user'

export const STORAGE_KEY = 'forge-creative-data'
export const STORAGE_VERSION = 1

export function createDefaultUserData(): DonneesUtilisateur {
  return {
    version: STORAGE_VERSION,
    favoris: [],
    notionsEtudiees: [],
    notionsARetravailler: [],
    notesNotions: {},
    notesExercices: {},
    ideesAtelier: [],
    journauxExercices: [],
    suivisRoutines: [],
    historique: [],
    preferences: {
      theme: 'systeme',
      densiteLecture: 'confort',
    },
  }
}

function migrateUserData(value: Partial<DonneesUtilisateur> | undefined): DonneesUtilisateur {
  const defaults = createDefaultUserData()

  return {
    ...defaults,
    ...value,
    version: STORAGE_VERSION,
    favoris: value?.favoris ?? defaults.favoris,
    notionsEtudiees: value?.notionsEtudiees ?? defaults.notionsEtudiees,
    notionsARetravailler: value?.notionsARetravailler ?? defaults.notionsARetravailler,
    notesNotions: value?.notesNotions ?? defaults.notesNotions,
    notesExercices: value?.notesExercices ?? defaults.notesExercices,
    ideesAtelier: value?.ideesAtelier ?? defaults.ideesAtelier,
    journauxExercices: value?.journauxExercices ?? defaults.journauxExercices,
    suivisRoutines: value?.suivisRoutines ?? defaults.suivisRoutines,
    historique: value?.historique ?? defaults.historique,
    preferences: {
      ...defaults.preferences,
      ...value?.preferences,
    },
  }
}

export function loadLocalUserData(): DonneesUtilisateur {
  const raw = localStorage.getItem(STORAGE_KEY)
  if (!raw) {
    return createDefaultUserData()
  }

  try {
    const parsed = JSON.parse(raw) as Partial<DonneesUtilisateur>
    return migrateUserData(parsed)
  } catch {
    return createDefaultUserData()
  }
}

export function saveLocalUserData(data: DonneesUtilisateur) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...data, version: STORAGE_VERSION }))
}

export function serializeUserData(data: DonneesUtilisateur) {
  return JSON.stringify({ ...data, version: STORAGE_VERSION }, null, 2)
}

export function parseImportedUserData(raw: string) {
  const parsed = JSON.parse(raw) as Partial<DonneesUtilisateur>
  return migrateUserData(parsed)
}

export function resetLocalUserData() {
  localStorage.removeItem(STORAGE_KEY)
}

export function createIdea(titre: string, descriptionInitiale = ''): IdeeAtelier {
  const now = new Date().toISOString()
  return {
    id: crypto.randomUUID(),
    titre,
    descriptionInitiale,
    createdAt: now,
    updatedAt: now,
    currentStepId: etapesAtelier[0]?.id ?? 'idee-depart',
    reponses: [],
  }
}
