import Image from 'next/image'
import { Direction } from './map'

export type CompassData = {
  direction: Direction
  zoom: number
}

export function Compass({ direction, zoom }: CompassData): JSX.Element {
  const width = 160 * zoom
  const rotate = getRotation(direction)
  return (
    <Image
      src="/compass.png"
      alt="compass"
      className="absolute top-0 z-50"
      style={{
        rotate: `${rotate + 135}deg`,
      }}
      width={width}
      height={width}
      aria-hidden
    />
  )
}

function getRotation(direction: Direction): number {
  if (direction === 'down') return 180
  if (direction === 'right') return -90
  if (direction === 'left') return 90
  return 0
}
