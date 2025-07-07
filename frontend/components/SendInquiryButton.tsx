'use client'

import { useState } from 'react'

export default function SendInquiryButton() {
  const [open, setOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Inquiry sent successfully!')
    setOpen(false)
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        Send Inquiry
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

            <h2 className="text-xl font-semibold mb-4">Send Inquiry</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full border rounded px-3 py-2 text-sm"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full border rounded px-3 py-2 text-sm"
              />
              <textarea
                placeholder="Your Message"
                required
                className="w-full border rounded px-3 py-2 text-sm h-24 resize-none"
              />
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
