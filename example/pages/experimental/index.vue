<template>
  <div class="page-full-example-with-components">
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
            // https://i.picsum.photos/id/1084/4579/3271.jpg?hmac=YblMazviSugJVfZsFPaFI_Vp6lBeQin62qpm8rxHruo
            { src: 'https://tinyurl.com/y6hp9sb4', sizes: '299,300:599,600:899,900:1199' },
            // https://i.picsum.photos/id/1084/4579/3271.jpg?hmac=YblMazviSugJVfZsFPaFI_Vp6lBeQin62qpm8rxHruo
            { src: 'https://tinyurl.com/y6hp9sb4', sizes: '1200:1599,1600:1899,1900:1920' }
          ]
        }
      },

      youtubePlayer: {
        id: 'cLKvbhfVBUU',
        poster: {
          alt: 'Youtube Alt Text',
          title: 'Youtube Title Text',
          sources: [
            {
              placeholder: {
              // eslint-disable-next-line no-secrets/no-secrets
                url: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wgARCAARAB4DAREAAhEBAxEB/8QAGgAAAQUBAAAAAAAAAAAAAAAACQMEBQYIB//EABoBAAIDAQEAAAAAAAAAAAAAAAUGAwcIAgT/2gAMAwEAAhADEAAAAL/mlzd2cDRdodE5AZQ02iErjZJzyzB5QMfMY/7M7yhbfjjDgAj+TT//xAAzEAABBAEDAgIEDwAAAAAAAAADAQIEBQYHCBIAEwkUESE0tQoiIzEyODlEUnF0d4Wxwf/aAAgBAQABPwCi1T0mu90+rGLZtbQ7KZXam2ieQk2RkSPHFLltcNwWGa74xSBf3Gqz2djPWjndar5lothVCWAF0ZbCxvp46mW47O+NEWM5FkfKL6ERCPZw4B5cWF+ZURd3e73SfAtqcCNjmR0MuZFrYZzUr6aQK1kTpTWIEQJJIyJGRpiCIc6Gd6QOZ2Gk4qI3hpjhZxt3wDWWznMW6tMZsgzgxwvjhlkbYow0sQF9fYe4LXBcTm/slYqOa1/BPGg0aq9A93WtmVZHf5HKFf6iOdhjI1DBlRbOeaFX3FnElvWQwkJkUVvE7T0iyUPz4uVjmvf1gO3TevqXtdibmtG8M1QyulBGv7/I59jTVddQ1ceuIB8osGS6Uq2DlRyNcHywubwyRhbKWKbhg25bLbKmBjWp8CzFjnkXjivszuA8TDSpKlIApEK9zAuJ3G8WPdzG9PpK3rwD/EV1G3Vai1O3rP6Or7enmkJ41Tb1cvsukRI8mphgHIi/jYIbOJUX1N68e/7WnWT+G9zQuq/2Cu/Wk/pevvTvy/1OvguP1/co/ZWf71p+v//EACwRAAIBAgUEAAQHAAAAAAAAAAECAwQRAAUGEiEHCBMyEBQ3szFBQlFhcnT/2gAIAQIBAT8A0jlM9b04yVxUNCpo4BuEcbG/jiKkGVHW6qpX1PD/ALhSNN5BI8C1MzpKWNnHhQJdVNzEBZ4y7lWbySTgKmxQpYvifIqSKlMvyyWHPqv4A8n1x3bLlsWhqVIoFR/mY/0ruF4Z7ji9vyuAbXGOg+uJ876d5NQ0sUYMVOon3O4KIrzU8DoPGUkMr00m9TLGY8P1a0pp/WD5BmNRBFOWgSNVeRpXkn3bFeJYQIxxe5lcbXQyCISR7mzFWppEQiR19eS3NgQH5PP8m3FjjvFomOi6WsBsWqlDC3FzDLYg2FrWPGO376PZT/R/uP8AAemO7/6Y0f8Asj+zUY//xAArEQEAAgAGAQIDCQAAAAAAAAABAhEAAwQSITEFE0EGFFEyNDVxcpGxsvH/2gAIAQMBAT8AzPR+YnAgKNvPPP1r2eeHGvz/AEs5yCVbYx920b7rh6eSMcePzdPLV+m5pFbO15euD6/ud48Vp5afV5kvUJnISN22XIEjcRlSFm6MZU0h1jWePI+Rnm6pZlu3bxfuD2m0Yl07q6MeQ0Of5CfrQkzE5ZBJojXKrb7WF8Xa4loDL1Uc6NwJfbqgOW9hwhtSjlu6THw/qZkJZAFHTxYClVb3d3/r5b8Qn+UP6GDrE+nHg/vsv0v8mP/Z'
              },
              sizes: [
                // jpg
                { width: 414, media: '', url: '/img/youtube/jpg/414.jpg', format: 'jpg' },
                { width: 576, media: '(min-width: 576px)', url: '/img/youtube/jpg//576.jpg', format: 'jpg' },
                { width: 768, media: '(min-width: 768px)', url: '/img/youtube/jpg//768.jpg', format: 'jpg' },
                { width: 1024, media: '(min-width: 1024px)', url: '/img/youtube/jpg//1024.jpg', format: 'jpg' },
                { width: 1280, media: '(min-width: 1200px)', url: '/img/youtube/jpg//1280.jpg', format: 'jpg' },
                // webp
                { width: 414, media: '', url: '/img/youtube/webp/414.webp', format: 'webp' },
                { width: 576, media: '(min-width: 576px)', url: '/img/youtube/webp/576.webp', format: 'webp' },
                { width: 768, media: '(min-width: 768px)', url: '/img/youtube/webp/768.webp', format: 'webp' },
                { width: 1024, media: '(min-width: 1024px)', url: '/img/youtube/webp/1024.webp', format: 'webp' },
                { width: 1280, media: '(min-width: 1200px)', url: '/img/youtube/webp/1280.webp', format: 'webp' }
              ]
            }
          ]
        }
      },

      textA: {
        text: '<h2>Text Headline</h2><p>Aliqua odit <strong>anim vehicula</strong> varius eget feugiat beatae. <em><strong>Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet</strong></em>, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>'
      },

      imageTextA: {
        text: '<h2>Text Headline</h2><p>Aliqua odit anim vehicula varius eget feugiat beatae. Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>',
        picture: {
          sources: [
            // https://i.picsum.photos/id/2/5616/3744.jpg?hmac=l1XcSPFigtRLcO2F6Li-t17EIeylkWH94Oowb4vzApk
            { src: 'https://tinyurl.com/y67alhbs', sizes: '414' },
            // https://i.picsum.photos/id/2/5616/3744.jpg?hmac=l1XcSPFigtRLcO2F6Li-t17EIeylkWH94Oowb4vzApk
            { src: 'https://tinyurl.com/y67alhbs', sizes: '576:576,768:768,1024:1024,1200:1280,1600:1680,1900:1920' }
          ]
        }
      },

      imageTextB: {
        alignRight: true,
        text: '<h2>Text Headline</h2><p>Aliqua odit anim vehicula varius eget feugiat beatae. Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>',
        picture: {
          sources: [
            // https://i.picsum.photos/id/1062/5092/3395.jpg?hmac=o9m7qeU51uOLfXvepXcTrk2ZPiSBJEkiiOp-Qvxja-k
            { src: 'https://tinyurl.com/yxr48egv', sizes: '414' },
            // https://i.picsum.photos/id/1062/5092/3395.jpg?hmac=o9m7qeU51uOLfXvepXcTrk2ZPiSBJEkiiOp-Qvxja-k
            { src: 'https://tinyurl.com/yxr48egv', sizes: '576:576,768:768,1024:1024,1200:1280,1600:1680,1900:1920' }
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
  padding: 25px 0;
  padding-top: 0;
  font-size: calc(20 / 16 * 1em);

  & > * {
    margin: 25px 0;

    &:first-child {
      margin-top: 0;
    }
  }
}

</style>
