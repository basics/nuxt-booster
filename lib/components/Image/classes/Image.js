import LoadingSpinner from 'nuxt-speedkit/components/Image/classes/LoadingSpinner';
import Source from './Source';

export default class Image {
  #title;
  #alt;
  #source;
  #loadingSpinner;

  constructor ({ alt, title, source, loadingSpinner } = {}) {
    this.#alt = alt || this.#alt;
    this.#title = title || this.#title;
    this.#source = new Source(source);
    if (loadingSpinner) {
      this.#loadingSpinner = new LoadingSpinner(loadingSpinner);
    }
  }

  get alt () { return this.#alt; }
  get title () { return this.#title; }
  get source () { return this.#source; }
  get loadingSpinner () { return this.#loadingSpinner; }

  toJSON () {
    return {
      alt: this.#alt,
      title: this.#title,
      source: this.#source,
      loadingSpinner: this.#loadingSpinner
    };
  }

  static create (...args) {
    return new this(...args);
  }
}
