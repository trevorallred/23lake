import { useState } from 'react'
import { Dimensions } from './types'

type Props = {
  name: string
  rotate?: number
  debug?: true
  dimensions: Pick<Dimensions, 'left' | 'top' | 'width'>
}

export function Label({ name, dimensions, rotate, debug: _debug }: Props): JSX.Element {
  const [debug, setDebug] = useState(_debug === true)
  if (debug) {
  }

  const { left, top, width } = dimensions

  return (
    <div
      onClick={() => setDebug(true)}
      className="absolute text-center text-4xl"
      style={{
        left: left - width / 2,
        top: top,
        width: width,
        rotate: rotate === undefined ? undefined : `${rotate}deg`,
      }}
    >
      {name}
    </div>
  )
}
