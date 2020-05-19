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
  lazyResources: {
    main: true
  },
  components: {
    LayoutTwoColumns,
    AtomHeadline
  },
  // created () {
  //   console.log('created', JSON.stringify(this.$lazyResourcesContainer.fontFamilies))
  // },
  // updated () {
  //   console.log('updated', JSON.stringify(this.$lazyResourcesContainer.fontFamilies))
  // },
  // beforeMount () {
  //   console.log('beforeMount', JSON.stringify(this.$lazyResourcesContainer.fontFamilies))
  // },
  mounted () {
    // console.log('mounted', JSON.stringify(this.$lazyResourcesContainer.fontFamilies))
    console.log(this)
  }
  // data () {
  //   return {
  //     fonts: this.$fontCollection.fonts
  //   }
  // },

}
</script>

<style lang="postcss">
.organism-test {
  /* empty */
}
</style>
