let libModule
try {
  libModule = require('./module')
} catch (error) {
  try {
    libModule = require('./lib/module')
  } catch (error) {
    console.log(error)
  }
}
module.exports = libModule
