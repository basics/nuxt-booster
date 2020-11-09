import { registerIntersecting, unregisterIntersecting } from 'nuxt-speedkit/utils/intersectionObserver'
import { getRandomHash } from '../../utils/string'
import { selectorExists } from '../../utils/cssSelector'

export default {
  install (Vue, name) {
    Vue.directive(name, {
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
          registerIntersecting(el, () => Promise.all(fonts.map(async (font) => {
            await loadFont(font)
            updateNodeStyle(el, font, true)
          })))
        }
      },

      unbind (el, binding, vnode) {
        unregisterIntersecting(el)
        if (document.querySelector(`[hid="${vnode.fontIdentifier}"]`)) {
          document.querySelector(`[hid="${vnode.fontIdentifier}"]`).remove()
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

function updateNodeStyle (el, font, active) {
  Array.from(font.medias).forEach(media => font.getCSSSelectors(media).forEach(() => el.classList.add(...font.getClassNames(active))))
}

async function loadFont (font) {
  if (!global.document.fonts.check(`${font.style} ${font.weight} 12px '${font.family}'`)) {
    const weight = [String(font.weight)]
    if (weight.includes('400')) {
      weight.push('normal')
    }
    if (weight.includes('700')) {
      weight.push('bold')
    }
    const result = Array.from(global.document.fonts.keys()).find((f) => {
      return f.family === font.family && f.style === font.style && weight.includes(f.weight)
    })
    await result.load()
  }
}
