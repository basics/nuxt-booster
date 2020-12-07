import { toHashHex } from './string'

export function toFontHex (tag, fonts) {
  return toHashHex(`${tag}_${fonts}`).padStart(9, '-')
}
