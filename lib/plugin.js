import Vue from 'vue'

import vFont from './plugins/vFont'
import vImage from './plugins/vImagePreload'
import FontList from './classes/FontList'
import ImageList from './classes/ImageList'


Vue.use(vFont)
Vue.use(vImage)

export default (context, inject) => {
  inject('fonts', new FontList(<%= options.fonts %>))
  inject('images', new ImageList())
}

