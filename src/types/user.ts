export type ThemePreference = 'systeme' | 'clair' | 'sombre'
export type ReadingDensity = 'confort' | 'compact'

export interface HistoriqueItem {
  id: string
  type: 'concept' | 'chapitre' | 'exercice' | 'routine' | 'atelier'
  titre: string
  chemin: string
  dateIso: string
}

export interface ReponseAtelier {
  etapeId: string
  contenu: string
  updatedAt: string
}

export interface IdeeAtelier {
  id: string
  titre: string
  descriptionInitiale: string
  createdAt: string
  updatedAt: string
  currentStepId: string
  reponses: ReponseAtelier[]
}

export interface JournalExercice {
  id: string
  exerciceId: string
  note: string
  completedAt: string
}

export interface SuiviRoutine {
  id: string
  routineId: string
  completedAt: string
}

export interface PreferencesUtilisateur {
  theme: ThemePreference
  densiteLecture: ReadingDensity
}

export interface DonneesUtilisateur {
  version: number
  favoris: string[]
  notionsEtudiees: string[]
  notionsARetravailler: string[]
  notesNotions: Record<string, string>
  notesExercices: Record<string, string>
  ideesAtelier: IdeeAtelier[]
  journauxExercices: JournalExercice[]
  suivisRoutines: SuiviRoutine[]
  historique: HistoriqueItem[]
  preferences: PreferencesUtilisateur
  reprise?: HistoriqueItem
}
