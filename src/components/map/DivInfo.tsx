import { Dimensions } from './types'

type Props = {
  dimensions: Dimensions
  onHide?: VoidFunction
}

export function DivInfo({ dimensions, onHide }: Props): JSX.Element {
  const { top, left, width, height } = dimensions
  const fontSize = getFontSize(dimensions)
  return (
    <div
      onClick={onHide}
      className="absolute z-50 opacity-75 border-4 border-yellow-500 bg-white flex flex-col"
      style={{
        ...dimensions,
        fontSize,
      }}
    >
      <p className="text-center text-red-900 font-black">T:{top}</p>
      <div className="flex-1 flex flex-col justify-center">
        <p className="text-red-900 font-black text-center">W:{width}</p>
        <div className="flex flex-row justify-between space-x-1">
          <p className=" text-red-900 font-black">L:{left}</p>
          <p className="text-center text-red-900 font-black">R:{left + width}</p>
        </div>
        <p className="text-red-900 font-black text-center">H:{height}</p>
      </div>
      <p className="text-center text-red-900 font-black">B:{top + height}</p>
    </div>
  )
}

function getFontSize({ width }: Dimensions): number {
  if (width < 75) return 6
  if (width < 100) return 7
  if (width < 150) return 10
  if (width < 200) return 12
  return 20
}
