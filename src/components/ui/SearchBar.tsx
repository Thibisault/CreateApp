interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function SearchBar({ value, onChange, placeholder }: SearchBarProps) {
  return (
    <label className="flex items-center gap-3 rounded-2xl border border-app-border/60 bg-app-surface/80 px-4 py-3 shadow-sm">
      <span className="text-sm text-app-muted">Recherche</span>
      <input
        className="w-full border-none bg-transparent text-sm text-app-ink outline-none placeholder:text-app-muted"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder ?? 'Rechercher une notion, une question, un exercice...'}
      />
    </label>
  )
}
