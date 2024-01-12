<template>
  <ul v-font="[$getFont('Quicksand', 400, 'normal')]">
    <li v-for="(item, index) in items" :key="index">
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
      default() {
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
  margin: em(10px) 0;
}

a {
  position: relative;
  display: block;
  padding: em(5px) em(10px);
  color: currentColor;
  text-decoration: none;
  border-radius: em(3px);
  outline: none;
  opacity: 0.8;
  transition:
    opacity 0.2s linear,
    background 0.2s linear;

  &:focus {
    background: rgb(255 255 255 / 20%);
    opacity: 1;
  }

  &:hover,
  &.nuxt-link-exact-active {
    background: rgb(255 255 255 / 40%);
    opacity: 1;
  }
}
</style>
