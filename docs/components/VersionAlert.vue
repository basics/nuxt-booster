<template>
  <alert v-if="settings.releaseMajorVersion === 1" type="warning">
    You’re browsing the documentation for v1. For v2, <nuxt-link to="/">
      click here
    </nuxt-link>.
  </alert>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'settings'
    ])
  }
};
</script>
