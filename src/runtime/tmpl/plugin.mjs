import Vue from 'vue'

import './fonts.css'

import { head } from '#booster/plugins/vFont/head'
import vFont from '#booster/plugins/vFont'
import FontList from '#booster/classes/FontList'
import { isSupportedBrowser } from '#booster/utils/browser';
import globals from '#booster/utils/globals';
import LoadingSpinner from '#booster/components/BoosterImage/classes/LoadingSpinner';
<% if (options.loader && options.loader.dataUri) { %>import loaderDataUri from '<%= options.loader.dataUri %>';<% } %>
<% if (options.mode === 'server') { %>import probe from 'probe-image-size';<% } %>


Vue.use(vFont)

const booster = Object.freeze({
  head: () => console.error('$booster.head() is not available in context'),
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


globals.getImageSize = async (src) => {

<% if (options.mode === 'client') { %>
  const { width, height } =await new Promise((resolve) => {
    const img = new window.Image();
    img.onload = () => resolve({width: img.naturalWidth, height: img.naturalHeight});
    img.src = src;
  });
<% } else { %>
  const { width, height } = await probe(src);
<% } %>

  return {width, height};

};


export default (context, inject) => {
  inject('getFont', fontList.getFont.bind(fontList));
  inject('booster', booster);

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

!('$booster' in Vue.prototype) && Object.defineProperty(Vue.prototype, '$booster', {
  get () {
    return Object.freeze(Object.assign({}, booster, {head: head.bind(this)}));
  }
});

