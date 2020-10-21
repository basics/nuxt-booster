import { hasGoodOverallConditions } from './utils/performance'

const hasGoodConnection = hasGoodOverallConditions()

let init = false
function initNuxt () {
  if (init) {
    return
  }
  init = true
  import(/* webpackMode: "eager" */'../client')
}
global.initNuxt = initNuxt

// global.addEventListener('load', () => {
hasGoodConnection && initNuxt()
// }, 0)

// Speedkit Layer
const button = document.querySelector('.speedkit_layer__button')
if (button) {
  button.addEventListener('click', () => {
    initNuxt()
  }, {
    capture: true,
    once: true,
    passive: true
  })
} else {
  console.error('info layer is not implemented')
}
