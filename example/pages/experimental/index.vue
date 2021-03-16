<template>
  <div class="page-experimentel-index">
    <component-stage v-bind="stage" />
    <component-text-a v-bind="textA" />
    <component-text-image v-bind="imageTextA" />
    <ComponentSpeedkitYoutube v-bind="youtubePlayer" />
    <component-text-a v-bind="textA" />
    <component-text-image v-bind="imageTextB" />
    <component-text-b v-bind="textB" />
  </div>
</template>

<script>

export default {

  asyncData () {
    return {
      contentA: '<p>This is a basic test with single font variant.</p>',

      stage: {
        critical: true,
        headline: 'nuxt-speedkit',
        claim: 'powered by Grabarz & Partner',
        picture: {
          sources: [
            { src: 'https://nuxt-speedkit.grabarzundpartner.dev/example/img/image-content-1/landscape.jpg', sizes: '1024:1024,1280:1280,1680:1680,1920:1920' },
            { src: 'https://nuxt-speedkit.grabarzundpartner.dev/example/img/image-content-1/portrait.jpg', sizes: '768:768' },
            { src: 'https://nuxt-speedkit.grabarzundpartner.dev/example/img/image-content-1/landscape.jpg', sizes: '576:576' },
            { src: 'https://nuxt-speedkit.grabarzundpartner.dev/example/img/image-content-1/portrait.jpg', sizes: '414' }
          ]
        }
      },

      youtubePlayer: {
        id: 'cLKvbhfVBUU'
      },

      textA: {
        text: '<h2>Text Headline</h2><p>Aliqua odit <strong>anim vehicula</strong> varius eget feugiat beatae. <em><strong>Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet</strong></em>, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>'
      },

      imageTextA: {
        text: '<h2>Text Headline</h2><p>Aliqua odit anim vehicula varius eget feugiat beatae. Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>',
        picture: {
          sources: [
            { src: 'https://nuxt-speedkit.grabarzundpartner.dev/example/img/image-content-2/jpg/1920.jpg', sizes: '576:576,768:768,1024:1024,1200:1280,1600:1680,1900:1920' },
            { src: 'https://nuxt-speedkit.grabarzundpartner.dev/example/img/image-content-2/jpg/1920.jpg', sizes: '414' }
          ]
        }
      },

      imageTextB: {
        alignRight: true,
        text: '<h2>Text Headline</h2><p>Aliqua odit anim vehicula varius eget feugiat beatae. Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>',
        picture: {
          sources: [
            { src: 'https://nuxt-speedkit.grabarzundpartner.dev/example/img/image-content-3/jpg/1920.jpg', sizes: '576:576,768:768,1024:1024,1200:1280,1600:1680,1900:1920' },
            { src: 'https://nuxt-speedkit.grabarzundpartner.dev/example/img/image-content-3/jpg/1920.jpg', sizes: '414' }
          ]
        }
      },

      textB: {
        text: '<h2>Text Headline</h2><p>Aliqua odit <strong>anim vehicula</strong> varius eget feugiat beatae. <em><strong>Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet</strong></em>, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>'
      }
    };
  },
  speedkitComponents: {
    ComponentStage: () => import(/* webpackMode: "eager" */'@/components/organisms/experimental/Stage'),
    ComponentTextA: () => import('@/components/organisms/TextFontA'),
    ComponentTextImage: () => import('@/components/organisms/experimental/ImageText'),
    ComponentTextB: () => import('@/components/organisms/TextFontB'),
    ComponentSpeedkitYoutube: () => import('nuxt-speedkit/components/experimental/SpeedkitYoutube')
  }

};
</script>

<style lang="postcss" scoped>
.page-experimentel-index {
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
