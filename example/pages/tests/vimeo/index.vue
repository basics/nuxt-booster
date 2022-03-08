<template>
  <div>
    <default v-for="(item, index) in items" :id="`vimeo-${index}`" v-bind="item" :key="item.vimeoUrl" :critical="index < 1" />
  </div>
</template>

<script>

import speedkitHydrate from 'nuxt-speedkit/hydrate';

export default {

  components: {
    Default: speedkitHydrate(() => import('./components/Default'))
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
          title: 'Vimeo 2',
          autoplay: true
        }
      ]
    };
  }

};

</script>
