<template>
  <div>
    <base-headline :font="['Merriweather', 400, 'normal']">
      Merriweather - 400 - normal
    </base-headline>
    <base-headline :font="['Merriweather', 700, 'normal']">
      Merriweather - 700 - normal
    </base-headline>
    <base-headline :font="['Merriweather', 400, 'italic']">
      Merriweather - 400 - italic
    </base-headline>
    <base-headline :font="['Merriweather', 700, 'italic']">
      Merriweather - 700 - italic
    </base-headline>
  </div>
</template>

<script setup>
import BaseHeadline from '@/components/base/Headline';
</script>
