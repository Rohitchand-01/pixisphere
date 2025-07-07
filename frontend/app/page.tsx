'use client'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          Capture Every Moment <br /> with <span className="text-indigo-600">Pixisphere</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Find and connect with top-rated photographers for maternity, newborn, birthdays, weddings and more — all in one place.
        </p>
        <Link href="/photographers">
          <button className="bg-indigo-600 text-white text-sm px-6 py-3 rounded-full shadow hover:bg-indigo-700 transition duration-300">
            Browse Photographers
          </button>
        </Link>
      </div>

      <div className="mt-20 w-full max-w-5xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Why Choose Pixisphere?</h2>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg text-indigo-600 mb-2">Verified Professionals</h3>
            <p className="text-gray-600 text-sm">All our photographers are hand-picked, reviewed, and verified for top quality.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg text-indigo-600 mb-2">Filter What You Need</h3>
            <p className="text-gray-600 text-sm">Smart filters help you choose by location, rating, style, or budget.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg text-indigo-600 mb-2">Instant Inquiry</h3>
            <p className="text-gray-600 text-sm">Send your requirement instantly and connect with photographers in minutes.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
