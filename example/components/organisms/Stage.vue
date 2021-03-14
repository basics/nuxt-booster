<template>
  <div class="component-stage">
    <speedkit-picture v-bind="picture" />
    <h1
      v-font="[
        $getFont('Montserrat Alternates', 700, 'normal', {selector: '.headline'}),
        $getFont('Merriweather', 300, 'italic', {selector: '.claim'})
      ]"
    >
      <span class="headline">{{ headline }}</span>
      <span class="claim">{{ claim }}</span>
    </h1>
  </div>
</template>

<script>
import SpeedkitPicture from 'nuxt-speedkit/components/SpeedkitPicture';
export default {
  components: {
    SpeedkitPicture
  },
  props: {
    picture: { type: Object, default () { return {}; } },
    headline: { type: String, default () { return 'Headline'; } },
    claim: { type: String, default () { return 'Claim'; } }
  }
};
</script>

<style lang="postcss" scoped>
.component-stage {
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
</style>
