
const serialize = require('serialize-to-js');

async function getSupportedBrowserDetector (ignore) {
  const { getUserAgentRegex } = await import('browserslist-useragent-regexp');
  if (ignore) {
    return JSON.stringify({ regex: '' });
  } else {
    return serialize({ regex: getUserAgentRegex({ allowHigherVersions: true, allowZeroSubversions: true }) });
  }
}

module.exports = { getSupportedBrowserDetector };
