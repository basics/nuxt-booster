export interface FontOption {
  family: string;
  fallback: string[];
  variances: FontOptionVariance[];
  locals?: string[];
}

export interface FontOptionVariance {
  style: string;
  weight: string | number;
  sources: FontOptionVarianceSource[];
}

export interface FontOptionVarianceSource {
  src: string;
  type: string;
}

export interface PreparedFontOption extends FontOption {
  variances: PreparedFontOptionVariance[];
}

export interface PreparedFontOptionVariance extends FontOptionVariance {
  sources: PreparedFontOptionVarianceSource[];
  type: string;
  src: string;
  hash?: string;
}

export interface PreparedFontOptionVarianceSource extends FontOptionVarianceSource {
  className: string;
  style: string;
}
