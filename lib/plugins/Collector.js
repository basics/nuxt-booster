// import FontList from '../classes/FontList'
// import { loadFont, registerFont } from '../utils/font'
// import { isCritical } from '../utils/vnode'

let _installed = false

export default {
  install (Vue, options) {
    if (_installed) { return }
    _installed = true

    // console.log(Vue.inject)

    Vue.directive('font', {
      bind (el, binding, vnode, oldVnode) {
        // console.log(binding)
        // const critical = isCritical(vnode)
        // registerFont(vnode, binding.value, critical)

        // el.classList.toggle('font', critical)
        // el.classList.add(binding.value.getFamilyAsClassName())

        // const vars = binding.value.toCSSVars()
        // for (const key in vars) {
        //   el.style.setProperty(key, vars[key])
        // }
      }

      // inserted (el, binding, vnode) {
      //   vnode.observer = new global.IntersectionObserver(async ([e]) => {
      //     if (e.isIntersecting) {
      //       vnode.observer.unobserve(el)
      //       await loadFont(binding.value)
      //       el.classList.add('font')
      //     }
      //   }, { threshold: [0] })
      //   vnode.observer.observe(el)
      // },

      // unbind (el, binding, vnode) {
      //   if (vnode.observer) {
      //     vnode.observer.disconnect()
      //   }
      // }
    })
  }
}

// function isCriticalComponent (component) {
//   if (('critical' in component.$attrs && component.$attrs.critical !== false) || component.$options.critical) {
//     return true
//   } else if (component.$parent) {
//     return isCriticalComponent(component.$parent)
//   } else {
//     return false
//   }
// }
