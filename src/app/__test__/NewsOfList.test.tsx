import NewsOfList from "@/components/NewsOfList"
import { NewType } from "@/types/news"
import { render } from "@testing-library/react"

describe('<NewsOfList />', (): void => {
    const aNew: NewType = {_id:'1',display_date:new Date(),headlines: {basic:'title'},promo_items: {basic: {subtitle:"subtitle",type:"1",url:"url"}},subtype: '7',taxonomy:{tags:[]},website_url:'url'}
    it('Render', (): void => {
        const { getByTestId } = render(<NewsOfList news={[]} />)
        expect(getByTestId('container-newslist')).toBeDefined()
    })

    it('Render with element new with subtype 7', (): void => {
        const { getByText } = render(<NewsOfList news={[aNew]} onlySubtype="7" />)
        expect(getByText('title')).toBeDefined()
    })

    it('Render with element new without subtype 7', (): void => {
        const { getByText } = render(<NewsOfList news={[aNew]} onlySubtype="1" />)
        expect(getByText('Nada por aqui 🚀')).toBeDefined()
    })
})