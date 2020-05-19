<template>
  <div class="layout-two-columns">
    <div><slot name="left" /></div>
    <div><slot name="right" /></div>
  </div>
</template>

<script>
export default {
  lazyResources: {
    fontFamily: ['FontTwoColumns']
  }
}
</script>

<style lang="postcss">
.layout-two-columns {
  display: flex;

  & > div {
    text-align: center;
    lost-column: 1/2;
  }
}
</style>
