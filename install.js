const os = require('os')
const path = require('path')
const fsExtra = require('fs-extra')

const isPackage = path.basename(path.join(process.cwd(), '../')) === 'node_modules'

if (isPackage) {
  const tmpDir = fsExtra.mkdtempSync(path.join(os.tmpdir(), 'publish-'))

  // collect files for clean package
  const libDir = './lib'
  const files = [
    './index.js',
    './package.json',
    './README.md',
    './LICENSE',
    './node_modules'

  ].concat(fsExtra.readdirSync(libDir).map(file => `./lib/${file}`))

  // copy files to tmp dir
  files.forEach(file => fsExtra.copySync(file, path.join(tmpDir, file)))

  // // delete all files in package
  fsExtra.readdirSync('.').map(file => fsExtra.rmSync(file))

  fsExtra.copySync(tmpDir, process.cwd())
}
