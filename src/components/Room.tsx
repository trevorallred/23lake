type Props = {
  name?: string
  color?: number
  dimensions: Dimensions
  /** the number of degrees to rotate */
  rotate?: number
}

type Dimensions = {
  top: number
  left: number
  width: number
  height: number
}

export function Room({ name, color, rotate, dimensions }: Props): JSX.Element {
  // return <></>
  const lightness = 80
  const saturation = 40
  return (
    <div
      className="absolute border-4 border-slate-700 flex p-2 items-center justify-center"
      style={{
        ...dimensions,
        backgroundColor: `hsla(${color}, ${saturation}%, ${lightness}%, 100%)`,
        // transform: rotate ? `rotate(${rotate}deg)` : undefined,
      }}
    >
      <p
        className=" text-center"
        style={{
          fontSize: 30,
        }}
      >
        {name}
      </p>
    </div>
  )
}
