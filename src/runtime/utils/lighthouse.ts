import { LighthouseStats, State } from '../classes/lighthouse/Stats';
import LighthouseError from '../classes/lighthouse/Error';

let controller: AbortController | undefined;

export function getLighthouseMetrics(url: string) {
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
    .catch(e => {
      if (e.state) {
        return e;
      }
      throw getPendingStats();
    });
}

export function getPendingStats() {
  return new LighthouseError(State.PENDING);
}

function getAbortSignal() {
  if (controller) {
    controller.abort();
  }
  controller = new AbortController();
  return controller.signal;
}

async function handleResponse(response: Response) {
  if (!response.ok) {
    throw new LighthouseError(State.FAIL);
  }
  return new LighthouseStats(State.READY, await response.json());
}
