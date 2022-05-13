import Vue from 'vue'

import './fonts.css'

import { head } from 'nuxt-speedkit/plugins/vFont/head'
import vFont from 'nuxt-speedkit/plugins/vFont'
import FontList from 'nuxt-speedkit/classes/FontList'
import { isSupportedBrowser } from 'nuxt-speedkit/utils/browser';
import LoadingSpinner from 'nuxt-speedkit/components/SpeedkitImage/classes/LoadingSpinner';
<% if (options.loader && options.loader.dataUri) { %>import loaderDataUri from '<%= options.loader.dataUri %>';<% } %>

Vue.use(vFont)

const speedkit = Object.freeze({
  head: () => console.error('$speedkit.head() is not available in context'),
  crossorigin: <%= JSON.stringify(options.crossorigin) %>,
  isBrowserSupported: () => isSupportedBrowser(<%= options.supportedBrowserDetector %>),
  loader: () => <% if (options.loader.dataUri) { %>new LoadingSpinner({
    dataUri: loaderDataUri,
    size: '<%= options.loader.size %>',
    backgroundColor: '<%= options.loader.backgroundColor %>'
  })<% } else { %>undefined<% } %>,
  targetFormats: <%= JSON.stringify(options.targetFormats) %>
});

const fontList = new FontList(<%= options.fonts %>);

export default (context, inject) => {
  inject('getFont', fontList.getFont.bind(fontList));
  inject('speedkit', speedkit);

  // For each render an own critical font style map is generated, which is used initially during page loading.
  const criticalFontStyles = {};
  inject('addCriticalFontStyle', (style) => {
    criticalFontStyles[style.hid] = style;
  });
  if (process.static && process.server) {
    context.beforeNuxtRender(({ nuxtState }) => {
      const ssrData = nuxtState.data[0] || {}
      ssrData._criticalFontStyles = criticalFontStyles
    })
  }

}

!('$speedkit' in Vue.prototype) && Object.defineProperty(Vue.prototype, '$speedkit', {
  get () {
    return Object.freeze(Object.assign({}, speedkit, {head: head.bind(this)}));
  }
});

