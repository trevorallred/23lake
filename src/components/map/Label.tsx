import clsx from 'clsx'
import { BorderDiv } from './BorderDiv'
import { Dimensions } from './types'

export type LabelData = {
  name: string
  dimensions: Dimensions
}

export function Label({ name, dimensions }: LabelData): JSX.Element {
  const { left, right, top, bottom } = dimensions
  const width = right - left
  const height = bottom - top

  const rotate = height / width > 1.5
  const length = rotate ? height : width

  return (
    <BorderDiv dimensions={dimensions}>
      <div className="w-full h-full z-30">
        <p
          className={clsx([rotate && 'rotate-90', 'flex justify-center items-center'])}
          style={{
            // backgroundColor: 'goldenrod',
            fontSize: length / 10,
            transformOrigin: 'top left',
            width: rotate ? height : width,
            height: rotate ? width : height,
            position: 'relative',
            left: rotate ? width : undefined,
          }}
        >
          {name}
        </p>
      </div>
    </BorderDiv>
  )
}
