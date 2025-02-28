export type FontOption = {
  family: string;
  fallback: string[];
  variances: FontOptionVariance[];
  locals?: string[];
};

export type FontOptionVariance = {
  style: string;
  weight: string | number;
  sources: FontOptionVarianceSource[];
};

export type FontOptionVarianceSource = {
  src: string;
  type: string;
};

export type PreparedFontOption = {
  variances: PreparedFontOptionVariance[];
} & FontOption;

export type PreparedFontOptionVariance = {
  sources: PreparedFontOptionVarianceSource[];
  type: string;
  src: string;
  hash?: string;
} & FontOptionVariance;

export type PreparedFontOptionVarianceSource = {
  className: string;
  style: string;
} & FontOptionVarianceSource;
