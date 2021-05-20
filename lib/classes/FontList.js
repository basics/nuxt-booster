import Font from './Font';

export default class FontList {
  constructor (list = []) {
    this.list = list.map((item) => {
      item.variances = item.variances.map((variance) => {
        return Object.assign({
          style: 'normal',
          weight: 400
        }, variance);
      });
      return item;
    });
  }

  getFont (family, weight = 400, style = 'normal', options = { selector: null, media: null }) {
    const config = this.list.find(definition => definition.family === family);
    if (!config) {
      throw new Error(`font family ${family} not found, please define in module options`);
    }
    return getFontVariance(config, weight, style, options);
  }
}

function getFontVariance (config, weight, style, options = { selector: null, media: null }) {
  const variance = config.variances.find(variance => variance.weight === weight && variance.style === style);
  if (!variance) {
    throw new Error(`font variance with ${weight} and ${style} for font-family ${config.family} not found`);
  }
  const { src, type } = variance;
  return new Font(config.family, { src, type, fallbackFamily: config.fallback }, options, weight, style);
}
