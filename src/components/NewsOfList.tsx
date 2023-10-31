import { NewOfListProps, NewType } from '@/types/news'
import NewsItem from './NewsItem'

export default function NewsOfList ({ news, onlySubtype }: NewOfListProps): JSX.Element {
  const newsFromSubType = news.filter((n: NewType) => n.subtype === onlySubtype)
  return (
    <section data-testid='container-newslist' className='row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade'>
      {newsFromSubType.length ? newsFromSubType.map((item: NewType) => <NewsItem key={item._id} item={item} />) : <div>Nada por aqui 🚀</div>}
    </section>
  )
}
