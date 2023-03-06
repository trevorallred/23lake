import { buildingData } from './data'
import { Hall } from './Hall'
import { Label } from './Label'
import { Plane } from './plane'
import { Room } from './Room'
import { Direction, Scenario } from './types'

type Props = {
  direction: Direction
  zoom: number
  scenario?: Scenario
}

const originalWidth = 1178
const originalHeight = 1090

export function Building({ direction, zoom, scenario }: Props): JSX.Element {
  const plane = new Plane({ direction, zoom, width: originalWidth, height: originalHeight })

  return (
    <div className="relative" style={{ width: plane.width, height: plane.height }}>
      {buildingData.labels.map(({ dimensions: oldDims, ...label }) => {
        let rotation = 0
        const dimensions = plane.transform({
          ...oldDims,
        })
        return <Label key={label.name} {...label} dimensions={dimensions} />
      })}
      {buildingData.halls.map(({ dimensions: oldDims }, index) => {
        const dimensions = plane.transform(oldDims)
        return <Hall key={index} dimensions={dimensions} />
      })}
      {buildingData.rooms.map(({ dimensions: oldDims, ...room }, index) => {
        let selected: boolean | undefined = undefined
        if (scenario) {
          const found = scenario.rooms.find((r) => r === room.name)
          selected = !!found
        }

        const dimensions = plane.transform(oldDims)
        return (
          <Room key={room.id ?? room.name ?? index} {...room} dimensions={dimensions} zoom={zoom} selected={selected} />
        )
      })}
    </div>
  )
}
