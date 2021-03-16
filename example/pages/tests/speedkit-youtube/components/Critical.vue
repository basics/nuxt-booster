<template>
  <organism-preview-container>
    <template #default>
      <div>
        <speedkit-youtube v-bind="youtube" />
      </div>
    </template>
    <template #title>
      <p>Critical<br>SpeedkitYoutube</p>
    </template>
  </organism-preview-container>
</template>

<script>
import SpeedkitYoutube from 'nuxt-speedkit/components/SpeedkitYoutube';
import OrganismPreviewContainer from '@/components/organisms/PreviewContainer';
export default {
  components: {
    SpeedkitYoutube,
    OrganismPreviewContainer
  },
  data () {
    return {
      youtube: {
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
              format: 'jpg',
              sizes: [
                { width: 414, url: require('static/img/youtube/jpg/414.jpg') },
                { width: 576, media: '(min-width: 576px)', url: require('static/img/youtube/jpg//576.jpg') },
                { width: 768, media: '(min-width: 768px)', url: require('static/img/youtube/jpg//768.jpg') },
                { width: 1024, media: '(min-width: 1024px)', url: require('static/img/youtube/jpg//1024.jpg') },
                { width: 1280, media: '(min-width: 1200px)', url: require('static/img/youtube/jpg//1280.jpg') }
              ]
            },
            {
              format: 'webp',
              sizes: [
                { width: 414, url: require('static/img/youtube/webp/414.webp') },
                { width: 576, media: '(min-width: 576px)', url: require('static/img/youtube/webp//576.webp') },
                { width: 768, media: '(min-width: 768px)', url: require('static/img/youtube/webp//768.webp') },
                { width: 1024, media: '(min-width: 1024px)', url: require('static/img/youtube/webp//1024.webp') },
                { width: 1280, media: '(min-width: 1200px)', url: require('static/img/youtube/webp//1280.webp') }
              ]
            }
          ]
        }
      }
    };
  }
};
</script>
