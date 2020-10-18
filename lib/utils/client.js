const effectiveType = { min: '4g' }
const hardwareConcurrency = { min: 2, max: 50 }
const deviceMemory = { min: 4 }

const minConditions = {
  connection: {
    effectiveType: effectiveType.min,
    saveData: false
  },
  hardwareConcurrency: hardwareConcurrency.min,
  deviceMemory: deviceMemory.min,
  userAgent: ''
}
const navigator = (global.navigator || minConditions)
const connection = navigator.connection || minConditions.connection
const connectionTypes = [
  '4g', '3g', '2g', 'slow-2g'
]

export function hasGoodOverallConditions () {
  return (
    !isLighthouse() &&
    hasGoodNetworkConditions() &&
    hasGoodDeviceConditions() &&
    !hasActivatedSaveDataMode() &&
    !process.server
  )
}

export const hasInitialGoodOverallConditions = hasGoodOverallConditions()

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

export function isLighthouse () {
  return /(Speed Insights)|(Chrome-Lighthouse)/.test(navigator.userAgent)
}
