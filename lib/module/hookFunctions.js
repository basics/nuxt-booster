const { getPreloadString, getStyleString, getNoscriptStyleString } = require('../utils/fontTools')

export const registerSpeedkit = (filePath) => {
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

export const autoImportComponents = (path, options) => {
  if (options.componentAutoImport) {
    return (dirs) => {
      dirs.push({
        path,
        prefix: options.componentPrefix
      })
    }
  } else {
    return () => {}
  }
}

export const injectFontHTML = (options) => {
  return (page) => {
    if (options.fonts) {
      page.HEAD += getStyleString(options.fonts)
      page.HEAD += getPreloadString(options.fonts)
      options.fonts.reset()
    }
    page.HEAD += getNoscriptStyleString()
  }
}
