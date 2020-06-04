<template>
  <layout-two-columns class="organism-test">
    <template v-slot:left>
      <atom-headline />
      <lazy-image :src="$attrs.src" />
    </template>
    <template v-slot:right>
      <atom-headline />
      <lazy-image :src="$attrs.src" />
    </template>
  </layout-two-columns>
</template>

<script>
import LayoutTwoColumns from '@/components/layouts/TwoColumns'
import AtomHeadline from '@/components/atoms/Headline'
import LazyImage from '@/../lib/components/LazyImage'

export default {
  critical: true,

  components: {
    LayoutTwoColumns,
    AtomHeadline,
    LazyImage
  }
}
</script>

<style lang="postcss">
.organism-test {
  /* empty */
}
</style>
