import NewsItem from "@/components/NewsItem"
import { IMG_DEFAULT, OPTIONS_DATE, TOLOCALE } from "@/constant"
import { NewType } from "@/types/news"
import { getByText, queryByAttribute, render } from "@testing-library/react"

describe('<NewsItem />', (): void => {
    const aNew: NewType = {_id:'1',display_date:new Date(),headlines: {basic:'title'},promo_items: {basic: {subtitle:"subtitle",type:"1",url:"url"}},subtype: '7',taxonomy:{tags:[]},website_url:'website_url'}
    it('Render', (): void => {
        const { getByTestId } = render(<NewsItem item={aNew} />)
        expect(getByTestId('container-item')).toBeDefined()
    })

    it('show picture', (): void => {
        const { container } = render(<NewsItem item={aNew} />)
        expect(queryByAttribute('src',container,'url')).toBeDefined()
    })

    it('show default picture', (): void => {
        const { container } = render(<NewsItem item={{...aNew,promo_items:{ basic: {subtitle: '',type:''}}}} />)
        expect(queryByAttribute('src', container, IMG_DEFAULT)).toBeDefined()
    })

    it('show title', (): void => {
        const { getByText } = render(<NewsItem item={aNew} />)
        expect(getByText('title')).toBeDefined()
    })

    it('show subtitle', (): void => {
        const { getByText } = render(<NewsItem item={aNew} />)
        expect(getByText('subtitle')).toBeDefined()
    })

    it('show dateTime', (): void => {
        const dateParse = new Date(aNew.display_date).toLocaleDateString(TOLOCALE, OPTIONS_DATE).split(', ')[1]
        const { getByText } = render(<NewsItem item={aNew} />)
        expect(getByText(dateParse)).toBeDefined()
    })
})