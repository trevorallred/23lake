import { buildingData } from './data'
import { Hall } from './Hall'
import { Label } from './Label'
import { Room, RoomData } from './Room'
import { Scenario } from './types'

export type BuildingProps = {
  scenario?: Scenario
}

export function Building({ scenario }: BuildingProps): JSX.Element {
  function isSelected(room: RoomData): boolean | undefined {
    if (!scenario) return undefined
    const selected = scenario.rooms.find((r) => r === room.name)
    return !!selected
  }

  return (
    <svg width={1178} height={900}>
      {buildingData.halls.map((item, index) => {
        return <Hall key={index} {...item} />
      })}
      {buildingData.rooms.map((item, index) => {
        const key = item.id ?? item.name ?? index
        return <Room key={key} {...item} selected={isSelected(item)} />
      })}
      {buildingData.labels.map((item) => (
        <Label key={item.name} {...item} />
      ))}
    </svg>
  )
}
