import Vue from 'vue'

import './fonts.css'

import vFont from 'nuxt-speedkit/plugins/vFont'
import FontList from 'nuxt-speedkit/classes/FontList'

Vue.use(vFont)

const fontList = new FontList(<%= options.fonts %>)

export default (context, inject) => {
  inject('getFont', fontList.getFont.bind(fontList))
}
