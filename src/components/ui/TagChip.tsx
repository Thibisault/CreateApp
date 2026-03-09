import type { PropsWithChildren } from 'react'
import { clsx } from 'clsx'

interface TagChipProps extends PropsWithChildren {
  active?: boolean
  className?: string
}

export function TagChip({ active = false, className, children }: TagChipProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold',
        active
          ? 'border-app-accent bg-app-accent text-white'
          : 'border-app-border/70 bg-app-surfaceMuted/50 text-app-muted',
        className,
      )}
    >
      {children}
    </span>
  )
}
