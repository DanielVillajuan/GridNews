import { NewType } from '@/types/news'
import { http } from './httpRequest'

export async function getNews (): Promise<{ articles: NewType[] }> {
  const response = await http.get<Promise<{ articles: NewType[] }>>()
  return response
}
