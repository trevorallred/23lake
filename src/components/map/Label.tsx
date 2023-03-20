import { Dimensions } from './types'

export type LabelData = {
  name: string
  dimensions: Pick<Dimensions, 'top' | 'left'>
}

export function Label({ name, dimensions }: LabelData): JSX.Element {
  const { left, top } = dimensions
  const width = 300
  const height = 50

  return (
    <foreignObject x={left} y={top} width={width} height={height}>
      <div className="flex h-full items-center justify-center">
        <p className="text-2xl">{name}</p>
      </div>
    </foreignObject>
  )
}
