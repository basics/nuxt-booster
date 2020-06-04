<template>
  <div>
    <div><organism-test-a src="https://picsum.photos/200/300?detail-a" /></div>
    <div><organism-test-b src="https://picsum.photos/400/300?detail-b" /></div>
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
