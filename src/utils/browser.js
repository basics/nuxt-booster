import { getUserAgentRegex } from 'browserslist-useragent-regexp';

function getSupportedBrowserDetector(ignore) {
  if (ignore) {
    return JSON.stringify({ regex: '' });
  } else {
    return JSON.stringify({
      regex: 'value'
    }).replace(
      '"value"',
      `new RegExp(${getUserAgentRegex({
        allowHigherVersions: true,
        allowZeroSubversions: true
      })})`
    );
  }
}

export { getSupportedBrowserDetector };
