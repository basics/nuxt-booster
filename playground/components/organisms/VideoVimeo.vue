<template>
  <document-section
    v-font="[$getFont('Merriweather', 400)]"
    class="video-vimeo"
  >
    <booster-vimeo v-bind="$attrs">
      <template #default="{ videoData }">
        <div class="description" v-html="videoData && videoData.description" />
      </template>
    </booster-vimeo>
  </document-section>
</template>

<script>
import BoosterVimeo from '#booster/components/BoosterVimeo';

export default {
  components: { BoosterVimeo },

  inheritAttrs: false,

  props: {
    text: {
      type: String,
      default: null
    }
  }
};
</script>

<style lang="postcss" scoped>
.video-vimeo {
  padding: 0 10%;

  & .description {
    margin-top: em(20px);
  }
}
</style>
