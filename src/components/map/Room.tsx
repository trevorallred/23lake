import { BorderDiv } from './BorderDiv'
import { Dimensions } from './types'

export type RoomData = {
  id?: string
  name?: string
  color?: number
  dimensions: Dimensions
}

export function Room({
  name,
  color,
  dimensions,
  zoom,
}: RoomData & {
  zoom: number
}): JSX.Element {
  const lightness = 80
  const saturation = 40
  const rotate = 0
  const backgroundColor = color === undefined ? 'gray' : `hsla(${color}, ${saturation}%, ${lightness}%, 100%)`
  function getFontSize(): number {
    if (!name) return 0
    const maxLength = Math.max(...name.split(' ').map((val) => val.length))

    const { left, right } = dimensions
    const width = right - left
    const widthPerChar = width / maxLength

    console.info(widthPerChar)
    if (widthPerChar < 10) return zoom * 15
    if (widthPerChar < 15) return zoom * 20
    return zoom * 30
  }

  return (
    <BorderDiv dimensions={dimensions} borderWidth={zoom * 4}>
      <div
        className="printBackground flex h-full p-2 items-center justify-center"
        style={{
          printColorAdjust: 'exact',
          backgroundColor,
          lineHeight: zoom * 1,
          transform: rotate ? `rotate(${rotate}deg)` : undefined,
        }}
      >
        <p className="text-center" style={{ fontSize: getFontSize() }}>
          {name}
        </p>
      </div>
    </BorderDiv>
  )
}
