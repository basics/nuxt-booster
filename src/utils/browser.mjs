import serialize from 'serialize-to-js';
import { getUserAgentRegex } from 'browserslist-useragent-regexp';

function getSupportedBrowserDetector (ignore) {
  if (ignore) {
    return JSON.stringify({ regex: '' });
  } else {
    return serialize({
      regex: getUserAgentRegex({
        allowHigherVersions: true,
        allowZeroSubversions: true
      })
    });
  }
}

export { getSupportedBrowserDetector };
