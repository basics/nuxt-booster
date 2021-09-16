import LoadingSpinner from 'nuxt-speedkit/components/Image/classes/LoadingSpinner';
import ImageSourceList from './ImageSourceList';

export default class Picture {
  #title;
  #sources;
  #loadingSpinner = undefined;

  constructor ({ title, sources, loadingSpinner }) {
    this.#title = title;
    this.#sources = new ImageSourceList(sources);
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
}
