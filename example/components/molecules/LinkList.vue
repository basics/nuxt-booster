<template>
  <ul>
    <li
      v-for="(item, index) in items"
      :key="index"
      v-font="[
        $getFont('Quicksand', 400, 'normal'),
      ]"
    >
      <nuxt-link v-bind="item">
        <span>&raquo;</span> {{ item.title }}
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

& span {
  display: inline-block;
  margin-right: 5px;
  font-size: 1.2em;
  opacity: 0.5;
  transition: opacity 0.2s linear, transform 0.2s linear;
}

a {
  position: relative;
  display: block;
  color: currentColor;
  text-decoration: none;
  opacity: 0.8;

  &:hover,
  &.nuxt-link-exact-active {
    opacity: 1;

    & span {
      opacity: 1;
      transform: translateX(5px);
    }
  }
}
</style>
