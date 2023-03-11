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
  selected,
}: RoomData & {
  selected?: boolean
}): JSX.Element {
  const lightness = 80
  const saturation = 50
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

    if (widthPerChar < 10) return 15
    if (widthPerChar < 15) return 20
    return 30
  }

  const { left, top, bottom, right } = dimensions
  const height = bottom - top
  const width = right - left

  return (
    <g>
      <rect x={left} y={top} width={width} height={height} fill={getBgColor()} stroke="#666666" strokeWidth={4} />
      <foreignObject x={left} y={top} width={width} height={height}>
        <div className="flex justify-center items-center h-full">
          <p
            style={{
              textAlign: 'center',
              lineHeight: 1,
              fontSize: getFontSize(),
            }}
          >
            {name}
          </p>
        </div>
      </foreignObject>
    </g>
  )
}
