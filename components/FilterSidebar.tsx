'use client'
import { usePhotographerStore } from '@/store/usePhotographerStore'
import { useState, useEffect } from 'react'

export default function FilterSidebar() {
  const { filters, setFilters, photographers } = usePhotographerStore()
  const [price, setPrice] = useState(20000)
  const cities = Array.from(new Set(photographers.map((p: any) => p.location)))

  useEffect(() => {
    setFilters({ ...filters, price })
  }, [price])

  return (
    <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Filters</h2>

      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
        <select
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={(e) => setFilters({ ...filters, rating: Number(e.target.value) })}
        >
          <option value={0}>All</option>
          <option value={3}>3+ Stars</option>
          <option value={4}>4+ Stars</option>
        </select>
      </div>

      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-1">Styles</label>
        <div className="flex flex-col gap-2">
          {['Outdoor', 'Studio', 'Candid', 'Traditional'].map((style) => (
            <label key={style} className="flex items-center text-sm text-gray-600">
              <input
                type="checkbox"
                className="mr-2"
                onChange={(e) => {
                  const styles = filters.styles || []
                  if (e.target.checked)
                    setFilters({ ...filters, styles: [...styles, style] })
                  else
                    setFilters({ ...filters, styles: styles.filter((s: string) => s !== style) })
                }}
              />
              {style}
            </label>
          ))}
        </div>
      </div>

      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
        <input
          type="range"
          min="5000"
          max="20000"
          step="1000"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full accent-indigo-600"
        />
        <div className="text-xs text-gray-500 mt-1">Up to ₹{price}</div>
      </div>

      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
        <select
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={(e) => setFilters({ ...filters, city: e.target.value })}
        >
          <option value="">All Cities</option>
          {cities.map((city, i) => (
            <option key={i} value={city}>{city}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
        <select
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
        >
          <option value="">None</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="rating-desc">Rating: High to Low</option>
          <option value="recent">Recently Added</option>
        </select>
      </div>
    </div>
  )
}
