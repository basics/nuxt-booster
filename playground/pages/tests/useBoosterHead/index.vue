<template>
  <div>
    <base-headline critical :font="[['Montserrat Alternates', 400, 'normal']]">
      Montserrat Alternates - 400 - normal
    </base-headline>
    <base-headline critical :font="['Montserrat Alternates', 700, 'normal']">
      Montserrat Alternates - 700 - normal
    </base-headline>
    <base-headline critical :font="['Montserrat Alternates', 400, 'italic']">
      Montserrat Alternates - 400 - italic
    </base-headline>
    <base-headline critical :font="['Montserrat Alternates', 700, 'italic']">
      Montserrat Alternates - 700 - italic
    </base-headline>

    <Transition name="fade">
      <div v-if="show">
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
    </Transition>
    <button @click="show = !show">Click here</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import BaseHeadline from '@/components/base/Headline';

const show = ref(false);
</script>

<style lang="postcss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
