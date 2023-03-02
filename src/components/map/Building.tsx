import { BluePrint } from './BluePrint'
import { Compass } from './Compass'
import { buildingData } from './data'
import { Hall } from './Hall'
import { Label } from './Label'
import { Plane } from './plane'
import { Room } from './Room'
import { Direction } from './types'

type Props = {
  direction: Direction
  zoom: number
}

const originalWidth = 1178
const originalHeight = 870

export function Building({ direction, zoom }: Props): JSX.Element {
  const plane = new Plane({ direction, zoom, width: originalWidth, height: originalHeight })

  return (
    <div className="relative" style={{ width: plane.width, height: plane.height }}>
      <div className="opacity-0">
        <BluePrint />
      </div>
      {buildingData.labels.map(({ dimensions: oldDims, ...label }) => {
        let rotation = 0
        const dimensions = plane.transform({
          ...oldDims,
        })
        // if (plane.isNearLeft(dimensions.left)) {
        //   rotation = -90
        // }
        // if (plane.isNearRight(dimensions.left)) {
        //   rotation = 90
        // }
        return <Label key={label.name} {...label} dimensions={dimensions} />
      })}
      {buildingData.halls.map(({ dimensions: oldDims }, index) => {
        const dimensions = plane.transform(oldDims)
        return <Hall key={index} dimensions={dimensions} />
      })}
      {buildingData.rooms.map(({ dimensions: oldDims, ...room }, index) => {
        const dimensions = plane.transform(oldDims)
        return <Room key={room.name ?? index} {...room} dimensions={dimensions} borderWidth={zoom * 4} />
      })}

      <Compass rotate={getRotation(direction)} />
    </div>
  )
}

// Scenarios
// English Class in Russian - Урок английского языка
// English Class in Farsi - کلاس انگلیسی
// English Class in Korean 영어 클래스
// Woodbridge First Ward
// Woodbridge Second Ward

function getRotation(direction: Direction): number {
  if (direction === 'down') return 180
  if (direction === 'right') return -90
  if (direction === 'left') return 90
  return 0
}
