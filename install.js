const os = require('os')
const path = require('path')
const fs = require('fs')
const fsExtra = require('fs-extra')
console.log(fsExtra)
function install () {
  const isPackage = path.basename(path.join(process.cwd(), '../')) === 'node_modules'

  if (isPackage) {
    const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'publish-'))

    // collect files for clean package
    const libDir = './lib'
    const files = [
      './index.js',
      './package.json',
      './README.md',
      './LICENSE'

    ].concat(fs.readdirSync(libDir).map(file => `./lib/${file}`))

    // copy files to tmp dir
    mkdir(path.join(tmpDir, libDir))
    files.forEach((file) => {
      const filename = file
      const stat = fs.statSync(filename)

      if (stat.isDirectory()) {
        copyDir(file, path.join(tmpDir, file))
      } else {
        fs.copyFileSync(file, path.join(tmpDir, file))
      }
    })

    // delete all files in package
    fs.readdirSync('.').forEach((file) => {
      const filename = file
      const stat = fs.statSync(filename)

      if (stat.isDirectory()) {
        rmdir(file)
      } else {
        fs.unlinkSync(file)
      }
    })

    copyDir(tmpDir, process.cwd())
  }
}

function mkdir (dir) {
  // making directory without exception if exists
  try {
    fs.mkdirSync(dir)
  } catch (e) {
    if (e.code !== 'EEXIST') {
      throw e
    }
  }
};

function rmdir (dir) {
  if (fs.existsSync(dir)) {
    const list = fs.readdirSync(dir)
    for (let i = 0; i < list.length; i++) {
      const filename = path.join(dir, list[i])
      const stat = fs.statSync(filename)

      if (filename === '.' || filename === '..') {
        // pass these files
      } else if (stat.isDirectory()) {
        // rmdir recursively
        rmdir(filename)
      } else {
        // rm fiilename
        fs.unlinkSync(filename)
      }
    }
    fs.rmdirSync(dir)
  } else {
    console.warn('warn: ' + dir + ' not exists')
  }
};

function copyDir (src, dest) {
  console.log('copyDir', src, dest)
  mkdir(dest)
  const files = fs.readdirSync(src)
  for (let i = 0; i < files.length; i++) {
    const current = fs.lstatSync(path.join(src, files[i]))
    if (current.isDirectory()) {
      copyDir(path.join(src, files[i]), path.join(dest, files[i]))
    } else if (current.isSymbolicLink()) {
      const symlink = fs.readlinkSync(path.join(src, files[i]))
      fs.symlinkSync(symlink, path.join(dest, files[i]))
    } else {
      copy(path.join(src, files[i]), path.join(dest, files[i]))
    }
  }
};

function copy (src, dest) {
  const oldFile = fs.createReadStream(src)
  const newFile = fs.createWriteStream(dest)
  oldFile.pipe(newFile)
};

install()
