interface ExampleBlockProps {
  label: string
  content: string
}

export function ExampleBlock({ label, content }: ExampleBlockProps) {
  return (
    <div className="rounded-3xl border border-app-border/50 bg-app-accentSoft/25 p-4">
      <p className="mb-2 text-xs uppercase tracking-[0.22em] text-app-muted">{label}</p>
      <p className="text-sm leading-7 text-app-ink">{content}</p>
    </div>
  )
}
