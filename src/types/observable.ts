import type IntersectionObservable from '../runtime/classes/intersection/Observable';

export interface ObservableOptions {
  root?: HTMLElement;
  rootMargin?: string;
  threshold?: number | number[];
  trackVisibility?: boolean;
  delay?: number;
}

export type ObservableHTMLElement = HTMLElement & {
  observables: Map<string, IntersectionObservable>;
};
