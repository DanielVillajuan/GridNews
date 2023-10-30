'use client'

import { NewType } from '@/types/news'
import { NewsContextType } from '@/types/newsContext'
import { createContext, useContext, useState } from 'react'

const NewsContext = createContext<NewsContextType | null>(null)

export default function NewsProvider ({ children } : { children: React.ReactNode }) {
  const [news, setNews] = useState<NewType[]>([])
  return (
    <NewsContext.Provider value={{ news, setNews }}>
      {children}
    </NewsContext.Provider>
  )
}

export function useNewsContext () {
  const context = useContext(NewsContext)
  if (!context) {
    throw new Error('Context failed!')
  }
  return context
}
