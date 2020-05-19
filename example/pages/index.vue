<template>
  <div>
    <div><organism-test-a /></div>
    <div><organism-test-b /></div>
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
