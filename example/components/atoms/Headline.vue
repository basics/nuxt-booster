<template>
  <h1 class="atom-headline">
    {{ content }}
  </h1>
</template>

<script>
export default {
  lazyResources: {
    fontFamily: ['FontHeadline']
  },
  props: {
    content: {
      type: String,
      default: 'Headline'
    }
  }
}
</script>

<style lang="postcss">
.atom-headline {
  /* empty */
}
</style>
