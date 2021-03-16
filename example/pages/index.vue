<template>
  <div class="page-index">
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
          placeholders: [
            {
              media: '(min-width: 1024px)',
              format: 'jpg',
              // eslint-disable-next-line no-secrets/no-secrets
              url: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQCAwMDAgQDAwMEBAQEBQkGBQUFBQsICAYJDQsNDQ0LDAwOEBQRDg8TDwwMEhgSExUWFxcXDhEZGxkWGhQWFxb/2wBDAQQEBAUFBQoGBgoWDwwPFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhb/wgARCAATAB4DAREAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAABAUIBgf/xAAZAQACAwEAAAAAAAAAAAAAAAACBAEDBQD/2gAMAwEAAhADEAAAAKNUucnAdw85i2eMLQaIOpGBUN1WFqZOqKAeLO9P/8QAKxAAAQMDBAEDAgcAAAAAAAAAAgEDBAUREgAGByExExRBM2EjJDJDUXHh/9oACAEBAAE/ANrclUGYB+2ZqZqyKEf5ayD/AAile19UnkeiSBd92EqEIdg4tnWnB+VzHoVTu6FbXI3JG1Ns7Pk7gmVUH2GgFWm2DzOQpLYUH+1+dce8s0bkOBJkw2HYjsZ1LNGX1mivi4N/uioqao9X5PpLrCUmk16NSKUzEhTqVIZuwyRX9QrfuOkSp2i9dqq21O3Dv+k7pearu2a9ECSZswIMeyFULWVTaMboaY+E8LftU1zGxyzPoBpD463WFMbAJriyKYaOP26Fs0G6iQa4Pm1k9xHEl0Sr0dpqAag7UmXIzf62/wAPNQXIvKolvF9UOfKXf7tDzD2CUpJXo+kP1Fdxvla9rfF7apThFWWxLEsWCESIUUhHLwheUT7a3JVajErEZuNMdbA6ijJCi9KGK9f751vCU+U3EzyS6rYhRdf/xAAmEQACAAUDAgcAAAAAAAAAAAABAgADBBEhBRIxFKEgQVGRsdHw/9oACAECAQE/ABrUg8K3sPuJerJkTVK9x2iZqUhcBrnyEU1cJpKthh6cQEO1ke185iZSTWsFPziKTT2QjeM3/GOkO697QAAePB//xAAmEQABAwIDCQEAAAAAAAAAAAABAAIDBBEhMUEFEBMVMkJRkaGx/9oACAEDAQE/AOVzAdTU7Zs2HDId8/VHQzuNi2w8qooXRWLcQfaL2XBbdRzQgEk5KWqjIJBT6oOAbmu260Wm7//Z'
            },
            {
              format: 'jpg',
              // eslint-disable-next-line no-secrets/no-secrets
              url: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wgARCAA4AB4DAREAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAABgcIBQn/xAAaAQABBQEAAAAAAAAAAAAAAAAEAQIDBQYA/9oADAMBAAIQAxAAAADoRZiZbOxOUc7mW1ELm9DmTxHF5SKfAbKFzHmldY1/o8tKeN0yXuYGEOa7SqeQIyR+wFKASqOLrmNOk9lj4zGu1Os4sfXWMYY8XR3/xAAyEAABAwIEAwUHBQEAAAAAAAABAgMEBREABhIhCCIxBxMjMlEJFEFTYZGhJDNxcoGS/9oACAEBAAE/AHnlfK/OJDy/lj74mvOc3ho++J77uryI6+uHynmuQPW+M0cQ0Fp+Uae62ITDqmu/DJeKilRClHmASLj6nHZpxA0zP2YpuWpLjaKxHupKkNlpLybAghJJ6ggggkYqT6GzfUgi/qMcR3bhOgZLDFMj+4OybOPFpw61IAJCdzte2My5wqzNNgyojk33V3Wwy7Ge0tkoShSxp2uvnF74oVSq1EqUKoOO6K1DiNAaCNSknnQTbYnQob4g5vpmZ6RAmpEFIdb1LS++AUKsLi1sdtnaumu1SZTnS05GfADTqAUi48uoE8tulxiWhx/LcWhva3XU1aRUFKCNQSlbTLdj6G7d8UWrRZr9GTMcWhyLT24ThII1Fq6ULB/oEJP8Y4X6k5Va/XqdKYbeabjodAfQFFBCtO2x6gg4rAl1R1yRGkuOuoSV+IQUKFtwQdrH6Yyn2jSGXHmpnhEbIcFuZI8oV62t+MQs0Iqr/e9+GjbUtwrsgJG5N+n5xwuZ8nzl5jr9Fy9WK/TytqAHqM6wjSpA1cwcNyDq2IGHfZyNwKU63DzO+/NSght55A0qPoQMVL2aWeqTLJGaKVJaJK1+A8AD6AAHErgDzxLhvNHNNMQ0k+RDLo1f9BOOGvIWYeHWh1aivtsZjhzpAlJLHhltYSEnUL4q3aLFoFSRGqX6ZL4SmOthCn1lZJ1akpTyoG3Nf7fF+eH2CpD4WLbqHX/R8MVSVHOq5Dm+rSUG3Trth96BMX+yhzQLalpvb6Y//8QAJhEAAQQBAwMEAwAAAAAAAAAAAgABAxIEESEiBTEyEBMgI1Fi8P/aAAgBAgEBPwD4aqXqExP9HZYWeUhe3P3fs61ZP1A8jiQ1ZBKMfFOQkZEKhyo5ImM/51EBK1gsnWA9JTb87oK+NVJDUeKONY2KVzd30fbZNiVJE/6oCAXtXdOer61Xjy9eK//EACcRAAEEAAQEBwAAAAAAAAAAAAIAAQMSBBEiMQUQEyEyQVFhYsHw/9oACAEDAQE/AOWSyVXUHD4hEeuXd1jOHjCNo9m3WRKPCDDq3dPCUhWFdOoCJI8PIEjgH5k9UD1NaalVY1s42f3+kTV1IJGtqTSiIqc2IAZtu7p8dbxKMvkpXORq+SJrgzeiytz7r//Z'
            }
          ],
          sources: [
            {
              media: '(min-width: 1024px)',
              format: 'webp',
              sizes: [
                // webp
                { width: 1024, media: '(min-width: 1024px)', url: require('static/img/image-content-1/webp/1024.webp') },
                { width: 1280, media: '(min-width: 1200px)', url: require('static/img/image-content-1/webp/1280.webp') },
                { width: 1680, media: '(min-width: 1600px)', url: require('static/img/image-content-1/webp/1680.webp') },
                { width: 1920, media: '(min-width: 1900px)', url: require('static/img/image-content-1/webp/1920.webp') }
              ]
            },
            {
              media: '(min-width: 1024px)',
              format: 'jpg',
              sizes: [
                // jpg
                { width: 1024, media: '(min-width: 1024px)', url: require('static/img/image-content-1/jpg/1024.jpg') },
                { width: 1280, media: '(min-width: 1200px)', url: require('static/img/image-content-1/jpg/1280.jpg') },
                { width: 1680, media: '(min-width: 1600px)', url: require('static/img/image-content-1/jpg/1680.jpg') },
                { width: 1920, media: '(min-width: 1900px)', url: require('static/img/image-content-1/jpg/1920.jpg') }
              ]
            },
            {
              format: 'webp',
              sizes: [
                // webp
                { width: 414, url: require('static/img/image-content-1/webp/414.webp') },
                { width: 576, media: '(min-width: 576px)', url: require('static/img/image-content-1/webp/576.webp') },
                { width: 768, media: '(min-width: 768px)', url: require('static/img/image-content-1/webp/768.webp') }
              ]
            },
            {
              format: 'jpg',
              sizes: [
                // jpg
                { width: 414, url: require('static/img/image-content-1/jpg/414.jpg') },
                { width: 576, media: '(min-width: 576px)', url: require('static/img/image-content-1/jpg/576.jpg') },
                { width: 768, media: '(min-width: 768px)', url: require('static/img/image-content-1/jpg/768.jpg') }
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
          placeholders: [
            {
              format: 'jpg',
              // eslint-disable-next-line no-secrets/no-secrets
              url: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wgARCAARAB4DAREAAhEBAxEB/8QAGgAAAQUBAAAAAAAAAAAAAAAACQMEBQYIB//EABoBAAIDAQEAAAAAAAAAAAAAAAUGAwcIAgT/2gAMAwEAAhADEAAAAL/mlzd2cDRdodE5AZQ02iErjZJzyzB5QMfMY/7M7yhbfjjDgAj+TT//xAAzEAABBAEDAgIEDwAAAAAAAAADAQIEBQYHCBIAEwkUESE0tQoiIzEyODlEUnF0d4Wxwf/aAAgBAQABPwCi1T0mu90+rGLZtbQ7KZXam2ieQk2RkSPHFLltcNwWGa74xSBf3Gqz2djPWjndar5lothVCWAF0ZbCxvp46mW47O+NEWM5FkfKL6ERCPZw4B5cWF+ZURd3e73SfAtqcCNjmR0MuZFrYZzUr6aQK1kTpTWIEQJJIyJGRpiCIc6Gd6QOZ2Gk4qI3hpjhZxt3wDWWznMW6tMZsgzgxwvjhlkbYow0sQF9fYe4LXBcTm/slYqOa1/BPGg0aq9A93WtmVZHf5HKFf6iOdhjI1DBlRbOeaFX3FnElvWQwkJkUVvE7T0iyUPz4uVjmvf1gO3TevqXtdibmtG8M1QyulBGv7/I59jTVddQ1ceuIB8osGS6Uq2DlRyNcHywubwyRhbKWKbhg25bLbKmBjWp8CzFjnkXjivszuA8TDSpKlIApEK9zAuJ3G8WPdzG9PpK3rwD/EV1G3Vai1O3rP6Or7enmkJ41Tb1cvsukRI8mphgHIi/jYIbOJUX1N68e/7WnWT+G9zQuq/2Cu/Wk/pevvTvy/1OvguP1/co/ZWf71p+v//EACwRAAIBAgUEAAQHAAAAAAAAAAECAwQRAAUGEiEHCBMyEBQ3szFBQlFhcnT/2gAIAQIBAT8A0jlM9b04yVxUNCpo4BuEcbG/jiKkGVHW6qpX1PD/ALhSNN5BI8C1MzpKWNnHhQJdVNzEBZ4y7lWbySTgKmxQpYvifIqSKlMvyyWHPqv4A8n1x3bLlsWhqVIoFR/mY/0ruF4Z7ji9vyuAbXGOg+uJ876d5NQ0sUYMVOon3O4KIrzU8DoPGUkMr00m9TLGY8P1a0pp/WD5BmNRBFOWgSNVeRpXkn3bFeJYQIxxe5lcbXQyCISR7mzFWppEQiR19eS3NgQH5PP8m3FjjvFomOi6WsBsWqlDC3FzDLYg2FrWPGO376PZT/R/uP8AAemO7/6Y0f8Asj+zUY//xAArEQEAAgAGAQIDCQAAAAAAAAABAhEAAwQSITEFE0EGFFEyNDVxcpGxsvH/2gAIAQMBAT8AzPR+YnAgKNvPPP1r2eeHGvz/AEs5yCVbYx920b7rh6eSMcePzdPLV+m5pFbO15euD6/ud48Vp5afV5kvUJnISN22XIEjcRlSFm6MZU0h1jWePI+Rnm6pZlu3bxfuD2m0Yl07q6MeQ0Of5CfrQkzE5ZBJojXKrb7WF8Xa4loDL1Uc6NwJfbqgOW9hwhtSjlu6THw/qZkJZAFHTxYClVb3d3/r5b8Qn+UP6GDrE+nHg/vsv0v8mP/Z'
            }
          ],
          sources: [
            {
              format: 'webp',
              sizes: [
                // webp
                { width: 414, media: '', url: require('static/img/youtube/webp/414.webp') },
                { width: 576, media: '(min-width: 576px)', url: require('static/img/youtube/webp/576.webp') },
                { width: 768, media: '(min-width: 768px)', url: require('static/img/youtube/webp/768.webp') },
                { width: 1024, media: '(min-width: 1024px)', url: require('static/img/youtube/webp/1024.webp') },
                { width: 1280, media: '(min-width: 1200px)', url: require('static/img/youtube/webp/1280.webp') }
              ]
            },
            {
              format: 'jpg',
              sizes: [
                // jpg
                { width: 414, media: '', url: require('static/img/youtube/jpg/414.jpg') },
                { width: 576, media: '(min-width: 576px)', url: require('static/img/youtube/jpg//576.jpg') },
                { width: 768, media: '(min-width: 768px)', url: require('static/img/youtube/jpg//768.jpg') },
                { width: 1024, media: '(min-width: 1024px)', url: require('static/img/youtube/jpg//1024.jpg') },
                { width: 1280, media: '(min-width: 1200px)', url: require('static/img/youtube/jpg//1280.jpg') }
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
          placeholders: [
            {
              media: '(min-width: 576px)',
              format: 'jpg',
              url: require('static/img/image-content-2/jpg/placeholder_landscape.jpg')
            },
            {
              format: 'jpg',
              url: require('static/img/image-content-2/jpg/placeholder_portrait.jpg')
            }
          ],
          sources: [
            {
              media: '(min-width: 576px)',
              format: 'webp',
              sizes: [
                // webp
                { width: 576, media: '(min-width: 576px)', url: require('static/img/image-content-2/webp/576.webp') },
                { width: 768, media: '(min-width: 768px)', url: require('static/img/image-content-2/webp/768.webp') },
                { width: 1024, media: '(min-width: 1024px)', url: require('static/img/image-content-2/webp/1024.webp') },
                { width: 1280, media: '(min-width: 1200px)', url: require('static/img/image-content-2/webp/1280.webp') },
                { width: 1680, media: '(min-width: 1600px)', url: require('static/img/image-content-2/webp/1680.webp') },
                { width: 1920, media: '(min-width: 1900px)', url: require('static/img/image-content-2/webp/1920.webp') }
              ]
            },
            {
              media: '(min-width: 576px)',
              format: 'jpg',
              sizes: [
                // jpg
                { width: 576, media: '(min-width: 576px)', url: require('static/img/image-content-2/jpg/576.jpg') },
                { width: 768, media: '(min-width: 768px)', url: require('static/img/image-content-2/jpg/768.jpg') },
                { width: 1024, media: '(min-width: 1024px)', url: require('static/img/image-content-2/jpg/1024.jpg') },
                { width: 1280, media: '(min-width: 1200px)', url: require('static/img/image-content-2/jpg/1280.jpg') },
                { width: 1680, media: '(min-width: 1600px)', url: require('static/img/image-content-2/jpg/1680.jpg') },
                { width: 1920, media: '(min-width: 1900px)', url: require('static/img/image-content-2/jpg/1920.jpg') }
              ]
            },
            {
              format: 'webp',
              sizes: [
                // webp
                { width: 414, url: require('static/img/image-content-2/webp/414.webp') }
              ]
            },
            {
              format: 'jpg',
              sizes: [
                // jpg
                { width: 414, url: require('static/img/image-content-2/jpg/414.jpg') }
              ]
            }
          ]
        }
      },

      imageTextB: {
        alignRight: true,
        text: '<h2>Text Headline</h2><p>Aliqua odit anim vehicula varius eget feugiat beatae. Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>',
        picture: {
          placeholders: [
            {
              media: '(min-width: 576px)',
              format: 'jpg',
              url: require('static/img/image-content-3/jpg/placeholder_landscape.jpg')
            },
            {
              format: 'jpg',
              url: require('static/img/image-content-3/jpg/placeholder_portrait.jpg')
            }
          ],
          sources: [
            {
              media: '(min-width: 576px)',
              format: 'webp',
              sizes: [
                // webp
                { width: 576, media: '(min-width: 576px)', url: require('static/img/image-content-3/webp/576.webp') },
                { width: 768, media: '(min-width: 768px)', url: require('static/img/image-content-3/webp/768.webp') },
                { width: 1024, media: '(min-width: 1024px)', url: require('static/img/image-content-3/webp/1024.webp') },
                { width: 1280, media: '(min-width: 1200px)', url: require('static/img/image-content-3/webp/1280.webp') },
                { width: 1680, media: '(min-width: 1600px)', url: require('static/img/image-content-3/webp/1680.webp') },
                { width: 1920, media: '(min-width: 1900px)', url: require('static/img/image-content-3/webp/1920.webp') }
              ]
            },
            {
              media: '(min-width: 576px)',
              format: 'jpg',
              sizes: [
                // jpg
                { width: 576, media: '(min-width: 576px)', url: require('static/img/image-content-3/jpg/576.jpg') },
                { width: 768, media: '(min-width: 768px)', url: require('static/img/image-content-3/jpg/768.jpg') },
                { width: 1024, media: '(min-width: 1024px)', url: require('static/img/image-content-3/jpg/1024.jpg') },
                { width: 1280, media: '(min-width: 1200px)', url: require('static/img/image-content-3/jpg/1280.jpg') },
                { width: 1680, media: '(min-width: 1600px)', url: require('static/img/image-content-3/jpg/1680.jpg') },
                { width: 1920, media: '(min-width: 1900px)', url: require('static/img/image-content-3/jpg/1920.jpg') }
              ]
            },
            {
              format: 'webp',
              sizes: [
                // webp
                { width: 414, url: require('static/img/image-content-3/webp/414.webp') }
              ]
            },
            {
              format: 'jpg',
              sizes: [
                // jpg
                { width: 414, url: require('static/img/image-content-3/jpg/414.jpg') }
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
