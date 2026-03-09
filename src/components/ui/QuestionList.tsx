interface QuestionListProps {
  items: string[]
}

export function QuestionList({ items }: QuestionListProps) {
  return (
    <ul className="space-y-2">
      {items.map((question) => (
        <li
          key={question}
          className="rounded-2xl border border-app-border/50 bg-app-surfaceMuted/50 px-4 py-3 text-sm text-app-ink"
        >
          {question}
        </li>
      ))}
    </ul>
  )
}
