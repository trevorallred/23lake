import Image from 'next/image'

export function Compass(): JSX.Element {
  const width = 160
  return (
    <Image
      src="/compass.png"
      alt="compass"
      className="absolute bottom-0 right-0"
      style={{
        rotate: '135deg',
      }}
      width={width}
      height={width}
      aria-hidden
    />
  )
}
