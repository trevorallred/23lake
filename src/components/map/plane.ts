import { Dimensions, Direction } from './types'

type Props = {
  height: number
  width: number
  zoom: number
  direction: Direction
}

export class Plane {
  private originalHeight: number
  private originalWidth: number
  private zoom: number
  private direction: Direction

  constructor(props: Props) {
    this.originalHeight = props.height
    this.originalWidth = props.width
    this.zoom = props.zoom
    this.direction = props.direction
  }

  private isLandscape(): boolean {
    return this.direction === 'up' || this.direction === 'down'
  }

  get width(): number {
    const value = this.isLandscape() ? this.originalWidth : this.originalHeight
    return value * this.zoom
  }
  get height(): number {
    const value = this.isLandscape() ? this.originalHeight : this.originalWidth
    return value * this.zoom
  }

  public transform({ left, top, bottom, right }: Dimensions): Dimensions {
    const width = Math.max(right - left, 20)
    const height = Math.max(bottom - top, 20)
    let newLeft = 0
    let newTop = 0
    let newWidth = this.isLandscape() ? width : height
    let newHeight = this.isLandscape() ? height : width

    if (this.direction === 'up') {
      newTop = top
      newLeft = left
    }
    if (this.direction === 'left') {
      newTop = left
      newLeft = this.originalHeight - top - newWidth
    }
    if (this.direction === 'right') {
      newTop = this.originalWidth - left - newHeight
      newLeft = top
    }
    if (this.direction === 'down') {
      newTop = this.originalHeight - top - newHeight
      newLeft = this.originalWidth - left - newWidth
    }
    return {
      left: newLeft * this.zoom,
      top: newTop * this.zoom,
      right: (newLeft + newWidth) * this.zoom,
      bottom: (newTop + newHeight) * this.zoom,
    }
  }

  public isNearLeft(left: number): boolean {
    return left / this.width < 0.2
  }

  public isNearRight(left: number): boolean {
    return left / this.width > 0.8
  }
}
