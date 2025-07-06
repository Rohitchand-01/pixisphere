import '../styles/globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Pixisphere',
  description: 'Find the perfect photographer for your special moments',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-gradient-to-br from-indigo-50 to-white'>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
