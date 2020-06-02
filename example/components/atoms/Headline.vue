<template>
  <h1 v-font="fonts.getFont('Comic Neue', 400, 'normal')" class="atom-headline">
    {{ content }}
  </h1>
</template>

<script>
export default {
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
