interface StatCardProps {
  label: string
  value: string
  hint?: string
}

export function StatCard({ label, value, hint }: StatCardProps) {
  return (
    <div className="rounded-3xl border border-app-border/60 bg-app-surface/80 p-4">
      <p className="text-xs uppercase tracking-[0.2em] text-app-muted">{label}</p>
      <p className="mt-2 font-serif text-3xl text-app-ink">{value}</p>
      {hint ? <p className="mt-1 text-sm text-app-muted">{hint}</p> : null}
    </div>
  )
}
