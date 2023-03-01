/* eslint-disable @next/next/no-img-element */
import { Layout } from '@/components'
import { Room } from '@/components/Room'
import Link from 'next/link'

function IndexPage() {
  const saturation = 0.2
  const lightness = 0.8
  return (
    <Layout>
      <div className="w-full h-full overflow-scroll">
        <div className="p-10 relative bg-slate-500" style={{ width: 2000 }}>
          <Room name="Lake Chapel" color={150} dimensions={{ left: 113, top: 385, height: 220, width: 279 }} />
          <Room name="Woodbridge Chapel" color={10} dimensions={{ left: 858, top: 385, height: 220, width: 279 }} />
          <Room name="Social Hall" color={40} dimensions={{ left: 711, top: 385, height: 220, width: 151 }} />
          <img src="/blueprint.jpeg" alt="Blueprint map" style={{ width: 1200 }} />
        </div>
      </div>
      <Link
        href="/about"
        className="absolute bottom-0 left-0 px-4 py-1 bg-slate-700 text-white rounded-tr-xl hover:bg-slate-800"
      >
        About This Map
      </Link>
    </Layout>
  )
}

export default IndexPage
