<template>
  <div class="page-full-example-with-components">
    <component-stage v-bind="stage" @load:font="onLoadFont" />
    <component-text-a v-bind="textA" @load:font="onLoadFont" />
    <component-text-image v-bind="imageTextA" />
    <component-text-b v-bind="textB" />
  </div>
</template>

<script>

const imageTypes = {
  webp: 'image/webp',
  jpeg: 'image/jpeg'
};

export default {

  asyncData () {
    const criticalImageWebp = require('@/assets/img/critical-2400.jpg?resize&sizes[]=480,sizes[]=768,sizes[]=960,sizes[]=1080,sizes[]=1200,sizes[]=1536,sizes[]=2160,sizes[]=2400&placeholder&format=webp');
    const criticalImageJpeg = require('@/assets/img/critical-2400.jpg?resize&sizes[]=480,sizes[]=768,sizes[]=960,sizes[]=1080,sizes[]=1200,sizes[]=1536,sizes[]=2160,sizes[]=2400&placeholder');
    const criticalPlaceholder = require('@/assets/img/critical-2400.jpg?sqip');

    const lazyImageWebp = require('@/assets/img/lazy-2400.jpg?resize&sizes[]=480,sizes[]=768,sizes[]=960,sizes[]=1080,sizes[]=1200,sizes[]=1536,sizes[]=2160,sizes[]=2400&placeholder&format=webp');
    const lazyImageJpeg = require('@/assets/img/lazy-2400.jpg?resize&sizes[]=480,sizes[]=768,sizes[]=960,sizes[]=1080,sizes[]=1200,sizes[]=1536,sizes[]=2160,sizes[]=2400&placeholder');
    const lazyPlaceholder = require('@/assets/img/lazy-2400.jpg?lqip');

    return {
      contentA: '<p>This is a basic test with single font variant.</p>',

      stage: {
        critical: true,
        headline: 'Stage Headline',
        claim: 'Stage Claim',
        picture: {
          sources: [
            {
              srcset: criticalImageWebp.srcSet,
              type: imageTypes.webp
            },
            {
              srcset: criticalImageJpeg.srcSet,
              type: imageTypes.jpeg
            }
          ],
          placeholder: (({ src, preview }) => ({ url: src, base64: preview }))(criticalPlaceholder),
          width: criticalImageJpeg.width,
          height: criticalImageJpeg.height,
          alt: 'Stage Alt Text',
          title: 'Stage Title Text',
          caption: null
        }
      },
      youtubePlayer: {
        poster: Object.assign({
          alt: 'Youtube Alt Text',
          title: 'Youtube Title Text',
          caption: null
        }, require('@/assets/youtube/id/cLKvbhfVBUU'))
      },

      videoPlayer: {
        poster: {
          sources: [
            {
              srcset: criticalImageWebp.srcSet,
              type: imageTypes.webp
            },
            {
              srcset: criticalImageJpeg.srcSet,
              type: imageTypes.jpeg
            }
          ],
          placeholder: (({ src, preview }) => ({ url: src, base64: preview }))(criticalPlaceholder),
          width: criticalImageJpeg.width,
          height: criticalImageJpeg.height,
          alt: 'Video Player Alt Text',
          title: 'Video Player Title Text',
          caption: null
        }
      },

      textA: {
        text: '<h2>Text Headline</h2><p>Aliqua odit <strong>anim vehicula</strong> varius eget feugiat beatae. <em><strong>Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet</strong></em>, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>'
      },

      imageTextA: {
        text: '<h2>Text Headline</h2><p>Aliqua odit anim vehicula varius eget feugiat beatae. Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>',
        picture: {
          sources: [
            {
              srcset: lazyImageWebp.srcSet,
              type: imageTypes.webp
            },
            {
              srcset: lazyImageJpeg.srcSet,
              type: imageTypes.jpeg
            }
          ],
          placeholder: (({ src, preview }) => ({ url: src, base64: preview }))(lazyPlaceholder),
          width: lazyImageJpeg.width,
          height: lazyImageJpeg.height,
          alt: 'Image Text A Alt Text',
          title: 'Image Text A Title Text',
          caption: null
        }
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
    ComponentTextB: () => import('@/components/organisms/TextFontB')
  },

  methods: {
    onLoadFont (fonts) {
      // console.log('page: font loaded', fonts);
    }
  }
};
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
