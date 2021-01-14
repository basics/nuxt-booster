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

<style scoped>
  ul {
    padding: 0;
    list-style: none;
  }

  li {
    margin: calc(10 / 16 * 1em) 0;
  }

  a {
    color: currentColor;
    text-decoration: none;
  }
</style>
