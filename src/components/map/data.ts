import { BuildingData } from './types'

export const buildingData: BuildingData = {
  labels: [
    {
      name: 'Ocean Side',
      dimensions: { left: 444, top: 70, width: 300, height: 50 },
    },
    {
      name: 'Creek Side',
      dimensions: { left: 480, top: 795, width: 300, height: 50 },
    },
    {
      name: 'Lake Rd',
      dimensions: { left: 14, top: 310, width: 50, height: 300 },
    },
    {
      name: 'Woodbridge HS',
      dimensions: { left: 1105, top: 310, width: 50, height: 300 },
    },
  ],
  rooms: [
    { name: 'Lake Chapel', color: 10, dimensions: { left: 73, top: 343, height: 223, width: 279 } },
    { name: 'Woodbridge Chapel', color: 100, dimensions: { left: 818, top: 343, height: 223, width: 279 } },
    { name: 'Social Hall', color: 40, dimensions: { left: 671, top: 343, height: 223, width: 151 } },
    { name: 'Cultural Hall', color: 130, dimensions: { left: 348, top: 267, height: 376, width: 222 } },
    { name: 'Stage', color: 180, dimensions: { left: 566, top: 380, height: 160, width: 109 } },
    { name: 'Lib', color: 70, dimensions: { left: 372, top: 70, height: 89, width: 63 } },
    { name: '9', color: 250, dimensions: { left: 348, top: 155, height: 48, width: 56 } },
    { name: '10', color: 0, dimensions: { left: 348, top: 199, height: 48, width: 56 } },
    { name: '', dimensions: { left: 400, top: 155, height: 92, width: 35 } },
    { name: 'Primary Room', color: 40, dimensions: { left: 431, top: 165, height: 82, width: 135 } },
    { name: 'RS Room', color: 200, dimensions: { left: 562, top: 137, height: 110, width: 115 } },
    { name: 'RS Room', color: 200, dimensions: { left: 585, top: 664, height: 117, width: 115 } },
    { name: 'Primary Room', color: 40, dimensions: { left: 696, top: 664, height: 87, width: 128 } },
    { name: '40', color: 80, dimensions: { left: 533, top: 664, height: 87, width: 56 } },
    { name: '41', color: 120, dimensions: { left: 460, top: 664, height: 87, width: 77 } },
    { name: 'Bathrooms', fontSize: 'sm', color: 160, dimensions: { left: 348, top: 664, height: 109, width: 116 } },
  ],
  halls: [
    { dimensions: { left: 148, top: 70, height: 128, width: 287 } },
    { dimensions: { left: 755, top: 70, height: 128, width: 267 } },
    { dimensions: { left: 272, top: 167, height: 584, width: 628 } },
    { dimensions: { left: 120, top: 290, height: 330, width: 934 } },
    { dimensions: { left: 152, top: 713, height: 137, width: 312 } },
    { dimensions: { left: 792, top: 713, height: 137, width: 230 } },
  ],
}
