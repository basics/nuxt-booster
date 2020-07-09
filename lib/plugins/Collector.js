import { selectorExists } from '../utils/cssSelector'
let _installed = false

export default {
  install (Vue, options) {
    if (_installed) { return }
    _installed = true

    Vue.directive('font', {
      bind (el, binding, vnode) {
        updateNodeStyle(el, binding.value)
      },

      inserted (el, binding, vnode) {
        if (!vnode.context.isCritical) {
          vnode.observer = new global.IntersectionObserver(async ([e]) => {
            if (e.isIntersecting) {
              vnode.observer.unobserve(el)
              await loadFont(binding.value)
              el.classList.add(...binding.value.getClassNames())
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
      }
    })
  }
}

function updateNodeStyle (el, font) {
  font.getCSSSelectors().forEach((selector) => {
    if (!selectorExists(selector)) {
      Array.from(font.selectors).forEach((s) => {
        if (s) {
          el.querySelectorAll(s).forEach(node => Object.assign(node.style, font.getStyleObject()))
        }
      })
    } else {
      el.classList.add(...font.getClassNames())
    }
  })
}

async function loadFont (font) {
  if (!global.document.fonts.check(`${font.style} ${font.weight} 12px '${font.family}'`)) {
    const result = Array.from(global.document.fonts.keys()).find((f) => {
      return f.family === font.family && f.style === font.style && f.weight === String(font.weight)
    })
    await result.load()
  }
}
