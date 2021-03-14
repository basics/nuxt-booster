<template>
  <organism-preview-container id="criticalContainer">
    <template #default>
      <speedkit-picture v-bind="picture" />
    </template>
    <template #title>
      <p>Critical - SpeedkitPicture</p>
    </template>
  </organism-preview-container>
</template>

<script>

import OrganismPreviewContainer from '@/components/organisms/PreviewContainer';
import SpeedkitPicture from 'nuxt-speedkit/components/SpeedkitPicture';

export default {

  components: {
    OrganismPreviewContainer,
    SpeedkitPicture
  },

  data () {
    return {

      picture: {
        placeholders: [
          {
            // eslint-disable-next-line no-secrets/no-secrets
            url: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wgARCAAeAB4DAREAAhEBAxEB/8QAGgAAAgIDAAAAAAAAAAAAAAAABggCBwQFCf/EABkBAAMBAQEAAAAAAAAAAAAAAAMEBQYCB//aAAwDAQACEAMQAAAA3Xlfoq7McFri7gxDc/6RLUflF5ODDNVMpZsQsJWqYEg8jsiuzmhzJFTlKzG0n//EAC0QAAICAQQBAwIEBwAAAAAAAAEDAgQFBgcREgAIEzEVIRQiI1EyQVKBg9Lx/9oACAEBAAE/ANLbi2MzgV6ZrVS9aKDVWBIxKTES5hNh+YD7gc/v4/dDdnbh2SOUsKysYWGCvUhyTXSAZBvu/J7R+IAHjqfPTpqPcHcHdVW4GqM663VYiVddW0ZM+nqEYmLFQH5R3B/MeO/mLzSW2cmsPrsZXuSQ0qd7gBEYngy/n9pA/wB/Nh8XZWvC6iuOyLrecuTq2HTaFVK1SE+Iza2fEFgknj55PA8y+D2pDDX1Hl22dQZGhkWUabLcyFjsr3ltBjErasw/RMZEH9XgdCCdBaL2k0tpjAW6uRsQ1IrGpyT0qeyYnD8Uw1zIR4hEsJb2nOQAhCPAkR5F7tHFz7CqoRlnsfXvVjL2r6onhbesgJQl1IBjIcjjzanbrBZfbWhgHViyolc0WUQPQujIkTj8H581z6NMzmdR4yjgNS2q2DSJtxGXyDmP+hNlx3jJf8MoTjELPHB482b9MuKV9N1NqqpUzVO2vo9FhMoNo165Ps04EcBkJN7OMiOR24Hnq209RTozCOqIhUNXJyVAVl8AQYqRMeP8Y82D1abdLI1imcUV8i9UID+gS4805eYVxUVr68dZR4+x/wCDx1sRErHEuswIyH7fsR56tNYrr4ajVmlwQMkOPb4EjMKl/t5//8QAKBEAAgEDAgUDBQAAAAAAAAAAAQIDAAQRMUESEyFRcQVh0RQVIzKB/9oACAECAQE/ALa4PI5B0FfaLW+CmElTue58U1rFYIsS6g5Jxr58bV6jI8k5D7afP9q94XkaCPAC4PuSdqdfobZJI2BBxnGo81GYryCR5pMMP1Hc/FX8ZVwPaoCzymXPWlM7twYBVsBtgR7nUFT1qwsJbQLxtlepIGdc69e4xpV7GG2qL8bYqzmJAWi3XNStzpCNhX//xAApEQACAQIEBQMFAAAAAAAAAAABAgMABBEhQVEFEhMiMTJhcTNSodHx/9oACAEDAQE/AHgX6uOZPjWjeNblusoI03oSm5LOBgNBt/ajVVUclQkoglfMn8CopmvrmSJ0I5fB0Px7607T2s6JFGSh9TfaP3tvUR6q4irkhO3So5oYwXbHmXMDUH2HjMVxjicVw7iIYNkATt8DxhVhKWBq5AJxq9hGbY0kePbtVrD04xX/2Q=='
          }
        ],
        sources: [
          {
            format: 'webp',
            sizes: [
              { width: 414, media: '', url: require('static/img/image-test-1/webp/414.webp') },
              { width: 576, media: '(min-width: 576px)', url: require('static/img/image-test-1/webp/576.webp') },
              { width: 768, media: '(min-width: 768px)', url: require('static/img/image-test-1/webp/768.webp') },
              { width: 1024, media: '(min-width: 1024px)', url: require('static/img/image-test-1/webp/1024.webp') },
              { width: 1280, media: '(min-width: 1200px)', url: require('static/img/image-test-1/webp/1280.webp') },
              { width: 1680, media: '(min-width: 1600px)', url: require('static/img/image-test-1/webp/1680.webp') },
              { width: 1920, media: '(min-width: 1900px)', url: require('static/img/image-test-1/webp/1920.webp') }
            ]
          },
          {
            format: 'jpg',
            sizes: [
              { width: 414, media: '', url: require('static/img/image-test-1/jpg/414.jpg') },
              { width: 576, media: '(min-width: 576px)', url: require('static/img/image-test-1/jpg/576.jpg') },
              { width: 768, media: '(min-width: 768px)', url: require('static/img/image-test-1/jpg/768.jpg') },
              { width: 1024, media: '(min-width: 1024px)', url: require('static/img/image-test-1/jpg/1024.jpg') },
              { width: 1280, media: '(min-width: 1200px)', url: require('static/img/image-test-1/jpg/1280.jpg') },
              { width: 1680, media: '(min-width: 1600px)', url: require('static/img/image-test-1/jpg/1680.jpg') },
              { width: 1920, media: '(min-width: 1900px)', url: require('static/img/image-test-1/jpg/1920.jpg') }
            ]
          }
        ]
      }

    };
  }
};

</script>
