export function isCritical (vnode) {
  let critical = (vnode.context && vnode.context.$options.critical) || (vnode.data.attrs && vnode.data.attrs.critical)
  if (vnode.componentInstance) {
    critical = vnode.componentInstance.$options.critical
  }
  return /^\s*$/.test(critical) || /^\s*(true|1|on)\s*$/i.test(critical) || critical
}
