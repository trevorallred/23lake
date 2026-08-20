import Image from 'next/image'
import { JSX } from 'react'

export type CompassData = {}

export function Compass(): JSX.Element {
  const width = 160
  return (
    <Image
      src="/compass.png"
      alt="compass"
      className="absolute top-0 z-50"
      width={width}
      height={width}
      style={{
        rotate: `${135}deg`,
      }}
    />
  )
}
