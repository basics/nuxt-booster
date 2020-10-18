import { hasGoodOverallConditions } from './utils/client'

function initNuxt () {
  import('../client')
}
global.initNuxt = initNuxt

hasGoodOverallConditions() && initNuxt()

console.log(hasGoodOverallConditions())

// Speedkit Layer

document.querySelector('.speedkit_info_layer_button').addEventListener('click', () => {
  console.log('click')
  initNuxt()
}, {
  capture: true,
  once: true,
  passive: true
})

// document.querySelector('.speedkit_info_layer').style.display = 'block'
