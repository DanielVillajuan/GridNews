import Breadcrumbs from "@/components/Breadcrumbs"
import { render, screen } from "@testing-library/react"

describe('<Breadcrum />', (): void => {
    it('Renderer', (): void => {
        const { getByTestId } = render( <Breadcrumbs tags={[]} />)
        const container = getByTestId('container-breadcrumbs')
        expect(container).toBeDefined()
    })

    it('Renderer a object from array', (): void => {
        render( <Breadcrumbs tags={[{
            slug: 'text',
            text: 'text',
            count: 0
        }]} /> )

        expect(screen.getByText('text')).toBeDefined()
    })
})