
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

    const globalMeta = {
      link: [],
      style: [],
      __dangerouslyDisableSanitizers: ['style']
    }

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

        const style = []
        globalMeta.link = this.$fonts.getCriticalFonts().map(font => font.toJSON())
        style.push(...this.$fonts.getUsedFonts().map(font => font.toCSSFontFace()))
        const fontClasses = this.$fonts.getFontFamilies().map(family => family.getCSSDeclaration())
        style.push(...fontClasses, this.$fonts.getCSSDeclaration())

        if (style.length) {
          globalMeta.style = [{ hid: 'font-faces', cssText: style.join('').replace(/\s+/g, ' '), type: 'text/css' }]
        }
      },

      head () {
        return globalMeta
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
