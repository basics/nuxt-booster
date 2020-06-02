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
        style.push(this.$fonts.getCSSDeclaration())
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
