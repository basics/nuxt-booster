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

  getFont (family, weight = 400, style = 'normal', options) {
    const config = this.list.find(definition => definition.family === family);
    if (!config) {
      throw new Error(`font family ${family} not found, please define in module options`);
    }
    return getFontVariance(config, weight, style, options);
  }
}

function getFontVariance (config, weight, style, options = { selector: null, media: null }) {
  const { src, type } = config.variances.find(variance => variance.weight === weight && variance.style === style);
  return new Font(config.family, weight, style, { src, type, fallbackFamily: config.fallback }, options);
}
