<template>
  <div class="page-full-example-without-components">
    <!-- stage -->
    <div class="component-stage">
      <speedkit-picture v-bind="stage.picture" />
      <h1
        v-font="[
          $getFont('Montserrat Alternates', 700, 'normal', {selector: '.headline'}),
          $getFont('Comic Neue', 300, 'italic', {selector: '.claim'})
        ]"
      >
        <span class="headline">{{ stage.headline }}</span>
        <span class="claim">{{ stage.claim }}</span>
      </h1>
    </div>
    <!-- text-a -->
    <div
      v-font="[
        $getFont('Comic Neue', 400, 'normal'),
        $getFont('Montserrat Alternates', 700, 'normal', {selector: 'h2'}),
        $getFont('Comic Neue', 400, 'italic', {selector: 'i'}),
        $getFont('Comic Neue', 700, 'normal', {selector: 'b,strong'}),
        $getFont('Comic Neue', 700, 'italic', {selector: 'i b,i strong'}),
        $getFont('Comic Neue', 700, 'italic', {selector: 'b i, strong i'}),
        $getFont('Comic Neue', 400, 'italic', {selector: 'i > b, i > strong'})
      ]"
      class="component-text-font-a"
      v-html="textA.text"
    />
    <!-- image-text -->
    <div class="component-image-text">
      <speedkit-picture v-bind="imageTextA.picture" />
      <div
        v-font="[
          $getFont('Comic Neue', 400, 'normal'),
          $getFont('Montserrat Alternates', 700, 'normal', {selector: 'h2'})]"
        class="text"
        v-html="imageTextA.text"
      />
    </div>
    <!-- text-b -->
    <div
      v-font="[
        $getFont('Comic Neue', 400, 'normal'),
        $getFont('Montserrat Alternates', 700, 'normal', {selector: 'h2'}),
        $getFont('Montserrat Alternates', 400, 'italic', {selector: 'i'}),
        $getFont('Montserrat Alternates', 700, 'normal', {selector: 'b'}),
        $getFont('Montserrat Alternates', 700, 'italic', {selector: 'i b'}),
        $getFont('Montserrat Alternates', 700, 'italic', {selector: 'b i'})
      ]"
      class="component-text-font-b"
      v-html="textB.text"
    />
  </div>
</template>

<script>
import SpeedkitPicture from 'nuxt-speedkit-components/SpeedkitPicture'

export default {

  components: {
    SpeedkitPicture
  },

  asyncData () {
    const criticalImageWebp = require('@/assets/img/critical-2400.jpg?resize&sizes[]=480,sizes[]=768,sizes[]=960,sizes[]=1080,sizes[]=1200,sizes[]=1536,sizes[]=2160,sizes[]=2400&placeholder&format=webp')
    const criticalImageJpeg = require('@/assets/img/critical-2400.jpg?resize&sizes[]=480,sizes[]=768,sizes[]=960,sizes[]=1080,sizes[]=1200,sizes[]=1536,sizes[]=2160,sizes[]=2400&placeholder')
    const criticalPlaceholder = require('@/assets/img/critical-2400.jpg?sqip')

    const lazyImageWebp = require('@/assets/img/lazy-2400.jpg?resize&sizes[]=480,sizes[]=768,sizes[]=960,sizes[]=1080,sizes[]=1200,sizes[]=1536,sizes[]=2160,sizes[]=2400&placeholder&format=webp')
    const lazyImageJpeg = require('@/assets/img/lazy-2400.jpg?resize&sizes[]=480,sizes[]=768,sizes[]=960,sizes[]=1080,sizes[]=1200,sizes[]=1536,sizes[]=2160,sizes[]=2400&placeholder')
    const lazyPlaceholder = require('@/assets/img/lazy-2400.jpg?sqip')

    return {
      contentA: '<p>This is a basic test with single font variant.</p>',

      textA: {
        text: '<h2>Text Headline</h2><p>Aliqua odit <b>anim vehicula</b> varius eget feugiat beatae. <i><b>Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet</b></i>, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>'
      },

      textB: {
        text: '<h2>Text Headline</h2><p>Aliqua odit <b>anim vehicula</b> varius eget feugiat beatae. <i><b>Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet</b></i>, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>'
      },

      imageTextA: {
        text: '<h2>Text Headline</h2><p>Aliqua odit anim vehicula varius eget feugiat beatae. Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>',
        picture: {
          sources: [
            {
              srcset: lazyImageWebp.srcSet,
              type: 'image/webp'
            },
            {
              srcset: lazyImageJpeg.srcSet,
              type: 'image/jpeg'
            }
          ],
          placeholder: (({ src, preview }) => ({ url: src, base64: preview }))(lazyPlaceholder),
          width: lazyImageJpeg.width,
          height: lazyImageJpeg.height,
          alt: 'Alt Text',
          title: 'Title Text',
          caption: null
        }
      },
      stage: {
        critical: true,
        headline: 'Stage Headline',
        claim: 'Stage Claim',
        picture: {
          sources: [
            {
              srcset: criticalImageWebp.srcSet,
              type: 'image/webp'
            },
            {
              srcset: criticalImageJpeg.srcSet,
              type: 'image/jpeg'
            }
          ],
          placeholder: (({ src, preview }) => ({ url: src, base64: preview }))(criticalPlaceholder),
          width: criticalImageJpeg.width,
          height: criticalImageJpeg.height,
          alt: 'Alt Text',
          title: 'Title Text',
          caption: null
        }
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.page-full-example-without-components {
  font-size: calc(20 / 16 * 1em);

  & > * {
    margin: 40px 0;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  & .component-image-text {
    & >>> img {
      width: 100%;
      height: 100%;
    }

    @media (min-width: 768px) {
      display: flex;

      & > * {
        width: 50%;
      }
    }

    & .text {
      padding: 2%;
    }
  }

  & .component-stage {
    position: relative;
    height: 100vh;
    max-height: 100%;
    margin: 0;
    overflow: hidden;

    & .claim {
      display: block;
      font-size: 25px;
      line-height: 50px;
      text-transform: none;
    }

    & .headline {
      display: block;
      font-size: 30px;
      line-height: 60px;

      @media (min-width: 768px) {
        font-size: 40px;
        line-height: 80px;
      }
    }

    & >>> picture {
      &::before {
        display: block;
        padding-top: calc(9 / 16 * 100%);
        content: "";
      }

      & img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    & h1 {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 20px 0;
      margin: 0;
      color: white;
      text-align: center;
      background: rgba(0, 0, 0, 0.4);

      @media (min-width: 768px) {
        position: absolute;
        top: 50px;
        right: 0;
        bottom: auto;
        left: auto;
        width: 400px;
      }
    }
  }

  & .component-text-font-a {
    padding: 0 10%;
  }

  & .component-text-font-b {
    padding: 0 10%;
  }
}

</style>
