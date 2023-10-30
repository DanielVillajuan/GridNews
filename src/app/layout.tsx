import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import NewsProvider from '@/context/newsContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Noticias La Nación',
  description: 'Noticias La Nación'
}

export default function RootLayout ({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className={inter.className}>
        <NewsProvider>
          {children}
        </NewsProvider>
      </body>
    </html>
  )
}
