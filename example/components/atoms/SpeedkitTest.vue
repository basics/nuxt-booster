<template>
  <div class="speedkit-test" :class="{'speedkit-test--active': active}">
    <div>
      <span class="title">{{ title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Title'
    }
  },
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
.speedkit-test {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-family: sans-serif;
  font-size: 0.8em;
  background: red;

  & > div {
    display: block;
    text-align: center;
  }

  & .title {
    display: block;
    text-align: center;
  }

  &.speedkit-test--active {
    background: green;
  }
}
</style>
