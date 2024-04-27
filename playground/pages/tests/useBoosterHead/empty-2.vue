<template>
  <div class="empty-2" :class="{ ready }">EMPTY 2</div>
</template>

<script setup>
const ready = ref(false);
onMounted(() => {
  ready.value = true;
});
</script>
