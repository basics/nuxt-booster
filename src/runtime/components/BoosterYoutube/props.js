export default {
  autoplay: {
    type: Boolean,
    default: false
  },

  mute: {
    type: Boolean,
    default: undefined
  },

  url: {
    type: String,
    required: true
  },

  title: {
    type: String,
    required: true
  },

  host: {
    type: String,
    default: 'https://www.youtube-nocookie.com'
  },

  options: {
    type: Object,
    default() {
      return {};
    }
  },

  posterSources: {
    type: Array,
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
