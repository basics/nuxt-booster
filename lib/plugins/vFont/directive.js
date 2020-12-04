import { registerIntersecting, unregisterIntersecting } from 'nuxt-speedkit/utils/intersectionObserver'
import { toHex } from '../../utils/vnode'

export default {
  install (Vue, name) {
    Vue.directive(name, {
      bind (el, binding, vnode) {
        vnode.context.test = [].concat(binding.value)
        vnode.context.testKey = toHex(vnode)
        el.setAttribute(`data-f${vnode.context.testKey}`, true)

        if (vnode.context.isCritical) {
          el.classList.add('font-active')
        }
      },

      inserted (el, binding, vnode) {
        registerIntersecting(el, async () => {
          const fonts = [].concat(binding.value)
          await Promise.all(fonts.map(font => font.load()))
          el.classList.add('font-active')
          vnode.context.$emit('load:font', fonts)
        })
      },

      unbind (el, binding, vnode) {
        unregisterIntersecting(el)
      }
    })
  }
}
