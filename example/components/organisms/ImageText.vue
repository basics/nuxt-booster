<template>
  <div class="component-image-text">
    <lazy-picture v-bind="picture" />
    <div
      v-font="[
        $fonts.getFont('Comic Neue', 400, 'normal'),
        $fonts.getFont('Montserrat Alternates', 700, 'normal').addSelector('h2')]"
      class="text"
      v-html="text"
    />
  </div>
</template>

<script>
import LazyPicture from 'nuxt-speedkit/lib/components/LazyPicture'
export default {
  components: {
    LazyPicture
  },
  props: {
    picture: { type: Object, default () { return {} } },
    text: { type: String, default () { return 'Headline' } }
  }
}
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
