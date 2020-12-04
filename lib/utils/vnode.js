import { toHashHex } from './string'

export function toHex (vnode) {
  return toHashHex(`${vnode.tag}_${vnode.context.test.map(font => font.getKey()).join('_')}`).padStart(9, '-')
}
