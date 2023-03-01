import { useState } from 'react'
import { DivInfo } from './DivInfo'
import { Size } from './types'

type Props = {
  name?: string
  color?: number
  dimensions: Dimensions
  debug?: true
  fontSize?: Size
}

type Dimensions = {
  top: number
  left: number
  width: number
  height: number
}

export function Room({ name, color, dimensions, fontSize = 'lg', debug: _debug }: Props): JSX.Element {
  const [debug, setDebug] = useState(_debug === true)
  if (debug) {
    return <DivInfo dimensions={dimensions} onHide={() => setDebug(false)} />
  }

  const lightness = 80
  const saturation = 40
  const rotate = 0
  const backgroundColor = color === undefined ? 'gray' : `hsla(${color}, ${saturation}%, ${lightness}%, 100%)`
  return (
    <div
      // onClick={() => setDebug(true)}
      className="absolute border-4 border-slate-700 flex p-2 items-center justify-center z-10 leading-7"
      style={{
        ...dimensions,
        backgroundColor,
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
      }}
    >
      <p
        className="text-center"
        style={{
          fontSize: fontSize === 'sm' ? 20 : 30,
        }}
      >
        {name}
      </p>
    </div>
  )
}

function getFontSize({ width, height }: Dimensions, text?: string): number {
  return 30
}
