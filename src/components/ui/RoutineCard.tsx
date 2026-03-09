import { Link } from 'react-router-dom'
import type { RoutineCreatif } from '@/types/content'
import { TagChip } from '@/components/ui/TagChip'

interface RoutineCardProps {
  routine: RoutineCreatif
  highlight?: boolean
}

export function RoutineCard({ routine, highlight = false }: RoutineCardProps) {
  return (
    <Link
      to={`/routines/${routine.slug}`}
      className={`flex h-full flex-col rounded-3xl border p-5 transition hover:-translate-y-0.5 hover:shadow-float ${
        highlight
          ? 'border-app-accent bg-app-accent text-white'
          : 'border-app-border/60 bg-app-surface/85 text-app-ink'
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <TagChip className={highlight ? 'border-white/40 bg-white/10 text-white' : ''}>{routine.duree}</TagChip>
        <span className={`text-xs uppercase tracking-[0.16em] ${highlight ? 'text-white/70' : 'text-app-muted'}`}>
          {routine.frequence}
        </span>
      </div>
      <h3 className="mt-4 text-lg font-semibold">{routine.titre}</h3>
      <p className={`mt-2 flex-1 text-sm leading-7 ${highlight ? 'text-white/80' : 'text-app-muted'}`}>
        {routine.resume}
      </p>
      <p className={`mt-4 text-xs uppercase tracking-[0.18em] ${highlight ? 'text-white/70' : 'text-app-muted'}`}>
        {routine.progression}
      </p>
    </Link>
  )
}
