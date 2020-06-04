// TODO: import by alias
import FontList from '../../../../lib/classes/FontList'
import { loadFont } from '@/utils/font'

let _installed = false

export default {
  install (Vue, options) {
    if (_installed) { return }
    _installed = true

    const fontList = new FontList(options.fonts)
    const criticalFontList = new FontList([], true)
    criticalFontList.list = fontList.list

    Vue.directive('font', {
      async bind (el, binding, vnode, oldVnode) {
        el.classList.add(binding.value.getFamilyAsClassName())
        if (vnode.context.$options.critical) {
          el.classList.add('font')
        } else {
          await loadFont(binding.value)
          el.classList.add('font')
        }
        const vars = binding.value.toCSSVars()
        for (const key in vars) {
          el.style.setProperty(key, vars[key])
        }
      }
    })

    Vue.mixin({
      critical: false,

      asyncData () {
        criticalFontList.reset()
      },

      beforeCreate () {
        this.$options.critical = isCriticalComponent(this)
        if (this.$options.critical) {
          this.$fonts = criticalFontList
        } else {
          this.$fonts = fontList
        }
      },

      head () {
        const link = this.$fonts.getCriticalFonts().map(font => font.toJSON())
        const style = this.$fonts.getUsedFonts().map(font => font.toCSSFontFace())
        const fontClasses = this.$fonts.getFontFamilies().map(family => family.getCSSDeclaration())
        style.push(...fontClasses, this.$fonts.getCSSDeclaration())

        const result = { link }
        if (style.length) {
          return Object.assign(result, {
            __dangerouslyDisableSanitizers: ['style'],
            style: [
              { hid: 'font-faces', cssText: style.join('').replace(/\s+/g, ' '), type: 'text/css' }
            ]
          })
        }
        return result
      }
    })
  }
}

function isCriticalComponent (component) {
  if (component.$options.critical) {
    return true
  } else if (component.$parent) {
    return isCriticalComponent(component.$parent)
  } else {
    return false
  }
}
