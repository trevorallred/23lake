import { Building, Compass, Direction, Layout, Scenario, scenarios } from '@/components'
import Link from 'next/link'
import { useState } from 'react'

function IndexPage() {
  const [direction, setDirection] = useState<Direction>('up')
  const [zoom, setZoom] = useState(0.9)
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
          <Building direction={direction} zoom={zoom} scenario={scenario} />
          <Compass direction={direction} zoom={zoom} />
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
            <div className="flex space-x-1 items-center">
              <button
                className="px-3 py-1 bg-slate-400 rounded"
                onClick={() => {
                  setZoom(zoom * 1.2)
                }}
              >
                +
              </button>
              <button
                className="px-3 py-1 bg-slate-400 rounded"
                onClick={() => {
                  setZoom(zoom * 0.8)
                }}
              >
                -
              </button>
            </div>
            <div>
              <button
                className="p-1 bg-slate-400 rounded"
                onClick={() => {
                  setDirection(getNext(direction))
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </button>
            </div>
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

// function hourStr(hour: number): string {
//   return `${Math.floor(hour)}:${60 * (hour % 1)} ${hour < 12 ? 'am' : 'pm'}`
// }

function getNext(direction: Direction): Direction {
  if (direction === 'up') return 'left'
  if (direction === 'left') return 'down'
  if (direction === 'down') return 'right'
  return 'up'
}

export default IndexPage
