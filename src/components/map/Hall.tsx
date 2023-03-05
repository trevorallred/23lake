import { BorderDiv } from './BorderDiv'
import { Dimensions } from './types'

export type HallData = {
  dimensions: Dimensions
}

export function Hall({ dimensions }: HallData): JSX.Element {
  const color = 10
  const lightness = 25
  const saturation = 80
  const opacity = 100
  return (
    <BorderDiv dimensions={dimensions} borderWidth={1} className="">
      <div
        className="printBackground w-full h-full print:bg-slate-500"
        style={{
          backgroundColor: `hsla(${color}, ${saturation}%, ${lightness}%, ${opacity}%)`,
        }}
      />
    </BorderDiv>
  )
}
