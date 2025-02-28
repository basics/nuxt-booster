/* eslint-disable security/detect-object-injection */
export const READY = Symbol('ready');
export const FAIL = Symbol('fail');
export const PENDING = Symbol('pending');

const STATE_COLORS = {
  [READY]: {
    pass: '#0CCE6B',
    average: '#FFA400',
    fail: '#FF4E42'
  },
  [FAIL]: '#FF4E42',
  [PENDING]: '#BDBDBD'
};

type Stats = {
  lhrSlim: { id: string; score: number }[];
};
export class LighthouseStats {
  state: symbol;
  data: Stats;
  constructor(state: symbol, data?: Stats) {
    this.state = state;
    this.data = data || { lhrSlim: [] };
  }

  isPending() {
    return this.state === PENDING;
  }

  isFailed() {
    return this.state === FAIL;
  }

  isReady() {
    return this.state === READY;
  }

  getScoreOfMetric(metric: string) {
    return (this.data.lhrSlim.find(item => item.id === metric) || { score: -1 })
      .score;
  }

  getStateColorByMetric(metric: string) {
    switch (this.state) {
      case READY:
        return getColorByScore(this.getScoreOfMetric(metric));
      case FAIL:
        return STATE_COLORS[FAIL];
      default:
        return STATE_COLORS[PENDING];
    }
  }
}

function getColorByScore(score: number) {
  if (score >= 0.9) {
    return STATE_COLORS[READY].pass;
  } else if (score >= 0.5) {
    return STATE_COLORS[READY].average;
  } else {
    return STATE_COLORS[READY].fail;
  }
}
