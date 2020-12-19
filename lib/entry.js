import { hasSufficientPerformance, setup } from 'nuxt-speedkit/utils/performance'

const options = <%= options.performance %>;
setup(options)

let init = false
function initNuxt () {
  if (init) {
    return
  }
  init = true
  import(/* webpackMode: "eager" */'../client')
}
global.initNuxt = initNuxt

const autoInit = '__nuxtSpeedkitAutoInit__' in global && global.__nuxtSpeedkitAutoInit__;
(autoInit || hasSufficientPerformance()) && initNuxt()


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
