import { useWindowSize } from '@react-hook/window-size'
import { useRef, useState } from 'react'
import { ReactSVGPanZoom, Tool, Value } from 'react-svg-pan-zoom'
import { Building, BuildingProps } from './map'

export function Viewer(props: BuildingProps): JSX.Element {
  const [width, height] = useWindowSize()
  const Viewer = useRef(null)
  const [tool, setTool] = useState<Tool>('pan')
  const [value, setValue] = useState<Value>({
    ...INITIAL_VALUE,
    viewerHeight: height,
    viewerWidth: width,
  })

  const svg = Building(props)

  return (
    <ReactSVGPanZoom
      ref={Viewer}
      width={width}
      height={height}
      tool={tool}
      onChangeTool={setTool}
      value={value}
      onChangeValue={setValue}
      detectAutoPan={false}
      scaleFactor={1.2}
      scaleFactorMax={2} // zoom in
      scaleFactorMin={0.2} // zoom out
      toolbarProps={{
        SVGAlignX: 'center',
        SVGAlignY: 'center',
      }}
    >
      {svg}
    </ReactSVGPanZoom>
  )
}

const INITIAL_VALUE: Value = {
  version: 2,
  mode: 'panning',
  focus: false,
  a: 0,
  b: 0,
  c: 0,
  d: 0,
  e: 0,
  f: 0,
  viewerWidth: 0,
  viewerHeight: 0,
  SVGWidth: 100,
  SVGHeight: 100,
  miniatureOpen: false,
}
