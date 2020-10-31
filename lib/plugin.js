import Vue from 'vue'

import vFont from 'nuxt-speedkit/lib/plugins/vFont'
import vImage from 'nuxt-speedkit/lib/plugins/vImagePreload'
import FontList from 'nuxt-speedkit/lib/classes/FontList'
import ImageList from 'nuxt-speedkit/lib/classes/ImageList'


Vue.use(vFont)
Vue.use(vImage)

export default (context, inject) => {
  inject('fonts', new FontList(<%= options.fonts %>))
  inject('images', new ImageList())
}

