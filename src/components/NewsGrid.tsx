import Title from './Title'

export default function NewsGrid ({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div className='lay-sidebar'>
      <div className='sidebar__main'>
        <Title text='Acumulado Grilla' />
        {children}
      </div>
    </div>
  )
}
