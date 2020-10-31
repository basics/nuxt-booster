import { hasSufficientPerformance } from 'nuxt-speedkit/lib/utils/performance'

let init = false
function initNuxt () {
  if (init) {
    return
  }
  init = true
  import(/* webpackMode: "eager" */'../client')
}
global.initNuxt = initNuxt

hasSufficientPerformance() && initNuxt()

const button = document.querySelector('.nuxt-speedkit__speedkit-layer__button')
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
