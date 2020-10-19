import { fromEvent, timer } from 'rxjs'
import { map, debounce, share } from 'rxjs/operators'

export const resizeObserver = fromEvent(global, 'resize')
  .pipe(
    debounce(() => timer(350)),
    map(() => getPhysicalResolution()),
    share()
  )

export function getResolution () {
  return { x: getViewportWidth(), y: getViewportHeight() }
}

export function getPhysicalResolution () {
  const { x, y } = getResolution()
  const r = getDevicePixelRatio()
  return { x: x * r, y: y * r }
}

function getViewportHeight () {
  return Math.max(global.document.documentElement.clientHeight, global.innerHeight)
}

function getViewportWidth () {
  return Math.max(global.document.documentElement.clientWidth, global.innerWidth)
}

function getDevicePixelRatio () {
  return global.devicePixelRatio || 1
}
