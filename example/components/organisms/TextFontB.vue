<template>
  <div
    v-font="[
      $getFont('Montserrat Alternates', 400, 'normal'),
      $getFont('Montserrat Alternates', 700, 'normal', {selector: 'h2'}),
      $getFont('Montserrat Alternates', 400, 'italic', {selector: 'i'}),
      $getFont('Montserrat Alternates', 700, 'normal', {selector: 'b,strong'}),
      $getFont('Montserrat Alternates', 700, 'italic', {selector: 'i b,i strong'}),
      $getFont('Montserrat Alternates', 700, 'italic', {selector: 'b i, strong i'}),
      $getFont('Montserrat Alternates', 400, 'italic', {selector: 'i > b, i > strong'})
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
};
</script>

<style lang="postcss" scoped>
.component-text-font-b {
  padding: 0 10%;
}
</style>
