<template>
  <div class="component-image-text">
    <experimental-picture v-bind="picture" />
    <div
      v-font="[
        $getFont('Comic Neue', 400, 'normal'),
        $getFont('Montserrat Alternates', 700, 'normal', {selector: 'h2'})]"
      class="text"
      v-html="text"
    />
  </div>
</template>

<script>
import ExperimentalPicture from 'nuxt-speedkit-components/experimental/ExperimentalPicture';
export default {
  components: {
    ExperimentalPicture
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
