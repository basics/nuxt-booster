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
        if (vnode.context.$options.$critical) {
          el.classList.add('font')
        }
        vnode.data.style = Object.assign(vnode.data.style || {}, binding.value)
      }
    })

    Vue.mixin({
      $critical: false,

      beforeCreate () {
        this.$options.$critical = isCrititcalComponent(this)
        if (this.$options.$critical) {
          this.fonts = criticalFontList
        } else {
          this.fonts = fontList
        }
      },

      head () {
        const link = this.fonts.getCriticalFonts().map(font => font.toJSON())
        const style = this.fonts.getFonts().map(font => font.toCSSFontFace()).join('')
        const result = { link }
        if (style) {
          return Object.assign(result, {
            __dangerouslyDisableSanitizers: ['style'],
            style: [
              { hid: style ? 'font-faces' : '', cssText: style, type: 'text/css' }
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
