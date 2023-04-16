
import serialize from 'serialize-to-js';
import { getUserAgentRegex } from '../../prepare/dist/supportedBrowserDetector.mjs';

function getSupportedBrowserDetector (ignore) {
  if (ignore) {
    return JSON.stringify({ regex: '' });
  } else {
    return serialize({ regex: getUserAgentRegex({ allowHigherVersions: true, allowZeroSubversions: true }) });
  }
}

export { getSupportedBrowserDetector };
