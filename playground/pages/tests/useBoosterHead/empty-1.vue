<template>
  <div class="empty-1" :class="{ ready }">EMPTY 1</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const ready = ref(false);
onMounted(() => {
  ready.value = true;
});
</script>
