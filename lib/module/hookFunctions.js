import fs from 'fs-extra'
const { resolve } = require('path')
const normalizeStylesheet = fs.readFileSync(resolve(__dirname, '../', './normalize.css'), 'utf-8')

export const autoImportComponents = (path, prefix) => {
  return (dirs) => {
    dirs.push({ path, prefix })
  }
}

export function preloadOptimization () {
  return (resources) => {
    ['clientManifest', 'modernManifest'].filter(value => resources[value]).forEach((key) => {
      const assetsMapping = resources[key].assetsMapping
      for (const key in assetsMapping) {
        if (assetsMapping[key].length > 1) {
          delete assetsMapping[key]
        }
      }
    })
  }
}

export const injectNormalizeStyle = () => {
  return (page) => {
    page.HEAD += `<style>${normalizeStylesheet}</style>`
    page.HEAD += getNoscriptStyleString()
  }
}

export const injectFontHTML = (options) => {
  return (page) => {
    if (options.fonts) {
      page.HEAD += options.fonts.getFontStyleTag()
    }
  }
}

export const registerAppEntry = (filePath) => {
  return (configs) => {
    configs
      .filter(({ name }) => ['client', 'modern'].includes(name))
      .forEach((config) => {
        config.entry.app = config.entry.app.map((file) => {
          if (file.endsWith('client.js')) {
            return filePath
          }
          return file
        })
        config.optimization.runtimeChunk = {
          name: 'app'
        }
      })
  }
}

function getNoscriptStyleString () {
  return '<noscript><style>.noscript-hide {display: none;}</style></noscript>'
}
