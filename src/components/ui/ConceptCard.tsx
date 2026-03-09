import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { NotionPedagogique } from '@/types/content'
import { TagChip } from '@/components/ui/TagChip'

interface ConceptCardProps {
  concept: NotionPedagogique
  studied?: boolean
  favorite?: boolean
}

export function ConceptCard({ concept, studied = false, favorite = false }: ConceptCardProps) {
  return (
    <Link
      to={`/academie/notion/${concept.slug}`}
      className="group flex h-full flex-col rounded-3xl border border-app-border/60 bg-app-surface/85 p-5 transition hover:-translate-y-0.5 hover:shadow-float"
    >
      <div className="flex items-center gap-2">
        {concept.tags.slice(0, 2).map((tag) => (
          <TagChip key={tag}>{tag}</TagChip>
        ))}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-app-ink">{concept.titre}</h3>
      <p className="mt-2 flex-1 text-sm leading-7 text-app-muted">{concept.resume}</p>
      <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-app-muted">
        <span>{favorite ? 'Favori' : studied ? 'Étudiée' : 'À lire'}</span>
        <ArrowRight size={14} className="transition group-hover:translate-x-1" />
      </div>
    </Link>
  )
}
