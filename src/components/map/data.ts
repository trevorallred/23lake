import { BuildingData, Scenario } from './types'

const Colors = {
  Bishop: 1,
  Mission: 30,
  Stake: 40,
  Nursery: 230,
  Primary: 240,
  Classroom: 250,
  Library: 110,
  Kitchen: 80,
  Bathroom: 200,
  LakeChapel: 140,
  CulturalHall: 160,
  WoodbridgeChapel: 40,
  SocialHall: 60,
}

export const buildingData: BuildingData = {
  labels: [
    {
      name: 'Ocean Side',
      dimensions: { left: 444, top: 70 },
    },
    {
      name: 'Creek Side',
      dimensions: { left: 480, top: 795 },
    },
  ],
  rooms: [
    {
      name: '1',
      fontSize: 'lg',
      color: Colors.Classroom,
      dimensions: { left: 276, top: 236, bottom: 290, right: 326 },
    },
    {
      name: '2',
      fontSize: 'lg',
      color: Colors.Classroom,
      dimensions: { left: 276, top: 197, bottom: 236, right: 326 },
    },
    { name: 'Mission', id: 'B1', color: Colors.Mission, dimensions: { left: 150, top: 144, bottom: 197, right: 326 } },
    { id: 'wall_mission', dimensions: { left: 150, top: 121, bottom: 144, right: 150 + 1 } },
    { name: '4', fontSize: 'lg', color: Colors.Mission, dimensions: { left: 150, top: 72, bottom: 121, right: 200 } },
    { name: '5', fontSize: 'lg', color: Colors.Mission, dimensions: { left: 220, top: 72, bottom: 121, right: 259 } },
    { name: '6', fontSize: 'lg', color: Colors.Mission, dimensions: { left: 259, top: 72, bottom: 121, right: 297 } },
    { name: '7/8', color: Colors.Classroom, dimensions: { left: 297, top: 72, bottom: 121, right: 373 } },
    {
      name: 'Oceanside Library',
      color: Colors.Library,
      dimensions: { left: 373, top: 72, bottom: 156, right: 432 },
    },
    { name: '9/10', color: Colors.Classroom, dimensions: { left: 351, top: 156, bottom: 245, right: 402 } },
    { id: '_1', color: Colors.Library, dimensions: { left: 402, top: 156, bottom: 245, right: 432 } },
    {
      name: 'Oceanside Primary',
      color: Colors.Primary,
      dimensions: { left: 432, top: 167, bottom: 245, right: 563 },
    },
    {
      id: 'rs_ocean',
      name: 'Oceanside Relief Society',
      color: Colors.Classroom,
      dimensions: { left: 563, top: 138, bottom: 245, right: 675 },
    },
    { name: '12/13', color: Colors.Nursery, dimensions: { left: 570, top: 269, bottom: 382, right: 650 } },
    { name: 'Oceanside Kitchen', color: Colors.Kitchen, dimensions: { left: 674, top: 269, bottom: 343, right: 735 } },
    { name: '15/17 Nursery', color: Colors.Nursery, dimensions: { left: 735, top: 269, bottom: 343, right: 822 } },
    { name: '14/16', color: Colors.Classroom, dimensions: { left: 675, top: 167, bottom: 245, right: 756 } },
    {
      name: 'Bath rooms',
      id: 'OC_BR',
      color: Colors.Bathroom,
      dimensions: { left: 756, top: 148, bottom: 245, right: 822 },
    },
    { name: '18', color: Colors.Classroom, dimensions: { left: 756, top: 72, bottom: 123, right: 798 } },
    { id: 'wall_18', dimensions: { left: 756, top: 123, bottom: 148, right: 756 + 1 } },
    { name: '19', color: Colors.Classroom, dimensions: { left: 798, top: 72, bottom: 123, right: 836 } },
    {
      name: '20/21',
      fontSize: 'lg',
      color: Colors.Classroom,
      dimensions: { left: 836, top: 72, bottom: 123, right: 915 },
    },
    { name: '22', color: Colors.Classroom, dimensions: { left: 940, top: 72, bottom: 123, right: 980 } },
    { name: '23', color: Colors.Classroom, dimensions: { left: 980, top: 72, bottom: 123, right: 1019 } },
    { id: 'wall_23', dimensions: { left: 1019 - 1, top: 123, bottom: 148, right: 1019 } },
    { name: '24', color: Colors.Classroom, dimensions: { left: 978, top: 148, bottom: 198, right: 1019 } },
    { name: '25', color: Colors.Classroom, dimensions: { left: 939, top: 148, bottom: 198, right: 978 } },
    { name: '26', color: Colors.Classroom, dimensions: { left: 900, top: 148, bottom: 198, right: 939 } },
    { id: '_2', dimensions: { left: 846, top: 148, bottom: 198, right: 900 } },
    { name: '27', color: Colors.Classroom, dimensions: { left: 846, top: 198, bottom: 237, right: 900 } },
    { name: '28', color: Colors.Classroom, dimensions: { left: 846, top: 237, bottom: 290, right: 900 } },
    { name: 'Bishop WB1', color: Colors.Bishop, dimensions: { left: 960, top: 271, bottom: 330, right: 960 + 102 } },
    { id: 'wall_bwb1', dimensions: { left: 1040, top: 330, bottom: 350, right: 1060 } },
    {
      name: 'Bishop Hrtg Park',
      color: Colors.Bishop,
      dimensions: { left: 960, top: 582, bottom: 641, right: 1062 },
    },
    { id: 'wall_bhp', dimensions: { left: 1040, top: 562, bottom: 582, right: 1060 } },
    {
      name: 'Woodbridge Chapel',
      color: Colors.WoodbridgeChapel,
      dimensions: { left: 822, top: 350, bottom: 562, right: 1099 },
    },
    { name: 'Social Hall', color: Colors.SocialHall, dimensions: { left: 674, top: 343, bottom: 567, right: 822 } },
    { name: 'Stage', color: Colors.CulturalHall, dimensions: { left: 570, top: 382, bottom: 535, right: 674 } },
    { name: 'Cultural Hall', color: Colors.CulturalHall, dimensions: { left: 351, top: 269, bottom: 642, right: 570 } },
    { name: 'Lake Chapel', color: Colors.LakeChapel, dimensions: { left: 78, top: 345, bottom: 564, right: 351 } },
    { name: 'Bishop Yale', color: Colors.Bishop, dimensions: { left: 118, top: 266, bottom: 325, right: 220 } },
    {
      id: 'wall_by',
      dimensions: { left: 119, top: 325, bottom: 345, right: 140 },
    },
    { name: 'Bishop WB2', color: Colors.Bishop, dimensions: { left: 118, top: 584, bottom: 643, right: 220 } },
    {
      id: 'wall_wb2',
      dimensions: { left: 119, top: 564, bottom: 584, right: 140 },
    },
    { name: 'Family History', color: Colors.Library, dimensions: { left: 276, top: 620, bottom: 677, right: 326 } },
    { id: '_4', dimensions: { left: 276, top: 677, bottom: 730, right: 326 } },

    // Stake offices
    { name: 'High Council Room', color: Colors.Stake, dimensions: { left: 154, top: 718, bottom: 849, right: 226 } },
    { name: 'Stake Pres', color: Colors.Stake, dimensions: { left: 226, top: 718, bottom: 771, right: 276 } },
    { name: 'Stake Lib', color: Colors.Stake, dimensions: { left: 276, top: 730, bottom: 771, right: 326 } },
    { name: 'Stake Clerk', color: Colors.Stake, dimensions: { left: 259, top: 796, bottom: 849, right: 294 } },
    { name: 'Stake Office', color: Colors.Stake, dimensions: { left: 294, top: 796, bottom: 849, right: 326 } },
    { name: '43', color: Colors.Classroom, dimensions: { left: 326, top: 796, bottom: 849, right: 366 } },
    { name: '44', color: Colors.Classroom, dimensions: { left: 366, top: 796, bottom: 849, right: 406 } },
    { id: '_3', dimensions: { left: 430, top: 771, bottom: 849, right: 462 } },
    {
      name: 'Bath rooms',
      id: 'CS_BR',
      color: Colors.Bathroom,
      dimensions: { left: 351, top: 666, bottom: 771, right: 462 },
    },
    { name: '40/41 Font', color: Colors.Classroom, dimensions: { left: 462, top: 666, bottom: 748, right: 588 } },
    {
      id: 'rs_creek',
      name: 'Creekside Relief Society',
      color: Colors.Classroom,
      dimensions: { left: 588, top: 666, bottom: 778, right: 697 },
    },
    { name: '37/38', color: Colors.Nursery, dimensions: { left: 570, top: 535, bottom: 642, right: 650 } },
    { name: 'Creekside Kitchen', color: Colors.Kitchen, dimensions: { left: 674, top: 567, bottom: 642, right: 735 } },
    {
      name: 'Creekside Primary',
      color: Colors.Primary,
      dimensions: { left: 697, top: 666, bottom: 748, right: 822 },
    },
    {
      name: '35/36 Nursery',
      color: Colors.Nursery,
      dimensions: { left: 735, top: 567, bottom: 642, right: 822 },
    },
    { name: 'Clean', color: Colors.Library, dimensions: { left: 792, top: 748, bottom: 798, right: 822 } },
    { name: 'Creekside Library', color: Colors.Library, dimensions: { left: 792, top: 798, bottom: 849, right: 854 } },
    { name: '34', color: Colors.Classroom, dimensions: { left: 854, top: 798, bottom: 849, right: 900 } },
    { name: '33', color: Colors.Classroom, dimensions: { left: 900, top: 798, bottom: 849, right: 941 } },
    { name: '32', color: Colors.Classroom, dimensions: { left: 966, top: 807, bottom: 849, right: 1019 } },
    { name: '', color: 0, dimensions: { left: 966, top: 775, bottom: 807, right: 1019 } },
    { name: 'Bishop West Park', color: Colors.Bishop, dimensions: { left: 934, top: 718, bottom: 775, right: 1019 } },
    { name: '31', color: Colors.Classroom, dimensions: { left: 900, top: 718, bottom: 775, right: 934 } },
    { id: '_5', dimensions: { left: 846, top: 718, bottom: 775, right: 900 } },
    { name: '30', color: Colors.Classroom, dimensions: { left: 846, top: 677, bottom: 718, right: 900 } },
    { name: '29', color: Colors.Classroom, dimensions: { left: 846, top: 620, bottom: 677, right: 900 } },
  ],
  halls: [
    { dimensions: { left: 150, top: 72, bottom: 198, right: 432 } },
    { dimensions: { left: 756, top: 72, bottom: 198, right: 755 + 264 } },
    { dimensions: { left: 276, top: 167, bottom: 748, right: 900 } },
    { dimensions: { left: 117, top: 290, bottom: 620, right: 1062 } },
    { dimensions: { left: 154, top: 718, bottom: 849, right: 462 } },
    { dimensions: { left: 792, top: 718, bottom: 849, right: 1019 } },
  ],
}

export const scenarios: Scenario[] = [
  {
    name: 'Woodbridge 1st Ward Sacrament',
    day: 'Sun',
    hour: '11:00 am',
    notes: 'English',
    rooms: ['Woodbridge Chapel'],
  },
  {
    name: 'Harvard Branch Sacrament',
    day: 'Sun',
    hour: '11:15 am',
    notes: 'English',
    rooms: ['Creekside Relief Society'],
  },
  {
    name: 'Woodbridge 2nd Ward Sacrament',
    day: 'Sun',
    hour: '11:30 am',
    notes: 'English + Korean',
    rooms: ['Lake Chapel'],
  },
  {
    name: 'English for Russian Speakers',
    day: 'Sun',
    hour: '11:15 pm',
    rooms: ['22', '23', '24'],
  },
  {
    name: 'English for Farsi Speakers',
    day: 'Tue',
    hour: '7:00 pm',
    rooms: ['Creekside Relief Society'],
  },
  {
    name: 'English for Korean Speakers',
    day: 'Wed',
    hour: '7:00 pm',
    rooms: ['Creekside Relief Society'],
  },
  {
    name: 'English for Russian Speakers',
    day: 'Thu',
    hour: '7:00 pm',
    rooms: ['Creekside Relief Society'],
  },
]

// Scenarios
// English Class in Russian - Урок английского языка
// English Class in Farsi - کلاس انگلیسی
// English Class in Korean 영어 클래스
// Woodbridge First Ward
// Woodbridge Second Ward
