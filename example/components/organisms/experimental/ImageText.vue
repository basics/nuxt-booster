<template>
  <div
    v-font="[
      $getFont('Merriweather', 300, 'normal'),
      $getFont('Montserrat Alternates', 700, 'normal', {selector: 'h2'})]"
    class="component-image-text"
    :class="{['component-image-text--right']: alignRight}"
  >
    <div class="image">
      <speedkit-picture v-bind="picture" />
    </div>
    <div class="text" v-html="text" />
  </div>
</template>

<script>
import SpeedkitPicture from 'nuxt-speedkit/components/experimental/SpeedkitPicture';
export default {
  components: {
    SpeedkitPicture
  },
  props: {
    alignRight: { type: Boolean, default () { return false; } },
    picture: { type: Object, default () { return {}; } },
    text: { type: String, default () { return 'Headline'; } }
  }
};
</script>

<style lang="postcss" scoped>
.component-image-text {
  & >>> img {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;

    & > * {
      width: 50%;
    }
  }

  & .text {
    padding: 2%;
  }

  & .image {
    & > * {
      width: 80%;
      margin: 0 auto;
      box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.4);

      @media (prefers-color-scheme: dark) {
        box-shadow: 0 0 25px 0 rgba(255, 255, 255, 0.4);
      }
    }
  }

  &.component-image-text--right {
    & > * {
      &:nth-child(1) {
        order: 2;
      }

      &:nth-child(2) {
        order: 1;
      }
    }
  }
}
</style>
