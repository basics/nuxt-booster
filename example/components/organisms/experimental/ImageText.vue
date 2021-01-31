<template>
  <div
    v-font="[
      $getFont('Comic Neue', 400, 'normal'),
      $getFont('Montserrat Alternates', 700, 'normal', {selector: 'h2'})]"
    class="component-image-text"
  >
    <speedkit-picture v-bind="picture" />
    <div class="text" v-html="text" />
  </div>
</template>

<script>
import SpeedkitPicture from 'nuxt-speedkit-components/experimental/SpeedkitPicture';
export default {
  components: {
    SpeedkitPicture
  },
  props: {
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

    & > * {
      width: 50%;
    }
  }

  & .text {
    padding: 2%;
  }
}
</style>
