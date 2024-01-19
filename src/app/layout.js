import { Inter } from 'next/font/google'
import './globals.css'
import AuthProvider from '@/AuthProvider/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Book Binimoy',
  description: 'A book exchange and buy-sell platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
