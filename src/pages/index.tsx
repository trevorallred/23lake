import { Building, Compass, Layout, Scenario, scenarios } from '@/components'
import Link from 'next/link'
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
      <div className="flex flex-col h-full">
        <div className="flex-1 relative overflow-auto">
          <Building scenario={scenario} />
          <Compass />
        </div>
        {showScenarios && (
          <div className="grid grid-cols-2 space-x-2 space-y-2 justify-around bg-green-800 p-2">
            <button className="bg-slate-300 rounded-lg p-1" onClick={() => pick(undefined)}>
              Clear
            </button>
            {scenarios.map((s) => {
              return (
                <button key={s.name} onClick={() => pick(s)} className="bg-slate-300 rounded-lg p-1">
                  <div>
                    <p>{s.name}</p>
                    <p>
                      {s.day} {s.hour} {s.notes}
                    </p>
                  </div>
                </button>
              )
            })}
          </div>
        )}
        <div className="bg-slate-300 py-1">
          <div className="flex justify-around">
            <button className="px-3 py-1 bg-slate-400 rounded" onClick={() => setShowScenarios(!showScenarios)}>
              Events
            </button>
            <Link
              href="/about"
              className="px-3 py-1 bg-slate-400 rounded"
              onClick={() => {
                if (scenario) {
                  setScenario(undefined)
                } else {
                  setScenario(scenarios[0])
                }
              }}
            >
              ?
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
