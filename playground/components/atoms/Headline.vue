<template>
  <component :is="tag" v-font="$getFont('Quicksand', 700, 'normal')" class="atom-headline">
    <slot>{{ content }}</slot>
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'h1'
    },
    content: {
      type: String,
      default: 'Headline'
    }
  }
};
</script>

<style lang="postcss">
.atom-headline {
  /* empty */
}
</style>
