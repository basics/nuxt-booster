<template>
  <document-section class="component-stage" :level="-1">
    <speedkit-picture
      :title="picture.title"
      :alt="picture.alt"
      :sources="picture.sources"
    />
    <document-heading class="headline">
      <span
        v-font="[
          $getFont('Montserrat Alternates', 700, 'normal', {selector: '.content'}),
          $getFont('Merriweather', 300, 'italic', {selector: '.claim'})
        ]"
      >
        <span class="content">{{ content }}</span>
        <span class="claim">{{ claim }}</span>
      </span>
    </document-heading>

    <speedkit-image
      class="logo"
      v-bind="image"
      :loading-spinner="null"
    />
  </document-section>
</template>

<script>

import SpeedkitPicture from 'nuxt-speedkit/components/SpeedkitPicture';
import SpeedkitImage from 'nuxt-speedkit/components/SpeedkitImage';

export default {

  components: {
    SpeedkitPicture,
    SpeedkitImage
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
  }

};

</script>

<style lang="postcss" scoped>
.component-stage {
  position: relative;
  max-height: 100%;
  margin: 0;
  overflow: hidden;

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
</style>
