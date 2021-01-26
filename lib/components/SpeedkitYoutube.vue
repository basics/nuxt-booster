<template>
  <intersection-observer :threshold="[1]" track-visibility :delay="350" @enter="onEnter">
    <div class="nuxt-speedkit__experimental__speedkit-youtube" :class="{ready: ready}">
      <div
        ref="youtube"
        loading="lazy"
      />
      <speedkit-picture v-bind="poster" class="poster" :class="{playing: playing}" @load="onLoad" />
    </div>
  </intersection-observer>
</template>

<script>
import YoutubePlayer from 'youtube-player';
import Deferred from 'nuxt-speedkit/classes/Deferred';
import IntersectionObserver from './abstracts/IntersectionObserver';
import SpeedkitPicture from './SpeedkitPicture';

export default {
  components: {
    IntersectionObserver,
    SpeedkitPicture
  },

  props: {
    id: {
      type: String,
      default () {
        return '';
      }
    },

    poster: {
      type: Object,
      default () {
        return {};
      }
    }
  },

  data () {
    return {
      ready: false,
      playing: false,
      deferred: new Deferred()
    };
  },

  methods: {

    onEnter () {
      this.deferred.resolve();
    },

    async onLoad () {
      console.log('JOOO');
      await this.deferred.promise;
      this.loadPlayer();
    },

    loadPlayer () {
      const player = YoutubePlayer(this.$refs.youtube, {
        host: 'https://www.youtube-nocookie.com',
        videoId: this.id,
        playerVars: { playsinline: 1, modestbranding: 1 }
      });

      player.on('ready', () => { this.ready = true; });
      player.on('stateChange', (e) => {
        if (e.data === 1) {
          this.playing = true;
        }
      });
    }
  }
};

</script>

<style lang="postcss" scoped>
div {
  position: relative;
  overflow: hidden;
}

.nuxt-speedkit__experimental__speedkit-youtube {
  width: 100%;

  & >>> iframe {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }

  & .poster {
    position: relative;
    pointer-events: none;

    @nest .ready& {
      mask-image: radial-gradient(50px at center, transparent 75%, black 100%);
    }

    &.playing {
      transform: scale(20);

      /* visibility: hidden; */
      transform-origin: center;
    }
  }
}
</style>
