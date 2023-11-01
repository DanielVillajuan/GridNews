import { BreadcrumbsProps, TagType } from '@/types/news'
import Link from 'next/link'

export default function Breadcrumbs ({ tags }: BreadcrumbsProps): JSX.Element {
  return (
    <div className='row'>
      <div data-testid='container-breadcrumbs' className='cont_tags com-secondary-tag hlp-marginBottom-20'>
        {tags.map((t: TagType) => <Link href={`/tema/${t.slug}`} key={t.slug}>{t.text} ({t.count})</Link>)}
      </div>
    </div>
  )
}
