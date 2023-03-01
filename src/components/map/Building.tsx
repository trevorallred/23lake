/* eslint-disable @next/next/no-img-element */
import { Hall } from './Hall'
import { Room } from './Room'

type Props = {}

export function Building(): JSX.Element {
  return (
    <div className="p-10 relative bg-slate-500" style={{ width: 2000 }}>
      <Grid hide />
      <Room name="Lake Chapel" color={150} dimensions={{ left: 113, top: 385, height: 220, width: 279 }} />
      <Room name="Woodbridge Chapel" color={10} dimensions={{ left: 858, top: 385, height: 220, width: 279 }} />
      <Room name="Social Hall" color={40} dimensions={{ left: 711, top: 385, height: 220, width: 151 }} />

      <Hall dimensions={{ left: 188, top: 110, height: 128, width: 287 }} />
      <Room name="Lib" color={70} dimensions={{ left: 412, top: 110, height: 89, width: 63 }} />

      <Hall dimensions={{ left: 795, top: 110, height: 128, width: 267 }} />
      <img src="/blueprint.jpeg" alt="Blueprint map" style={{ width: 1200 }} />
    </div>
  )
}

// Scenarios
// English Class in Russian - Урок английского языка
// English Class in Farsi - کلاس انگلیسی
// English Class in Korean 영어 클래스
// Woodbridge First Ward
// Woodbridge Second Ward

const rooms: RoomData[] = [{ id: 'lake-chapel', name: 'lake-chapel' }]

type RoomData = {
  id: string
  name: string
}

function Grid({ hide }: { hide?: true }): JSX.Element {
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
