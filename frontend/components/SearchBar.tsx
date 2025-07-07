'use client'
import { useEffect, useState } from 'react'
import { useDebounce } from '../lib/useDebounce'
import { usePhotographerStore } from '@/store/usePhotographerStore'

export default function SearchBar() {
  const [value, setValue] = useState('')
  const debounced = useDebounce(value, 400)
  const { setFilters, filters } = usePhotographerStore()

  useEffect(() => {
    setFilters({ ...filters, search: debounced })
  }, [debounced])

  return (
    <input
      type="text"
      placeholder="Search by name, location, or tag"
      className="w-full border rounded px-4 py-2 mb-4"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}
