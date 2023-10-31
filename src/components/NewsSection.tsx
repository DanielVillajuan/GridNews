import Title from './Title'

export default function NewsSection ({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div className='lay-sidebar'>
      <div data-testid='container-title-children' className='sidebar__main'>
        <Title text='Acumulado Grilla' />
        {children}
      </div>
    </div>
  )
}
