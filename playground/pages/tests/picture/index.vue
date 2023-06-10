<template>
  <main>
    <critical critical />
    <lazy />
  </main>
</template>

<script>
import Critical from './components/Critical';
import Lazy from './components/Lazy';

export default {
  components: {
    Critical,
    Lazy
  }
};
</script>
