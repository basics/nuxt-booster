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
            {
              media: '(min-width: 576px)',
              placeholder: {
              // eslint-disable-next-line no-secrets/no-secrets
                url: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQCAwMDAgQDAwMEBAQEBQkGBQUFBQsICAYJDQsNDQ0LDAwOEBQRDg8TDwwMEhgSExUWFxcXDhEZGxkWGhQWFxb/2wBDAQQEBAUFBQoGBgoWDwwPFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhb/wgARCAATAB4DAREAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAABAUIBgf/xAAZAQACAwEAAAAAAAAAAAAAAAACBAEDBQD/2gAMAwEAAhADEAAAAKNUucnAdw85i2eMLQaIOpGBUN1WFqZOqKAeLO9P/8QAKxAAAQMDBAEDAgcAAAAAAAAAAgEDBAUREgAGByExExRBM2EjJDJDUXHh/9oACAEBAAE/ANrclUGYB+2ZqZqyKEf5ayD/AAile19UnkeiSBd92EqEIdg4tnWnB+VzHoVTu6FbXI3JG1Ns7Pk7gmVUH2GgFWm2DzOQpLYUH+1+dce8s0bkOBJkw2HYjsZ1LNGX1mivi4N/uioqao9X5PpLrCUmk16NSKUzEhTqVIZuwyRX9QrfuOkSp2i9dqq21O3Dv+k7pearu2a9ECSZswIMeyFULWVTaMboaY+E8LftU1zGxyzPoBpD463WFMbAJriyKYaOP26Fs0G6iQa4Pm1k9xHEl0Sr0dpqAag7UmXIzf62/wAPNQXIvKolvF9UOfKXf7tDzD2CUpJXo+kP1Fdxvla9rfF7apThFWWxLEsWCESIUUhHLwheUT7a3JVajErEZuNMdbA6ijJCi9KGK9f751vCU+U3EzyS6rYhRdf/xAAmEQACAAUDAgcAAAAAAAAAAAABAgADBBEhBRIxFKEgQVGRsdHw/9oACAECAQE/ABrUg8K3sPuJerJkTVK9x2iZqUhcBrnyEU1cJpKthh6cQEO1ke185iZSTWsFPziKTT2QjeM3/GOkO697QAAePB//xAAmEQABAwIDCQEAAAAAAAAAAAABAAIDBBEhMUEFEBMVMkJRkaGx/9oACAEDAQE/AOVzAdTU7Zs2HDId8/VHQzuNi2w8qooXRWLcQfaL2XBbdRzQgEk5KWqjIJBT6oOAbmu260Wm7//Z'
              },
              sizes: [
                // jpg
                { width: 576, media: '(min-width: 576px)', url: '/img/image-content-1/jpg/576.jpg', format: 'jpg' },
                { width: 768, media: '(min-width: 768px)', url: '/img/image-content-1/jpg/768.jpg', format: 'jpg' },
                { width: 1024, media: '(min-width: 1024px)', url: '/img/image-content-1/jpg/1024.jpg', format: 'jpg' },
                { width: 1280, media: '(min-width: 1200px)', url: '/img/image-content-1/jpg/1280.jpg', format: 'jpg' },
                { width: 1680, media: '(min-width: 1600px)', url: '/img/image-content-1/jpg/1680.jpg', format: 'jpg' },
                { width: 1920, media: '(min-width: 1900)', url: '/img/image-content-1/jpg/1920.jpg', format: 'jpg' },
                // webp
                { width: 576, media: '(min-width: 576px)', url: '/img/image-content-1/webp/576.webp', format: 'webp' },
                { width: 768, media: '(min-width: 768px)', url: '/img/image-content-1/webp/768.webp', format: 'webp' },
                { width: 1024, media: '(min-width: 1024px)', url: '/img/image-content-1/webp/1024.webp', format: 'webp' },
                { width: 1280, media: '(min-width: 1200px)', url: '/img/image-content-1/webp/1280.webp', format: 'webp' },
                { width: 1680, media: '(min-width: 1600px)', url: '/img/image-content-1/webp/1680.webp', format: 'webp' },
                { width: 1920, media: '(min-width: 1900)', url: '/img/image-content-1/webp/1920.webp', format: 'webp' }
              ]
            },
            {
              placeholder: {
              // eslint-disable-next-line no-secrets/no-secrets
                url: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wgARCAAtAB4DAREAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAABwgGCQX/xAAbAQABBQEBAAAAAAAAAAAAAAAFAAEDBAYCB//aAAwDAQACEAMQAAAA7Jmh/hN1leUfv030JZCzp+Ks9p7232CDPBvUueeirnVm/eBHNytmDspagXsYJ7ImG10YHk03AA/K68fTi7UME+lSN0//xAAyEAABAwIFAQQIBwAAAAAAAAABAgMEBQYABxESIQgJEzFBChQiMlFhYnEVFlJTcoGR/9oACAEBAAE/AJ0x3n2WAB9RxU5zmnBj6/3i4H5LDRKw2gK/UhWLjnvF3l1gc/tHD96Qn55hJcbM4oLgj96kOEa/A6Y7QztF6VkBNi2fR31/mFxZerTjRJVT44bKwwgp5W+4Sn2Uc6eYxbvaqV2lZk0qtUCVFqFHjVJqBcNNfRIZekxXeUuhtalAKQoKT9yk6jE7NaHc1DgVijw5NQpdVaTJiOpdQA40oapVqf8ANPiDhjqPq9516ZAnVGWu2rHYakyQnc6qU2ptam2xqdyypWmvJOiFYz9zNpWaXVLbtRce/E7cuGcmPVCl0spQ0pSg4d3BQUEIUk8Ecg46WVohZWyiIzbFfYrURffLWV+uQXWVtH3iSO7kJSo7fJ7djoQv9d4zallnKnQobdpMKlRXX4InkAuBDjQJUn2QVII/ljPfqnlUsQrXamNs1Z2MoS3F8JdLKlNB0aEbzt00T9Zxd+ZFQy4mpkzYhqFOrz57xxtJR3iR724HXVQ1HI8QSD4DETNik1VcVqlsRI6xtLXq7W0L18Eaa6p0Og+eOzEzhp7Gbd3VgUG6bnapFJj0epzLet52uoanLcLuxwNOJ2HY2QFchRQrF/8Ao7OUGZjNCnT76vtio0OKGGH2iyVFBWVKC1bQVlXmSMdSnozFuZiUmAi1sza/R2KfvcLb0FE5bz54BSorQUJ+OJno01wW28WF5q1GKgsnvZTNvI0UfuH9cdAHRDeHZei5Y9uVRm9YV29wZTFRiLgJYeY3gONrQVFQIcIIVig3PIuinqrCXH4hlylRxGQ5q02WyUagaeCiNxB8/PGSvUDVLtvm6bbqUdmU3a76YUaepxfrsoFRBU+rXYo6njahHAA5PJvSummyXGkMoJKuFlR1BPnhy7JVRq8uOQ2hMdXvJB1Ufnj/xAArEQABAwIFAwIHAQAAAAAAAAABAAIDBBEFEiFBsRMiURQxECNSYZGhwfD/2gAIAQIBAT8AzBZ/CIduEHBCsZuFimM9Y+lo3W+pw4B5TZqjD5RJC8m+17tduQ4HzsQocUjljEsbTldqFJVVVQR15C4D7nhYUTkdFe3iyqCXPGZxNttt1gdTklfTSGzbZhwR/VQ0RLS540044VDSRv1j7cv+/BU1O7KSRYrCqD53VeO3LYeTr767aKLB4o43RsOhVNR+nByC6IN++O6dUSB/Uy6+26CPa8s8Afv4By//xAApEQABAwMEAQEJAAAAAAAAAAABAAIDBBEhBRIiURMxFEJhcZGhscHh/9oACAEDAQE/AA5oW1N25sVZChf2tJ0fx3qaobgBxb2eyOul7JBqEHjewA99dEH8gqWgkje6J5yDY4KZBFGSY2AE/BTj3rXVNGws4gBrh9FrEIxUMGb2P6UjuVmqokczi7N/uP4qaoY0jNwOu1qNXeKzTku7wLD0+eUNWmDw+wwqjUDUW34N/UI1BLTsdZRxN2eIHAyjxwcoC8Yl7Tcrav/Z'
              },
              sizes: [
                // jpg
                { width: 414, media: 'all', url: '/img/image-content-1/jpg/414.jpg', format: 'jpg' },
                // webp
                { width: 414, media: 'all', url: '/img/image-content-1/webp/414.webp', format: 'webp' }
              ]
            }
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
            {
              media: '(min-width: 576px)',
              placeholder: {
              // eslint-disable-next-line no-secrets/no-secrets
                url: '/img/image-content-2/jpg/placeholder_landscape.jpg'
              },
              sizes: [
                // jpg
                { width: 576, media: '(min-width: 576px)', url: '/img/image-content-2/jpg/576.jpg', format: 'jpg' },
                { width: 768, media: '(min-width: 768px)', url: '/img/image-content-2/jpg/768.jpg', format: 'jpg' },
                { width: 1024, media: '(min-width: 1024px)', url: '/img/image-content-2/jpg/1024.jpg', format: 'jpg' },
                { width: 1280, media: '(min-width: 1200px)', url: '/img/image-content-2/jpg/1280.jpg', format: 'jpg' },
                { width: 1680, media: '(min-width: 1600px)', url: '/img/image-content-2/jpg/1680.jpg', format: 'jpg' },
                { width: 1920, media: '(min-width: 1900)', url: '/img/image-content-2/jpg/1920.jpg', format: 'jpg' },
                // webp
                { width: 576, media: '(min-width: 576px)', url: '/img/image-content-2/webp/576.webp', format: 'webp' },
                { width: 768, media: '(min-width: 768px)', url: '/img/image-content-2/webp/768.webp', format: 'webp' },
                { width: 1024, media: '(min-width: 1024px)', url: '/img/image-content-2/webp/1024.webp', format: 'webp' },
                { width: 1280, media: '(min-width: 1200px)', url: '/img/image-content-2/webp/1280.webp', format: 'webp' },
                { width: 1680, media: '(min-width: 1600px)', url: '/img/image-content-2/webp/1680.webp', format: 'webp' },
                { width: 1920, media: '(min-width: 1900)', url: '/img/image-content-2/webp/1920.webp', format: 'webp' }
              ]
            },
            {
              media: '',
              placeholder: {
              // eslint-disable-next-line no-secrets/no-secrets
                url: '/img/image-content-2/jpg/placeholder_portrait.jpg'
              },
              sizes: [
                // jpg
                { width: 414, media: 'all', url: '/img/image-content-2/jpg/414.jpg', format: 'jpg' },
                // webp
                { width: 414, media: 'all', url: '/img/image-content-2/webp/414.webp', format: 'webp' }
              ]
            }
          ]
        }
      },

      imageTextB: {
        alignRight: true,
        text: '<h2>Text Headline</h2><p>Aliqua odit anim vehicula varius eget feugiat beatae. Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>',
        picture: {
          sources: [
            {
              media: '(min-width: 576px)',
              placeholder: {
              // eslint-disable-next-line no-secrets/no-secrets
                url: '/img/image-content-3/jpg/placeholder_landscape.jpg'
              },
              sizes: [
                // jpg
                { width: 576, media: '(min-width: 576px)', url: '/img/image-content-3/jpg/576.jpg', format: 'jpg' },
                { width: 768, media: '(min-width: 768px)', url: '/img/image-content-3/jpg/768.jpg', format: 'jpg' },
                { width: 1024, media: '(min-width: 1024px)', url: '/img/image-content-3/jpg/1024.jpg', format: 'jpg' },
                { width: 1280, media: '(min-width: 1200px)', url: '/img/image-content-3/jpg/1280.jpg', format: 'jpg' },
                { width: 1680, media: '(min-width: 1600px)', url: '/img/image-content-3/jpg/1680.jpg', format: 'jpg' },
                { width: 1920, media: '(min-width: 1900)', url: '/img/image-content-3/jpg/1920.jpg', format: 'jpg' },
                // webp
                { width: 576, media: '(min-width: 576px)', url: '/img/image-content-3/webp/576.webp', format: 'webp' },
                { width: 768, media: '(min-width: 768px)', url: '/img/image-content-3/webp/768.webp', format: 'webp' },
                { width: 1024, media: '(min-width: 1024px)', url: '/img/image-content-3/webp/1024.webp', format: 'webp' },
                { width: 1280, media: '(min-width: 1200px)', url: '/img/image-content-3/webp/1280.webp', format: 'webp' },
                { width: 1680, media: '(min-width: 1600px)', url: '/img/image-content-3/webp/1680.webp', format: 'webp' },
                { width: 1920, media: '(min-width: 1900)', url: '/img/image-content-3/webp/1920.webp', format: 'webp' }
              ]
            },
            {
              media: '',
              placeholder: {
              // eslint-disable-next-line no-secrets/no-secrets
                url: '/img/image-content-3/jpg/placeholder_portrait.jpg'
              },
              sizes: [
                // jpg
                { width: 414, media: 'all', url: '/img/image-content-3/jpg/414.jpg', format: 'jpg' },
                // webp
                { width: 414, media: 'all', url: '/img/image-content-3/webp/414.webp', format: 'webp' }
              ]
            }
          ]
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
    ComponentTextB: () => import('@/components/organisms/TextFontB'),
    ComponentSpeedkitYoutube: () => import('nuxt-speedkit/components/SpeedkitYoutube')
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
