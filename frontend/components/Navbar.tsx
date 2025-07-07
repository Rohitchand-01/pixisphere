'use client'
import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-gradient-to-br from-indigo-50 to-white shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-extrabold text-indigo-600 tracking-tight">
          Pixisphere
        </Link>

        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-700 hover:text-indigo-600 focus:outline-none"
          >
            {open ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent md:flex md:items-center gap-6 md:gap-8 px-6 md:px-0 py-4 md:py-0 transition-all duration-300 ease-in-out ${
            open ? 'block' : 'hidden md:flex'
          }`}
        >
          <li>
            <Link href="/" className="text-sm text-gray-700 hover:text-indigo-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/photographers" className="text-sm text-gray-700 hover:text-indigo-600">
              Photographers
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-sm text-gray-700 hover:text-indigo-600">
              About
            </Link>
          </li>
          
          <li className="mt-2 md:mt-0">
            <Link
              href="/contact"
              className="inline-block bg-indigo-600 text-white text-sm px-5 py-2 rounded-full hover:bg-indigo-700 transition"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
