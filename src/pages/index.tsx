import { Building, Layout } from '@/components'
import { clsx } from 'clsx'
import Link from 'next/link'
import { useState } from 'react'

function IndexPage() {
  const [rotate, setRotate] = useState(false)
  return (
    <Layout>
      <div className={clsx(['w-full h-full overflow-scroll', rotate && 'rotate-90'])}>
        <Building />
      </div>
      <button
        onClick={() => setRotate(!rotate)}
        className="absolute bottom-0 right-0 px-4 py-1 bg-slate-700 text-white rounded-tl-xl hover:bg-slate-800"
      >
        Rotate {rotate}
      </button>
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
