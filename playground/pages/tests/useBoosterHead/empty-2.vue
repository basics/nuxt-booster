<template>
  <div class="empty-2" :class="{ ready }">EMPTY 2</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const ready = ref(false);
onMounted(() => {
  ready.value = true;
});
</script>
