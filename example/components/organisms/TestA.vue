<template>
  <layout-two-columns class="organism-test">
    <template v-slot:left>
      <atom-headline />
      <atom-lazy-image :src="$attrs.src" />
    </template>
    <template v-slot:right>
      <atom-headline />
      <atom-lazy-image :src="$attrs.src" />
    </template>
  </layout-two-columns>
</template>

<script>
import LayoutTwoColumns from '@/components/layouts/TwoColumns'
import AtomHeadline from '@/components/atoms/Headline'
import AtomLazyImage from '@/../lib/components/LazyImage'

export default {
  critical: true,

  components: {
    LayoutTwoColumns,
    AtomHeadline,
    AtomLazyImage
  }
}
</script>

<style lang="postcss">
.organism-test {
  /* empty */
}
</style>
