import Image from 'next/image'

export type CompassData = {
  rotate: number
}

export function Compass({ rotate }: CompassData): JSX.Element {
  const width = 160
  return (
    <Image
      src="/compass.png"
      alt="compass"
      className="absolute bottom-0 right-0"
      style={{
        rotate: `${rotate + 135}deg`,
      }}
      width={width}
      height={width}
      aria-hidden
    />
  )
}
