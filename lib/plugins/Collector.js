import { isCritical } from '../utils/vnode'

let _installed = false

export default {
  install (Vue, options) {
    if (_installed) { return }
    _installed = true

    Vue.directive('font', {
      bind (el, binding, vnode, oldVnode) {
        const critical = isCritical(vnode)
        if (!el.style.getPropertyValue('--font-family')) {
          const vars = binding.value.toCSSVars()
          for (const key in vars) {
            el.style.setProperty(key, vars[key])
          }
        }
        if (!el.classList.contains(binding.value.getFamilyAsClassName())) {
          el.classList.add(binding.value.getFamilyAsClassName())
        }
        if (critical && !el.classList.contains('font')) {
          el.classList.add('font')
        }
      },

      inserted (el, binding, vnode) {
        const critical = isCritical(vnode)
        if (!critical && !el.classList.contains('font')) {
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
