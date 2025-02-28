<template>
  <div>
    <base-headline :font="$getFont('Quicksand', 300, 'normal')">
      Quicksand - 300 - normal
    </base-headline>
    <base-headline :font="$getFont('Quicksand', 400, 'normal')">
      Quicksand - 400 - normal
    </base-headline>
    <base-headline :font="$getFont('Quicksand', 500, 'normal')">
      Quicksand - 500 - normal
    </base-headline>
    <base-headline :font="$getFont('Quicksand', 600, 'normal')">
      Quicksand - 600 - normal
    </base-headline>
    <base-headline :font="$getFont('Quicksand', 700, 'normal')">
      Quicksand - 700 - normal
    </base-headline>
  </div>
</template>

<script setup lang="ts">
import BaseHeadline from '@/components/base/Headline.vue';
import { useBoosterFonts } from '#imports';
const { $getFont } = useBoosterFonts();
</script>
