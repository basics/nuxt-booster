const os = require('os')
const path = require('path')
const fsExtra = require('fs-extra')

const tmpDir = fsExtra.mkdtempSync(path.join(os.tmpdir(), 'publish-'))

// collect files for clean package
const files = [
  './index.js',
  './package.json',
  './README.md',
  './LICENSE'

].concat(fsExtra.readdirSync('./lib').map(file => `./lib/${file}`))

// copy files to tmp dir
files.forEach(file => fsExtra.copySync(file, path.join(tmpDir, file)))

// delete all files in package
fsExtra.readdirSync('.').map(file => fsExtra.rmSync(file))
