<template>
  <document-section class="organism-spacer">
    <div>
      <p>Scroll down</p>
      <span>&darr;</span>
    </div>
  </document-section>
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
  font-size: em(32px);

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    & > span {
      display: block;
      font-size: em(44px);
      text-align: center;
    }

    & p {
      line-height: calc(44 / 32);
      text-align: center;
    }
  }
}
</style>
