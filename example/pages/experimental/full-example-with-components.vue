<template>
  <div class="page-full-example-with-components">
    <component-stage v-bind="stage" />
    <component-text-a v-bind="textA" />
    <component-speedkit-youtube v-bind="youtube" />
    <component-text-image v-bind="imageTextA" />
    <component-text-b v-bind="textB" />

    <component-text-image v-for="(component, index) in imageTextList" v-bind="component" :key="index" />
  </div>
</template>

<script>
export default {
  asyncData () {
    return {
      contentA: '<p>This is a basic test with single font variant.</p>',
      stage: {
        critical: true,
        headline: 'Stage Headline',
        claim: 'Stage Claim',
        picture: {
          sources: [
            { src: 'https://dummyimage.com/1200x630/ffffff/000000.jpg', sizes: '299,300:599,600:899,900:1199' },
            { src: 'https://dummyimage.com/1920x1080/ffffff/000000.jpg', sizes: '1200:1599,1600:1899,1900:1920' }
          ],
          alt: 'Alt Text',
          title: 'Title Text'
        }
      },

      textA: {
        text: '<h2>Text Headline</h2><p>Aliqua odit <b>anim vehicula</b> varius eget feugiat beatae. <i><b>Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet</b></i>, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>'
      },

      youtube: {
        sizes: '299,300:599,600:899,900:1199,1200:1280',
        id: 'cLKvbhfVBUU'
      },

      imageTextA: {
        text: '<h2>Text Headline</h2><p>Aliqua odit anim vehicula varius eget feugiat beatae. Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>',
        picture: {
          sources: [
            { src: 'https://dummyimage.com/1200x630/000000/ffffff.jpg', sizes: '299,300:599,600:899,900:1199' },
            { src: 'https://dummyimage.com/1920x1080/000000/ffffff.jpg', sizes: '1200:1599,1600:1899,1900:1920' }
          ],
          alt: 'Alt Text',
          title: 'Title Text'
        }
      },

      textB: {
        text: '<h2>Text Headline</h2><p>Aliqua odit <b>anim vehicula</b> varius eget feugiat beatae. <i><b>Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet</b></i>, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>'
      },

      imageTextList: getImageTextComponents()
    };
  },

  speedkitComponents: {
    ComponentStage: () => import(/* webpackMode: "eager" */'@/components/organisms/experimental/Stage'),
    ComponentSpeedkitYoutube: () => import('nuxt-speedkit/components/experimental/SpeedkitYoutube'),
    ComponentTextImage: () => import('@/components/organisms/experimental/ImageText'),
    ComponentTextA: () => import('@/components/organisms/TextFontA'),
    ComponentTextB: () => import('@/components/organisms/TextFontB')
  }

};

function getImageTextComponents (count = 0) {
  const components = [];
  for (let i = 0; i < count; i++) {
    const background = Array(3).fill((255 / count * i).toString(16)).join('');
    components.push({
      text: '<h2>Text Headline</h2><p>Aliqua odit anim vehicula varius eget feugiat beatae. Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>',
      picture: {
        sources: [
          { src: `https://dummyimage.com/1200x630/${background}/ffffff.jpg`, sizes: '299,300:599,600:899,900:1199' },
          { src: `https://dummyimage.com/1920x1080/${background}/ffffff.jpg`, sizes: '1200:1599,1600:1899,1900:1920' }
        ],
        alt: 'Alt Text',
        title: 'Title Text'
      }
    });
  }
  return components;
}

</script>

<style lang="postcss" scoped>
.page-full-example-with-components {
  font-size: calc(20 / 16 * 1em);

  & > * {
    margin: 25px 0;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
}

</style>
