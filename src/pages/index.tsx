import { Layout } from '@/components'

function IndexPage() {
  return (
    <Layout>
      <div className="p-10 flex flex-col justify-around"></div>

      <a href="/about">About This Map</a>
    </Layout>
  )
}

export default IndexPage
