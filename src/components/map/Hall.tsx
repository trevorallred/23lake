import { useState } from 'react'
import { isDevelopment } from '../utils'
import { DivInfo } from './DivInfo'
import { Dimensions } from './types'

type Props = {
  dimensions: Dimensions
  debug?: true
}

export function Hall({ dimensions, debug: _debug }: Props): JSX.Element {
  const [debug, setDebug] = useState(_debug === true)
  if (debug) {
    return <DivInfo dimensions={dimensions} onHide={() => setDebug(false)} />
  }

  const color = 10
  const lightness = 25
  const saturation = 80
  const opacity = 100
  return (
    <div
      onClick={() => isDevelopment() && setDebug(true)}
      className="absolute print:bg-slate-500"
      style={{
        ...dimensions,
        backgroundColor: `hsla(${color}, ${saturation}%, ${lightness}%, ${opacity}%)`,
      }}
    />
  )
}
