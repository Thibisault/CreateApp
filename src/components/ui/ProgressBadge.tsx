interface ProgressBadgeProps {
  value: number
  total: number
}

export function ProgressBadge({ value, total }: ProgressBadgeProps) {
  const ratio = total === 0 ? 0 : Math.round((value / total) * 100)
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-app-border/60 bg-app-surfaceMuted/40 px-3 py-1 text-xs font-semibold text-app-muted">
      <span>{value}/{total}</span>
      <span>{ratio}%</span>
    </div>
  )
}
