let libModule
try {
  libModule = require('./module')
} catch (error) {
  console.log(error)
  libModule = require('./lib/module')
}
module.exports = libModule
