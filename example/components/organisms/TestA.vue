<template>
  <layout-two-columns class="organism-test">
    <template v-slot:left>
      <atom-headline />
    </template>
    <template v-slot:right>
      <atom-headline />
    </template>
  </layout-two-columns>
</template>

<script>
import LayoutTwoColumns from '@/components/layouts/TwoColumns'
import AtomHeadline from '@/components/atoms/Headline'

export default {
  critical: true,

  components: {
    LayoutTwoColumns,
    AtomHeadline
  }
}
</script>

<style lang="postcss">
.organism-test {
  /* empty */
}
</style>
