import { fromEvent, timer } from 'rxjs'
import { map, debounce, share } from 'rxjs/operators'

export const resizeObserver = fromEvent(global, 'resize')
  .pipe(
    debounce(() => timer(350)),
    map(() => getPhysicalResolution()),
    share()
  )

export function getResolution () {
  return {
    x: getViewportWidth(),
    y: getViewportHeight()
  }
}

export function getPhysicalResolution () {
  const { x, y } = getResolution()
  const r = getDevicePixelRatio()
  return {
    x: x * r,
    y: y * r
  }
}

function getViewportHeight () {
  const a = global.document.documentElement.clientHeight; const b = global.innerHeight
  return Math.max(a, b)
}

function getViewportWidth () {
  const a = global.document.documentElement.clientWidth; const b = global.innerWidth
  return Math.max(a, b)
}

function getDevicePixelRatio () {
  return global.devicePixelRatio || 1
}
