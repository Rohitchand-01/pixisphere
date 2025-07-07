'use client'
import Link from 'next/link'

export default function PhotographerCard({ photographer }: { photographer: any }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
      <div className="h-56 w-full overflow-hidden">
        <img
          src={photographer.profilePic}
          alt={photographer.name}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{photographer.name}</h2>
        <p className="text-sm text-gray-500">{photographer.location}</p>

        <div className="mt-2 flex justify-between items-center text-sm">
          <span className="text-indigo-600 font-medium">₹{photographer.price}</span>
          <span className="text-yellow-500">⭐ {photographer.rating}</span>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {photographer.tags.map((tag: string, i: number) => (
            <span
              key={i}
              className="bg-indigo-50 text-indigo-600 text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link href={`/photographers/${photographer.id}`}>
          <button className="w-full mt-4 bg-indigo-600 text-white text-sm py-2 rounded-md hover:bg-indigo-700 transition">
            View Profile
          </button>
        </Link>
      </div>
    </div>
  )
}
