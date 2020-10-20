<template>
  <div><hydate-test /></div>
</template>

<script>

export default {
  components: {
    HydateTest: () => import('@/components/atoms/HydrateTest')
  },
  mounted () {
    console.log('MOUNTED WRAPPER')
  }
}
</script>

<style>

</style>
