import { Building, Direction, Layout } from '@/components'
import Link from 'next/link'
import { useState } from 'react'

function IndexPage() {
  const [direction, setDirection] = useState<Direction>('up')
  const [zoom, setZoom] = useState(1)
  return (
    <Layout>
      <div className="flex flex-col h-full">
        <div className="flex-1 overflow-auto">
          <Building direction={direction} zoom={zoom} />
        </div>
        <div className="bg-green-300 py-1">
          <div className="flex justify-around">
            <Link href="/about" className="">
              About This Map
            </Link>
            <p>Calendar</p>
            <p>Share</p>
            <div className="flex space-x-1 items-center">
              {Math.round(zoom * 100)}
              <button
                className="p-1 bg-slate-400 rounded"
                onClick={() => {
                  setZoom(zoom * 1.1)
                }}
              >
                +
              </button>
              <button
                className="p-1 bg-slate-400 rounded"
                onClick={() => {
                  setZoom(zoom * 0.9)
                }}
              >
                -
              </button>
            </div>
            <div>
              {direction}
              <button
                className="p-1 bg-slate-400 rounded"
                onClick={() => {
                  setDirection(getNext(direction))
                }}
              >
                Rotate
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

function getNext(direction: Direction): Direction {
  if (direction === 'up') return 'left'
  if (direction === 'left') return 'down'
  if (direction === 'down') return 'right'
  return 'up'
}

export default IndexPage
