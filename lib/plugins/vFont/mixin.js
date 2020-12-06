// IMPORTANT: speedkitComponent must be equal projekt import
import speedkit, { MODE } from 'nuxt-speedkit/utils/speedkit'
import { toHashHex } from 'nuxt-speedkit/utils/string'

export default {
  install (Vue) {
    Vue.mixin({
      provide () {
        return {
          criticalParent: this.critical || this.criticalParent
        }
      },

      inject: {
        criticalParent: { default: () => this.critical || false }
      },

      props: {
        critical: {
          type: Boolean,
          default () {
            return false
          }
        }
      },

      data () {
        return {
          fonts: []
        }
      },

      computed: {
        isCritical () {
          return this.criticalParent || this.critical
        }
      },

      beforeCreate () {
        const components = Object
          .entries(this.$options.speedkitComponents || {})
          .reduce((result, [key, value]) => {
            return Object.assign(result, {
              [key]: speedkit(() => wrapComponent(value()), MODE.VISIBLE, {
                rootMargin: process.env.NUXT_SPEEDKIT_LAZY_OFFSET_COMPONENT || '0%'
              })
            })
          }, {})
        Object.assign(this.$options.components, components)
      },

      head () {
        return {
          link: getPreloadLinks(this.fonts, this.critical),
          style: getStyleTag(this.fonts),
          __dangerouslyDisableSanitizers: ['style']
        }
      }
    })
  }
}

function getPreloadLinks (fonts, critical) {
  return fonts.map((font) => {
    if ((critical && process.server)) {
      return {
        hid: toHashHex(font.src),
        href: font.src,
        type: font.type,
        rel: 'preload',
        as: 'font',
        media: 'all',
        crossorigin: 'anonymous',
        callback: () => {}
      }
    }
    return {}
  })
}

function getStyleTag (fonts) {
  if (fonts.length) {
    const cssText = fonts.map(font => font.getCSSText()).join(' ')
    return [{
      hid: toHashHex(cssText),
      type: 'text/css',
      cssText
    }]
  } else {
    return []
  }
}

function wrapComponent (module) {
  return module.then((component) => {
    return {
      functional: true,
      render (h, context) {
        const componentData = context.data
        componentData.attrs = Object.assign({}, componentData.attrs, context.props)
        return h(component.default || component, Object.assign({}, componentData))
      }
    }
  }).catch((err) => {
    throw err
  })
}
