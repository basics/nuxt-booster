<template>
  <layout-two-columns class="organism-test">
    <template v-slot:left>
      <atom-headline />
      <lazy-image :src="$attrs.src" />
    </template>
    <template v-slot:right>
      <atom-headline />
      <lazy-picture v-bind="$attrs.picture" />
    </template>
  </layout-two-columns>
</template>

<script>
import LazyImage from 'lazy-resources/components/LazyImage'
import LazyPicture from 'lazy-resources/components/LazyPicture'
import LayoutTwoColumns from '@/components/layouts/TwoColumns'
import AtomHeadline from '@/components/atoms/Headline'

export default {

  components: {
    LayoutTwoColumns,
    AtomHeadline,
    LazyImage,
    LazyPicture
  }
}
</script>

<style lang="postcss">
.organism-test {
  /* empty */
}
</style>
