import Breadcrumbs from '@/components/Breadcrumbs'
import NewsGrid from '@/components/NewsGrid'
import NewsOfList from '@/components/NewsOfList'
import { NewType, TagType } from '@/types/news'

async function getNews (): Promise<{ articles: NewType[] }> {
  const response = await fetch('https://jrt2bb3b2nlkw5ozvfcld62wbe0pnifh.lambda-url.us-east-1.on.aws/', { cache: 'no-store' })
  return await response.json() as Promise<{ articles: NewType[] }>
}

function getBreadcrumbsFromNews (articles: NewType[], amount: number): TagType[] {
  const tagsFilter: Record<string, { text: string, slug: string, count: number }> = {}

  articles.forEach(({ taxonomy: { tags } }) => {
    tags.forEach(({ slug, text }) => {
      tagsFilter[slug] = {
        slug,
        text,
        count: tagsFilter[slug]?.count ? tagsFilter[slug]?.count + 1 : 1
      }
    })
  })
  const ordeBy = Object.values(tagsFilter).sort((a, b) => b.count - a.count)
  return ordeBy.slice(0, amount)
}

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
