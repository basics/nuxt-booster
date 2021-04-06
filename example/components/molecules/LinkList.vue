<template>
  <ul
    v-font="[
      $getFont('Quicksand', 400, 'normal'),
    ]"
  >
    <li
      v-for="(item, index) in items"
      :key="index"
    >
      <nuxt-link v-bind="item">
        {{ item.title }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default () {
        return [
          {
            title: 'Link 1.'
          },
          {
            title: 'Link 2.'
          },
          {
            title: 'Link 3.'
          }
        ];
      }
    }
  }
};
</script>

<style scoped lang="postcss">
ul {
  padding: 0;
  list-style: none;
}

li {
  margin: calc(10 / 16 * 1em) 0;
}

a {
  position: relative;
  display: block;
  padding: calc(5 / 16 * 1em) calc(10 / 16 * 1em);
  color: currentColor;
  text-decoration: none;
  border-radius: calc(3 / 16 * 1em);
  outline: none;
  opacity: 0.8;
  transition: opacity 0.2s linear, background 0.2s linear;

  &:hover,
  &.nuxt-link-exact-active {
    background: rgba(255, 255, 255, 0.4);
    opacity: 1;
  }
}
</style>
