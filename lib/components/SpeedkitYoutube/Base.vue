<template>
  <div
    :title="title"
    :class="{ready, playing}"
    :show="ready"
  >
    <slot name="background" />
    <iframe
      v-if="src"
      ref="player"
      class="player"
      :src="src"
      frameborder="0"
      allow="accelerometer; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      @load="onLoad"
    />
    <default-button @click="onInit">
      <speedkit-picture class="poster" v-bind="pictureDataset" />
      <slot v-if="loading" name="loading-spinner" />
      <transition name="base-fade">
        <slot v-if="!ready && !loading" name="play" />
      </transition>
    </default-button>
  </div>
</template>

<script>
import LoadingSpinner from 'nuxt-speedkit/components/SpeedkitImage/classes/LoadingSpinner';
import Picture from 'nuxt-speedkit/components/SpeedkitPicture/classes/Picture';
import SpeedkitPicture from 'nuxt-speedkit/components/SpeedkitPicture';
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

    url: {
      type: String,
      required: true
    },

    title: {
      type: String,
      required: true
    },

    loadingSpinner: {
      type: LoadingSpinner,
      default: undefined
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
      isTouchDevice: false
    };
  },

  head () {
    return {
      script: this.script
    };
  },

  computed: {
    pictureDataset () {
      return Picture.create({
        title: this.title,
        sources: [{
          src: `/youtube/vi/${this.videoId}/maxresdefault.jpg`,
          sizes: { default: '100vw', xxs: '100vw', xs: '100vw', sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' },
          media: 'all'
        }],
        loadingSpinner: this.loadingSpinner
      }).toJSON();
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
    onInit (e) {
      this.isTouchDevice = Number(e.pointerType === 'touch');
      this.loading = true;
      // eslint-disable-next-line no-secrets/no-secrets
      this.src = `https://www.youtube-nocookie.com/embed/${this.videoId}?rel=0&enablejsapi=1&autoplay=0&mute=${Number(this.isTouchDevice)}&modestbranding=1&showinfo=0&iv_load_policy=3&playsinline=1`;
      this.script = [load()];
    },

    async onLoad () {
      this.player = await youtube.createPlayer(this.$refs.player, {
        videoId: this.videoId,
        host: 'https://www.youtube-nocookie.com',
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

  /* &::before {
    display: block;
    padding-top: calc(9 / 16 * 100%);
    content: '';
  } */

  & iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

.base-fade-enter-active,
.base-fade-leave-active {
  transition: opacity 0.3s ease;
}

.base-fade-enter,
.base-fade-leave-to
/* .component-fade-lea
e-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
