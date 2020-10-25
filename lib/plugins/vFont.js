
import directive from './vFont/directive'
import mixin from './vFont/mixin'
let _installed = false

export default {
  install (Vue, options) {
    if (_installed) { return }
    _installed = true

    directive.install(Vue, 'font')
    mixin.install(Vue)
  }
}
