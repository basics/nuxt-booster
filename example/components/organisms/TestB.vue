<template>
  <layout-two-columns class="organism-test">
    <template v-slot:left>
      <atom-base-button />
      <lazy-image :src="$attrs.src" />
    </template>
    <template v-slot:right>
      <atom-base-button />
      <lazy-picture v-bind="$attrs.picture" />
      <!-- <lazy-iframe src="https://grabarzundpartner.de" /> -->
    </template>
  </layout-two-columns>
</template>

<script>
import LazyImage from 'lazy-resources/components/LazyImage'
import LazyPicture from 'lazy-resources/components/LazyPicture'
// import LazyIframe from 'lazy-resources/components/LazyIframe'
import LayoutTwoColumns from '@/components/layouts/TwoColumns'
import AtomBaseButton from '@/components/atoms/BaseButton'

export default {
  components: {
    LayoutTwoColumns,
    AtomBaseButton,
    LazyImage,
    LazyPicture
    // LazyIframe
  }
}
</script>

<style lang="postcss">
.organism-test {
  /* empty */
}
</style>
