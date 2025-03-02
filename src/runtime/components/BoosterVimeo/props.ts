import type { PictureSource } from '../../../module';

export default {
  url: {
    type: String,
    required: true
  },

  autoplay: {
    type: Boolean,
    default: false
  },

  mute: {
    type: Boolean,
    default: undefined
  },

  title: {
    type: String,
    required: false,
    default: null
  },

  options: {
    type: Object,
    default() {
      return {};
    }
  },

  posterSources: {
    type: Array<PictureSource>,
    default() {
      return [
        {
          src: undefined,
          media: 'all',
          sizes: {
            default: '100vw'
          }
        }
      ];
    }
  }
};
