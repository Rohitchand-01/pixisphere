'use client'
import { usePhotographerStore } from '@/store/usePhotographerStore'

export default function SmartSuggestionStrip() {
  const { photographers } = usePhotographerStore()

  const suggestion = photographers
    .filter((p) =>
      p.styles.includes('Outdoor') &&
      p.tags.includes('Maternity') &&
      p.location === 'Bengaluru'
    )
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3)

  if (!suggestion.length) return null

  return (
    <div className="bg-white text-indigo-800 px-4 py-3 rounded mb-4 shadow">
      <p className="text-sm font-medium">
        ⭐ Top-rated <span className="font-semibold">outdoor maternity</span> photographers in <span className="font-semibold">Bengaluru</span>:
        {' '}
        {suggestion.map((p) => p.name).join(', ')}
      </p>
    </div>
  )
}
