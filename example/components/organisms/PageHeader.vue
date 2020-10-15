<template>
  <header
    v-font="[
      $fonts.getFont('Quicksand', 400, 'normal')
    ]"
    class="page-header"
  >
    <a v-if="$route.path === '/'" target="_blank" href="https://github.com/GrabarzUndPartner/lazy-resources" class="overview-link">
      <span>GITHUB</span>
    </a>
    <lazy-link v-if="$route.path !== '/'" class="overview-link" to="/">
      <span>&larr; Back</span>
    </lazy-link>
  </header>
</template>

<script>

import LazyLink from 'lazy-resources/components/LazyLink'

export default {
  components: {
    LazyLink
  }
}

</script>

<style lang="postcss" scoped>
.page-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  & .overview-link {
    display: inline-block;
    padding: calc(10 / 18 * 1em);
    font-size: calc(18 / 16 * 1em);
    color: #000;
    text-decoration: none;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 0 0 calc(5 / 18 * 1em) 0;
    box-shadow: 0 0 calc(5 / 18 * 1em) rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(calc(5 / 18 * 1em));
  }
}
</style>
