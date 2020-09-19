import { hydrateWhenVisible } from 'vue-lazy-hydration'

const effectiveType = { min: '4g' }
const hardwareConcurrency = { min: 2, max: 50 }
const deviceMemory = { min: 4 }

const minConditions = {
  connection: {
    effectiveType: effectiveType.min,
    saveData: false
  },
  hardwareConcurrency: hardwareConcurrency.min,
  deviceMemory: deviceMemory.min
}
const navigator = (global.navigator || minConditions)
const connection = navigator.connection || minConditions.connection
const connectionTypes = [
  '4g', '3g', '2g', 'slow-2g'
]

export function hasGoodOverallConditions () {
  return (
    hasGoodNetworkConditions() &&
    hasGoodDeviceConditions() &&
    !hasActivatedSaveDataMode() &&
    !process.server
  )
}

export function hasGoodNetworkConditions () {
  return connectionTypes.indexOf(connection.effectiveType) <= connectionTypes.indexOf(effectiveType.min)
}

export function hasGoodDeviceConditions () {
  return (
    navigator.hardwareConcurrency >= minConditions.hardwareConcurrency &&
    navigator.hardwareConcurrency <= hardwareConcurrency.max &&
    (navigator.deviceMemory || minConditions.deviceMemory) >= minConditions.deviceMemory
  )
}

export function hasActivatedSaveDataMode () {
  return connection.saveData || false
}

export function initializeComponent (fn) {
  if (hasGoodOverallConditions()) {
    return hydrateWhenVisible(fn, { observerOptions: { rootMargin: '0px' } })
  } else if (process.server) {
    return fn
  }
  return () => { return new Promise(() => {}) }
}
