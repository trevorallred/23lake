import Link from 'next/link'

type Props = {
  toggleEvents: VoidFunction
}
export function Footer({ toggleEvents }: Props): JSX.Element {
  return (
    <div className="absolute top-0">
      <div className="p-2 flex justify-around space-x-2">
        <button className="px-3 py-1 bg-slate-400 rounded" onClick={toggleEvents}>
          Events
        </button>
        <Link href="/about" className="px-3 py-1 bg-slate-400 rounded">
          About this Map
        </Link>
      </div>
    </div>
  )
}
