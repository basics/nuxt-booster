<template>
  <base-youtube
    :style="[
      {'--screen-offset' : screenOffset},
      positions.origin.toCSSVars('position-origin'),
      dimensions.origin.toCSSVars('dimension-origin'),
      dimensions.viewport.toCSSVars('dimension-viewport')]"
    :class="{
      'player--fixed' : playerFixed,
      'player--translate' : playerTranslate,
      animate, 'animate--ready' : animateReady, 'animate--start' : animateStart}"
    v-bind="$attrs"
    v-on="$listeners"
    @ready="onReady"
    @playing="onPlaying"
  >
    <template #background>
      <span v-if="playing" class="debug">{{ screenOffset }} || {{ screenOffset_ }}</span>
      <span class="background" @transitionend="onTransitionEnd" />
    </template>
    <template #loading-spinner>
      <slot name="loading-spinner" />
    </template>
    <template #play>
      <slot name="play" />
    </template>
  </base-youtube>
</template>

<script>

import iosInnerHeight from 'ios-inner-height';

import { fromEvent } from 'rxjs';
import { ipoint } from '@js-basics/vector';
import BaseYoutube from '../Base';

export default {
  components: {
    BaseYoutube
  },
  inheritAttrs: false,
  data () {
    return {
      playing: false,
      landscape: false,
      iframe: null,
      player: null,

      positions: {
        origin: ipoint()
      },
      dimensions: {
        origin: ipoint(),
        viewport: ipoint()
      },

      // ###

      animate: false,
      animateStart: false,
      animateReady: false,
      playerFixed: false,
      playerTranslate: false,
      screenOffset: 0,
      screenOffset_: 0
    };
  },
  watch: {
    landscape (landscape) {
      if (!landscape && this.playing) {
        this.screenOffset = 0;
        // this.player.pauseVideo();
        this.animate = true;
        global.requestAnimationFrame(() => {
          // get positions and dimension without scroll
          this.getPositions();
          this.playerFixed = true;
          global.setTimeout(() => {
            global.requestAnimationFrame(() => {
              scrollToElement(this.$el, this.screenOffset);
              global.requestAnimationFrame(() => {
                // get positions and dimension with scroll
                this.getPositions();
                this.playerFixed = false;
                this.playerTranslate = true;
                global.requestAnimationFrame(() => {
                  this.animateReady = true;
                  global.requestAnimationFrame(() => {
                    this.animateStart = true;
                    this.playerTranslate = false;
                  });
                });
              });
            });
          }, 350);
        });
      }
      // else if (this.playing) {
      //   global.setTimeout(() => {
      //     global.scroll(0, -1);
      //   }, 350);
      // }
    }
  },
  mounted () {
    // this.screenOffset = 100;
    this.screenOffset_ = iosInnerHeight() - window.innerHeight;
    this.updateOrientation();

    fromEvent(global, 'orientationchange').subscribe(e => this.updateOrientation());
    // fromEvent(document.body, 'touchmove', { passive: false })
    //   .pipe(
    //     filter(() => this.landscape && this.playing)
    //   ).subscribe((e) => {
    //     e.preventDefault();
    //   });
  },
  methods: {

    onReady ({ iframe, player }) {
      this.iframe = iframe;
      this.player = player;
      this.getDimensions();
    },

    onPlaying (playing) {
      this.playing = playing;
      document.body.classList.toggle('youtube-fullscreen', playing);
    },

    onTransitionEnd () {
      this.reset();
    },

    getDimensions () {
      const clientRect = this.$el.getBoundingClientRect();
      this.getPositions(clientRect);
      this.dimensions = {
        origin: ipoint(clientRect.width, clientRect.height),
        viewport: ipoint(window.innerWidth, iosInnerHeight())
      };
    },

    getPositions (clientRect) {
      clientRect = clientRect || this.$el.getBoundingClientRect();
      this.positions = {
        origin: ipoint(clientRect.left, clientRect.top)
      };
    },

    reset () {
      this.animate = false;
      this.animateStart = false;
      this.animateReady = false;
      this.playerFixed = false;
      this.playerTranslate = false;
    },

    updateOrientation () {
      const orientation = ('orientation' in global.screen && global.screen.orientation.angle) || global.orientation;
      this.landscape = (orientation !== 0 && orientation !== 180);
    }

  }

};

const scrollToElement = (element, offset) => {
  const clientRect = element.getBoundingClientRect();
  const top = clientRect.top + global.scrollY - (((global.innerHeight - clientRect.height) / 2));
  global.scroll(0, top + offset);
};

</script>
<style lang="postcss">
  @media (orientation: landscape) {
    .youtube-fullscreen {
      background:
        repeating-linear-gradient(
          45deg,
          #606dbc,
          #606dbc 10px,
          #465298 10px,
          #465298 20px
        );
      & > * { visibility: hidden; }
    }
  }
</style>

<style lang="postcss" scoped>

.debug {
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 1000;
  color: white;
  background: black;
}

>>> {
  @nest .playing& {
    @media (orientation: landscape) {
      & .player {
        position: fixed;
        z-index: 101;
        visibility: visible;
      }

      & .click-overlay {
        position: fixed;
        top: 0;
      }

      & .background {
        display: block;
      }
    }

    /* @media (orientation: portrait) {
      & .player {
        & > div {
          width: 100%;

          & img {
            width: 100%;
            height: auto;
          }
        }

        position: fixed;
        top: calc(50% - ((var(--screen-offset) + (var(--dimension-origin-y) / 2)) * 1px));
        right: auto;
        bottom: auto;
        left: calc(var(--position-origin-x) * 1px);
        width: calc(var(--dimension-origin-x) * 1px);
        height: auto;
      }
    } */
  }
}

.player--translate {
  & >>> .player {
    transform: translate(0%, calc(((((var(--dimension-viewport-y) - var(--dimension-origin-y)) / 2) - var(--position-origin-y) - var(--screen-offset)) / var(--dimension-origin-y)) * 100%));
  }
}

.player--fixed {
  & >>> .player {
    position: fixed;
    top: calc(50% - ((var(--screen-offset) + (var(--dimension-origin-y) / 2)) * 1px));
    width: calc(var(--dimension-origin-x) * 1px);
    height: calc(var(--dimension-origin-y) * 1px);
    margin: 0 auto;

    /* transform: translateY(-50%) !important; */
  }
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: none;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  visibility: visible;
  background: black;
}

.animate {
  & .background {
    display: block;
    width: 100%;
    height: 100%;
    will-change: transform;
  }

  & >>> .player {
    z-index: 101;
    will-change: transform;
  }
}

.animate--ready {
  & .background {
    position: absolute;
    transform: scale(calc(var(--dimension-viewport-x) / var(--dimension-origin-x)), calc(var(--dimension-viewport-y) / var(--dimension-origin-y)));
    transform-origin: center calc(var(--position-origin-y) / (var(--dimension-viewport-y) - var(--dimension-origin-y)) * 100%);
  }
}

.animate--start {
  --duration: 0.2s;

  & >>> .player {
    transition: transform var(--duration)  ease-in;
    transform: translate(0, 0) !important;
  }

  & .background {
    transition: transform var(--duration) var(--duration)  ease-in, border-radius var(--duration)  var(--duration) ease-in;
    transform: scale(1, 1);
  }
}
</style>
