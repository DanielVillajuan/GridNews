import Breadcrumbs from '@/components/Breadcrumbs'
import NewsGrid from '@/components/NewsGrid'
import NewsOfList from '@/components/NewsOfList'
import { getBreadcrumbsFromNews } from '@/helper'
import { getNews } from '@/service'

export default async function Home (): Promise<JSX.Element> {
  const { articles } = await getNews()
  const tags = getBreadcrumbsFromNews(articles, 10)
  return (
    <div id='wrap'>
      <main>
        <NewsGrid>
          <Breadcrumbs tags={tags} />
          <NewsOfList news={articles} onlySubtype='7' />
        </NewsGrid>
      </main>
    </div>
  )
}
