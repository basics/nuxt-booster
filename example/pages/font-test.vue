<template>
  <div class="page-index">
    <font-test critical :font="[$getFont('Quicksand', 400), $getFont('Quicksand', 700,'normal', {selector: 'h1, h2, h3, strong'}), $getFont('Quicksand', 300, 'normal', {selector: 'em'})]" />
    <!-- <font-test :font="[$getFont('Merriweather', 400), $getFont('Merriweather', 700,'normal', {selector: 'h1, h2, h3, strong'}), $getFont('Merriweather', 400, 'italic', {selector: 'em'})]" />
    <font-test :font="[$getFont('Montserrat Alternates', 400), $getFont('Montserrat Alternates', 700,'normal', {selector: 'h1, h2, h3, strong'}), $getFont('Montserrat Alternates', 400, 'italic', {selector: 'em'})]" /> -->
  </div>
</template>

<script>
import SpeedkitLoader from 'nuxt-speedkit/loader';

export default {
  components: {
    FontTest: SpeedkitLoader(() => import('@/components/FontTest'))
  },
  layout: 'blank',
  data () {
    return {};
  }
};
</script>
