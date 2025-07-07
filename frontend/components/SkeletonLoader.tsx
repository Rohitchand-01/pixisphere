export default function SkeletonLoader() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-gray-200 animate-pulse h-64 rounded-lg" />
      ))}
    </div>
  )
}
