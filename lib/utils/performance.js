const connectionTypes = ['4g', '3g', '2g', 'slow-2g']
const effectiveType = { min: '4g' }
const hardwareConcurrency = { min: 2, max: 50 }
const deviceMemory = { min: 4 }
const minConditions = {
  connection: { effectiveType: effectiveType.min, saveData: false },
  hardwareConcurrency: hardwareConcurrency.min,
  deviceMemory: deviceMemory.min,
  userAgent: ''
}
const navigator = (global.navigator || minConditions)
const connection = navigator.connection || minConditions.connection

export function hasSufficientPerformance () {
  return (
    !isLighthouse() &&
    hasSufficientNetworkConnection() &&
    hasSufficientHardwareSetup() &&
    !hasActivatedSaveDataMode() &&
    !process.server
  )
}

export function hasSufficientNetworkConnection () {
  return connectionTypes.indexOf(connection.effectiveType) <= connectionTypes.indexOf(effectiveType.min)
}

export function hasSufficientHardwareSetup () {
  return (
    (navigator.hardwareConcurrency || minConditions.hardwareConcurrency) >= minConditions.hardwareConcurrency &&
    (navigator.hardwareConcurrency || minConditions.hardwareConcurrency) <= hardwareConcurrency.max &&
    (navigator.deviceMemory || minConditions.deviceMemory) >= minConditions.deviceMemory
  )
}

export function hasActivatedSaveDataMode () {
  return connection.saveData || false
}

export function isLighthouse () {
  return /(Speed Insights)|(Chrome-Lighthouse)/.test(navigator.userAgent)
}
