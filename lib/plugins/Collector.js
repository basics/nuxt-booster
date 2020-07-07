let _installed = false

export default {
  install (Vue, options) {
    if (_installed) { return }
    _installed = true

    Vue.directive('font', {
      bind (el, binding, vnode, oldVnode) {
        const critical = vnode.context.isCritical
        addCSSVars(el, binding)
        addFontFamilyClassName(el, binding)
        addFontClassName(el, critical)
      },

      inserted (el, binding, vnode) {
        if (!vnode.context.isCritical && !el.classList.contains('font')) {
          vnode.observer = new global.IntersectionObserver(async ([e]) => {
            if (e.isIntersecting) {
              vnode.observer.unobserve(el)
              await loadFont(binding.value)
              el.classList.add('font')
            }
          }, { threshold: [0] })
          vnode.observer.observe(el)
        }
      },

      unbind (el, binding, vnode) {
        if (vnode.observer) {
          vnode.observer.disconnect()
        }
      }
    })

    Vue.mixin({
      provide () {
        return {
          criticalParent: this.critical || this.criticalParent
        }
      },
      inject: {
        criticalParent: { default: () => this.critical || false }
      },

      props: {
        critical: {
          type: Boolean,
          default () {
            return false
          }
        }
      },

      computed: {
        isCritical () {
          return this.criticalParent || this.critical
        }
      },

      created () {
        // if (this.$attrs && this.$attrs.critical) {
        // console.log(this.$vnode.data)
        // console.log('FOO', this.isCritical, this)
        // }
      }
    })
  }
}

function addCSSVars (el, binding) {
  if (!el.style.getPropertyValue('--font-family')) {
    const vars = binding.value.toCSSVars()
    for (const key in vars) {
      el.style.setProperty(key, vars[key])
    }
  }
}

function addFontFamilyClassName (el, binding) {
  if (!el.classList.contains(binding.value.getFamilyAsClassName())) {
    el.classList.add(binding.value.getFamilyAsClassName())
  }
}

function addFontClassName (el, critical) {
  if (critical && !el.classList.contains('font')) {
    el.classList.add('font')
  }
}

async function loadFont (font) {
  if (!global.document.fonts.check(`${font.style} ${font.weight} 12px '${font.family}'`)) {
    const result = Array.from(global.document.fonts.keys()).find((f) => {
      return f.family === font.family && f.style === font.style && f.weight === String(font.weight)
    })
    await result.load()
  }
}
