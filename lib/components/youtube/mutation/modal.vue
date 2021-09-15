<template>
  <base-youtube
    class="youtube-modal"
    :style="[
      positions.origin.toCSSVars('position-origin'),
      dimensions.origin.toCSSVars('dimension-origin'),
      dimensions.viewport.toCSSVars('dimension-viewport')]"
    :player-style="[
      positions.origin.toCSSVars('position-origin'),
      dimensions.origin.toCSSVars('dimension-origin'),
      dimensions.viewport.toCSSVars('dimension-viewport')]"
    :class="{
      'animate--start': animationStates.start,
      'animate--hide': animationStates.hide,
      'animate--hide-start': animationStates.hideStart
    }"
    v-bind="$attrs"
    :on-before-init="onBeforeInit"
    v-on="$listeners"
    @ready="onReady"
    @playing="onPlaying"
  >
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
import BaseYoutube from '../base';

const DEFAULT_SCROLL_POS = 100;

export default {
  components: {
    BaseYoutube
  },
  inheritAttrs: false,
  data () {
    return {
      isIos: false,
      playing: false,
      landscape: false,
      iframe: null,
      player: null,
      playerEl: null,

      positions: {
        origin: ipoint()
      },
      dimensions: {
        origin: ipoint(),
        viewport: ipoint()
      },
      opened: false,
      animationStates: {
        start: false,
        hide: false,
        hideStart: false
      }
    };
  },
  watch: {
    opened (opened) {
      document.body.classList.toggle('youtube-fullscreen', opened);
    },
    playing (playing) {
      if (playing && this.opened) {
        global.scroll(0, DEFAULT_SCROLL_POS);
        this.animationStates.start = false;
      } else if (!playing && this.opened && !this.landscape) {
        console.log('neee', playing);
        scrollToElement(this.$el);
        this.endAnimation();
      }
    },
    landscape (landscape) {
      if (!landscape && this.opened) {
        global.setTimeout(() => {
          global.requestAnimationFrame(() => {
            scrollToElement(this.$el);
            this.endAnimation();
          });
        }, 350);
      } else if (landscape) {
        global.setTimeout(() => {
          global.scroll(0, DEFAULT_SCROLL_POS);
        }, 350);
      }
    }
  },
  mounted () {
    this.isIos = detectIOS();
    this.updateOrientation();
    fromEvent(global, 'orientationchange').subscribe(e => this.updateOrientation());
  },
  methods: {

    onBeforeInit () {
      return new Promise((resolve) => {
        const clientRect = this.$el.getBoundingClientRect();
        this.updatePositions(clientRect);
        this.updateDimensions(clientRect);
        this.startAnimation().then(resolve);
      });
    },

    endAnimation () {
      const el = this.playerEl;
      return new Promise((resolve) => {
        this.opened = false;
        el.addEventListener('transitionend', (e) => {
          this.$el.querySelector('.player-wrapper').append(el);
          this.$children[0].reset();
          el.removeAttribute('id');
          el.classList.remove('youtube-modal--prepare', 'youtube-modal--hide');

          this.$el.querySelector('button').addEventListener('transitionend', (e) => {
            this.animationStates.hideStart = false;
            this.animationStates.hide = false;
            this.playing = false;
            resolve();
          }, { once: true });
          this.animationStates.hideStart = true;
        }, { once: true });
        this.updatePositions();
        this.animationStates.hide = true;
        this.$nextTick(() => {
          el.classList.add('youtube-modal--hide');
        });
      });
    },

    startAnimation () {
      return new Promise((resolve) => {
        this.playerEl = this.$el.querySelector('.player');
        const el = this.playerEl;

        this.$el.querySelector('button').addEventListener('transitionend', (e) => {
          this.$nextTick(() => {
            document.body.prepend(el);
            global.requestAnimationFrame(() => {
              el.setAttribute('id', 'youtube-modal-sticky');
              el.classList.toggle('ios', this.isIos);
              el.children[0].addEventListener('transitionend', (e) => {
                this.opened = true;
                resolve();
              }, { once: true });
              global.setTimeout(() => {
                el.classList.add('youtube-modal--prepare');
              }, 200);
            });
          });
        }, { once: true });
        this.animationStates.start = true;
      });
    },

    onReady ({ iframe, player }) {
      this.iframe = iframe;
      this.player = player;
    },

    onPlaying (playing) {
      this.playing = playing;
    },

    onTransitionEnd () {
      this.reset();
    },

    updateDimensions () {
      const clientRect = this.$el.getBoundingClientRect();
      this.dimensions = {
        origin: ipoint(clientRect.width, clientRect.height),
        viewport: ipoint(window.innerWidth, iosInnerHeight())
      };
    },

    updatePositions (clientRect) {
      clientRect = clientRect || this.$el.getBoundingClientRect();
      this.positions = {
        origin: ipoint(clientRect.left, clientRect.top)
      };
    },

    updateOrientation () {
      const orientation = ('orientation' in global.screen && global.screen.orientation.angle) || global.orientation;
      this.landscape = (orientation !== 0 && orientation !== 180);
    }

  }

};

function detectIOS () {
  return [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ].includes(navigator.platform) ||
  // iPad on iOS 13 detection
  (navigator.userAgent.includes('Mac') && 'ontouchend' in document);
}

const scrollToElement = (element) => {
  const clientRect = element.getBoundingClientRect();
  const top = clientRect.top + global.scrollY - (((global.innerHeight - clientRect.height) / 2));
  global.scroll(0, top);
};
</script>

<style lang="postcss">

:root {
  --youtube-modal-duration: 0.6s;
}

.player#youtube-modal-sticky {
  position: fixed;
  top: 0;
  bottom: auto;
  z-index: 10;
  height: 0;
  margin: 0;
  visibility: visible;

  /* opacity: 0.5; */

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: calc(var(--dimension-viewport-y) * 1px);

    @media (orientation: landscape) {
      height: calc(var(--dimension-viewport-x) * 1px);
    }

    & img {
      display: none;
    }

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: '';
      background: rgba(0, 0, 0, 1);
      opacity: 0;
    }

    & > div {
      position: relative;
      width: calc(var(--dimension-origin-x) * 1px);

      &::before {
        display: block;
        padding-top: calc(9 / 16 * 100%);
        content: '';
      }

      @media (orientation: landscape) {
        width: auto;
        height: 100%;

        &::before {
          display: none;
        }

        & img {
          display: block;
        }
      }
    }

    & iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  &.ios {
    position: sticky;

    & > div {
      height: 100vh;

      @media (orientation: landscape) {
        height: 100vh;
      }
    }
  }

  &.youtube-modal--prepare {
    & > div {
      &::before {
        opacity: 1;
        transition: opacity var(--youtube-modal-duration) linear;
      }
    }
  }

  &.youtube-modal--hide {
    opacity: 0;
    transition: opacity var(--youtube-modal-duration) var(--youtube-modal-duration) linear;
  }
}
</style>

<style lang="postcss">
  @media (orientation: landscape) {
    .youtube-fullscreen {
      background: #000;
      & > * { visibility: hidden; }
    }
  }
</style>

<style lang="postcss" scoped>

.youtube-modal {
  background: rgba(0, 0, 0, 1);

  &::before {
    display: block;
    padding-top: calc(9 / 16 * 100%);
    content: '';
  }
}

>>> {
  & button {
    position: absolute;
    top: 0;
    left: 0;

    @nest .ready & {
      visibility: visible !important;
    }
  }

  & iframe {
    display: none;
  }
}

.animate--start {
  --duration: 0.3s;

  & >>> button {
    /* position: absolute;
  top: 0;
  left: 0; */
    z-index: 100;

    /* width: 100%;
  height: 100%; */
    pointer-events: none;
    transition: transform var(--youtube-modal-duration)  ease-in;
    transform: translate(0%, calc(((((var(--dimension-viewport-y) - var(--dimension-origin-y)) / 2) - var(--position-origin-y) ) / var(--dimension-origin-y)) * 100%));
  }
}

.animate--hide {
  & >>> button {
    z-index: 100;
    pointer-events: none;
    transform: translate(0%, calc(((((var(--dimension-viewport-y) - var(--dimension-origin-y)) / 2) - var(--position-origin-y) ) / var(--dimension-origin-y)) * 100%));
  }
}

.animate--hide-start {
  --duration: 0.3s;

  & >>> button {
    z-index: 100;
    transition: transform var(--youtube-modal-duration) ease-in;
    transform: translate(0, 0);
  }
}
</style>
