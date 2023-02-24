<template>
  <document-section class="component-stage" :level="-1">
    <speedkit-picture class="background" :title="picture.title" :alt="picture.alt" :sources="picture.sources" />
    <document-heading class="headline">
      <span
        v-font="[
          $getFont('Montserrat Alternates', 700, 'normal', { selector: '.content' }),
          $getFont('Merriweather', 300, 'italic', { selector: '.claim' })
        ]"
      >
        <span class="content">{{ content }}</span>
        <span class="claim">{{ claim }}</span>
      </span>
    </document-heading>

    <transition name="fade">
      <span v-if="ready" class="arrow"><svg-chevron-down /></span>
    </transition>

    <speedkit-image class="logo" v-bind="image" :loading-spinner="null" />
  </document-section>
</template>

<script>

import SpeedkitPicture from '#speedkit/components/SpeedkitPicture';
import SpeedkitImage from '#speedkit/components/SpeedkitImage';
import SvgChevronDown from '@/assets/svg/chevron-down.svg?vue-template';

export default {

  components: {
    SpeedkitPicture,
    SpeedkitImage,
    SvgChevronDown
  },

  props: {
    picture: { type: Object, required: true },
    image: {
      type: Object,
      default () {
        return {
          source: { src: '/icon.png', sizes: { default: '100vw', xxs: '100vw', xs: '100vw', sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' } },
          title: 'Image Title',
          alt: 'Image Alt'
        };
      }
    },
    content: { type: String, default () { return 'Headline'; } },
    claim: { type: String, default () { return 'Claim'; } }
  },

  data () {
    return {
      ready: false
    };
  },

  mounted () {
    this.ready = true;
  }

};

</script>

<style lang="postcss" scoped>
.component-stage {
  position: relative;
  min-height: 100vh;
  margin: 0;
  overflow: hidden;

  @supports (-webkit-touch-callout: none) {
    height: stretch;
  }

  & .logo {
    position: absolute;
    top: 0;
    left: 50%;
    width: em(96px);
    margin: em(20px);
    margin-left: calc(em(-96px) / 2);

    @media (orientation: landscape) {
      top: auto;
      right: 0;
      bottom: 0;
      left: auto;
    }
  }

  & .claim {
    display: block;
    font-size: em(16px);
    line-height: 2;
    text-transform: none;
  }

  & .content {
    display: block;
    font-size: em(30px);
    line-height: 2;

    @media (orientation: landscape) and (min-width: 992px) {
      font-size: em(40px);
    }
  }

  & .arrow {
    position: absolute;
    bottom: em(140px);

    @media (orientation: landscape) {
      bottom: em(20px);
    }

    left: 50%;
    transform: translateX(-50%);
  }

  & svg {
    width: 64px;
    animation-name: bounce-6;
    animation-duration: 2s;
    animation-timing-function: ease;
    animation-iteration-count: infinite;
  }

  & .background {
    aspect-ratio: auto;

    & :deep(img) {
      position: absolute;
      top: 0;
      left: 0;
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  & .headline {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: em(20px) 0;
    margin: 0;
    font-size: 1em;
    color: white;
    text-align: center;
    background: rgb(0 0 0 / 40%);

    @media (orientation: landscape) {
      position: absolute;
      top: 50px;
      right: 0;
      bottom: auto;
      left: auto;
      width: auto;
      padding: em(20px) em(40px);
    }
  }
}

@keyframes bounce-6 {
  0% {
    transform: scale(1, 1) translateY(0);
  }

  10% {
    transform: scale(1.1, 0.9) translateY(0);
  }

  30% {
    transform: scale(0.9, 1.1) translateY(-50%);
  }

  50% {
    transform: scale(1.05, 0.95) translateY(0);
  }

  57% {
    transform: scale(1, 1) translateY(-5%);
  }

  64% {
    transform: scale(1, 1) translateY(0);
  }

  100% {
    transform: scale(1, 1) translateY(0);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
