import clsx from 'clsx'
import { Dimensions } from './types'

export type LabelData = {
  name: string
  dimensions: Pick<Dimensions, 'top' | 'left'>
  rotate?: 90 | -90
}

export function Label({ name, dimensions, rotate }: LabelData): JSX.Element {
  const { left, top } = dimensions
  const width = rotate === undefined ? 300 : 50
  const height = rotate === undefined ? 50 : 300

  let transform = undefined
  if (rotate === 90) {
    transform = 'translateX(-50%) translateY(-50%) rotate(-90deg);'
  }
  if (rotate === -90) {
    transform = 'translateX(-50%) translateY(-50%) rotate(-90deg);'
  }

  return (
    <foreignObject x={left} y={top} width={width} height={height}>
      {transform ? (
        <div>
          <p
            className={clsx(['whitespace-nowrap absolute'])}
            style={{
              top: '50%',
              left: '50%',
              transform,
              fontSize: 25,
            }}
          >
            {name}
          </p>
        </div>
      ) : (
        <div className="flex h-full items-center justify-center">
          <p className="text-2xl">{name}</p>
        </div>
      )}
    </foreignObject>
  )
}
