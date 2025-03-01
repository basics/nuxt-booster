import type { FontFamily, FontStyle, FontWeigth } from '#build/types/font';
import type {
  FontOptionVariance,
  DirectiveGetFontOptions,
  PreparedFontOption
} from './../../types';
import Font from './Font';

export default class FontList {
  list: PreparedFontOption[];
  constructor(list: PreparedFontOption[] = []) {
    this.list = list.map(item => {
      item.variances = item.variances.map(variance => {
        return {
          ...({
            style: 'normal',
            weight: 400
          } as FontOptionVariance),
          ...variance
        };
      });
      return item;
    });
  }

  getFont(
    family: FontFamily,
    weight?: FontWeigth,
    style?: FontStyle,
    options?: DirectiveGetFontOptions
  ) {
    weight = weight || 400;
    style = style || 'normal';
    options = options || { selector: undefined, media: undefined };
    const config = this.list.find(definition => definition.family === family);
    if (!config) {
      throw new Error(
        `font family ${family} not found, please define in module options`
      );
    }
    return getFontVariance(config, weight, style, options);
  }
}

function getFontVariance(
  config: PreparedFontOption,
  weight?: string | number,
  style?: string,
  options: { selector?: string; media?: string } = {
    selector: undefined,
    media: undefined
  }
) {
  const variance = config.variances.find(
    variance => variance.weight === weight && variance.style === style
  );
  if (!variance) {
    throw new Error(
      `font variance with ${weight} and ${style} for font-family ${config.family} not found`
    );
  }
  const { src, type } = variance;
  return new Font(
    config.family,
    { src, type, fallbackFamily: config.fallback },
    options,
    weight,
    style
  );
}
