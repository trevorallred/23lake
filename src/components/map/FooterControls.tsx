import Link from 'next/link'

export function FooterControls(): JSX.Element {
  return (
    <div>
      <Link href="/about" className="">
        About This Map
      </Link>
      <p>Calendar</p>
      <p>Share</p>
      <p>Zoom</p>
    </div>
  )
}
