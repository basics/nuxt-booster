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
          const isFontCritical = font.critical.get()
          font.critical.set(vnode.context.isCritical || isFontCritical)

          // fallback, add css classes if not exist
          if (Array.from(font.mediaSelectors).find(mediaSelector => !font.getCSSSelectors(mediaSelector).find(selectorExists))) {
            createStyle(vnode.fontIdentifier, font.getMediaWithClasses())
          }

          if (isFontCritical) {
            updateNodeStyle(el, font)
          }
        })
      },

      inserted (el, binding, vnode) {
        // has lazy fonts?
        const fonts = [].concat(binding.value).filter(font => !font.critical.get())
        if (fonts.length > 0) {
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
  Array.from(font.currentMediaSelectors).forEach(mediaSelector => font.getCSSSelectors(mediaSelector).forEach((selector) => {
    el.classList.add(...font.getClassNames())
  }))
}

async function loadFont (font) {
  if (!global.document.fonts.check(`${font.style} ${font.weight} 12px '${font.family}'`)) {
    const result = Array.from(global.document.fonts.keys()).find((f) => {
      return f.family === font.family && f.style === font.style && f.weight === String(font.weight)
    })
    await result.load()
  }
}
