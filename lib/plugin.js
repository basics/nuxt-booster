import Vue from 'vue'

import vFont from 'nuxt-speedkit/plugins/vFont'
import vImage from 'nuxt-speedkit/plugins/vImagePreload'
import FontList from 'nuxt-speedkit/classes/FontList'
import ImageList from 'nuxt-speedkit/classes/ImageList'


Vue.use(vFont)
Vue.use(vImage)

export default (context, inject) => {
  inject('fonts', new FontList(<%= options.fonts %>))
  inject('images', new ImageList())
}

