enum State {
  READY,
  FAIL,
  PENDING
}

const STATE_COLORS = {
  [State.READY]: {
    pass: '#0CCE6B',
    average: '#FFA400',
    fail: '#FF4E42'
  },
  [State.FAIL]: '#FF4E42',
  [State.PENDING]: '#BDBDBD'
};

type Stats = {
  lhrSlim: { id: string; score: number }[];
};
export class LighthouseStats {
  state: State;
  data: Stats;
  constructor(state: State, data?: Stats) {
    this.state = state;
    this.data = data || { lhrSlim: [] };
  }

  isPending() {
    return this.state === State.PENDING;
  }

  isFailed() {
    return this.state === State.FAIL;
  }

  isReady() {
    return this.state === State.READY;
  }

  getScoreOfMetric(metric: string) {
    return (this.data.lhrSlim.find(item => item.id === metric) || { score: -1 })
      .score;
  }

  getStateColorByMetric(metric: string) {
    switch (this.state) {
      case State.READY:
        return getColorByScore(this.getScoreOfMetric(metric));
      case State.FAIL:
        return STATE_COLORS[State.FAIL];
      default:
        return STATE_COLORS[State.PENDING];
    }
  }
}

function getColorByScore(score: number) {
  if (score >= 0.9) {
    return STATE_COLORS[State.READY].pass;
  } else if (score >= 0.5) {
    return STATE_COLORS[State.READY].average;
  } else {
    return STATE_COLORS[State.READY].fail;
  }
}
