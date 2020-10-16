import { hasInitalGoodOverallConditions } from '../utils/client'

export default {
  functional: true,
  render (h, context) {
    if (!hasInitalGoodOverallConditions) {
      context.data.nativeOn = {
        click (e) {
          global.location.href = e.currentTarget.href
        }
      }
    }
    return h('nuxt-link', context.data, context.children)
  }
}
