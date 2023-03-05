import { HallData } from './Hall'
import { LabelData } from './Label'
import { RoomData } from './Room'

export type Dimensions = {
  top: number
  left: number
  right: number
  bottom: number
}

export type Size = 'sm' | 'lg'

export type BuildingData = {
  rooms: RoomData[]
  labels: LabelData[]
  halls: HallData[]
}

export type Direction = 'up' | 'down' | 'left' | 'right'
