
const MODULE_NAME = 'lazy-resources'

import Vue from 'vue'
import Collector from './plugins/Collector'

Vue.use(Collector, {
  fonts: <%= options.fonts %>
})
