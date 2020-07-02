<template>
  <div class="organism-spacer">
    <p>Scroll down</p>
    <span>&darr;</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Scroll down'
    }
  }
}
</script>

<style lang="postcss">
.organism-spacer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: calc(32 / 414 * 100vw);

  @media (min-width: 768px) {
    font-size: calc(32 / 768 * 100vw);
  }

  @media (min-width: 1024px) {
    font-size: 32px;
  }

  & > span {
    display: block;
    font-size: 44px;
    text-align: center;
  }

  & p {
    line-height: calc(44 / 32);
    text-align: center;
  }
}
</style>
