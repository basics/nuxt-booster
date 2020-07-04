import FontList from '../classes/FontList'
import { loadFont, registerFont } from '../utils/font'
import { isCritical } from '../utils/vnode'

let _installed = false

export default {
  install (Vue, options) {
    if (_installed) { return }
    _installed = true

    const fontList = new FontList(options.fonts)

    Vue.directive('font', {
      bind (el, binding, vnode, oldVnode) {
        const critical = isCritical(vnode)
        registerFont(vnode, binding.value, critical)

        el.classList.toggle('font', critical)
        el.classList.add(binding.value.getFamilyAsClassName())

        const vars = binding.value.toCSSVars()
        for (const key in vars) {
          el.style.setProperty(key, vars[key])
        }
      },

      inserted (el, binding, vnode) {
        vnode.observer = new global.IntersectionObserver(async ([e]) => {
          if (e.isIntersecting) {
            vnode.observer.unobserve(el)
            await loadFont(binding.value)
            el.classList.add('font')
          }
        }, { threshold: [0] })
        vnode.observer.observe(el)
      },

      unbind (el, binding, vnode) {
        if (vnode.observer) {
          vnode.observer.disconnect()
        }
      }
    })

    Vue.mixin({
      critical: false,

      created () {
        if (this.$parent && 'layout' in this.$parent) {
          fontList.reset()
        } else if (this.$vnode && 'routerView' in this.$vnode.data) {
          fontList.resetByViewKey(this.$vnode.data.key)
        }
      },

      beforeCreate () {
        this.$options.critical = isCriticalComponent(this)
        Object.values(this.$slots).flat().forEach((vnode) => {
          if (vnode.data) {
            (vnode.data.attrs = {
              ...(vnode.data.attrs || {}),
              critical: isCritical(vnode) || this.$options.critical
            })
          }
        })
        this.$fonts = fontList

        process.criticalFontPreloads = this.$fonts.getCriticalFonts().map(font => font.toJSON())
        process.fontFaces = this.$fonts.getFonts().map(font => font.toCSSFontFace())
        process.fontClasses = [...this.$fonts.getFontFamilies().map(family => family.getCSSDeclaration()), this.$fonts.getCSSDeclaration()]
      }
    })
  }
}

function isCriticalComponent (component) {
  if (('critical' in component.$attrs && component.$attrs.critical !== false) || component.$options.critical) {
    return true
  } else if (component.$parent) {
    return isCriticalComponent(component.$parent)
  } else {
    return false
  }
}
