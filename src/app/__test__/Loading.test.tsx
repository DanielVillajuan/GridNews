import { render, screen } from "@testing-library/react"
import Loading from "../loading"

describe('<Loading />', (): void => {
    it('Render', (): void => {
        render(<Loading />)
        expect(screen.getByText('Cargando...')).toBeDefined()
    })
})