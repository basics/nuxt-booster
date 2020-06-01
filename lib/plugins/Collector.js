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
        binding.value.forEach(item => el.style.setProperty(`--font-${item.name}`, item.value))
      }
    })

    Vue.mixin({
      $critical: false,

      beforeCreate () {
        this.$options.critical = isCrititcalComponent(this)
        if (this.$options.critical) {
          this.fonts = fontList
        } else {
          this.fonts = new FontList()
        }
      },

      head () {
        const link = this.fonts.getCriticalFontDeclarations()
        return { link }
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
