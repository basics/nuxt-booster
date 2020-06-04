<template>
  <layout-two-columns class="organism-test">
    <template v-slot:left>
      <atom-base-button />
      <lazy-image :src="$attrs.src" />
    </template>
    <template v-slot:right>
      <atom-base-button />
      <lazy-image :src="$attrs.src" />
      <lazy-iframe src="https://grabarzundpartner.de" />
    </template>
  </layout-two-columns>
</template>

<script>
import LayoutTwoColumns from '@/components/layouts/TwoColumns'
import AtomBaseButton from '@/components/atoms/BaseButton'
import LazyImage from '@/../lib/components/LazyImage'
import LazyIframe from '@/../lib/components/LazyIframe'

export default {
  components: {
    LayoutTwoColumns,
    AtomBaseButton,
    LazyImage,
    LazyIframe
  }
}
</script>

<style lang="postcss">
.organism-test {
  /* empty */
}
</style>
