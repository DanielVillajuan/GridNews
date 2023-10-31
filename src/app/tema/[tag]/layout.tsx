import Title from '@/components/Title'

export default function TagLayout ({ children, params: { tag } }: { children: React.ReactNode, params: { tag: string} }) {
  return (
    <div className='lay-sidebar'>
      <div className='sidebar__main'>
        <Title text={tag} />
        {children}
      </div>
    </div>
  )
}
