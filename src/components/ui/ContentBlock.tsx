import type { PropsWithChildren } from 'react'

interface ContentBlockProps extends PropsWithChildren {
  title: string
  collapsedByDefault?: boolean
}

export function ContentBlock({ title, children, collapsedByDefault = false }: ContentBlockProps) {
  return (
    <details
      className="rounded-3xl border border-app-border/60 bg-app-surface/80 px-4 py-4 open:shadow-float"
      open={!collapsedByDefault}
    >
      <summary className="cursor-pointer list-none text-base font-semibold text-app-ink [&::-webkit-details-marker]:hidden">
        {title}
      </summary>
      <div className="mt-3 space-y-3 text-sm leading-7 text-app-muted">{children}</div>
    </details>
  )
}
