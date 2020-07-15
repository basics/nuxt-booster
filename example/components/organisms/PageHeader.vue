<template>
  <header>
    <a v-if="$route.path === '/'" target="_blank" href="https://github.com/GrabarzUndPartner/lazy-resources" class="overview-link">
      <span v-font="$fonts.getFont('Comic Neue', 400, 'normal')">GITHUB</span>
    </a>
    <nuxt-link v-if="$route.path !== '/'" class="overview-link" to="/">
      <span v-font="$fonts.getFont('Comic Neue', 400, 'normal')">&larr; Back</span>
    </nuxt-link>
  </header>
</template>

<script>
export default {
  // TODO: solve font loading bug -> no font-classes will be added on server side
  // Current Quickfix: added class manually
}
</script>

<style lang="postcss">
header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}

.overview-link {
  display: inline-block;
  padding: 10px;
  padding: calc(10 / 414 * 100vw);
  font-size: calc(18 / 414 * 100vw);
  color: #000;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 0 0 5px 0;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);

  @media (min-width: 768px) {
    padding: calc(10 / 768 * 100vw);
    font-size: calc(18 / 768 * 100vw);
  }

  @media (min-width: 1024px) {
    padding: 10px;
    font-size: 18px;
  }
}
</style>
