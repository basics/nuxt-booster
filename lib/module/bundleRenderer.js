export function addBundleRendererDirective (bundleRenderer, options) {
  bundleRenderer.directives = bundleRenderer.directives || {}
  if ('font' in bundleRenderer.directives) {
    throw new Error('font bundleRenderer directive exists…')
  }

  // Server directive
  bundleRenderer.directives.imagePreload = function (vnode, binding) {
    if (vnode.context.isCritical) {
      options.images = vnode.context.$images
      options.images.add(binding.value)
    }
  }

  bundleRenderer.directives.font = function (vnode, binding) {
    [].concat(binding.value).forEach((font) => {
      font.critical.set(vnode.context.isCritical || font.critical.get())
      const classes = []
      // Fallback
      classes.push(...font.getClassNames())
      // Critical
      classes.push(...((font.critical.get() && (font.getClassNames(true))) || ['']))
      // TODO: check dynamic class added to template domNode (:class) where the directive is defined
      vnode.data.staticClass = ([...(vnode.data.staticClass || '').split(' '), ...classes].join(' ')).trim()
    })
    options.fonts = vnode.context.$fonts
  }
}
