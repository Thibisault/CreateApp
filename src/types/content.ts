export type Niveau = 'base' | 'intermediaire' | 'avance'

export interface DomainePedagogique {
  id: string
  slug: string
  titre: string
  resume: string
  intention: string
  couleur: string
  icone: string
}

export interface ChapitrePedagogique {
  id: string
  slug: string
  domaineId: string
  titre: string
  resume: string
  objectif: string
  conceptIds: string[]
}

export interface NotionPedagogique {
  id: string
  slug: string
  titre: string
  domaineId: string
  chapitreId: string
  sousChapitre?: string
  resume: string
  definition: string
  but: string
  pourquoiCestImportant: string
  quandLUtiliser: string
  commentFaire: string[]
  questionsCles: string[]
  exempleSimple: string
  exempleApprofondi?: string
  erreursFrequentes: string[]
  miniExercice: string
  exerciceApplique?: string
  notionsLiees: string[]
  tags: string[]
  niveau?: Niveau
}

export interface ExerciceCreatif {
  id: string
  slug: string
  titre: string
  competence: string
  dureeMinutes: number
  difficulte: Niveau
  objectif: string
  consignes: string[]
  variantes?: string[]
  promptDeNote: string
  notionIds: string[]
  tags: string[]
}

export interface RoutineCreatif {
  id: string
  slug: string
  titre: string
  resume: string
  objectif: string
  duree: string
  frequence: string
  progression: string
  exercicesIds: string[]
  notionIds: string[]
  etapes: string[]
}

export interface EtapeAtelier {
  id: string
  slug: string
  titre: string
  intention: string
  description: string
  questions: string[]
  sousPrompts: string[]
  notionIds: string[]
  livrable: string
}

export interface BlocReference {
  id: string
  titre: string
  description: string
  items: string[]
}
