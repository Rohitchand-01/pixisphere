// app/photographers/[id]/page.tsx
import Image from 'next/image'
import ClientSection from './ClientSection'

// Correctly defines the props for a dynamic route page component
type PageProps = {
  params: {
    id: string
  }
}

export default async function PhotographerProfile({ params }: PageProps) {
  // Fetch data for the specific photographer using the ID from params
  const res = await fetch(`http://localhost:3001/photographers/${params.id}`, {
    cache: 'no-store', // Ensures fresh data on each request
  })

  // Handle cases where the data fetch fails
  if (!res.ok) {
    return (
      <div className="p-10 text-center text-red-500">Failed to load data</div>
    )
  }

  // Parse the JSON response
  const data = await res.json()

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Profile picture section */}
        <div className="w-full md:w-1/3">
          <Image
            src={data.profilePic}
            alt={data.name}
            width={300} // Specify width for Image component optimization
            height={300} // Specify height for Image component optimization
            className="rounded-lg object-cover w-full h-72" // Tailwind classes for styling
          />
        </div>

        {/* Photographer details section */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{data.name}</h1>
          <p className="text-gray-600 mb-4">{data.bio}</p>

          {/* Contact and rating information */}
          <div className="space-y-2 text-sm text-gray-700">
            <p><span className="font-medium">📍 Location:</span> {data.location}</p>
            <p><span className="font-medium">💰 Price:</span> ₹{data.price}</p>
            <p><span className="font-medium">⭐ Rating:</span> {data.rating}</p>
          </div>

          {/* Styles and tags display */}
          <div className="flex flex-wrap gap-2 mt-4">
            {data.styles.map((style: string, i: number) => (
              <span key={i} className="bg-gray-200 text-xs px-3 py-1 rounded-full text-gray-700">{style}</span>
            ))}
            {data.tags.map((tag: string, i: number) => (
              <span key={i} className="bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>

          {/* ClientSection component (presumably for client-side interactions) */}
          <ClientSection />
        </div>
      </div>

      {/* Placeholder for gallery and reviews section, which are not included in this snippet */}
    </div>
  )
}
