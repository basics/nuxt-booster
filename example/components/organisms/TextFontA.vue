<template>
  <document-section
    class="component-text-font-a"
  >
    <div
      v-font="[
        $getFont('Merriweather', 300, 'normal'),
        $getFont('Merriweather', 700, 'normal', {selector: 'h1,h2'}),
        $getFont('Merriweather', 300, 'italic', {selector: 'em'}),
        $getFont('Merriweather', 700, 'normal', {selector: 'strong'}),
        $getFont('Merriweather', 700, 'italic', {selector: 'em strong, strong em'})
      ]"
    >
      <document-heading>{{ headline }}</document-heading>
      <div v-html="content" />
    </div>
  </document-section>
</template>

<script>
export default {
  props: {
    headline: { type: String, default: 'Headline' },
    content: { type: String, default: 'Text' }
  }
};
</script>

<style lang="postcss" scoped>
.component-text-font-a {
  padding: 0 10%;

  & >>> p {
    line-height: 1.6;
  }
}
</style>
