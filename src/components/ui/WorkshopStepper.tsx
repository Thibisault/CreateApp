import { Link } from 'react-router-dom'
import type { EtapeAtelier } from '@/types/content'

interface WorkshopStepperProps {
  ideaId: string
  currentStepId: string
  steps: EtapeAtelier[]
}

export function WorkshopStepper({ ideaId, currentStepId, steps }: WorkshopStepperProps) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
      {steps.map((step, index) => {
        const isActive = step.id === currentStepId
        return (
          <Link
            key={step.id}
            to={`/atelier/${ideaId}/etape/${step.slug}`}
            className={`min-w-[180px] rounded-2xl border px-4 py-3 text-left ${
              isActive
                ? 'border-app-accent bg-app-accent text-white'
                : 'border-app-border/60 bg-app-surface/80 text-app-ink'
            }`}
          >
            <p className="text-xs uppercase tracking-[0.18em] opacity-80">Étape {index + 1}</p>
            <p className="mt-1 text-sm font-semibold">{step.titre}</p>
          </Link>
        )
      })}
    </div>
  )
}
