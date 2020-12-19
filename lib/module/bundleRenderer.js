import { classList } from 'dynamic-class-list'

export function addBundleRendererDirective (bundleRenderer, options) {
  bundleRenderer.directives = bundleRenderer.directives || {}
  if ('font' in bundleRenderer.directives) {
    throw new Error('font bundleRenderer directive exists…')
  }

  bundleRenderer.directives.font = function (vnode, binding) {
    const rootSelector = vnode.context.fontCollection.add(vnode, [].concat(binding.value))
    vnode.data.attrs = vnode.data.attrs || {}
    vnode.data.attrs[rootSelector] = true

    if (vnode.context.isCritical) {
      vnode.data.class = classList(vnode.data.class, 'font-active')
    }

    // TODO: remove it! dependency in hookFunctions -> injectFontHTML
    options.fonts = vnode.context.$fonts
  }
}
