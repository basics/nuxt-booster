
// TODO: Kann das weg?
const MODULE_NAME = 'lazy-resources'

import Vue from 'vue'
import vFont from './plugins/vFont'
import FontList from './classes/FontList'

Vue.use(vFont)

export default (context, inject) => {
  inject('fonts', new FontList(<%= options.fonts %>))
}
