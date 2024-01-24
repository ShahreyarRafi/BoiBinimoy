import Footer from '@/components/Shared/Footer'
import Navbar from '@/components/Shared/Navbar'
import AuthProvider from '@/providers/AuthProvider'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Boi Binimoy',
  description: 'A book exchange and buy-sell platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          {children}
          {/* <Footer /> */}
        </AuthProvider>
      </body>
    </html>
  )
}
