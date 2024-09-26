<template>
  <content-container :class="{ ready }" class="component-text-font-b">
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
      <content-headline>{{ headline }}</content-headline>
      <div v-html="content" />
    </div>
  </content-container>
</template>

<script setup>
import { useBoosterFonts } from '#imports';
import { ref, onMounted } from 'vue';
import ContentContainer from 'vue-semantic-structure/ContentContainer.vue';
import ContentHeadline from 'vue-semantic-structure/ContentHeadline.vue';

const { $getFont } = useBoosterFonts();
const ready = ref(false);
defineProps({
  headline: { type: String, default: 'Headline' },
  content: { type: String, default: 'Text' }
});
onMounted(() => {
  ready.value = true;
});
</script>

<style lang="postcss" scoped>
.component-text-font-b {
  padding: em(40px) 10%;

  & :deep(p) {
    line-height: 1.6;
  }
}
</style>
