import { Metadata } from 'next'
import Image from 'next/image'
import ClientSection from './ClientSection'

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `Photographer | ${id}`,
  }
}

export default async function PhotographerProfile({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const res = await fetch(`https://pixisphere-2.onrender.com/photographers/${id}`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    return (
      <div className="p-10 text-center text-red-500">Failed to load data</div>
    )
  }

  const data = await res.json()

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3">
          <Image
            src={data.profilePic}
            alt={data.name}
            width={300}
            height={300}
            className="rounded-lg object-cover w-full h-72"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{data.name}</h1>
          <p className="text-gray-600 mb-4">{data.bio}</p>

          <div className="space-y-2 text-sm text-gray-700">
            <p><span className="font-medium">📍 Location:</span> {data.location}</p>
            <p><span className="font-medium">💰 Price:</span> ₹{data.price}</p>
            <p><span className="font-medium">⭐ Rating:</span> {data.rating}</p>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {data.styles.map((style: string, i: number) => (
              <span key={i} className="bg-gray-200 text-xs px-3 py-1 rounded-full text-gray-700">{style}</span>
            ))}
            {data.tags.map((tag: string, i: number) => (
              <span key={i} className="bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>

          <ClientSection />
        </div>
      </div>
    </div>
  )
}