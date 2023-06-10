<template>
  <section
    class="component-image-text"
    :class="{ ['component-image-text-right']: alignRight }">
    <div
      v-font="[
        $getFont('Merriweather', 300, 'normal'),
        $getFont('Montserrat Alternates', 700, 'normal', { selector: 'h2' })
      ]">
      <div class="image">
        <speedkit-picture
          :title="picture.title"
          :alt="picture.alt"
          :sources="picture.sources"
          :hydrate="picture.hydrate !== undefined ? picture.hydrate : true" />
      </div>
      <div class="text">
        <h2>{{ headline }}</h2>
        <div v-html="content" />
      </div>
    </div>
  </section>
</template>

<script setup>
import SpeedkitPicture from '#speedkit/components/SpeedkitPicture';
import useFonts from '#speedkit/composables/fonts';
const { $getFont } = useFonts();
defineProps({
  alignRight: { type: Boolean, default: false },
  picture: { type: Object, required: true },
  headline: { type: String, default: 'Headline' },
  content: { type: String, default: 'Text' }
});
</script>

<style lang="postcss" scoped>
.component-image-text {
  @media (orientation: portrait) {
    padding: 0 10%;
  }

  & :deep(img) {
    width: 100%;
    height: 100%;
  }

  & :deep(p) {
    line-height: 1.6;
  }

  & > div {
    @media (orientation: landscape) and (width >= 768px) {
      display: flex;
      align-items: center;

      & > * {
        width: 50%;
      }
    }
  }

  & .text {
    padding: 2%;
  }

  & .image {
    & > * {
      width: 80%;
      margin: 0 auto;
      box-shadow: 0 0 em(25px) rgb(0 0 0 / 40%);

      @media (prefers-color-scheme: dark) {
        box-shadow: 0 0 em(25px) rgb(255 255 255 / 40%);
      }
    }
  }

  &.component-image-text-right {
    & > * {
      &:nth-child(1) {
        order: 2;
      }

      &:nth-child(2) {
        order: 1;
      }
    }
  }
}
</style>
