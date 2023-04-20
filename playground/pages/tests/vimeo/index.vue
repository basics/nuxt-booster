<template>
  <document-section tag="main">
    <default v-for="(item, index) in items" :id="`vimeo-${index}`" v-bind="item" :key="item.vimeoUrl" :critical="index < 1" />
  </document-section>
</template>

<script>

import speedkitHydrate from '#speedkit/hydrate';

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
