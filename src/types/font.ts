export type FontOption = {
  family: string;
  fallback: string[];
  variances: FontVarianceOption[];
  locals?: string[];
};

export type FontVarianceOption = {
  src: string;
  type: string;
  style: string;
  weight: string | number;
  sources: FontVarianceSourceOption[];
  hash?: string;
};

export type FontVarianceSourceOption = {
  className: string;
  style: string;
  src: string;
  type: string;
};
