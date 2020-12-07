import { registerIntersecting, unregisterIntersecting } from 'nuxt-speedkit/utils/intersectionObserver'

export default {
  install (Vue, name) {
    Vue.directive(name, {
      bind (el, binding, vnode) {
        const rootSelector = vnode.context.fontCollection.add(vnode, [].concat(binding.value))
        el.setAttribute(`${rootSelector}`, true)

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
