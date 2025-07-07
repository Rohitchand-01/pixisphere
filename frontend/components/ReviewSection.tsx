export default function ReviewSection({ reviews }: { reviews: any[] }) {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
      <div className="space-y-4">
        {reviews.map((review, i) => (
          <div key={i} className="bg-white p-4 shadow rounded">
            <div className="font-bold">{review.name}</div>
            <div className="text-yellow-500">⭐ {review.rating}</div>
            <div className="text-sm">{review.comment}</div>
            <div className="text-xs text-gray-500">{review.date}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
