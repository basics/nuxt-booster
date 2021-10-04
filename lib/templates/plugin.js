import Vue from 'vue'

import './fonts.css'

import vFont from 'nuxt-speedkit/plugins/vFont'
import FontList from 'nuxt-speedkit/classes/FontList'
import { isSupportedBrowser } from 'nuxt-speedkit/utils/browser';
import LoadingSpinner from 'nuxt-speedkit/components/SpeedkitImage/classes/LoadingSpinner';

Vue.use(vFont)

const fontList = new FontList(<%= options.fonts %>)

export default (context, inject) => {
  inject('getFont', fontList.getFont.bind(fontList))
  inject('speedkit', {
    crossorigin: <%= JSON.stringify(options.crossorigin) %>,
    isBrowserSupported: () => isSupportedBrowser(<%= options.supportedBrowserDetector %>),
    loader: () => <% if (options.loader.dataUri) { %>new LoadingSpinner({
      dataUri: require('<%= options.loader.dataUri %>'),
      size: '<%= options.loader.size %>',
      backgroundColor: '<%= options.loader.backgroundColor %>'
    })<% } else { %>undefined<% } %>
  })
}

Vue.config.optionMergeStrategies.head = Vue.config.optionMergeStrategies.data
