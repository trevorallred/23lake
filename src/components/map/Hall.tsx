import { Dimensions } from './types'

export type HallData = {
  dimensions: Dimensions
}

export function Hall({ dimensions }: HallData): JSX.Element {
  const color = 230
  const lightness = 80
  const saturation = 20
  const opacity = 100
  return (
    <rect
      x={dimensions.left}
      y={dimensions.top}
      width={dimensions.right - dimensions.left}
      height={dimensions.bottom - dimensions.top}
      fill={`hsla(${color}, ${saturation}%, ${lightness}%, ${opacity}%)`}
    />
  )
}
