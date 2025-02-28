<template>
  <div>
    <base-headline :font="$getFont('Merriweather', 400, 'normal')">
      Merriweather - 400 - normal
    </base-headline>
    <base-headline :font="$getFont('Merriweather', 700, 'normal')">
      Merriweather - 700 - normal
    </base-headline>
    <base-headline :font="$getFont('Merriweather', 400, 'italic')">
      Merriweather - 400 - italic
    </base-headline>
    <base-headline :font="$getFont('Merriweather', 700, 'italic')">
      Merriweather - 700 - italic
    </base-headline>
  </div>
</template>

<script setup lang="ts">
import { useBoosterFonts } from '#imports';
import BaseHeadline from '@/components/base/Headline.vue';
const { $getFont } = useBoosterFonts();
</script>
