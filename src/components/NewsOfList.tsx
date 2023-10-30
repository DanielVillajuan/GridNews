import { IMG_DEFAULT } from '@/constant'
import { NewType } from '@/types/news'

export default function NewsOfList ({ news }: { news: NewType[] }): JSX.Element {
  return (
    <section className='row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade'>
      {news.map((n: NewType) => {
        return (
          <article key={n._id} className='mod-caja-nota lugares w-100-mobile'>
            <section className='cont-figure'>
              <a className='figure'>
                <picture className='content-pic picture'>
                  <img src={n.promo_items?.basic.url || IMG_DEFAULT} alt='text' className='content-img content-pic' />
                </picture>
              </a>
            </section>
            <div className='mod-caja-nota__descrip'>
              <h2 className='com-title-acu'><a href=''><b>La escuela.</b> que tiene de escudo al Che Guevara y donde izan la bandera de Cuba</a></h2>
              <h4 className='com-date'>1 de Julio de 2019</h4>
            </div>
          </article>
        )
      })}
    </section>
  )
}
