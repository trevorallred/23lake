import { Building, Layout } from '@/components'
import Link from 'next/link'

function IndexPage() {
  return (
    <Layout>
      <Building />
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
