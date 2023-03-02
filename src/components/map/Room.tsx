import { useState } from 'react'
import { isDevelopment } from '../utils'
import { DivInfo } from './DivInfo'
import { Dimensions, Size } from './types'

export type RoomData = {
  name?: string
  color?: number
  dimensions: Dimensions
  fontSize?: Size
}

export function Room({
  name,
  color,
  dimensions,
  borderWidth,
  fontSize: fontSize,
}: RoomData & {
  borderWidth: number
}): JSX.Element {
  const [debug, setDebug] = useState(false)
  if (debug) {
    return <DivInfo dimensions={dimensions} onHide={() => setDebug(false)} />
  }

  let fontSizePt = getFontSize(name, dimensions)
  if (fontSize === 'lg') fontSizePt *= 1.5

  const lightness = 80
  const saturation = 40
  const rotate = 0
  const backgroundColor = color === undefined ? 'gray' : `hsla(${color}, ${saturation}%, ${lightness}%, 100%)`
  return (
    <div
      onClick={() => isDevelopment() && setDebug(true)}
      className="absolute border-slate-700 flex p-2 items-center justify-center z-10"
      style={{
        ...dimensions,
        borderWidth,
        backgroundColor,
        lineHeight: fontSize,
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
      }}
    >
      <p
        className="text-center"
        style={{
          fontSize: fontSizePt,
        }}
      >
        {name}
      </p>
    </div>
  )
}

function getFontSize(text: string | undefined, { width }: Dimensions): number {
  if (!text) return 0
  const maxLength = Math.max(...text.split(' ').map((val) => val.length))

  return width / maxLength
}
