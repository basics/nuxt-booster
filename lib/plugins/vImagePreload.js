
let _installed = false

const directive = {
  install (Vue, name) {
    Vue.directive(name, {})
  }
}

export default {
  install (Vue, options) {
    if (_installed) { return }
    _installed = true

    directive.install(Vue, 'image-preload')
  }
}
