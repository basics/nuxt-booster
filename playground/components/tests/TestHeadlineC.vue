<template>
  <base-headline :font="$getFont('Quicksand')">
    <slot />
  </base-headline>
</template>

<script setup>
import BaseHeadline from '@/components/base/Headline';
const { $getFont } = useBoosterFonts();
</script>
