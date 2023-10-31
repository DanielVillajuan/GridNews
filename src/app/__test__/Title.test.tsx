import Title from '@/components/Title'
import { render, screen } from '@testing-library/react'

describe('<NewsGrid /> ', (): void => {
  it('Render', (): void => {
    render(
      <Title text="Title" />
    )
    expect(screen.getByText('Title')).toBeDefined()
  })

  it('Container div', (): void => {
    const { getByTestId } = render(
        <Title text="Title" />
      )

    const container = getByTestId('container-title')
    expect(container).toBeDefined()
  })
})
