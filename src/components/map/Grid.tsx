export function Grid({ hide }: { hide?: true }): JSX.Element {
  if (hide) return <></>
  const inner = []
  for (let i = 0; i < 120; i++) {
    inner.push(<Box />)
  }
  return (
    <div className="absolute z-50 flex flex-wrap" style={{ width: 1200 }}>
      {inner}
    </div>
  )
}

function Box(): JSX.Element {
  const inner = []
  for (let i = 0; i < 12; i++) {
    inner.push(<div className="border border-gray-100" style={{ width: 25, height: 25 }}></div>)
  }
  return (
    <div className="border border-gray-600 flex flex-wrap" style={{ width: 100, height: 100 }}>
      {inner}
    </div>
  )
}
