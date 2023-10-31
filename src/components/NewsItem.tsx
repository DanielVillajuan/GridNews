import { IMG_DEFAULT, OPTIONS_DATE, TOLOCALE } from '@/constant'
import { NewsItemProps } from '@/types/news'

export default function NewsItem ({ item: { _id, display_date: displayDate, promo_items: promoItems, headlines } }: NewsItemProps) {
  const dateParse = new Date(displayDate).toLocaleDateString(TOLOCALE, OPTIONS_DATE).split(', ')[1]

  return (
    <article data-testid='container-item' key={_id} className='mod-caja-nota lugares w-100-mobile'>
      <section className='cont-figure'>
        <a className='figure'>
          <picture className='content-pic picture'>
            <img src={promoItems?.basic.url || IMG_DEFAULT} alt='text' className='content-img content-pic' />
          </picture>
        </a>
      </section>
      <div className='mod-caja-nota__descrip'>
        <h2 className='com-title-acu'><a href=''><b>{headlines.basic}</b> {promoItems?.basic?.subtitle}</a></h2>
        <h4 className='com-date'>{dateParse}</h4>
      </div>
    </article>
  )
}
