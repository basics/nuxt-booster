<template>
  <content-container
    v-font="[
      $getFont('Merriweather', 300, 'normal'),
      $getFont('Merriweather', 700, 'normal', { selector: 'h1,h2' }),
      $getFont('Merriweather', 300, 'italic', { selector: 'em' }),
      $getFont('Merriweather', 700, 'normal', { selector: 'strong' }),
      $getFont('Merriweather', 700, 'italic', {
        selector: 'em strong, strong em'
      })
    ]"
    :class="{ ready }"
    class="component-text-font-a"
  >
    <div>
      <content-headline>{{ headline }}</content-headline>
      <div v-html="content" />
    </div>
  </content-container>
</template>

<script setup lang="ts">
import { useBoosterFonts } from '#imports';
import { ref, onMounted } from 'vue';
import { ContentContainer, ContentHeadline } from 'vue-semantic-structure';

const { $getFont } = useBoosterFonts();
const ready = ref(false);

onMounted(() => {
  ready.value = true;
});

defineProps({
  headline: { type: String, default: 'Headline' },
  content: { type: String, default: 'Text' }
});
</script>

<style lang="postcss" scoped>
.component-text-font-a {
  padding: em(40px) 10%;

  & :deep(p) {
    line-height: 1.6;
  }
}
</style>
