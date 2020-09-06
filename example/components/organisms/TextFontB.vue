<template>
  <div
    v-font="[
      $fonts.getFont('Comic Neue', 400, 'normal'),
      $fonts.getFont('Lobster Two', 700, 'normal').addSelector('h2'),
      $fonts.getFont('Lobster Two', 400, 'italic').addSelector('i'),
      $fonts.getFont('Lobster Two', 700, 'normal').addSelector('b'),
      $fonts.getFont('Lobster Two', 700, 'italic').addSelector('i b'),
      $fonts.getFont('Lobster Two', 700, 'italic').addSelector('b i')
    ]"
    class="component-text-font-b"
    v-html="text"
  />
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Text'
    }
  }
}
</script>

<style lang="postcss">
.component-text-font-b {
  padding: 0 10%;
}
</style>
