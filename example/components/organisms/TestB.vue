<template>
  <layout-two-columns class="organism-test">
    <template v-slot:left>
      <atom-base-button />
      <atom-lazy-image :src="$attrs.src" />
    </template>
    <template v-slot:right>
      <atom-base-button />
      <atom-lazy-image :src="$attrs.src" />
    </template>
  </layout-two-columns>
</template>

<script>
import LayoutTwoColumns from '@/components/layouts/TwoColumns'
import AtomBaseButton from '@/components/atoms/BaseButton'
import AtomLazyImage from '@/components/atoms/LazyImage'

export default {
  components: {
    LayoutTwoColumns,
    AtomBaseButton,
    AtomLazyImage
  }
}
</script>

<style lang="postcss">
.organism-test {
  /* empty */
}
</style>
