// TODO: import by alias
import FontList from '../../../../lib/classes/FontList'

let _installed = false

export default {
  install (Vue, options) {
    if (_installed) { return }
    _installed = true

    const criticalFontList = new FontList(options.fonts, true)
    const fontList = new FontList(options.fonts)

    Vue.directive('font', {
      bind (el, binding, vnode, oldVnode) {
        el.classList.add(binding.value.class)
        if (vnode.context.$options.$critical) {
          el.classList.add('font')
        }
        vnode.data.style = Object.assign(vnode.data.style || {}, binding.value.style)
      }
    })

    Vue.mixin({
      $critical: false,

      asyncData () {
        criticalFontList.reset()
      },

      beforeCreate () {
        this.$options.$critical = isCrititcalComponent(this)
        if (this.$options.$critical) {
          this.$fonts = criticalFontList
        } else {
          this.$fonts = fontList
        }
      },

      head () {
        const link = this.$fonts.getCriticalFonts().map(font => font.toJSON())
        const style = this.$fonts.getFonts().map(font => font.toCSSFontFace())
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

function isCrititcalComponent (component) {
  if (component.$options.critical) {
    return true
  } else if (component.$parent) {
    return isCrititcalComponent(component.$parent)
  } else {
    return null
  }
}
