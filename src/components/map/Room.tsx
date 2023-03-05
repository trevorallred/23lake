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
  selected,
}: RoomData & {
  zoom: number
  selected?: boolean
}): JSX.Element {
  const lightness = 80
  const saturation = 50
  const rotate = 0
  function getBgColor(): string {
    if (selected === undefined || selected) {
      if (color) return `hsla(${color}, ${saturation}%, ${lightness}%, 100%)`
    }
    if (selected) return 'blue'
    return 'gray'
  }
  function getFontSize(): number {
    if (!name) return 0
    const maxLength = Math.max(...name.split(' ').map((val) => val.length))

    const { left, right } = dimensions
    const width = right - left
    const widthPerChar = width / maxLength

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
          backgroundColor: getBgColor(),
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
