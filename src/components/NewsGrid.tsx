import { NewType } from '@/types/news'
import NewsOfList from './NewsOfList'
import Title from './Title'

async function getNews (): Promise<{ articles: NewType[] }> {
  const response = await fetch('https://jrt2bb3b2nlkw5ozvfcld62wbe0pnifh.lambda-url.us-east-1.on.aws/', { cache: 'no-store' })
  return await response.json() as Promise<{ articles: NewType[] }>
}

export default async function NewsGrid ({ children }: { children: React.ReactNode }): Promise<JSX.Element> {
  const news = await getNews()
  return (
    <div className='lay-sidebar'>
      <div className='sidebar__main'>
        <Title text='Acumulado Grilla' />
        {children}
        <NewsOfList news={news.articles} />
      </div>
    </div>
  )
}
