import { toHashHex } from '../../../utils/string';

export default class LoadingSpinner {
  #dataUri;
  #size;
  #backgroundColor;

  constructor ({ dataUri, size = '100px', backgroundColor = 'grey' }) {
    this.#dataUri = dataUri;
    this.#size = size;
    this.#backgroundColor = backgroundColor;
  }

  get className () {
    return `spinner-${toHashHex(this.#dataUri)}`;
  }

  toJSON () {
    return {
      dataUri: this.#dataUri,
      size: this.#size,
      backgroundColor: this.#backgroundColor
    };
  }

  get style () {
    return `
      .${this.className}.loading {
        background-image: url(${this.#dataUri});
        background-repeat: no-repeat;
        background-position: center;
        background-size: ${this.#size};
        background-color: ${this.#backgroundColor};
      }
    `;
  }
}
