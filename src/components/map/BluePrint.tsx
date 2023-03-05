/* eslint-disable @next/next/no-img-element */

export function BluePrint(): JSX.Element {
  const width = 1200
  const aspectRatio = 1323 / 1041
  const height = width / aspectRatio

  return (
    <div style={{ width: 1050, top: 60, left: 60, height: 800 }} className="overflow-clip absolute opacity-0 z-10">
      <img
        src="/blueprint.jpeg"
        alt="Blueprint map"
        className="absolute object-cover"
        style={{ top: -63, left: 17, width, height, rotate: '-0.5deg', zIndex: 100 }}
      />
    </div>
  )
}
