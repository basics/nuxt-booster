export const READY = Symbol('ready');
export const FAIL = Symbol('fail');
export const PENDING = Symbol('pending');

const STATECOLORS = new Map([
  [READY, {
    pass: '#0CCE6B',
    average: '#FFA400',
    fail: '#FF4E42'
  }],
  [FAIL, '#FF4E42'],
  [PENDING, '#BDBDBD']
]);
export class LighthouseStats {
  constructor (state, data) {
    this.state = state;
    this.data = data || { lhrSlim: [] };
  }

  isPending () {
    return this.state === PENDING;
  }

  isFailed () {
    return this.state === FAIL;
  }

  isReady () {
    return this.state === READY;
  }

  getScoreOfMetric (metric) {
    return (this.data.lhrSlim.find(item => item.id === metric) || { score: -1 }).score;
  }

  getStateColorByMetric (metric) {
    switch (this.state) {
      case READY:
        return getColorByScore(this.getScoreOfMetric(metric));
      case FAIL:
        return STATECOLORS.get(FAIL);
      default:
        return STATECOLORS.get(PENDING);
    }
  }
}

function getColorByScore (score) {
  if (score >= 0.9) {
    return STATECOLORS.get(READY).pass;
  } else if (score >= 0.5) {
    return STATECOLORS.get(READY).average;
  } else {
    return STATECOLORS.get(READY).fail;
  }
}
