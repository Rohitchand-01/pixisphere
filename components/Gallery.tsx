export default function Gallery({ images }: { images: string[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Portfolio ${i + 1}`}
          className="w-full h-40 object-cover rounded"
        />
      ))}
    </div>
  )
}
