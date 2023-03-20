import { Scenario, scenarios } from './map'

type Props = {
  pick: (scenario: Scenario | undefined) => void
}

export function ScenarioList({ pick }: Props): JSX.Element {
  return (
    <div className="h-full w-full grid grid-cols-2 space-x-2 space-y-2 justify-around bg-green-800 p-2">
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
  )
}
