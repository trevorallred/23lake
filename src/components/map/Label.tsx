import clsx from 'clsx'
import { useState } from 'react'
import { DivInfo } from './DivInfo'
import { Dimensions } from './types'

export type LabelData = {
  name: string
  dimensions: Dimensions
}

export function Label({ name, dimensions }: LabelData): JSX.Element {
  const [debug, setDebug] = useState(false)
  if (debug) {
    return <DivInfo dimensions={dimensions} onHide={() => setDebug(false)} />
  }

  const { width, height } = dimensions

  const rotate = height / width > 1.5
  const length = rotate ? height : width
  return (
    <div
      onClick={() => setDebug(true)}
      className="absolute z-30"
      style={{
        ...dimensions,
      }}
    >
      <p
        className={clsx([rotate && 'rotate-90', 'flex justify-center items-center'])}
        style={{
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
  )
}
