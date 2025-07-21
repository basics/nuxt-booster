<template>
  <div>
    <critical critical />
    <lazy />
  </div>
</template>

<script setup lang="ts">
import Critical from './components/Critical.vue';
import Lazy from './components/Lazy.vue';
</script>
