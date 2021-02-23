<template>
  <div
    v-font="[
      $getFont('Merriweather', 300, 'normal'),
      $getFont('Merriweather', 700, 'normal', {selector: 'h2'}),
      $getFont('Merriweather', 300, 'italic', {selector: 'em'}),
      $getFont('Merriweather', 700, 'normal', {selector: 'strong'}),
      $getFont('Merriweather', 700, 'italic', {selector: 'em strong, strong em'})
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
