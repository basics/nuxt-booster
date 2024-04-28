<template>
  <div class="empty-1" :class="{ ready }">EMPTY 1</div>
</template>

<script setup>
const ready = ref(false);
onMounted(() => {
  ready.value = true;
});
</script>
