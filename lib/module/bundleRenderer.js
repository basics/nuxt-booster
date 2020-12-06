import { classList } from 'dynamic-class-list'
import { toFontHex } from '../utils/vnode'

export function addBundleRendererDirective (bundleRenderer, options) {
  bundleRenderer.directives = bundleRenderer.directives || {}
  if ('font' in bundleRenderer.directives) {
    throw new Error('font bundleRenderer directive exists…')
  }

  bundleRenderer.directives.font = function (vnode, binding) {
    const rootSelector = prepareFonts(vnode, [].concat(binding.value))
    vnode.data.attrs = { [rootSelector]: true }

    if (vnode.context.isCritical) {
      vnode.data.class = classList(vnode.data.class, 'font-active')
    }

    // TODO: remove it! dependency in hookFunctions -> injectFontHTML
    options.fonts = vnode.context.$fonts
  }
}

function prepareFonts (vnode, fonts) {
  const rootSelector = `data-f${toFontHex(vnode.tag, JSON.stringify(fonts))}`
  vnode.context.fonts = [].concat(vnode.context.fonts || []).concat(fonts.map((font) => {
    font.setRootSelector(rootSelector)
    return font
  }))
  return rootSelector
}
