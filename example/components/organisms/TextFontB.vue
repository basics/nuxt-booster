<template>
  <div
    v-font="[
      $getFont('Montserrat Alternates', 300, 'normal'),
      $getFont('Montserrat Alternates', 700, 'normal', {selector: 'h2'}),
      $getFont('Montserrat Alternates', 300, 'italic', {selector: 'em'}),
      $getFont('Montserrat Alternates', 700, 'normal', {selector: 'strong'}),
      $getFont('Montserrat Alternates', 700, 'italic', {selector: 'em strong, strong em'})
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
