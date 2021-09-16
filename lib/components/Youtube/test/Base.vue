<template>
  <component
    :is="design"
    :title="title"
    :class="{ready, playing}"
    :show="ready"
    class="youtube"
  >
    <slot name="background" />
    <div class="player-wrapper">
      <div
        class="player"
        :style="playerStyle"
      >
        <div>
          <div>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAYAAAA7KqwyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABFJREFUeNpiYBgFo4AKACDAAAJJAAHkYY/SAAAAAElFTkSuQmCC">
            <!-- <svg width="16" height="9" viewbox="0 0 16 9" /> -->
            <iframe
              v-if="src"
              ref="player"
              :src="src"
              frameborder="0"
              allow="accelerometer; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              @load="onLoad"
            />
          </div>
        </div>
      </div>
    </div>
    <default-button @click="onInit">
      <default-picture class="poster" v-bind="pictureDataset" />
      <slot v-if="loading" name="loading-spinner" />
      <transition name="base-fade">
        <slot v-if="!ready && !loading" name="play" />
      </transition>
    </default-button>
    <div v-if="ready && muted" class="click-overlay" @click="onUnmute" />
  </component>
</template>

<script>
import DefaultPicture from '../picture';
import DefaultButton from '../button';
import ImageSourceList from '../Picture/classes/ImageSourceList';
import ImageSource from '../Image/classes/ImageSource';
import LoadingSpinner from '../Image/classes/LoadingSpinner';
import Picture from '../Picture/classes/Picture';
import { load, ready } from '../utils/loader';

export default {
  components: {
    DefaultPicture,
    DefaultButton
  },

  inheritAttrs: false,

  props: {
    design: {
      type: [String, Function],
      default () {
        return 'div';
      }
    },

    onBeforeInit: {
      type: Function,
      required: false,
      default: null
    },

    url: {
      type: String,
      required: true
    },

    playerStyle: {
      type: Array,
      default () {
        return [];
      }
    },

    title: {
      type: String,
      default () {
        return 'YouTube video player';
      }
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
      loading: false,
      ready: false,
      muted: true,
      landscape: false,
      playing: false,
      ratio: null
    };
  },

  head () {
    return {
      script: this.script
    };
  },

  computed: {
    pictureDataset () {
      return (new Picture({
        title: this.title,
        sources: new ImageSourceList({
          list: [
            new ImageSource({
              src: `/youtube/vi/${this.videoId}/maxresdefault.jpg`,
              sizes: { default: '100vw', xxs: '100vw', xs: '100vw', sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' },
              media: 'all'
            })
          ],
          options: { retina: true }
        }),
        loadingSpinner: this.loadingSpinner
      })).toJSON();
    }
  },

  mounted () {
    this.ratio = window.innerHeight / window.innerWidth;
  },

  destroyed () {
    youtube.remove(this.player);
  },

  methods: {

    reset () {
      this.src = null;
      this.ready = false;
      this.playing = false;
    },
    async onInit (e) {
      this.onBeforeInit && await this.onBeforeInit();

      this.loading = true;
      // eslint-disable-next-line no-secrets/no-secrets
      this.src = `https://www.youtube-nocookie.com/embed/${this.videoId}?rel=0&enablejsapi=1&autoplay=1&mute=1&modestbranding=1&showinfo=0&iv_load_policy=3&playsinline=1`;
      this.script = [load()];
    },

    onUnmute () {
      this.player.unMute();
      this.muted = false;
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
          onStateChange: e => this.onStateChange(youtube.YT, e.data)
        }
      });
    },

    onStateChange (YT, state) {
      if (state === YT.PlayerState.PLAYING) {
        this.playing = true;
      } else if (state === YT.PlayerState.ENDED || state === YT.PlayerState.PAUSED) {
        this.playing = false;
      }
      this.$emit('playing', this.playing);
    }

  }
};

class Youtube {
  YT;
  players = new Map();

  play (player) {
    this.pausePlayers();
    return player.playVideo();
  }

  pausePlayers (ignorePlayer) {
    Array.from(this.players.values())
      .filter(player => !ignorePlayer || (ignorePlayer && player !== ignorePlayer))
      .filter(player => player.getPlayerState)
      .forEach((player) => {
        player.getPlayerState() === global.YT.PlayerState.PLAYING && player.pauseVideo();
      });
  }

  async createPlayer (...args) {
    this.YT = await ready();
    const player = new this.YT.Player(...args);

    player.addEventListener('onStateChange', ({ data }) => {
      if (global.YT.PlayerState.PLAYING === data) {
        this.pausePlayers(player);
      }
    });

    this.add(player);
    return player;
  }

  add (player) {
    this.players.set(player.id, player);
  }

  remove (player) {
    this.players.delete(player.id);
    player.destroy();
  }
}
const youtube = new Youtube();

</script>

<style lang="postcss" scoped>
.youtube {
  position: relative;
  padding: 0;
  margin: 0;
}

button {
  display: block;
  width: 100%;

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
