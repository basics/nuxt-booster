import { hasGoodOverallConditions } from './utils/client'

const hasGoodConnection = hasGoodOverallConditions()
console.log('hasGoodOverallConditions', hasGoodConnection)

let init = false
function initNuxt () {
  console.log('initNuxt', init)
  if (init) {
    return
  }
  init = true
  import('../client')
}
global.initNuxt = initNuxt

hasGoodConnection && initNuxt()

// Speedkit Layer

document.querySelector('.speedkit_layer__button').addEventListener('click', () => {
  console.log('click (.speedkit_layer__button)')
  initNuxt()
}, {
  capture: true,
  once: true,
  passive: true
})

// document.querySelector('.speedkit_info_layer').style.display = 'block'
