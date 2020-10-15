// import { hydrateWhenVisible, hydrateOnInteraction } from 'vue-lazy-hydration'
import { hasInitalGoodOverallConditions } from 'lazy-resources/utils/client'
import { lazyComponent, MODE } from 'lazy-resources/utils/lazyComponent'
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
          font.critical.set(vnode.context.isCritical || font.critical.get())

          // fallback, add css classes if not exist
          if (Array.from(font.medias).find(media => !font.getCSSSelectors(media).find(selectorExists))) {
            createStyle(vnode.fontIdentifier, font.getMediaWithClasses())
          }

          updateNodeStyle(el, font)

          if (font.critical.get()) {
            updateNodeStyle(el, font, true)
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
                updateNodeStyle(el, font, true)
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
      },

      beforeCreate () {
        const goodOverallConditions = hasInitalGoodOverallConditions

        const components = Object
          .entries(this.$options.speedkitComponents || {})
          .reduce((result, [key, value]) => {
            if (typeof value === 'function') {
              let component = lazyComponent(() => wrapComponent(value(), { critical: false }), MODE.VISIBLE)
              // let component = hydrateOnInteraction(() => wrapComponent(value(), { critical: false }), { event: 'activate-component' })
              if (goodOverallConditions) {
                component = lazyComponent(() => wrapComponent(value(), { critical: false }), MODE.VISIBLE)
                // component = hydrateWhenVisible(() => wrapComponent(value(), { critical: false }), { observerOptions: { rootMargin: '0px' } })
              }
              return Object.assign(result, {
                [key]: component
              })
            }
            return Object.assign(result, { [key]: () => wrapComponent(Promise.resolve(value), { critical: true }) })
          }, {})
        Object.assign(this.$options.components, components)
      }
    })
  }
}

function wrapComponent (module, data = {}) {
  return module.then((component) => {
    return {
      functional: true,
      render (h, context) {
        const componentData = context.data
        componentData.attrs = Object.assign({}, componentData.attrs, data)
        return h(component.default || component, Object.assign({}, componentData))
      }
    }
  })
}

function createStyle (hid, css) {
  if (css) {
    const style = document.createElement('style')
    style.setAttribute('hid', hid)
    style.innerHTML = css
    document.head.appendChild(style)
  }
}

function updateNodeStyle (el, font, active) {
  Array.from(font.medias).forEach(media => font.getCSSSelectors(media).forEach(() => el.classList.add(...font.getClassNames(active))))
}

async function loadFont (font) {
  if (!global.document.fonts.check(`${font.style} ${font.weight} 12px '${font.family}'`)) {
    const result = Array.from(global.document.fonts.keys()).find((f) => {
      return f.family === font.family && f.style === font.style && f.weight === String(font.weight)
    })
    await result.load()
  }
}
