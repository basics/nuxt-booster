const path = require('path')
const mkdirp = require('mkdirp')

exports.createDir = function (dir) {
  mkdirp.sync(path.dirname(dir))
  return dir
}
