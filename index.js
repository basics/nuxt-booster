let libModule
try {
  libModule = require('./module')
} catch (error) {
  libModule = require('./lib/module')
}
module.exports = libModule
