import { hasSufficientPerformance, setup } from 'nuxt-speedkit/utils/performance'

const options = <%= options.performance %>;

let init = false
global.__NUXT_SPEEDKIT_INIT__ = () => {
  if (init) {
    return
  }
  init = true
  import(/* webpackMode: "eager" */'../client')
}
global.__NUXT_SPEEDKIT_AUTO_INIT__
global.__NUXT_SPEEDKIT_AUTO_INIT__ =  '__NUXT_SPEEDKIT_AUTO_INIT__' in global && global.__NUXT_SPEEDKIT_AUTO_INIT__;

setup(options)

const button = document.querySelector('.nuxt-speedkit__speedkit-layer__button')
if (button) {
  button.addEventListener('click', () => {
    global.__NUXT_SPEEDKIT_INIT__()
  }, {
    capture: true,
    once: true,
    passive: true
  })
} else {
  console.error('info layer is not implemented')
}

(global.__NUXT_SPEEDKIT_AUTO_INIT__ || hasSufficientPerformance()) && global.__NUXT_SPEEDKIT_INIT__()
