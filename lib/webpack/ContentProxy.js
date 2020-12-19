const fs = require('fs').promises
const { existsSync } = require('fs')
const path = require('path')
const fetch = require('node-fetch')
const VirtualModulesPlugin = require('webpack-virtual-modules')

const virtualModules = new Map()

module.exports = class ContentProxy {
  apply (compiler) {
    registerVirtualModulesInstance(compiler)

    compiler.hooks.compilation.tap(this.constructor.name, (compilation, { normalModuleFactory }) => {
      normalModuleFactory.hooks.beforeResolve.tapPromise(this.constructor.name, async (result) => {
        const file = global.alias.path(result.request).replace(/\?.+/, '')
        if (/proxy/i.test(file)) {
          await saveRemoteFile(file)
        }
        if (/youtube\/id\//i.test(result.request)) {
          saveVirtualFile(file, virtualModules.get(compiler.options.name))
        }
        return result
      })
    })
  }
}

function registerVirtualModulesInstance (compiler) {
  if (!virtualModules.has(compiler.options.name)) {
    virtualModules.set(compiler.options.name, createVirtualModulesInstance(compiler))
  }
}

function createVirtualModulesInstance (compiler) {
  const vM = new VirtualModulesPlugin()
  vM.apply(compiler)
  vM.virtualized = new Set()
  return vM
}

function saveRemoteFile (file) {
  if (!existsSync(file)) {
    const origin = file.replace(global.alias.path('@/assets/proxy/'), 'https://')
    return createFile(file, fetch(origin).then(res => res.buffer()))
  }
  return Promise.resolve()
}

async function createFile (filePath, data) {
  await createDirectory(filePath)
  try {
    return await fs.writeFile(filePath, await data, 'binary')
  } catch (e) {
    throw new Error(e)
  }
}

function createDirectory (file) {
  try {
    return fs.mkdir(path.dirname(file), { recursive: true })
  } catch (e) {
    throw new Error(e)
  }
}

function saveVirtualFile (file, virtualModule) {
  const { id } = file.match(/\/youtube\/id\/(?<id>[\w]+)/i).groups
  if (!virtualModule.virtualized.has(id)) {
    virtualModule.writeModule(file, getYoutubePictureConfig(id))
  }
}

function getYoutubePictureConfig (id) {
  return `module.exports = (() => {
    const jpeg = require('@/assets/proxy/img.youtube.com/vi/${id}/maxresdefault.jpg?resize&sizes[]=480,sizes[]=768,sizes[]=960,sizes[]=1080,sizes[]=1200,sizes[]=1280')
    const webp = require('@/assets/proxy/img.youtube.com/vi/${id}/maxresdefault.jpg?resize&sizes[]=480,sizes[]=768,sizes[]=960,sizes[]=1080,sizes[]=1200,sizes[]=1280&format=webp')
    return {
      sources: [
        {
          srcset: webp.srcSet,
          type: 'image/webp'
        }, {
          srcset: jpeg.srcSet,
          type: 'image/jpeg'
        }
      ],
      placeholder: (({ src, preview }) => ({ url: src, base64: preview }))(require('@/assets/proxy/img.youtube.com/vi/${id}/maxresdefault.jpg?sqip')),
      width: jpeg.width,
      height: jpeg.height
    }
  })()`
}
