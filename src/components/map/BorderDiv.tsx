import clsx from 'clsx'
import { PropsWithChildren, useState } from 'react'
import { isDevelopment } from '../utils'
import { Dimensions } from './types'

type Props = PropsWithChildren & {
  dimensions: Dimensions
  borderWidth?: number
  className?: string
}

export function BorderDiv({ children, dimensions, className, borderWidth = 0 }: Props): JSX.Element {
  const [debug, setDebug] = useState(false)

  const { left, right, top, bottom } = dimensions
  const width = right - left
  const height = bottom - top

  function DebugInfo(): JSX.Element {
    function getFontSize(): number {
      const width = Math.min(right - left, bottom - top)

      if (width < 75) return 6
      if (width < 100) return 7
      if (width < 150) return 10
      if (width < 200) return 12
      return 20
    }

    return (
      <div
        className="flex flex-col h-full"
        style={{ backgroundColor: 'rgba(255,255,255,0.2)', fontSize: getFontSize() }}
      >
        <p className="text-center text-red-900 font-black">T:{r(top)}</p>
        <div className="flex-1 flex flex-col justify-center">
          <p className="text-red-900 font-black text-center">W:{r(width)}</p>
          <div className="flex flex-row justify-between space-x-1">
            <p className=" text-red-900 font-black">L:{r(left)}</p>
            <p className="text-center text-red-900 font-black">R:{r(right)}</p>
          </div>
          <p className="text-red-900 font-black text-center">H:{r(height)}</p>
        </div>
        <p className="text-center text-red-900 font-black">B:{r(top + height)}</p>
      </div>
    )
  }

  const borderHalfWidth = borderWidth / 2
  return (
    <div
      className={clsx(['absolute border-slate-700 z-10', className])}
      onClick={() => {
        isDevelopment() && setDebug(!debug)
      }}
      style={{
        left: left - borderHalfWidth,
        top: top - borderHalfWidth,
        width: width + borderWidth,
        height: height + borderWidth,
        borderWidth,
      }}
    >
      {debug ? <DebugInfo /> : children}
    </div>
  )
}

function r(value: number): number {
  return Math.round(value)
}
