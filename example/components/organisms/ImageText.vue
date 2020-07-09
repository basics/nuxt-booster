<template>
  <organism-preview-container>
    <template v-slot:default>
      <LazyImage v-bind="image" />
    </template>
    <template v-slot:title>
      <div v-font="$fonts.getFont('Comic Neue', 700, 'normal').bySelector('p')">
        <p>
          Critical<br>LazyImage - SRCSET<br>Image Switch by >480 &amp; >768px
        </p>
      </div>
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
