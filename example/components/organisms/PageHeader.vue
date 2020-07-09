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
  padding: 10px;
  font-size: calc(18 / 414 * 100vw);
  color: #000;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 0 0 5px 0;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);

  @media (min-width: 768px) {
    font-size: calc(18 / 768 * 100vw);
  }

  @media (min-width: 1024px) {
    font-size: 18px;
  }
}
</style>
