<template>
  <div class="loader-test" :class="{active, 'critical': isCritical}">
    <span>{{ active ? 'active': 'inactive' }}</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: false
    };
  },
  mounted () {
    this.active = true;
  }
};
</script>

<style lang="postcss" scoped>
.loader-test {
  display: flex;
  color: white;
  background: red;

  &:not(.critical) {
    transition: background 0.2s 1s linear;
  }

  &.active {
    background: green;
  }
}

</style>
