<template>
  <div class="page-full-example">
    <div class="component-stage">
      <LazyPicture v-bind="stage.picture" />
      <h1
        v-font="[
          $fonts.getFont('Lobster Two', 700, 'normal').bySelector('span').isCritical(),
          $fonts.getFont('Comic Neue', 300, 'italic').bySelector('span.claim').isCritical()
        ]"
      >
        <span>{{ stage.headline }}</span><br>
        <span class="claim">{{ stage.claim }}</span>
      </h1>
    </div>
    <div
      v-font="[
        $fonts.getFont('Comic Neue', 400, 'normal'),
        $fonts.getFont('Lobster Two', 700, 'normal').bySelector('h2'),
        $fonts.getFont('Comic Neue', 400, 'italic').bySelector('i'),
        $fonts.getFont('Comic Neue', 700, 'normal').bySelector('b'),
        $fonts.getFont('Comic Neue', 700, 'italic').bySelector('i b'),
        $fonts.getFont('Comic Neue', 700, 'italic').bySelector('b i'),
        $fonts.getFont('Comic Neue', 400, 'italic').bySelector('i > b')
      ]"
      class="component-text"
      v-html="textA"
    />
    <div class="component-image-text">
      <LazyPicture v-bind="imageTextA.picture" />
      <div
        v-font="[
          $fonts.getFont('Comic Neue', 400, 'normal'),
          $fonts.getFont('Lobster Two', 700, 'normal').bySelector('h2')]"
        class="text"
        v-html="imageTextA.text"
      />
    </div>
    <div
      v-font="[
        $fonts.getFont('Comic Neue', 400, 'normal'),
        $fonts.getFont('Lobster Two', 700, 'normal').bySelector('h2'),
        $fonts.getFont('Lobster Two', 400, 'italic').bySelector('i'),
        $fonts.getFont('Lobster Two', 700, 'normal').bySelector('b'),
        $fonts.getFont('Lobster Two', 700, 'italic').bySelector('i b'),
        $fonts.getFont('Lobster Two', 700, 'italic').bySelector('b i')
      ]"
      class="component-text"
      v-html="textB"
    />
  </div>
</template>

<script>

export default {
  data () {
    return {
      contentA: '<p>This is a basic test with single font variant.</p>',

      textA: '<h2>Text Headline</h2><p>Aliqua odit <b>anim vehicula</b> varius eget feugiat beatae. <i><b>Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet</b></i>, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>',

      textB: '<h2>Text Headline</h2><p>Aliqua odit <b>anim vehicula</b> varius eget feugiat beatae. <i><b>Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet</b></i>, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>',

      imageTextA: {
        text: '<h2>Text Headline</h2><p>Aliqua odit anim vehicula varius eget feugiat beatae. Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>',
        picture: {
          alt: 'Alt Text',
          title: 'Title Text',
          sources: [
            {
              srcset: [{
                url: 'img/lazy-1200.webp'
              }, {
                url: 'img/lazy-2400.webp',
                density: 2
              }],
              media: '(min-width: 768px)',
              type: 'image/webp'
            },
            {
              srcset: [{
                url: 'img/lazy-1200.jpg'
              }, {
                url: 'img/lazy-2400.jpg',
                density: 2
              }],
              media: '(min-width: 768px)',
              type: 'image/jpeg'
            },
            {
              srcset: [{
                url: 'img/lazy-768.webp'
              }, {
                url: 'img/lazy-1536.webp',
                density: 2
              }],
              type: 'image/webp'
            },
            {
              srcset: [{
                url: 'img/lazy-768.jpg'
              }, {
                url: 'img/lazy-1536.jpg',
                density: 2
              }],
              type: 'image/jpeg'
            }
          ]
        }
      },
      stage: {
        headline: 'Stage Headline',
        claim: 'Stage Claim',
        picture: {
          alt: 'Alt Text',
          title: 'Title Text',
          sources: [
            {
              srcset: [{
                url: 'img/critical-1200.webp'
              }, {
                url: 'img/critical-2400.webp',
                density: 2
              }],
              media: '(min-width: 768px)',
              type: 'image/webp'
            },
            {
              srcset: [{
                url: 'img/critical-1200.jpg'
              }, {
                url: 'img/critical-2400.jpg',
                density: 2
              }],
              media: '(min-width: 768px)',
              type: 'image/jpeg'
            },
            {
              srcset: [{
                url: 'img/critical-768.webp'
              }, {
                url: 'img/critical-1536.webp',
                density: 2
              }],
              type: 'image/webp'
            },
            {
              srcset: [{
                url: 'img/critical-768.jpg'
              }, {
                url: 'img/critical-1536.jpg',
                density: 2
              }],
              type: 'image/jpeg'
            }
          ]
        }
      }

    }
  }
}
</script>

<style lang="postcss" scoped>
.page-full-example {
  font-size: 20px;

  & > * {
    margin: 40px 0;
  }
}

.component-stage {
  position: relative;
  height: 100%;
  margin: 0;
  overflow: hidden;

  & .claim {
    font-size: 0.6em;
    text-transform: none;
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
