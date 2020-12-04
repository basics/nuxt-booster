<template>
  <div
    v-font="[
      $fonts.getFont('Montserrat Alternates', 400, 'normal'),
      $fonts.getFont('Montserrat Alternates', 700, 'normal', {selector: 'h2'}),
      $fonts.getFont('Montserrat Alternates', 400, 'italic', {selector: 'i'}),
      $fonts.getFont('Montserrat Alternates', 700, 'normal', {selector: 'b,strong'}),
      $fonts.getFont('Montserrat Alternates', 700, 'italic', {selector: 'i b,i strong'}),
      $fonts.getFont('Montserrat Alternates', 700, 'italic', {selector: 'b i, strong i'}),
      $fonts.getFont('Montserrat Alternates', 400, 'italic', {selector: 'i > b, i > strong'})
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

<style lang="postcss" scoped>
.component-text-font-b {
  padding: 0 10%;
}
</style>
