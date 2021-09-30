const { cl } = require('dynamic-class-list');

function addBundleRendererDirective (bundleRenderer) {
  bundleRenderer.directives = bundleRenderer.directives || {};
  if ('font' in bundleRenderer.directives) {
    throw new Error('font bundleRenderer directive exists…');
  }

  // INFO: Directive is not executed on HTML ELement with other directive (e.g. v-html)
  bundleRenderer.directives.font = function (vnode, binding) {
    const rootSelector = vnode.context.fontCollection.add(vnode, [].concat(binding.value));
    vnode.data.attrs = vnode.data.attrs || {};
    vnode.data.attrs[String(rootSelector.name)] = rootSelector.value;

    if (vnode.context.isCritical) {
      vnode.data.class = cl(vnode.data.class, 'font-active');
    }
  };
}

module.exports = {
  addBundleRendererDirective
};
