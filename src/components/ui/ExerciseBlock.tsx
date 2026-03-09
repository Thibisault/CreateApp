interface ExerciseBlockProps {
  title: string
  description: string
}

export function ExerciseBlock({ title, description }: ExerciseBlockProps) {
  return (
    <div className="rounded-3xl border border-dashed border-app-accent/30 bg-app-surfaceMuted/40 p-4">
      <p className="mb-2 text-sm font-semibold text-app-ink">{title}</p>
      <p className="text-sm leading-7 text-app-muted">{description}</p>
    </div>
  )
}
