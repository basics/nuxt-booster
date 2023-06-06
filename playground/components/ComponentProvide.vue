<script setup>
import { inject } from 'vue';

const critical = inject('critical');
</script>

<!-- <script>

export default {
  inject: ['critical']
};

</script> -->

<template>
  <div>{{ critical }}</div>
</template>
