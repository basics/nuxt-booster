<template>
  <div>
    <a v-if="$route.path === '/'" target="_blank" href="https://github.com/GrabarzUndPartner/lazy-resources" class="overview-link">
      <span v-font="$fonts.getFont('Comic Neue', 400, 'normal')" critical>GITHUB</span>
    </a>
    <nuxt-link v-if="$route.path !== '/'" class="overview-link" to="/">
      <span v-font="$fonts.getFont('Comic Neue', 400, 'normal')" critical>&larr; Back</span>
    </nuxt-link>
    <Nuxt />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="postcss">
body {
  margin: 0;
}

.overview-link {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
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

html,
body,
#__nuxt,
#__layout,
#__layout > div,
#__layout > div > div {
  height: 100%;
}

</style>
