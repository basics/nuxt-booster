<template>
  <div class="page-index">
    <component-stage v-bind="stage" />
    <component-text-a v-bind="textA" />
    <component-text-image v-bind="imageTextA" />
    <component-video-youtube v-bind="videoYoutube" />
    <component-text-a v-bind="textA" />
    <component-text-image v-bind="imageTextB" />
    <component-video-vimeo v-bind="videoVimeo" />
    <component-text-b v-bind="textB" />
  </div>
</template>

<script>
import ImageSourceList from 'nuxt-speedkit/components/Picture/classes/ImageSourceList';
import ImageSource from 'nuxt-speedkit/components/Image/classes/ImageSource';

export default {

  asyncData () {
    return {
      contentA: '<p>This is a basic test with single font variant.</p>',

      stage: {
        critical: true,
        headline: 'nuxt-speedkit',
        claim: 'powered by Grabarz & Partner',

        picture: {
          title: 'Stage',
          sources: new ImageSourceList({
            list: [
              // eslint-disable-next-line no-secrets/no-secrets
              new ImageSource({ src: '/pickadummy/index.php?imgsize=5760x3240&t=Stage', sizes: { sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' }, media: '(min-width: 768px)' }),
              // eslint-disable-next-line no-secrets/no-secrets
              new ImageSource({ src: '/pickadummy/index.php?imgsize=3240x5760&t=Stage', sizes: { default: '100vw', xxs: '100vw', xs: '100vw' }, media: '(max-width: 767px)' })
            ],
            options: { retina: true }
          })
        }
      },

      textA: {
        text: '<h2>Text Headline</h2><p>Aliqua odit <strong>anim vehicula</strong> varius eget feugiat beatae. <em><strong>Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet</strong></em>, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>'
      },

      imageTextA: {
        text: '<h2>Text Headline</h2><p>Aliqua odit anim vehicula varius eget feugiat beatae. Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>',
        picture: {
          title: 'Image Text A',
          sources: new ImageSourceList({
            list: [
              // eslint-disable-next-line no-secrets/no-secrets
              new ImageSource({ src: '/pickadummy/index.php?imgsize=5760x3240&t=Image%20Text%20A', sizes: { sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' }, media: '(min-width: 768px)' }),
              // eslint-disable-next-line no-secrets/no-secrets
              new ImageSource({ src: '/pickadummy/index.php?imgsize=3240x5760&t=Image%20Text%20A', sizes: { default: '100vw', xxs: '100vw', xs: '100vw' }, media: '(max-width: 767px)' })
            ],
            options: { retina: true }
          })
        }
      },

      videoYoutube: {
        title: 'Youtube',
        url: 'https://www.youtube.com/watch?v=cLKvbhfVBUU',
        text: 'Nunc odio nisl dapibus consequat recusandae doloremque nisi natus repudiandae do accusantium corrupti. Harum quisquam, maxime, perspiciatis lobortis earum iure.'
      },

      imageTextB: {
        alignRight: true,
        text: '<h2>Text Headline</h2><p>Aliqua odit anim vehicula varius eget feugiat beatae. Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>',
        picture: {
          title: 'Image Text B',
          sources: new ImageSourceList({
            list: [
              // eslint-disable-next-line no-secrets/no-secrets
              new ImageSource({ src: '/pickadummy/index.php?imgsize=5760x3240&t=Image%20Text%20B', sizes: { sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' }, media: '(min-width: 768px)' }),
              // eslint-disable-next-line no-secrets/no-secrets
              new ImageSource({ src: '/pickadummy/index.php?imgsize=3240x5760&t=Image%20Text%20B', sizes: { default: '100vw', xxs: '100vw', xs: '100vw' }, media: '(max-width: 767px)' })
            ],
            options: { retina: true }
          })
        }
      },

      videoVimeo: {
        title: 'Vimeo',
        url: 'https://vimeo.com/440265549',
        text: 'Nunc odio nisl dapibus consequat recusandae doloremque nisi natus repudiandae do accusantium corrupti. Harum quisquam, maxime, perspiciatis lobortis earum iure.'
      },

      textB: {
        text: '<h2>Text Headline</h2><p>Aliqua odit <strong>anim vehicula</strong> varius eget feugiat beatae. <em><strong>Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet</strong></em>, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>'
      }
    };
  },
  speedkitComponents: {
    ComponentStage: () => import(/* webpackMode: "eager" */'@/components/organisms/Stage'),
    ComponentTextA: () => import('@/components/organisms/TextFontA'),
    ComponentTextImage: () => import('@/components/organisms/ImageText'),
    ComponentTextB: () => import('@/components/organisms/TextFontB'),
    ComponentVideoYoutube: () => import('@/components/organisms/VideoYoutube'),
    ComponentVideoVimeo: () => import('@/components/organisms/VideoVimeo')
  },

  methods: {
    onLoadFont (fonts) {
      // console.log('page: font loaded', fonts);
    }
  }
};
</script>

<style lang="postcss" scoped>
.page-index {
  padding: calc(25 / 16 * 1em) 0;
  padding-top: 0;

  & > * {
    margin: calc(25 / 16 * 1em) 0;

    &:first-child {
      margin-top: 0;
    }
  }
}

</style>
