import { TagParamType } from '@/types/news'

export default function Tag ({ params: { tag } }: TagParamType) {
  return (
    <div className='row'>
      <h1>Contenido para esta categoria: {tag}</h1>
    </div>
  )
}
