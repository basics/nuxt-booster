<template>
  <div>
    <Nuxt />

    {{ JSON.stringify(fonts) }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      test: false
    }
  },
  computed: {
    containers () {
      return this.$store.getters['lazy-resources/containers']
    }
  },
  watch: {
    fonts: {
      deep: true,
      handler () {
        this.test = true
      }
    }
  },
  head () {
    return {
      meta: Object.values(this.containers).map(container => ({
        name: container.id,
        value: container.fontFamily.join(',')
      }))
    }
  }
}
</script>

<style lang="postcss">

body {
  margin: 0;
}

</style>
