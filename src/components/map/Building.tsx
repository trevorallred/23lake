import { BluePrint } from './BluePrint'
import { Compass } from './Compass'
import { Hall } from './Hall'
import { Label } from './Label'
import { Room } from './Room'

type Props = {}

export function Building({}: Props): JSX.Element {
  return (
    <div className="relative bg-slate-200" style={{ width: 1178, height: 900, top: -10 }}>
      <div className="opacity-80">
        <BluePrint />
      </div>
      <div>
        <Label name="Ocean Side" dimensions={{ left: 590, top: 70, width: 300 }} />
        <Label name="Creek Side" dimensions={{ left: 630, top: 810, width: 300 }} />
        <Label name="Lake Rd" dimensions={{ left: 40, top: 445, width: 400 }} rotate={-90} />
        <Label name="Woodbridge High School" dimensions={{ left: 1130, top: 445, width: 400 }} rotate={90} />
      </div>
      <div>
        <Room name="Lake Chapel" color={10} dimensions={{ left: 73, top: 345, height: 220, width: 279 }} />
        <Room name="Woodbridge Chapel" color={100} dimensions={{ left: 818, top: 345, height: 220, width: 279 }} />
        <Room name="Social Hall" color={40} dimensions={{ left: 671, top: 345, height: 220, width: 151 }} />
        <Room name="Cultural Hall" color={130} dimensions={{ left: 348, top: 280, height: 350, width: 222 }} />
        <Room name="Stage" color={180} dimensions={{ left: 566, top: 380, height: 160, width: 109 }} />
        <Room name="Lib" color={70} dimensions={{ left: 372, top: 70, height: 89, width: 63 }} />
        <Room name="9" color={250} dimensions={{ left: 348, top: 155, height: 48, width: 56 }} />
        <Room name="10" color={0} dimensions={{ left: 348, top: 199, height: 48, width: 56 }} />
        <Room name="" dimensions={{ left: 400, top: 155, height: 92, width: 35 }} />
        <Room name="Primary Room" color={40} dimensions={{ left: 431, top: 165, height: 82, width: 135 }} />
        <Room name="RS Room" color={200} dimensions={{ left: 562, top: 137, height: 110, width: 115 }} />
      </div>
      <div className="opacity-50">
        <Hall dimensions={{ left: 148, top: 70, height: 128, width: 287 }} />
        <Hall dimensions={{ left: 755, top: 70, height: 128, width: 267 }} />
        <Hall dimensions={{ left: 272, top: 167, height: 584, width: 628 }} />
        <Hall dimensions={{ left: 120, top: 290, height: 330, width: 934 }} />
        <Hall dimensions={{ left: 152, top: 713, height: 137, width: 312 }} />
        <Hall dimensions={{ left: 792, top: 713, height: 137, width: 230 }} />
      </div>

      <Compass />
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
