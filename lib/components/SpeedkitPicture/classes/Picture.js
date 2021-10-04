import LoadingSpinner from '../../SpeedkitImage/classes/LoadingSpinner';
import SourceList from './SourceList';

export default class Picture {
  #title = '';
  #sources;
  #loadingSpinner = undefined;

  constructor ({ title, sources, loadingSpinner } = {}) {
    this.#title = title || this.#title;
    this.#sources = new SourceList(sources);
    if (loadingSpinner) {
      this.#loadingSpinner = new LoadingSpinner(loadingSpinner);
    }
  }

  get title () { return this.#title; }
  get sources () { return this.#sources; }
  get loadingSpinner () { return this.#loadingSpinner; }

  toJSON () {
    return {
      title: this.#title,
      sources: this.#sources,
      loadingSpinner: this.#loadingSpinner
    };
  }

  static create (...args) {
    return new this(...args);
  }
}
