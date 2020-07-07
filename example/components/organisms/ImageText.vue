<template>
  <organism-preview-container>
    <template v-slot:default>
      <LazyImage v-bind="image" />
    </template>
    <template v-slot:title>
      <p v-font="$fonts.getFont('Comic Neue', 700, 'normal')">
        Critical<br>LazyImage - SRCSET<br>Image Switch by >480 &amp; >768px
      </p>
    </template>
  </organism-preview-container>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      default () {
        return null
      }
    }
  }
}
</script>

<style lang="postcss">
  /* hello */
</style>
