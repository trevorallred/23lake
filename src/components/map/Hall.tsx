type Props = {
  dimensions: Dimensions
  moving?: true
}

type Dimensions = {
  top: number
  left: number
  width: number
  height: number
}

export function Hall({ dimensions, moving }: Props): JSX.Element {
  const color = 10
  const lightness = 25
  const saturation = 80
  if (moving) {
    return (
      <div
        className="absolute z-50 border-4 border-yellow-500 p-2"
        style={{
          ...dimensions,
          backgroundColor: `hsla(${color}, ${saturation}%, ${lightness}%, 20%)`,
        }}
      ></div>
    )
  }
  return (
    <div
      className="absolute z-0"
      style={{
        ...dimensions,
        backgroundColor: `hsla(${color}, ${saturation}%, ${lightness}%, 50%)`,
        // transform: rotate ? `rotate(${rotate}deg)` : undefined,
      }}
    />
  )
}
