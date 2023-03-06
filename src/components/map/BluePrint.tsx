/* eslint-disable @next/next/no-img-element */

export function BluePrint(): JSX.Element {
  const width = 1200

  return (
    <img
      src="/blueprint.jpeg"
      alt="Blueprint map"
      className="absolute opacity-40"
      style={{ left: 2, top: -2, width, maxWidth: '150%', rotate: '-0.5deg', zIndex: 9 }}
    />
  )
}
