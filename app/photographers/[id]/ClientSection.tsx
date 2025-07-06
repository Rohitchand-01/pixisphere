// app/photographers/[id]/ClientSection.tsx
'use client'

import { useState } from 'react'

export default function ClientSection() {
  const [open, setOpen] = useState(false)

  return (
    <div className="mt-6">
      <button
        onClick={() => setOpen(true)}
        className="mt-4 bg-black text-white px-5 py-2 rounded hover:bg-gray-800"
      >
        Send Inquiry
      </button>

      {open && (
        <div className="mt-4 p-4 border rounded bg-gray-50">
          <h3 className="font-semibold mb-2">Inquiry Form</h3>
          <input placeholder="Your Name" className="border w-full mb-2 px-2 py-1 rounded" />
          <textarea placeholder="Message" className="border w-full mb-2 px-2 py-1 rounded" />
          <div className="flex justify-end">
            <button
              onClick={() => setOpen(false)}
              className="bg-gray-300 text-sm px-4 py-1 rounded mr-2"
            >
              Cancel
            </button>
            <button className="bg-indigo-600 text-white text-sm px-4 py-1 rounded">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
