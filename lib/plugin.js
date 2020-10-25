import Vue from 'vue'
import vImage from './plugins/vImagePreload'
import vFont from './plugins/vFont'
import FontList from './classes/FontList'
import ImageList from './classes/ImageList'

Vue.use(vImage)
Vue.use(vFont)

export default (context, inject) => {
  inject('fonts', new FontList(<%= options.fonts %>))
  inject('images', new ImageList())
}
