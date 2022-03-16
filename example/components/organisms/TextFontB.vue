<template>
  <document-section
    class="component-text-font-b"
  >
    <div
      v-font="[
        $getFont('Montserrat Alternates', 300, 'normal'),
        $getFont('Montserrat Alternates', 700, 'normal', {selector: 'h2'}),
        $getFont('Montserrat Alternates', 300, 'italic', {selector: 'em'}),
        $getFont('Montserrat Alternates', 700, 'normal', {selector: 'strong'}),
        $getFont('Montserrat Alternates', 700, 'italic', {selector: 'em strong, strong em'})
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
.component-text-font-b {
  padding: 0 10%;

  & >>> p {
    line-height: 1.6;
  }
}
</style>
