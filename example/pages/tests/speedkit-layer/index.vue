<template>
  <document-section tag="main">
    <component-image-text v-bind="imageTextA" />
    <speedkit-layer />
  </document-section>
</template>

<script>
import speedkitHydrate from 'nuxt-speedkit/hydrate';
import SpeedkitLayer from 'nuxt-speedkit/components/SpeedkitLayer';

export default {
  layout: 'blank',

  components: {
    SpeedkitLayer,
    ComponentImageText: speedkitHydrate(() => import('@/components/organisms/ImageText'))
  },

  data () {
    return {
      pictureHydrate: false

    };
  },

  computed: {
    imageTextA () {
      return {
        headline: 'SpeedkitLayer Test',
        content: '<p>Aliqua odit anim vehicula varius eget feugiat beatae. Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>',
        picture: {
          hydrate: this.pictureHydrate,
          title: 'SpeedkitLayer Test',
          sources: [
            // eslint-disable-next-line no-secrets/no-secrets
            { src: '/img/pickadummy/image-text-a.jpg', sizes: { default: '100vw', xxs: '100vw', xs: '100vw', sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' } }
          ]
        }
      };
    }
  },
  mounted () {
    this.pictureHydrate = true;
  }

};
</script>
