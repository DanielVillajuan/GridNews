import NewsSection from '@/components/NewsSection'
import { render, screen } from '@testing-library/react'

describe('<NewsSection /> ', (): void => {
  it('Render', (): void => {
    render(
      <NewsSection>
        <></>
      </NewsSection>
    )
    expect(screen.getByText('Acumulado Grilla')).toBeDefined()
  })

  it('Container title and children', (): void => {
    const { getByTestId } = render(
      <NewsSection>
        <></>
      </NewsSection>
    )
    const container = getByTestId('container-title-children')
    expect(container).toBeDefined()
  })
})
