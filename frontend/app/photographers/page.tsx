'use client'
import { useEffect } from 'react'
import { usePhotographerStore } from '@/store/usePhotographerStore'
import PhotographerCard from '@/components/PhotographerCard'
import FilterSidebar from '@/components/FilterSidebar'
import SearchBar from '@/components/SearchBar'
import SmartSuggestionStrip from '@/components/SmartSuggestionStrip'

export default function HomePage() {
  const {
    fetchPhotographers,
    filteredPhotographers,
    visibleCount,
    loadMore
  } = usePhotographerStore()

  useEffect(() => {
    fetchPhotographers()
  }, [fetchPhotographers])

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <SearchBar />
      <SmartSuggestionStrip />
      <div className="grid md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <FilterSidebar />
        </div>
        <div className="md:col-span-3">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotographers.slice(0, visibleCount).map((p) => (
              <PhotographerCard key={p.id} photographer={p} />
            ))}
          </div>

          {visibleCount < filteredPhotographers.length && (
            <div className="flex justify-center mt-6">
              <button
                onClick={loadMore}
                className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}