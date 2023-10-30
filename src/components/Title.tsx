export default function Title ({ text }: { text: string }): JSX.Element {
  return (
    <div className='row'>
      <div className='com-titleWithfollow hlp-marginBottom-15'>
        <h1 className='com-title-section-xl hlp-marginBottom-40'>{text}</h1>
      </div>
    </div>
  )
}
