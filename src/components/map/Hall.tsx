import { BorderDiv } from './BorderDiv'
import { Dimensions } from './types'

export type HallData = {
  dimensions: Dimensions
}

export function Hall({ dimensions }: HallData): JSX.Element {
  const color = 230
  const lightness = 50
  const saturation = 20
  const opacity = 100
  return (
    <BorderDiv dimensions={dimensions} borderWidth={0} className="">
      <div
        className="printBackground w-full h-full print:bg-slate-500"
        style={{
          backgroundColor: `hsla(${color}, ${saturation}%, ${lightness}%, ${opacity}%)`,
        }}
      />
    </BorderDiv>
  )
}
