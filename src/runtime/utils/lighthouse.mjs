import { LighthouseStats, READY, FAIL, PENDING } from '../classes/lighthouse/Stats';
import LighthouseError from '../classes/lighthouse/Error';

let controller = null;

export function getLighthouseMetrics (url) {
  return fetch('https://lighthouse-dot-webdotdevsite.appspot.com/lh/newaudit', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify({
      replace: true,
      save: true,
      url
    }),
    signal: getAbortSignal()
  })
    .then(handleResponse)
    .catch((e) => {
      if (e.state) {
        return e;
      }
      throw getPendingStats();
    });
}

export function getPendingStats () {
  return new LighthouseError(PENDING);
}

function getAbortSignal () {
  if (controller) {
    controller.abort();
  }
  controller = new AbortController();
  return controller.signal;
}

async function handleResponse (response) {
  if (!response.ok) {
    throw new LighthouseError(FAIL);
  }
  return new LighthouseStats(READY, await response.json());
}
