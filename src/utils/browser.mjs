import serialize from 'serialize-to-js';
import { getUserAgentRegex } from '../supportedBrowserDetector.mjs'; // generate by prepare task

function getSupportedBrowserDetector(ignore) {
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
