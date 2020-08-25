import { getRandomHash } from '../utils/string'
import { selectorExists } from '../utils/cssSelector'

let _installed = false

export default {
  install (Vue, options) {
    if (_installed) { return }
    _installed = true

    // Client directive
    Vue.directive('font', {
      bind (el, binding, vnode) {
        vnode.fontIdentifier = `font-${getRandomHash()}`;

        [].concat(binding.value).map((font) => {
          font.critical.set(vnode.context.isCritical)

          // fallback, add css classes if not exist
          if (!font.getCSSSelectors().find(selectorExists)) {
            createStyle(vnode.fontIdentifier, font.getCSSClasses())
          }

          if (vnode.context.isCritical) {
            updateNodeStyle(el, font)
          }
        })
      },

      inserted (el, binding, vnode) {
        const fonts = [].concat(binding.value)
        if (!vnode.context.isCritical) {
          vnode.observer = new global.IntersectionObserver(async ([e]) => {
            if (e.isIntersecting) {
              vnode.observer.unobserve(el)
              await Promise.all(fonts.map(async (font) => {
                await loadFont(font)
                updateNodeStyle(el, font)
              }))
            }
          }, { threshold: [0] })
          vnode.observer.observe(el)
        }
      },

      unbind (el, binding, vnode) {
        if (vnode.observer) {
          vnode.observer.disconnect()
        }
        if (document.querySelector(`[hid="${vnode.fontIdentifier}"]`)) {
          document.querySelector(`[hid="${vnode.fontIdentifier}"]`).remove()
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

function createStyle (hid, css) {
  if (css) {
    const style = document.createElement('style')
    style.setAttribute('hid', hid)
    style.innerHTML = css
    document.head.appendChild(style)
  }
}

function updateNodeStyle (el, font) {
  font.getCSSSelectors().forEach((selector) => {
    el.classList.add(...font.getClassNames())
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
