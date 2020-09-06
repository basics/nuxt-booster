<template>
  <div>
    <lazy-video
      dash="/stream/h264.mpd"
      hls="/stream/h264.m3u8"
      :autoplay="Boolean(true)"
    />
    <div class="dimension">
      {{ width }} {{ height }}
    </div>
  </div>
</template>

<script>
import { resizeObserver } from 'lazy-resources/utils/viewport'

import LazyVideo from 'lazy-resources/components/LazyVideo'
export default {
  components: {
    LazyVideo
  },
  data () {
    return {
      width: 0,
      height: 0
    }
  },

  mounted () {
    this.subscriber = resizeObserver.subscribe((resolution) => {
      this.width = resolution.x
      this.height = resolution.y
    })
  }
}
</script>

<style lang="postcss" scoped>
.dimension {
  position: absolute;
  top: 0;
  right: 0;
  font-size: calc(32 / 16 * 1em);
  color: white;
}
</style>
