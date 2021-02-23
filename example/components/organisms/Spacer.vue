<template>
  <div class="organism-spacer">
    <div>
      <p>Scroll down</p>
      <span>&darr;</span>
    </div>
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
};
</script>

<style lang="postcss">
.organism-spacer {
  min-height: 100vh;
  min-height: stretch;
  font-size: calc(32 / 16 * 1em);

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    & > span {
      display: block;
      font-size: calc(44 / 32 * 1em);
      text-align: center;
    }

    & p {
      line-height: calc(44 / 32);
      text-align: center;
    }
  }
}
</style>
