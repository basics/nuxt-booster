
const MODULE_NAME = 'lazy-resources'

import Vue from 'vue'
import Collector from './plugins/Collector'

Vue.use(Collector, {
  fonts: [{
    family: 'Comic Neue',
    fallback: ['Arial', 'sans-serif'],
    variance: [
      {
        style: 'normal',
        weight: 300,
        src: require('assets/fonts/comic-neue-v1-latin/comic-neue-v1-latin-300.woff2')
      }, {
        style: 'italic',
        weight: 300,
        src: require('assets/fonts/comic-neue-v1-latin/comic-neue-v1-latin-300italic.woff2')
      }, {
        style: 'normal',
        weight: 400,
        src: require('assets/fonts/comic-neue-v1-latin/comic-neue-v1-latin-regular.woff2')
      }, {
        style: 'italic',
        weight: 400,
        src: require('assets/fonts/comic-neue-v1-latin/comic-neue-v1-latin-italic.woff2')
      }, {
        style: 'normal',
        weight: 700,
        src: require('assets/fonts/comic-neue-v1-latin/comic-neue-v1-latin-700.woff2')
      }, {
        style: 'italic',
        weight: 700,
        src: require('assets/fonts/comic-neue-v1-latin/comic-neue-v1-latin-700italic.woff2')
      }
    ]
  }]
})
