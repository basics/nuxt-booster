// TODO: import by alias
import FontList from '../../../../lib/classes/FontList'

let _installed = false

export default {
  install (Vue, options) {
    if (_installed) { return }
    _installed = true

    const fontList = new FontList(options.fonts)
    Vue.directive('font', {
      bind (el, binding, vnode, oldVnode) {
        el.classList.add('font')
        vnode.data.style = Object.assign(vnode.data.style || {}, binding.value)
      }
    })

    Vue.mixin({
      beforeCreate () {
        if (isCrititcalComponent(this)) {
          this.fonts = fontList
        } else {
          this.fonts = new FontList()
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
