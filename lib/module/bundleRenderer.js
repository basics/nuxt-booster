import { classList } from 'dynamic-class-list'
import { toHex } from '../utils/vnode'

export function addBundleRendererDirective (bundleRenderer, options) {
  bundleRenderer.directives = bundleRenderer.directives || {}
  if ('font' in bundleRenderer.directives) {
    throw new Error('font bundleRenderer directive exists…')
  }

  bundleRenderer.directives.font = function (vnode, binding) {
    vnode.context.test = [binding.value].flat()
    vnode.context.testKey = toHex(vnode)

    vnode.data.attrs = { [`data-f${vnode.context.testKey}`]: true }

    if (vnode.context.isCritical) {
      vnode.data.class = classList(vnode.data.class, 'font-active')
    }

    // TODO: remove it! dependency in hookFunctions -> injectFontHTML
    options.fonts = vnode.context.$fonts
  }
}
