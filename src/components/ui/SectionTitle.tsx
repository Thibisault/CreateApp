import type { PropsWithChildren, ReactNode } from 'react'

interface SectionTitleProps extends PropsWithChildren {
  eyebrow?: string
  action?: ReactNode
}

export function SectionTitle({ eyebrow, children, action }: SectionTitleProps) {
  return (
    <div className="mb-4 flex items-end justify-between gap-4">
      <div>
        {eyebrow ? <p className="mb-1 text-xs uppercase tracking-[0.24em] text-app-muted">{eyebrow}</p> : null}
        <h2 className="font-serif text-2xl leading-tight text-app-ink">{children}</h2>
      </div>
      {action}
    </div>
  )
}
