<template>
  <div class="page-index">
    <module-stage v-bind="stage" />
    <module-text-a v-bind="textA" />
    <module-image-text v-bind="imageTextA" />
    <module-video-youtube v-bind="videoYoutube" />
    <module-video-vimeo v-bind="videoVimeoA" />
    <module-text-a v-bind="textA" />
    <module-image-text v-bind="imageTextB" />
    <module-text-b v-bind="textB" />
    <module-video-vimeo v-bind="videoVimeoB" />
  </div>
</template>

<script setup>
import boosterHydrate from '#booster/hydrate';

const ModuleStage = boosterHydrate(() => import('@/components/modules/Stage'));
const ModuleTextA = boosterHydrate(
  () => import('@/components/modules/TextFontA')
);
const ModuleImageText = boosterHydrate(
  () => import('@/components/modules/ImageText')
);
const ModuleTextB = boosterHydrate(
  () => import('@/components/modules/TextFontB')
);
const ModuleVideoYoutube = boosterHydrate(
  () => import('@/components/modules/VideoYoutube')
);
const ModuleVideoVimeo = boosterHydrate(
  () => import('@/components/modules/VideoVimeo')
);

const stage = {
  critical: true,
  content: 'nuxt-booster',
  claim: 'powered by Grabarz & Partner',

  picture: {
    title: 'Stage',
    sources: [
      {
        src: '/img/stage-landscape.jpg',
        sizes: {
          sm: '100vw',
          md: '100vw',
          lg: '100vw',
          xl: '100vw',
          xxl: '100vw'
        },
        media: '(orientation: landscape)'
      },
      {
        src: '/img/stage-portrait.jpg',
        sizes: { default: '100vw', xxs: '100vw', xs: '100vw' },
        media: '(orientation: portrait)'
      }
    ]
  }
};

const textA = {
  headline: 'Text A',
  content:
    '<p>Aliqua odit <strong>anim vehicula</strong> varius eget feugiat beatae. <em><strong>Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet</strong></em>, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>'
};

const imageTextA = {
  headline: 'Image Text A',
  content:
    '<p>Aliqua odit anim vehicula varius eget feugiat beatae. Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>',
  picture: {
    title: 'Image Text A',
    sources: [
      {
        src: '/img/image-text-a.jpg',
        sizes: {
          default: '100vw',
          xxs: '100vw',
          xs: '100vw',
          sm: '100vw',
          md: '100vw',
          lg: '100vw',
          xl: '100vw',
          xxl: '100vw'
        }
      }
    ]
  }
};

const videoYoutube = {
  title: 'Youtube',
  url: 'https://www.youtube.com/watch?v=cLKvbhfVBUU',
  text: 'Nunc odio nisl dapibus consequat recusandae doloremque nisi natus repudiandae do accusantium corrupti. Harum quisquam, maxime, perspiciatis lobortis earum iure.'
};

const imageTextB = {
  alignRight: true,
  headline: 'Image Text B',
  content:
    '<p>Aliqua odit anim vehicula varius eget feugiat beatae. Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>',
  picture: {
    title: 'Image Text B',
    sources: [
      {
        src: '/img/image-text-b.jpg',
        sizes: {
          default: '100vw',
          xxs: '100vw',
          xs: '100vw',
          sm: '100vw',
          md: '100vw',
          lg: '100vw',
          xl: '100vw',
          xxl: '100vw'
        }
      }
    ]
  }
};

const videoVimeoA = {
  url: 'https://vimeo.com/440265549',
  text: 'Nunc odio nisl dapibus consequat recusandae doloremque nisi natus repudiandae do accusantium corrupti. Harum quisquam, maxime, perspiciatis lobortis earum iure.'
};

const textB = {
  headline: 'Text B',
  content:
    '<p>Aliqua odit <strong>anim vehicula</strong> varius eget feugiat beatae. <em><strong>Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet</strong></em>, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>'
};

const videoVimeoB = {
  url: 'https://vimeo.com/288344114',
  text: 'Nunc odio nisl dapibus consequat recusandae doloremque nisi natus repudiandae do accusantium corrupti. Harum quisquam, maxime, perspiciatis lobortis earum iure.'
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
