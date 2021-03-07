import Vue from 'vue'

import './fonts.css'

import vFont from 'nuxt-speedkit/plugins/vFont'
import FontList from 'nuxt-speedkit/classes/FontList'
import { isSupportedBrowser } from 'nuxt-speedkit/utils/browser';

Vue.use(vFont)

const fontList = new FontList(<%= options.fonts %>)

export default (context, inject) => {
  inject('getFont', fontList.getFont.bind(fontList))
  inject('crossorigin', <%= options.crossorigin %>)
  inject('isBrowserSupported', () => isSupportedBrowser(<%= options.supportedBrowserDetector %>))
}

Vue.config.optionMergeStrategies.head = Vue.config.optionMergeStrategies.data
