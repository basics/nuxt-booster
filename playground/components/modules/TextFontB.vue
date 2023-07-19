<template>
  <section class="component-text-font-b">
    <div
      v-font="[
        $getFont('Montserrat Alternates', 300, 'normal'),
        $getFont('Montserrat Alternates', 700, 'normal', { selector: 'h2' }),
        $getFont('Montserrat Alternates', 300, 'italic', { selector: 'em' }),
        $getFont('Montserrat Alternates', 700, 'normal', {
          selector: 'strong'
        }),
        $getFont('Montserrat Alternates', 700, 'italic', {
          selector: 'em strong, strong em'
        })
      ]"
    >
      <h2>{{ headline }}</h2>
      <div v-html="content" />
    </div>
  </section>
</template>

<script setup>
import useFonts from '#speedkit/composables/fonts';
const { $getFont } = useFonts();
defineProps({
  headline: { type: String, default: 'Headline' },
  content: { type: String, default: 'Text' }
});
</script>

<style lang="postcss" scoped>
.component-text-font-b {
  padding: 0 10%;

  & :deep(p) {
    line-height: 1.6;
  }
}
</style>
