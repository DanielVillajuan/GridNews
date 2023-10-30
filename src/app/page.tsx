import Breadcrumbs from '@/components/Breadcrumbs'
import NewsGrid from '@/components/NewsGrid'

export default function Home (): JSX.Element {
  return (
    <div id='wrap'>
      <main>
        <NewsGrid>
          <Breadcrumbs />
        </NewsGrid>
      </main>
    </div>
  )
}
