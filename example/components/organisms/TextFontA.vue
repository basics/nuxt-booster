<template>
  <div
    v-font="[
      $getFont('Comic Neue', 400, 'normal'),
      $getFont('Comic Neue', 700, 'normal', {selector: 'h2'}),
      $getFont('Comic Neue', 400, 'italic', {selector: 'i'}),
      $getFont('Comic Neue', 700, 'normal', {selector: 'b,strong'}),
      $getFont('Comic Neue', 400, 'italic', {selector: 'i b,i strong'}),
      $getFont('Comic Neue', 700, 'italic', {selector: 'i > b, i > strong'})
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
