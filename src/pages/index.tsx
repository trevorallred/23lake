import { Layout, Scenario, ScenarioList } from '@/components'
import { Footer } from '@/components/Footer'
import dynamic from 'next/dynamic'
import { useState } from 'react'

function IndexPage() {
  const [showScenarios, setShowScenarios] = useState(false)
  const [scenario, setScenario] = useState<Scenario>()

  function pick(scenario: Scenario | undefined) {
    setScenario(scenario)
    setShowScenarios(false)
  }

  return (
    <Layout>
      {showScenarios ? <ScenarioList pick={pick} /> : <Viewer scenario={scenario} />}
      <Footer toggleEvents={() => setShowScenarios(!showScenarios)} />
    </Layout>
  )
}

export default IndexPage

const Viewer = dynamic(
  () => {
    return import('@/components').then((components) => components.Viewer)
  },
  {
    ssr: false,
  }
)
