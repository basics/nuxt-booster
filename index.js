let libModule;
try {
  libModule = require('./module');
} catch (err) {
  try {
    libModule = require('./lib/module');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
}
module.exports = libModule;
