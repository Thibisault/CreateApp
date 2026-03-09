import { Clock3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { ExerciceCreatif } from '@/types/content'
import { TagChip } from '@/components/ui/TagChip'

interface ExerciseCardProps {
  exercise: ExerciceCreatif
}

export function ExerciseCard({ exercise }: ExerciseCardProps) {
  return (
    <Link
      to={`/entrainement/exercice/${exercise.slug}`}
      className="flex h-full flex-col rounded-3xl border border-app-border/60 bg-app-surface/85 p-5 transition hover:-translate-y-0.5 hover:shadow-float"
    >
      <div className="flex items-center justify-between gap-4">
        <TagChip>{exercise.competence}</TagChip>
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-app-muted">
          <Clock3 size={14} />
          {exercise.dureeMinutes} min
        </span>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-app-ink">{exercise.titre}</h3>
      <p className="mt-2 flex-1 text-sm leading-7 text-app-muted">{exercise.objectif}</p>
      <p className="mt-4 text-xs uppercase tracking-[0.18em] text-app-muted">{exercise.difficulte}</p>
    </Link>
  )
}
