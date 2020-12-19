import Vue from 'vue'

import './fonts.css'

import vFont from 'nuxt-speedkit/plugins/vFont'
import FontList from 'nuxt-speedkit/classes/FontList'

Vue.use(vFont)

export default (context, inject) => {
  inject('fonts', new FontList(<%= options.fonts %>))
}
