import { TagParamType } from '@/types/tag'

export default function Tag ({ params: { tag } }: TagParamType) {
  console.log(tag)

  return (
    <div>
      <h1>TAg: {tag}</h1>
    </div>
  )
}
