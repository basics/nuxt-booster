<template>
  <document-section tag="main">
    <critical critical />
    <lazy />
  </document-section>
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
