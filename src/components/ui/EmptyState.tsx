interface EmptyStateProps {
  title: string
  description: string
}

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="rounded-3xl border border-dashed border-app-border/60 bg-app-surface/60 p-6 text-center">
      <h3 className="font-serif text-2xl text-app-ink">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-app-muted">{description}</p>
    </div>
  )
}
