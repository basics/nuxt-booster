<template>
  <div>
    <div><organism-test-a src="https://placeimg.com/200/300?detail-a" /></div>
    <div><organism-test-b src="https://placeimg.com/400/300?detail-b" /></div>
    <nuxt-link to="/">
      Index
    </nuxt-link>
  </div>
</template>

<script>
import OrganismTestA from '@/components/organisms/TestA'
import OrganismTestB from '@/components/organisms/TestB'

export default {
  components: {
    OrganismTestA,
    OrganismTestB
  }
}
</script>
