<template>
  <layout-two-columns class="organism-test">
    <template v-slot:left>
      <atom-base-button />
    </template>
    <template v-slot:right>
      <atom-base-button />
    </template>
  </layout-two-columns>
</template>

<script>
import LayoutTwoColumns from '@/components/layouts/TwoColumns'
import AtomBaseButton from '@/components/atoms/BaseButton'

export default {
  components: {
    LayoutTwoColumns,
    AtomBaseButton
  }
}
</script>

<style lang="postcss">
.organism-test {
  /* empty */
}
</style>
