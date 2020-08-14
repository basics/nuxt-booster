<template>
  <div class="page-full-example">
    <div class="component-stage">
      <LazyPicture v-bind="stage.picture" />
      <h1
        v-font="[
          $fonts.getFont('Lobster Two', 700, 'normal').addSelector('span').isCritical(),
          $fonts.getFont('Comic Neue', 300, 'italic').addSelector('span.claim').isCritical()
        ]"
      >
        <span>{{ stage.headline }}</span><br>
        <span class="claim">{{ stage.claim }}</span>
      </h1>
    </div>
    <div
      v-font="[
        $fonts.getFont('Comic Neue', 400, 'normal'),
        $fonts.getFont('Lobster Two', 700, 'normal').addSelector('h2'),
        $fonts.getFont('Comic Neue', 400, 'italic').addSelector('i'),
        $fonts.getFont('Comic Neue', 700, 'normal').addSelector('b,strong'),
        $fonts.getFont('Comic Neue', 700, 'italic').addSelector('i b,i strong'),
        $fonts.getFont('Comic Neue', 700, 'italic').addSelector('b i, strong i'),
        $fonts.getFont('Comic Neue', 400, 'italic').addSelector('i > b, i > strong')
      ]"
      class="component-text"
      v-html="textA"
    />
    <div class="component-image-text">
      <LazyPicture v-bind="imageTextA.picture" />
      <div
        v-font="[
          $fonts.getFont('Comic Neue', 400, 'normal'),
          $fonts.getFont('Lobster Two', 700, 'normal').addSelector('h2')]"
        class="text"
        v-html="imageTextA.text"
      />
    </div>
    <div
      v-font="[
        $fonts.getFont('Comic Neue', 400, 'normal'),
        $fonts.getFont('Lobster Two', 700, 'normal').addSelector('h2'),
        $fonts.getFont('Lobster Two', 400, 'italic').addSelector('i'),
        $fonts.getFont('Lobster Two', 700, 'normal').addSelector('b'),
        $fonts.getFont('Lobster Two', 700, 'italic').addSelector('i b'),
        $fonts.getFont('Lobster Two', 700, 'italic').addSelector('b i')
      ]"
      class="component-text"
      v-html="textB"
    />
  </div>
</template>

<script>

export default {
  data () {
    const criticalImageWebp = require('@/assets/img/critical-2400.jpg?resize&sizes[]=480,sizes[]=768,sizes[]=960,sizes[]=1080,sizes[]=1200,sizes[]=1536,sizes[]=2160,sizes[]=2400&placeholder&format=webp')
    const criticalImageJpeg = require('@/assets/img/critical-2400.jpg?resize&sizes[]=480,sizes[]=768,sizes[]=960,sizes[]=1080,sizes[]=1200,sizes[]=1536,sizes[]=2160,sizes[]=2400&placeholder')
    const lazyImageWebp = require('@/assets/img/lazy-2400.jpg?resize&sizes[]=480,sizes[]=768,sizes[]=960,sizes[]=1080,sizes[]=1200,sizes[]=1536,sizes[]=2160,sizes[]=2400&placeholder&format=webp')
    const lazyImageJpeg = require('@/assets/img/lazy-2400.jpg?resize&sizes[]=480,sizes[]=768,sizes[]=960,sizes[]=1080,sizes[]=1200,sizes[]=1536,sizes[]=2160,sizes[]=2400&placeholder')

    return {
      contentA: '<p>This is a basic test with single font variant.</p>',

      textA: '<h2>Text Headline</h2><p>Aliqua odit <b>anim vehicula</b> varius eget feugiat beatae. <i><b>Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet</b></i>, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>',

      textB: '<h2>Text Headline</h2><p>Aliqua odit <b>anim vehicula</b> varius eget feugiat beatae. <i><b>Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet</b></i>, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>',

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
          placeholder: lazyImageJpeg.placeholder,
          width: lazyImageJpeg.width,
          height: lazyImageJpeg.height,
          alt: 'Alt Text',
          title: 'Title Text',
          caption: null
        }
      },
      stage: {
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
          placeholder: criticalImageJpeg.placeholder,
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
.page-full-example {
  font-size: calc(20 / 16 * 1em);

  & > * {
    margin: 40px 0;
  }
}

.component-stage {
  position: relative;
  height: 100%;
  max-height: 100vh;
  margin: 0;
  overflow: hidden;

  & .claim {
    font-size: 0.6em;
    text-transform: none;
  }

  & >>> picture {
    &::before {
      display: block;
      padding-top: calc(9 / 16 * 100%);
      content: "";
    }
  }

  & >>> img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 20px;
    color: white;
    background: rgba(0, 0, 0, 0.4);
    transform: translate(-50%, -50%);
  }
}

.component-text {
  padding: 0 10%;
}

.component-image-text {
  & >>> img {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
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

</style>
