const os = require('os')
const path = require('path')
const fsExtra = require('fs-extra')

const isPackage = path.basename(path.join(process.cwd(), '../')) === 'node_modules'

if (isPackage) {
  const tmpDir = fsExtra.mkdtempSync(path.join(os.tmpdir(), 'publish-'))

  const ignoredFiles = [
    'index.js',
    'package.json',
    'README.md',
    'LICENSE',
    'node_modules',
    'lib'
  ]
  fsExtra.readdirSync('.').forEach(file => !ignoredFiles.includes(file) && fsExtra.removeSync(file))

  // // exclude lib dir
  const libDir = path.resolve(__dirname, './lib')
  const libFiles = fsExtra.readdirSync(libDir).map(file => path.resolve(libDir, file))
  libFiles.forEach(file => fsExtra.existsSync(file) && fsExtra.copySync(file, path.join(tmpDir, path.relative(libDir, file))))

  // // delete all files in package
  // fsExtra.readdirSync('.').forEach(file => fsExtra.removeSync(file))

  // fsExtra.copySync(tmpDir, process.cwd())
}
