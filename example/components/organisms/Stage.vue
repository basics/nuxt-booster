<template>
  <div class="component-stage">
    <lazy-picture v-bind="picture" />
    <h1
      v-font="[
        $fonts.getFont('Lobster Two', 700, 'normal').addSelector('span').isCritical(),
        $fonts.getFont('Comic Neue', 300, 'italic').addSelector('span.claim').isCritical()
      ]"
    >
      <span>{{ headline }}</span><br>
      <span class="claim">{{ claim }}</span>
    </h1>
  </div>
</template>

<script>
import LazyPicture from 'lazy-resources/components/LazyPicture'
export default {
  components: {
    LazyPicture
  },
  props: {
    picture: { type: Object, default () { return {} } },
    headline: { type: String, default () { return 'Headline' } },
    claim: { type: String, default () { return 'Claim' } }
  }

}
</script>

<style lang="postcss">

.component-stage {
  position: relative;
  height: 100vh;
  max-height: 100%;
  margin: 0;
  overflow: hidden;

  & .claim {
    font-size: 0.6em;
    text-transform: none;
  }

  & picture {
    &::before {
      display: block;
      padding-top: calc(9 / 16 * 100%);
      content: "";
    }
  }

  & img {
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
    text-align: center;
    background: rgba(0, 0, 0, 0.4);
    transform: translate(-50%, -50%);
  }
}
</style>
