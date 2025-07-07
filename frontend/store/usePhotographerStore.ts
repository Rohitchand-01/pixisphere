import { create } from 'zustand'

interface Photographer {
  id: number
  name: string
  bio: string
  location: string
  price: number
  rating: number
  styles: string[]
  tags: string[]
  profilePic: string
}

interface Filters {
  rating: number
  styles: string[]
  search: string
  price: number
  city: string
  sort: string
}

interface PhotographerStore {
  photographers: Photographer[]
  filteredPhotographers: Photographer[]
  filters: Filters
  visibleCount: number
  fetchPhotographers: () => Promise<void>
  setFilters: (newFilters: Partial<Filters>) => void
  loadMore: () => void
}

export const usePhotographerStore = create<PhotographerStore>((set, get) => ({
  photographers: [],
  filteredPhotographers: [],
  filters: {
    rating: 0,
    styles: [],
    search: '',
    price: 20000,
    city: '',
    sort: ''
  },
  visibleCount: 6,
  fetchPhotographers: async () => {
    const res = await fetch('https://pixisphere-2.onrender.com/photographers')
    const data = await res.json()
    set({ photographers: data, filteredPhotographers: data })
  },
  setFilters: (newFilters) => {
    const { photographers } = get()
    const filters = { ...get().filters, ...newFilters }

    let filtered = photographers.filter((p) => {
      const matchRating = !filters.rating || p.rating >= filters.rating
      const matchStyles = !filters.styles.length || filters.styles.every((s) => p.styles.includes(s))
      const matchPrice = !filters.price || p.price <= filters.price
      const matchCity = !filters.city || p.location === filters.city
      const searchLower = filters.search?.toLowerCase() || ''
      const matchSearch =
        !filters.search ||
        p.name.toLowerCase().includes(searchLower) ||
        p.location.toLowerCase().includes(searchLower) ||
        p.tags.join(' ').toLowerCase().includes(searchLower)

      return matchRating && matchStyles && matchPrice && matchCity && matchSearch
    })

    if (filters.sort === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price)
    } else if (filters.sort === 'rating-desc') {
      filtered.sort((a, b) => b.rating - a.rating)
    } else if (filters.sort === 'recent') {
      filtered.sort((a, b) => b.id - a.id)
    }

    set({ filters, filteredPhotographers: filtered, visibleCount: 6 })
  },
  loadMore: () => {
    set((state) => ({ visibleCount: state.visibleCount + 6 }))
  }
}))