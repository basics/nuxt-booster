<template>
  <document-section tag="main" class="page-index">
    <component-stage v-bind="stage" />
    <component-text-a v-bind="textA" />
    <component-image-text v-bind="imageTextA" />
    <component-video-youtube v-bind="videoYoutube" />
    <component-video-vimeo v-bind="videoVimeoA" />
    <component-text-a v-bind="textA" />
    <component-image-text v-bind="imageTextB" />
    <component-text-b v-bind="textB" />
    <component-video-vimeo v-bind="videoVimeoB" />
  </document-section>
</template>

<script>
import speedkitHydrate from 'nuxt-speedkit/hydrate';

export default {
  components: {
    ComponentStage: speedkitHydrate(() => import('@/components/organisms/Stage')),
    ComponentTextA: speedkitHydrate(() => import('@/components/organisms/TextFontA')),
    ComponentImageText: speedkitHydrate(() => import('@/components/organisms/ImageText')),
    ComponentTextB: speedkitHydrate(() => import('@/components/organisms/TextFontB')),
    ComponentVideoYoutube: speedkitHydrate(() => import('@/components/organisms/VideoYoutube')),
    ComponentVideoVimeo: speedkitHydrate(() => import('@/components/organisms/VideoVimeo'))
  },
  data () {
    return {

      stage: {
        critical: true,
        content: 'nuxt-speedkit',
        claim: 'powered by Grabarz & Partner',

        picture: {
          title: 'Stage',
          sources: [
            // eslint-disable-next-line no-secrets/no-secrets
            { src: '/img/pickadummy/stage-landscape.jpg', sizes: { sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' }, media: '(orientation: landscape)' },
            // eslint-disable-next-line no-secrets/no-secrets
            { src: '/img/pickadummy/stage-portrait.jpg', sizes: { default: '100vw', xxs: '100vw', xs: '100vw' }, media: '(orientation: portrait)' }
          ]
        }
      },

      textA: {
        headline: 'Text A',
        content: '<p>Aliqua odit <strong>anim vehicula</strong> varius eget feugiat beatae. <em><strong>Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet</strong></em>, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>'
      },

      imageTextA: {
        headline: 'Image Text A',
        content: '<p>Aliqua odit anim vehicula varius eget feugiat beatae. Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>',
        picture: {
          title: 'Image Text A',
          sources: [
            // eslint-disable-next-line no-secrets/no-secrets
            { src: '/img/pickadummy/image-text-a.jpg', sizes: { default: '100vw', xxs: '100vw', xs: '100vw', sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' } }
          ]
        }
      },

      videoYoutube: {
        title: 'Youtube',
        url: 'https://www.youtube.com/watch?v=cLKvbhfVBUU',
        text: 'Nunc odio nisl dapibus consequat recusandae doloremque nisi natus repudiandae do accusantium corrupti. Harum quisquam, maxime, perspiciatis lobortis earum iure.'
      },

      imageTextB: {
        alignRight: true,
        headline: 'Image Text B',
        content: '<p>Aliqua odit anim vehicula varius eget feugiat beatae. Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>',
        picture: {
          title: 'Image Text B',
          sources: [
            // eslint-disable-next-line no-secrets/no-secrets
            { src: '/img/pickadummy/image-text-b.jpg', sizes: { default: '100vw', xxs: '100vw', xs: '100vw', sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' } }
          ]
        }
      },

      videoVimeoA: {
        url: 'https://vimeo.com/440265549',
        text: 'Nunc odio nisl dapibus consequat recusandae doloremque nisi natus repudiandae do accusantium corrupti. Harum quisquam, maxime, perspiciatis lobortis earum iure.'
      },

      textB: {
        headline: 'Text B',
        content: '<p>Aliqua odit <strong>anim vehicula</strong> varius eget feugiat beatae. <em><strong>Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet</strong></em>, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>'
      },

      videoVimeoB: {
        url: 'https://vimeo.com/288344114',
        text: 'Nunc odio nisl dapibus consequat recusandae doloremque nisi natus repudiandae do accusantium corrupti. Harum quisquam, maxime, perspiciatis lobortis earum iure.'
      }
    };
  }

};
</script>

<style lang="postcss" scoped>
.page-index {
  padding: em(40px) 0;
  padding-top: 0;

  & > section {
    margin: em(80px) 0;

    &:first-child {
      margin-top: 0;
    }
  }
}

</style>
