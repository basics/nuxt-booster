
const MODULE_NAME = 'lazy-resources'

import Vue from 'vue'
import Collector from './plugins/Collector'
import {register as registerStore} from './utils/store'

Vue.use(Collector)

console.log('jooo')

export default function (context) {
  const { app, store } = context
  registerStore(store, MODULE_NAME);

//  app.head.link.push(...fontsToLinks(fonts));
}
