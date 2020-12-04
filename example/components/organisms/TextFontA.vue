<template>
  <div
    v-font="[
      $fonts.getFont('Comic Neue', 400, 'normal'),
      $fonts.getFont('Comic Neue', 700, 'normal', {selector: 'h2'}),
      $fonts.getFont('Comic Neue', 400, 'italic', {selector: 'i'}),
      $fonts.getFont('Comic Neue', 700, 'normal', {selector: 'b,strong'}),
      $fonts.getFont('Comic Neue', 400, 'italic', {selector: 'i b,i strong'}),
      $fonts.getFont('Comic Neue', 700, 'italic', {selector: 'i > b, i > strong'})
    ]"
    class="component-text-font-a"
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

<style lang="postcss" scoped>
.component-text-font-a {
  padding: 0 10%;
}
</style>
