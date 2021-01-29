<template>
  <div
    v-font="[
      $getFont('Comic Neue', 400, 'normal'),
      $getFont('Comic Neue', 700, 'normal', {selector: 'h2'}),
      $getFont('Comic Neue', 400, 'italic', {selector: 'em'}),
      $getFont('Comic Neue', 700, 'normal', {selector: 'strong'}),
      $getFont('Comic Neue', 700, 'italic', {selector: 'em strong, strong em'})
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
};
</script>

<style lang="postcss" scoped>
.component-text-font-a {
  padding: 0 10%;
}
</style>
