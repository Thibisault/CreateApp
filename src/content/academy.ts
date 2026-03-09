import { notionsFondamentales } from '@/content/academy-foundations'
import { notionsImagination } from '@/content/academy-imagination'
import { notionsLeviers } from '@/content/academy-leviers'
import { notionsMethodes } from '@/content/academy-methodes'
import { notionsModesPensee } from '@/content/academy-modes'
import { notionsPratique } from '@/content/academy-pratique'
import { domaines, chapitres } from '@/content/academy-structure'
import { notionsTransformation } from '@/content/academy-transformation'

export { domaines, chapitres }

export const notions = [
  ...notionsFondamentales,
  ...notionsModesPensee,
  ...notionsLeviers,
  ...notionsMethodes,
  ...notionsImagination,
  ...notionsTransformation,
  ...notionsPratique,
]
