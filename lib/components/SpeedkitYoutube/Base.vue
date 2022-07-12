<template>
  <div
    :class="{ready, playing}"
    :show="ready"
  >
    <iframe
      v-if="src"
      ref="player"
      :title="title"
      class="player"
      :src="src"
      frameborder="0"
      allow="accelerometer; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      @load="onLoad"
    />
    <default-button @click="onInit">
      <speedkit-picture
        class="poster"
        v-bind="pictureDataset"
        :title="title"
      />
      <slot v-if="loading" name="loading-spinner" />
      <slot v-if="!ready && !loading" name="play" />
    </default-button>
  </div>
</template>

<script>
import LoadingSpinner from 'nuxt-speedkit/components/SpeedkitImage/classes/LoadingSpinner';
import SpeedkitPicture from 'nuxt-speedkit/components/SpeedkitPicture';
import { isTouchSupported } from 'nuxt-speedkit/utils/browser';
import DefaultButton from '../Button';
import { load } from './utils/loader';
import Youtube from './classes/Youtube';

const youtube = new Youtube();

export default {
  components: {
    SpeedkitPicture,
    DefaultButton
  },

  inheritAttrs: false,

  props: {

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
      default () {
        return {};
      }
    },

    posterLoadingSpinner: {
      type: LoadingSpinner,
      default: undefined
    },

    posterSizes: {
      type: Object,
      default () {
        return { default: '100vw', xxs: '100vw', xs: '100vw', sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' };
      }
    }
  },

  data () {
    return {
      src: null,
      videoId: new URL(this.url).searchParams.get('v'),
      script: [],
      player: null,
      ready: false,
      loading: false,
      playing: false,
      landscape: false,
      isTouchDevice: isTouchSupported()
    };
  },

  head () {
    return {
      script: this.script
    };
  },

  computed: {
    pictureDataset () {
      return {
        formats: this.$speedkit.targetFormats,
        title: this.title,
        sources: [{
          src: `/youtube/vi/${this.videoId}/maxresdefault.jpg`,
          sizes: this.posterSizes,
          media: 'all'
        }],
        loadingSpinner: this.posterLoadingSpinner
      };
    }
  },

  mounted () {
    if (this.autoplay) {
      this.onInit();
    }
  },

  destroyed () {
    this.player && youtube.remove(this.player);
  },

  methods: {

    reset () {
      this.src = null;
      this.ready = false;
      this.playing = false;
    },
    onInit () {
      this.loading = true;

      const params = {
        rel: 0,
        enablejsapi: 1,
        autoplay: 0,
        modestbranding: 1,
        showinfo: 0,
        iv_load_policy: 3,
        ...this.options,
        playsinline: 1,
        mute: Number(this.isTouchDevice) || Number(this.mute)
      };

      // eslint-disable-next-line no-secrets/no-secrets
      this.src = `${this.host}/embed/${this.videoId}?` + Object.entries(params).map(([name, value]) => `${name}=${value}`).join('&');
      this.script = [load()];
    },

    async onLoad () {
      this.player = await youtube.createPlayer(this.$refs.player, {
        videoId: this.videoId,
        host: this.host,
        events: {
          onReady: (e) => {
            e.target.mute();
            youtube.play(e.target);
            this.loading = false;
            this.ready = true;
            this.$emit('ready', {
              iframe: e.target.getIframe(),
              player: this.player
            });
          },
          onStateChange: e => this.onPlayerStateChange(youtube.api, e.data)
        }
      });
    },

    onPlayerStateChange (YT, state) {
      if (state === YT.PlayerState.PLAYING) {
        this.playing = true;
      } else if (state === YT.PlayerState.ENDED || state === YT.PlayerState.PAUSED) {
        this.playing = false;
      }
      this.$emit('playing', this.playing);
    }

  }
};

</script>

<style lang="postcss" scoped>
/*! purgecss start ignore */

div {
  position: relative;
  width: 100%;
  padding: 0;
  margin: 0;
}

button {
  display: block;
  width: 100%;
  cursor: pointer;

  @nest .ready & {
    pointer-events: none;
    visibility: hidden;
  }
}

.click-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: auto;
}

.player {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: auto;
  background: black;

  & > div {
    position: relative;
    width: min-content;
    height: 100%;
  }

  & svg,
  & img {
    display: block;
    width: auto;
    height: 100%;
  }

  & iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

/*! purgecss end ignore */
</style>
