import type { PropsWithChildren, ReactNode } from 'react'
import { clsx } from 'clsx'

interface InfoCardProps extends PropsWithChildren {
  title?: string
  icon?: ReactNode
  action?: ReactNode
  className?: string
}

export function InfoCard({ title, icon, action, className, children }: InfoCardProps) {
  return (
    <section
      className={clsx(
        'rounded-3xl border border-app-border/70 bg-app-surface/90 p-5 shadow-float backdrop-blur',
        className,
      )}
    >
      {title || action ? (
        <div className="mb-4 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            {icon ? <div className="rounded-2xl bg-app-accentSoft/70 p-2 text-app-accent">{icon}</div> : null}
            {title ? <h3 className="text-lg font-semibold text-app-ink">{title}</h3> : null}
          </div>
          {action}
        </div>
      ) : null}
      {children}
    </section>
  )
}
