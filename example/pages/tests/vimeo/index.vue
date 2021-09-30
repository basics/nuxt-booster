<template>
  <div>
    <default v-for="(item, index) in items" :id="`vimeo-${index}`" v-bind="item" :key="item.url" :critical="index < 1" />
  </div>
</template>

<script>

import Default from './components/Default';

export default {

  components: {
    Default
  },

  asyncData () {
    return {
      items: [
        {
          vimeoUrl: 'https://vimeo.com/440265549',
          title: 'Vimeo 1'
        },
        {
          vimeoUrl: 'https://vimeo.com/288344114',
          title: 'Vimeo 2'
        }
      ]
    };
  }

};

</script>
