import { NewType, TagType } from '@/types/news'

export function getBreadcrumbsFromNews (articles: NewType[], amount: number): TagType[] {
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
