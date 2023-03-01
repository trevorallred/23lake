type Props = {
  name?: string
  color?: number
  dimensions: Dimensions
}

type Dimensions = {
  top: number
  left: number
  width: number
  height: number
}

export function Room({ name, color, dimensions }: Props): JSX.Element {
  // return <></>
  const lightness = 80
  const saturation = 40
  const fontSize = getFontSize(dimensions)
  return (
    <div
      className="absolute border-4 border-slate-700 flex p-2 items-center justify-center z-10"
      style={{
        ...dimensions,
        backgroundColor: `hsla(${color}, ${saturation}%, ${lightness}%, 100%)`,
        // transform: rotate ? `rotate(${rotate}deg)` : undefined,
      }}
    >
      <p
        className=" text-center"
        style={{
          fontSize,
        }}
      >
        {name}
      </p>
    </div>
  )
}

function getFontSize({ width, height }: Dimensions): number {
  return 30
}
