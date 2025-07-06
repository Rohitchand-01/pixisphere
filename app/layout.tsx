import '../styles/globals.css'
import Navbar from '@/components/Navbar'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Pixisphere',
  description: 'Find the perfect photographer for your special moments',
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className='bg-gradient-to-br from-indigo-50 to-white'>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}